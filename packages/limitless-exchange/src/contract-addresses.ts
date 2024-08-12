import { type Address, zeroAddress as NATIVE_TOKEN } from "viem";
import { Chains } from "./utils";

export const Tokens: {
  [_chainId: number]: { [token: string]: Address };
} = {
  [Chains.BASE]: {
    ARB: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    DAI: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    ETH: NATIVE_TOKEN,
    GMX: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    JOE: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07",
    LINK: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    MAGIC: "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    RDNT: "0x3082CC23568eA640225c2467653dB90e9250AaA0",
    STG: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
    USDC: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    USDCE: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    WBTC: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
};

export const DEFAULT_SWAP_TOKEN_LIST: {
  [chainId: number]: readonly Address[];
} = {
  [Chains.BASE]: [
    Tokens[Chains.BASE].ETH,
    Tokens[Chains.BASE].ARB,
    Tokens[Chains.BASE].DAI,
    Tokens[Chains.BASE].GMX,
    Tokens[Chains.BASE].JOE,
    Tokens[Chains.BASE].LINK,
    Tokens[Chains.BASE].MAGIC,
    Tokens[Chains.BASE].RDNT,
    Tokens[Chains.BASE].STG,
    Tokens[Chains.BASE].USDC,
    Tokens[Chains.BASE].USDCE,
    Tokens[Chains.BASE].USDT,
    Tokens[Chains.BASE].WBTC,
    Tokens[Chains.BASE].WETH,
  ],
} as const;
