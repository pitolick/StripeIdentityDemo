import * as index from './index'

describe('index', () => {
  it('useStripeContext関数が存在する', () => {
    expect(index.useStripeContext).toBeTruthy()
  })

  it('StripeContextProvider関数が存在する', () => {
    expect(index.StripeContextProvider).toBeTruthy()
  })
})
