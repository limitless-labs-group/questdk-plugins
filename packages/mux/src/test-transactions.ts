import { type OptionsActionParams, OrderType } from '@rabbitholegg/questdk'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import { Chains, createTestCase, type TestParams } from './utils'
import { parseEther, parseUnits, zeroAddress } from 'viem'

export const MUX_ETH_MARKET_LONG: TestParams<OptionsActionParams> = {
  // 6932c3e3-8f9a-4a30-acc2-8959f1ae7554
  transaction: {
    chainId: 42161,
    to: '0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3',
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    input:
      '0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd1030a0100000000000000000000000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000009fbd82c3c72240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b238',
    value: '1000000000000000',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: zeroAddress,
    amount: GreaterThanOrEqual(parseEther('0.001')),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    orderType: OrderType.Market,
  },
}

export const MUX_ARB_LIMIT_LONG: TestParams<OptionsActionParams> = {
  // 86b65c63-b6ca-4384-b21d-9dbe87034c24
  transaction: {
    chainId: 42161,
    to: '0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3',
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    input:
      '0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd10a0301000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000775f05a07400000000000000000000000000000000000000000000000008b7b8c4ba968140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000065c6b5eb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b5eb',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    amount: GreaterThanOrEqual(parseUnits('0.1', 18)),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    orderType: OrderType.Limit,
  },
}

export const MUX_DAI_MARKET_SHORT: TestParams<OptionsActionParams> = {
  // a64188ca-0feb-4ee2-b192-ed017e043727
  transaction: {
    chainId: 42161,
    to: '0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3',
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    input:
      '0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd10203000000000000000000000000000000000000000000000000000000000000000000004a1b7db51c960000000000000000000000000000000000000000000000000000009f295cd5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b8c3',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    amount: GreaterThanOrEqual(parseUnits('5.34', 18)),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    orderType: OrderType.Market,
  },
}

export const passingTestCases = [
  createTestCase(MUX_ETH_MARKET_LONG, 'when market long ETH on mux'),
  createTestCase(MUX_ARB_LIMIT_LONG, 'when limit long ARB on mux'),
  createTestCase(MUX_DAI_MARKET_SHORT, 'when market short DAI on mux'),
]
// 0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000c4606c70120000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee63360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da10000000000000000000000000000000000000000000000004a1b7db51c9600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a4b8444d820000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee63360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f05a0740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003242393236300000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000000000006d757870726f746f636f6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001e45102a708000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000004a1b7db51c960000000000000000000000000000000000000000000000000000000000000050a705000000000000000000000000000000000000000000000000000000000008d89300000000000000000000000000000000000005b76761054a33ca40914306a8000000000000000000000000000000000000000000000000000009363a9370280000000000000000000000000000000000000000000000000000091ea5829a8e00000000000000000000000000000000000000000000000000000775f05a074000000000000000000000000000000000000000000000000000000000000007a12000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000042da10009cbd5d07dd0cecc66161fc93d7c9000da10001f482af49447d8a07e3bd95bd0d56f35241523fbab10001f4af88d065e77c8cc2239327c5edb3a432268e58310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
