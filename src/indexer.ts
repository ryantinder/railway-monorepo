'use strict';

import { isE6, resonate_contracts } from "./lib/contracts";
import ethers from "ethers";
import { addPool } from "./lib/db";
async function main() {
    if (!process.argv[2]) {
        console.error("Invalid chainid");
        return;
    }
    const chainid = parseInt(process.argv[2]);
    const resonate = resonate_contracts[chainid];
    console.log("Setting up listener for PoolCreated event on chainid", chainid)
    const PoolCreatedPromise = resonate.on(
        "PoolCreated",
        async (poolId: string, asset: string, vault: string, payoutAsset: string, rate: ethers.BigNumberish, addInterestRate: bigint, lockupPeriod: bigint, packetSize: bigint, isFixedTerm: boolean, poolName: string, creator: string, event: ethers.EventLog) => {
            const ts = (await event.getBlock()).timestamp
            const tx = event.transactionHash
            await addPool({
                chainid: chainid,
                poolId,
                vault,
                payoutAsset: asset,
                vaultAsset: payoutAsset,
                rate: rate.toString(),
                addInterestRate: addInterestRate.toString(),
                creator,
                isFixedTerm,
                lockupPeriod: parseInt(lockupPeriod.toString()),
                packetSize: packetSize.toString(),
                packetSizeDecimals: isE6(payoutAsset, chainid) ? 6 : 18,
                poolName,
                packetVolume: "0",
                ts,
                tx
            })
        }
    )
    console.log("Waiting for PoolCreated event...")
    await PoolCreatedPromise;
    // const poolCreated = resonate.filters.PoolCreated();
}

main().then()