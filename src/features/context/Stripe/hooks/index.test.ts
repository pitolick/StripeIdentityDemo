import * as index from './index'

describe('index', () => {
  it('useStripeCoupons関数が存在する', () => {
    expect(index.useStripeCoupons).toBeTruthy()
  })

  it('useStripePrices関数が存在する', () => {
    expect(index.useStripePrices).toBeTruthy()
  })

  it('useStripeProducts関数が存在する', () => {
    expect(index.useStripeProducts).toBeTruthy()
  })
})
