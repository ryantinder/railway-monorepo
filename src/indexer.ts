import { isE6, PROVIDERS, resonate_contracts } from "./lib/contracts";
import { ethers, Log } from "ethers";
import { addPool, connect, readPoolIds } from "./lib/db";
import axios from "axios";
import { poolQuery, PoolQueryResponse } from "./lib/gql";
import { SUBGRAPH_URLS } from "./lib/constants";
import cron from "node-cron";

async function reconcile(chainid: number) {
    console.log("Reconciling db with subgraph");

    const config = {
        method: 'post',
        url: SUBGRAPH_URLS[chainid],
        headers: {
            'Content-Type': 'application/json'
        },
        data: poolQuery
    };

    const res = await axios(config) as PoolQueryResponse
    const graph_pools = res.data.data.poolCreateds;
    const db_pools = await readPoolIds(chainid);
    console.log("Found", graph_pools.length, "pools in subgraph", "Found", db_pools.length, "pools in db");
    const pool_promises: Promise<void>[] = []
    for (const pool of graph_pools) {
        if (!db_pools.includes(pool.poolId)) {
            pool_promises.push(addPool({
                chainid: chainid,
                poolId: pool.poolId,
                payoutAsset: pool.payoutAsset,
                vault: pool.vault,
                vaultAsset: pool.vaultAsset,
                rate: pool.rate,
                addInterestRate: pool.addInterestRate,
                lockupPeriod: parseInt(pool.lockupPeriod),
                packetSize: pool.packetSize,
                packetSizeDecimals: isE6(pool.vaultAsset, chainid) ? 6 : 18,
                isFixedTerm: pool.isFixedTerm,
                poolName: pool.poolName,
                creator: pool.creator,
                packetVolume: "0",
                ts: pool.blockTimestamp,
                tx: pool.transactionHash,
            }));
        }
    }
    await Promise.all(pool_promises);
    console.log("DB matches subgraph");
}
async function main() {
    if (!process.argv[2]) {
        console.error("Invalid chainid");
        return;
    }
    await connect();
    console.log("Connected to db");
    const chainid = parseInt(process.argv[2]);

    cron.schedule("*/5 * * * * *", async () => {
        await reconcile(chainid);
    });

    const resonate = resonate_contracts[chainid];
    const filter = {
        address: resonate.getAddress(),
        topics: [
            ethers.id("PoolCreated(bytes32,address,address,address,uint128,uint128,uint32,uint256,bool,string,address)"),
        ]
    };
    const iface = new ethers.Interface(
        resonate.interface.fragments
    );
    console.log("Setting up listener for PoolCreated event on chainid", chainid)
    const onPoolCreated = PROVIDERS[chainid].addListener(filter, async (event: Log) => {
        console.log(chainid, "new PoolCreated detected at", await PROVIDERS[chainid].getBlockNumber());
        const logDescription = iface.parseLog(event.toJSON());
        if (!logDescription) {
            console.log("Invalid log description", logDescription);
            return;
        }
        await addPool({
            chainid: chainid,
            poolId: logDescription.args[0],
            payoutAsset: logDescription.args[1],
            vault: logDescription.args[2],
            vaultAsset: logDescription.args[3],
            rate: logDescription.args[4].toString(),
            addInterestRate: logDescription.args[5].toString(),
            lockupPeriod: parseInt(logDescription.args[6].toString()),
            packetSize: logDescription.args[7].toString(),
            packetSizeDecimals: isE6(logDescription.args[3], chainid) ? 6 : 18,
            isFixedTerm: logDescription.args[8],
            poolName: logDescription.args[9],
            creator: logDescription.args[10],
            packetVolume: "0",
            ts: (await event.getBlock()).timestamp,
            tx: event.transactionHash
        })
    })

    console.log("Waiting for PoolCreated event...")
    await Promise.all([onPoolCreated]);
}


main().then()