import { addAdapter, connect, readAdapters } from "./lib/db";
import axios from "axios";
import { adapterQuery, AdapterQueryResponse } from "./lib/gql";
import { CHAIN_IDS, SUBGRAPH_URLS } from "./lib/constants";
import cron from "node-cron";

async function reconcile(chainid: number) {
    console.log(`[${chainid}] Reconciling db with subgraph`);

    const config = {
        method: 'post',
        url: SUBGRAPH_URLS[chainid],
        headers: {
            'Content-Type': 'application/json'
        },
        data: adapterQuery
    };
    const res = await axios(config) as AdapterQueryResponse
    const graph_adapters = [...new Set(res.data.data.vaultAdapterRegistereds)];
    const db_adapters = await readAdapters(chainid);
    console.log(`[${chainid}]`, "Found", graph_adapters.length, "adapters in subgraph", "Found", db_adapters.length, "adapters in db");
    const adapter_promises: Promise<void>[] = []
    for (const adapter of graph_adapters) {
        if (!db_adapters.includes(adapter.vaultAdapter)) {
            adapter_promises.push(addAdapter({
                chainid: chainid,
                underlyingVault: adapter.underlyingVault,
                vaultAdapter: adapter.vaultAdapter,
                vaultAsset: adapter.vaultAsset,
                ts: adapter.blockTimestamp,
                status: 1
            }));
        }
    }
    await Promise.all(adapter_promises);
}
async function main() {
    await connect();
    console.log("Connected to db");

    cron.schedule("*/1 * * * *", async () => {
        await Promise.all(CHAIN_IDS.map((chainid) => {
            return reconcile(chainid);
        }))
    });
}


main().then()