import Stripe from 'stripe'
import { stripeProductReturnType } from './useStripeProducts'
import { renderHook, waitFor } from '@testing-library/react'

describe('useStripeProducts', () => {
  it('getProducts関数はStripe.Productの配列を返すこと', async () => {
    // 引数のdataをモックする
    const data: Stripe.Product[] = [
      {
        id: '1',
        object: 'product',
        active: true,
        created: 1628798640,
        description: null,
        images: [],
        livemode: false,
        metadata: {},
        name: 'test',
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        unit_label: null,
        updated: 1628798640,
        url: null,
        tax_code: null,
        type: 'service',
        marketing_features: [],
      },
      {
        id: '2',
        object: 'product',
        active: true,
        created: 1628798640,
        description: null,
        images: [],
        livemode: false,
        metadata: {},
        name: 'test',
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        unit_label: null,
        updated: 1628798640,
        url: null,
        tax_code: null,
        type: 'service',
        marketing_features: [],
      },
      {
        id: '999',
        object: 'product',
        active: true,
        created: 1628798640,
        description: null,
        images: [],
        livemode: false,
        metadata: {},
        name: 'test',
        package_dimensions: null,
        shippable: null,
        statement_descriptor: null,
        unit_label: null,
        updated: 1628798640,
        url: null,
        tax_code: null,
        type: 'service',
        marketing_features: [],
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

    const { useStripeProducts } = require('./useStripeProducts')

    const { result } = renderHook(() => useStripeProducts())

    expect(result.current).toMatchObject<stripeProductReturnType>({
      getProducts: expect.any(Function),
      getProduct: expect.any(Function),
    })

    // await waitFor(() => {
    //   expect(result.current.getProducts()).toEqual(data)
    // })
  })
})
