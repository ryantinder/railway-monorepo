export interface Pool {
    chainid: number
    poolid: string 
    payoutasset: string 
    vault: string 
    vaultasset: string 
    rate: string 
    addinterestrate: string 
    lockupperiod: number 
    packetsize: string
    packetsizedecimals: number
    packetvolume: string
    isfixedterm: boolean 
    poolname: string 
    creator: string
    ts: number
    tx: string
}

export interface Adapter {
    chainid: number
    underlyingVault: string
    vaultAdapter: string
    vaultAsset: string
    ts: number
    status: number
}

export interface Oracle {
    chainid: number
    oracle: string
    asset: string
    ts: number
}