import { Chains } from '@rabbitholegg/questdk-plugin-utils'
import type { Address } from 'viem'

export const FIXED_PRICE_SALE_STRATS: { [chainId: number]: Address } = {
  [Chains.ETHEREUM]: '0x04E2516A2c207E84a1839755675dfd8eF6302F0a',
  [Chains.OPTIMISM]: '0x3678862f04290E565cCA2EF163BAeb92Bb76790C',
  [Chains.SEPOLIA]: '0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21',
  [Chains.ZORA]: '0x04E2516A2c207E84a1839755675dfd8eF6302F0a',
  [Chains.BASE]: '0x04E2516A2c207E84a1839755675dfd8eF6302F0a',
  [Chains.ARBITRUM_ONE]: '0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21',
  [Chains.BLAST]: '0x3eb144aee170bf62fda1536e38af51f08e34a5d0',
}

export const ZORA_1155_FACTORY = '0x777777c338d93e2c7adf08d102d45ca7cc4ed021'

// for referrals
export const ZORA_DEPLOYER_ADDRESS =
  '0xe3bBA2A4F8E0F5C32EF5097F988a4d88075C8B48'
