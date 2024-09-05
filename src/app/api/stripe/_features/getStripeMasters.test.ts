/**
 * @jest-environment node
 */
import { getStripe } from '@/app/api/stripe/_config/stripe'

describe('getStripeMasters', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('Stripeマスタの一覧を取得できること', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        prices: {
          list: jest.fn().mockResolvedValue({
            object: 'list',
            data: [],
            has_more: false,
            url: '/v1/prices',
          }),
        },
      }),
    }))

    const { getStripeMasters } = require('./getStripeMasters')

    // Stripeマスタの一覧を取得する
    const result = await getStripeMasters('prices')

    // Stripeマスタの一覧が取得できていること
    expect(result).toHaveProperty('object')
    expect(result).toHaveProperty('data')
    expect(result).toHaveProperty('has_more')
    expect(result).toHaveProperty('url')
  })

  it('Stripeマスタの一覧をhas_moreがfalseになるまで取得できること', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        prices: {
          list: jest
            .fn()
            .mockResolvedValueOnce({
              object: 'list',
              data: [{ id: 'price_1' }, { id: 'price_2' }, { id: 'price_3' }],
              has_more: true,
              url: '/v1/prices',
            })
            .mockResolvedValueOnce({
              object: 'list',
              data: [{ id: 'price_4' }, { id: 'price_5' }, { id: 'price_6' }],
              has_more: false,
              url: '/v1/prices',
            }),
        },
      }),
    }))

    const { getStripeMasters } = require('./getStripeMasters')

    // Stripeマスタの一覧を取得する
    const result = await getStripeMasters('prices')

    // Stripeマスタの一覧が取得できていること
    expect(result).toHaveProperty('object')
    expect(result).toHaveProperty('data')
    expect(result).toHaveProperty('has_more')
    expect(result).toHaveProperty('url')
    expect(result.data).toHaveLength(6)
  })
})
