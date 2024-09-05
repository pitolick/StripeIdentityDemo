import Stripe from 'stripe'
import { stripePriceReturnType } from './useStripePrices'
import { renderHook, waitFor } from '@testing-library/react'

describe('useStripePrices', () => {
  it('getPrices関数はStripe.Priceの配列を返すこと', async () => {
    // 引数のdataをモックする
    const data: Stripe.Price[] = [
      {
        id: '1',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1628798640,
        currency: 'jpy',
        livemode: false,
        lookup_key: null,
        metadata: {
          next_price_id: '2',
        },
        nickname: null,
        product: 'test',
        recurring: null,
        tiers: undefined,
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
        custom_unit_amount: null,
        tax_behavior: null,
      },
      {
        id: '2',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1628798640,
        currency: 'jpy',
        livemode: false,
        lookup_key: null,
        metadata: {
          next_price_id: '2',
        },
        nickname: null,
        product: 'test',
        recurring: null,
        tiers: undefined,
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
        custom_unit_amount: null,
        tax_behavior: null,
      },
      {
        id: '3',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1628798640,
        currency: 'jpy',
        livemode: false,
        lookup_key: null,
        metadata: {
          next_price_id: '0',
        },
        nickname: null,
        product: 'test',
        recurring: null,
        tiers: undefined,
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
        custom_unit_amount: null,
        tax_behavior: null,
      },
      {
        id: '999',
        object: 'price',
        active: true,
        billing_scheme: 'per_unit',
        created: 1628798640,
        currency: 'jpy',
        livemode: false,
        lookup_key: null,
        metadata: {},
        nickname: null,
        product: 'test',
        recurring: null,
        tiers: undefined,
        tiers_mode: null,
        transform_quantity: null,
        type: 'recurring',
        unit_amount: 1000,
        unit_amount_decimal: '1000',
        custom_unit_amount: null,
        tax_behavior: null,
      },
    ]

    //  global.fetchをモックする
    const fetchMock = () =>
      Promise.resolve({
        json: () => Promise.resolve(data), // Mocking the json method
        status: 200,
        statusText: 'ok',
      })
    global.fetch = jest.fn().mockImplementation(fetchMock)

    const { useStripePrices } = require('./useStripePrices')

    const { result } = renderHook(() => useStripePrices())

    expect(result.current).toMatchObject<stripePriceReturnType>({
      getPrices: expect.any(Function),
      getPrice: expect.any(Function),
    })

    // await waitFor(() => {
    //   expect(result.current.getPrices()).toEqual(data)
    // })
  })
})
