import React from 'react'
import { render } from '@testing-library/react'

describe('StripeContextProvider', () => {
  it('子要素をレンダリングし、コンテキストの値を提供する', () => {
    const { StripeContext } = require('./Context')

    // テスト用の子要素
    const ChildComponent = () => {
      const stripeContext = React.useContext(StripeContext)
      // stripeContextの値を表示するなどのテストロジック
      return <div>{JSON.stringify(stripeContext)}</div>
    }

    // hooksをモック化
    jest.mock('./hooks', () => ({
      useStripePrices: () => ({
        getPrice: jest.fn(),
        getPrices: jest.fn(),
      }),
      useStripeProducts: () => ({
        getProduct: jest.fn(),
        getProducts: jest.fn(),
      }),
      useStripeCoupons: () => ({
        getCoupon: jest.fn(),
        getCoupons: jest.fn(),
      }),
    }))

    const { StripeContextProvider } = require('./Provider')

    // テスト対象のコンポーネントをレンダリング
    render(
      <StripeContextProvider>
        <ChildComponent />
      </StripeContextProvider>,
    )
  })
})
