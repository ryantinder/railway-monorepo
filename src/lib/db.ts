import { Client } from 'pg';
import { ethers } from 'ethers';
import { Adapter, Pool } from './interfaces';

const client = new Client({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: parseInt(process.env.MYSQLPORT!)
})

export const connect = async () => {
    await client.connect()
}

// Add FNFT ID to DB
export const addId = async (poolId: string, fnftId: number, quantity: number, face: number, usd: number, chainId: number) => {
    // check if id alr exists
    let res = await client.query(`SELECT * FROM FNFTS WHERE fnftId = ${fnftId} AND poolId = '${poolId}' AND chainId = ${chainId}`);
    if (res.rowCount == 0) {
        res = await client.query(`INSERT INTO FNFTS (chainid, poolId, fnftId, face, quantity, usd) VALUES (${chainId}, '${poolId}', ${fnftId}, ${face}, ${quantity}, ${usd})`)
        console.log(`[${chainId}] ID = ${fnftId} added`)
    } else {
        console.log(`[${chainId}] ID = ${fnftId} alr exists`)
    }
}

// Add Pool to DB
export const addPool = async (pool: Pool) => {
    // check if id alr exists
    const res = await client.query(`SELECT * FROM POOLS WHERE poolid = '${pool.poolId}' AND chainId = ${pool.chainid}`);
    if (res.rowCount == 0) {
        const sql = `CALL AddPool(${pool.chainid}, '${pool.poolId}', '${pool.payoutAsset}', '${pool.vault}', '${pool.vaultAsset}', '${pool.rate}', '${pool.addInterestRate}', '${pool.lockupPeriod}', '${pool.packetSize}', ${pool.packetSizeDecimals}, ${pool.isFixedTerm}, '${pool.poolName.replace(/'/g, "").replace(/;/g, "")}', '${pool.creator}', ${pool.ts}, '${pool.tx}')`
        await client.query(sql)
        console.log(`[${pool.chainid}] PoolID = ${pool.poolId} added`)
    } else {
        console.log(`[${pool.chainid}] PoolID = ${pool.poolId} alr exists`)
    }
}
// Read all pools from chainid
export const readPoolIds = async (chainId: number) => {
    const res = await client.query<{poolid: string}>(`SELECT poolid FROM POOLS WHERE chainId = ${chainId}`);
    return res.rows.map(row => row.poolid);
}
// Add Pool to DB
export const addAdapter = async (adapter: Adapter) => {
    // check if id alr exists
    const res = await client.query<Adapter>(`SELECT * FROM ADAPTERS WHERE vault = '${adapter.underlyingVault}' AND chainId = ${adapter.chainid} LIMIT 1`);
    if (res.rowCount == 0) {
        const sql = `CALL addadapter(${adapter.chainid}, '${adapter.underlyingVault}', '${adapter.vaultAdapter}', '${adapter.vaultAsset}', 1, ${adapter.ts})`
        await client.query(sql)
        console.log(`[${adapter.chainid}] adapter = ${adapter.vaultAdapter} added`)
    } else if (res.rowCount == 1) {
        if (adapter.vaultAdapter != res.rows[0].vaultAdapter) {
            if (adapter.ts > res.rows[0].ts) {
                const sql = `UPDATE ADAPTERS 
                    SET 
                    adapter = '${adapter.vaultAdapter}',
                    ts = ${adapter.ts},
                    asset = '${adapter.vaultAsset}',
                    WHERE vault = '${adapter.underlyingVault}' and chainid = ${adapter.chainid}
                    `
                await client.query(sql)
                console.log(`[${adapter.chainid}] vault = ${adapter.underlyingVault} updated to adapter = ${adapter.vaultAdapter}`)
            } else {
                console.log(`[${adapter.chainid}] vault = ${adapter.underlyingVault} has already been replaced`)
            }
        }
    }
}
// Read all adapters from chainid
export const readAdapters = async (chainId: number) => {
    const res = await client.query<{vault: string}>(`SELECT adapter FROM adapters WHERE chainId = ${chainId}`);
    return res.rows.map(row => row.vault);
}


// remove id
export const removeId = async (poolId: string, fnftId: number, chainId: number) => {
    // check if id alr exists

    let res = await client.query(`SELECT * FROM FNFTS WHERE fnftId = ${fnftId} AND poolId = '${poolId}' AND chainId = ${chainId}`);
    if (res.rowCount > 0) {
        res = await client.query(`DELETE FROM FNFTS WHERE poolId = '${poolId}' and fnftId = ${fnftId} and chainId = ${chainId}`)
        console.log(`[${chainId}] ID = ${fnftId} removed`)
    } else {
        console.log(`[${chainId}] ID = ${fnftId} doesn't exist`)
    }
}

// update id
// add id
export const addVolume = async (poolid: string, numPackets: bigint, chainid: number) => {
    // check if id alr exists

    // read volume, packet_size, packet_size_decimals and rate from db
    const res = await client.query<{ packetvolume: string }>(`SELECT packetVolume FROM POOLS WHERE poolid = '${poolid}' AND chainId = ${chainid} LIMIT 1`);
    if (res.rowCount > 0) {
        // /**              tokens                tokens   rate
        //  *  numPackets * ------ + numPackets * ------ * ----
        //  *               packets               packets  1e18
        //  *  Counts both issuer and purchaser side of transaction.
        //  */ 

        // let new_volume = numPackets.mul(pool.packetSize).add(numPackets.mul(pool.packetSize).mul(pool.rate).div(ethers.BigNumber.from(10).pow(18)));
        const old_packets = ethers.getBigInt(res.rows[0].packetvolume)
        const sql = `UPDATE POOLS SET packetVolume = ${(old_packets + numPackets).toString()} where poolid = '${poolid}'`
        await client.query(sql)
        console.log(`[${chainid}] ${numPackets} of volume added to ${poolid}`)
    } else {
        console.log(`[${chainid}] PoolID = ${poolid} doesn't exist`)
    }
    // add to volume

    // update volume value

}
export const clearVolume = async () => {
    // check if id alr exists
    console.log(`Volume cleared`);
    await client.query(`UPDATE POOLS SET packetVolume = '0'`)
}
