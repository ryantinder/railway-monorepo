import { Contract, JsonRpcProvider, getAddress} from "ethers"
import { resonateABI } from "./abi"

export const isE6 = (asset: string, chainid: number): boolean => { return E6_addresses[chainid].includes(getAddress(asset)) } 

export const PROVIDERS: {[chainId: number] : JsonRpcProvider} = {
    1 : new JsonRpcProvider(process.env.MAINNET_RPC_URL),
    10 : new JsonRpcProvider('https://opt-mainnet.g.alchemy.com/v2/ZKd9Q4Jm6JdtzHEPy_3wB77PnJqM7fvm'),
    137 : new JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/XZF2U-6qLByJKH9OVsB8rflwSYaZRQaq'),
    250 : new JsonRpcProvider("https://twilight-delicate-wildflower.fantom.quiknode.pro/e17ae5b40af70a5e7db66cbf8b9ec7474893fdc3/"),
    42161 : new JsonRpcProvider("https://arb-mainnet.g.alchemy.com/v2/fmrqiiCFFjJ_nyF3ItEflVVJ3LF-HBz_"),
}
export const resonate_contracts: {[chainId: number] : Contract} = {
    1 : new Contract("0x80CA847618030Bc3e26aD2c444FD007279DaF50A", resonateABI, PROVIDERS[1]),
    10 : new Contract("0x80CA847618030Bc3e26aD2c444FD007279DaF50A", resonateABI, PROVIDERS[10]),
    137 : new Contract("0x6ECB87A158c41d21c82C65B2D8a67Ea435804f64", resonateABI, PROVIDERS[137]),
    250 : new Contract("0x80CA847618030Bc3e26aD2c444FD007279DaF50A", resonateABI, PROVIDERS[250]),
    42161 : new Contract("0x80CA847618030Bc3e26aD2c444FD007279DaF50A", resonateABI, PROVIDERS[42161])
}

export const E6_addresses: {[chainId: number] : string[]} = {
    1 : ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    10 : ["0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", "0x7F5c764cBc14f9669B88837ca1490cCa17c31607"],
    137 : ["0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"],
    250 : ["0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"],
    42161 : ["0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"]
}