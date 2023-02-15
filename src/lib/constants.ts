import axios from "axios"

export const SUBGRAPH_URLS: { [chainid: number]: string } = {
    1: "https://api.thegraph.com/subgraphs/name/ryantinder/resonate-mainnet",
    10: "https://api.thegraph.com/subgraphs/name/ryantinder/resonate-optimism",
    137: "https://api.thegraph.com/subgraphs/name/ryantinder/resonate-polygon",
    250: "https://api.thegraph.com/subgraphs/name/ryantinder/resonate-fantom",
    42161: "https://api.thegraph.com/subgraphs/name/ryantinder/resonate-arbitrum",
}

export const CHAIN_IDS = [1, 10, 42161]

export const eth_price = async (): Promise<number> => {
    const eth_res = await axios.get("https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&vs_currencies=usd")
    return eth_res.data["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"].usd
}
