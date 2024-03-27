import { SMART_MARGIN_V3, WETH } from './constants'
import { type OptionsActionParams, OrderType } from '@rabbitholegg/questdk'
import {
  type TestParams,
  createTestCase,
} from '@rabbitholegg/questdk-plugin-utils'
import { Chains } from '@rabbitholegg/questdk-plugin-utils'

// https://basescan.org/tx/0x926c2f779ef0ed8db5834b588b7f52fc91bb3958a1be831c8eb8f7a930355590
export const OPTIONS_TEST: TestParams<OptionsActionParams> = {
  transaction: {
    chainId: Chains.BASE,
    from: '0xb7f2d752ce1f29dd7324b9ea3a24526e056eaedc',
    hash: '0x926c2f779ef0ed8db5834b588b7f52fc91bb3958a1be831c8eb8f7a930355590',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e428f61b100000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000008000000000000000000000000000015b000000000000000000000000000000000000000000000001158e460913d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b7cddc93ba93d083514b57454e544100000000000000000000000000000000000000000000000000000000000000000000000000003bd64247d879af879e6f6e62f81430186391bdb800000000000000000000000000000000000000000000000000000000',
    to: SMART_MARGIN_V3,
    value: '0',
  },
  params: {
    chainId: Chains.BASE,
    recipient: '0xb7f2d752ce1f29dd7324b9ea3a24526e056eaedc',
    contractAddress: SMART_MARGIN_V3,
    token: WETH,
    amount: '20000000000000000000',
    orderType: OrderType.Limit,
  },
}

export const passingTestCases = [
  createTestCase(OPTIONS_TEST, 'when order execution'),
]

export const failingTestCases = [
  createTestCase(OPTIONS_TEST, 'when chainId is not correct', { chainId: 0 }),
  createTestCase(OPTIONS_TEST, 'when amount is not correct', { amount: 10000 }),
  createTestCase(OPTIONS_TEST, 'when orderType is not correct', {
    orderType: OrderType.Market,
  }),
  createTestCase(OPTIONS_TEST, 'when recipient is not correct', {
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc2bcbd1',
  }),
]
