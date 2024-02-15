import { apply } from '@rabbitholegg/questdk/filter'
import { describe, expect, test } from 'vitest'
import { failingTestCases, passingTestCases } from './test-setup'
import { BASIC_PURCHASE, EXPECTED_ENCODED_DATA_721, EXPECTED_ENCODED_DATA_1155 } from './test-transactions'
import { getMintIntent, mint } from './Zora'
import {
  ZORA_MINTER_ABI_1155,
  ZORA_MINTER_ABI_721,
  UNIVERSAL_MINTER_ABI,
} from './abi'
import { type MintIntentParams } from '@rabbitholegg/questdk-plugin-utils'

describe('Given the zora plugin', () => {
  describe('When handling the mint', () => {
    test('should return a valid action filter', async () => {
      const { params } = BASIC_PURCHASE
      const filter = await mint(params)
      expect(filter).to.deep.equal({
        chainId: 10,
        to: {
          $or: [
            '0xfff631ef40557f8705e89053af794a1dcfa0a90b',
            '0x97eb05b8db496b12244bccf17cf377d00a99b67a',
          ],
        },
        input: {
          $or: [
            {
              $abiAbstract: UNIVERSAL_MINTER_ABI,
              _targets: {
                $some: '0xfFF631EF40557f8705e89053aF794a1DCFA0A90b',
              },
              _calldatas: {
                $some: {
                  $or: [
                    {
                      $abi: ZORA_MINTER_ABI_721,
                      $and: [
                        {
                          $or: [
                            {
                              recipient:
                                '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                            {
                              tokenRecipient:
                                '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                            {
                              to: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      $abi: ZORA_MINTER_ABI_1155,
                      $and: [
                        {
                          $or: [
                            {
                              recipient:
                                '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                            {
                              tokenRecipient:
                                '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                            {
                              to: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
            },
            {
              $abi: ZORA_MINTER_ABI_721,
              $and: [
                {
                  $or: [
                    {
                      recipient: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                    {
                      tokenRecipient:
                        '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                    {
                      to: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                  ],
                },
              ],
            },
            {
              $abi: ZORA_MINTER_ABI_1155,
              $and: [
                {
                  $or: [
                    {
                      recipient: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                    {
                      tokenRecipient:
                        '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                    {
                      to: '0x628d4c61d81ac4f286b1778a063ed2f8810bc367',
                    },
                  ],
                },
              ],
            },
          ],
        },
      })
    })

    describe('should pass filter with valid transactions', () => {
      passingTestCases.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test(description, async () => {
          const filter = await mint(params)
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCases.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test(description, async () => {
          const filter = await mint(params)
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })
  })
})

describe.only('Given the getMintIntent function', () => {
  // Define the constant for the contract address
  const CONTRACT_ADDRESS = '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb';
  const RECIPIENT_ADDRESS = '0x1234567890123456789012345678901234567890'; // replace with a real address

  test('returns a TransactionRequest with correct properties when tokenId is not 0', async () => {
    const mint: MintIntentParams = {
      chainId: 1,
      tokenId: 1, // not 0
      contractAddress: CONTRACT_ADDRESS,
      amount: BigInt('10'),
      recipient: RECIPIENT_ADDRESS,
    };

    const result = await getMintIntent(mint);

    expect(result).toEqual({
      from: mint.recipient,
      to: mint.contractAddress,
      data: EXPECTED_ENCODED_DATA_1155, 
    });
  });

  test('returns a TransactionRequest with correct properties when tokenId is 0', async () => {
    const mint: MintIntentParams = {
      chainId: 1,
      tokenId: 0,
      contractAddress: CONTRACT_ADDRESS,
      amount: BigInt('10'),
      recipient: RECIPIENT_ADDRESS,
    };

    const result = await getMintIntent(mint);

    expect(result).toEqual({
      from: mint.recipient,
      to: mint.contractAddress,
      data: EXPECTED_ENCODED_DATA_721, 
    });
  });

  test('throws an error if required parameters are missing', async () => {
    const mint: Partial<MintIntentParams> = {
      contractAddress: CONTRACT_ADDRESS,
      amount: BigInt('10'),
      // recipient is missing
    };

    await expect(getMintIntent(mint as MintIntentParams)).rejects.toThrow();
  });
});
