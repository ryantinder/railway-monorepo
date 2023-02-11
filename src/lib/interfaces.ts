export interface Pool {
    chainid: number
    poolId: string 
    payoutAsset: string 
    vault: string 
    vaultAsset: string 
    rate: string 
    addInterestRate: string 
    lockupPeriod: number 
    packetSize: string
    packetSizeDecimals: number
    packetVolume: string
    isFixedTerm: boolean 
    poolName: string 
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