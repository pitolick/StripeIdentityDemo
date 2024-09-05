/**
 * @jest-environment node
 */
import Stripe from 'stripe'

// Stripeをモック化
jest.mock('stripe')

describe('getStripe', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('STRIPE_SECRET_KEYが設定されていない場合、エラーが発生すること', () => {
    jest.mock('@/config', () => ({
      STRIPE_SECRET_KEY: undefined,
    }))

    const { getStripe } = require('./stripe')

    expect(() => {
      getStripe()
    }).toThrow('STRIPE_SECRET_KEYが設定されていません。')
  })

  it('STRIPE_SECRET_KEYが設定されている場合、Stripeオブジェクトが返ること', () => {
    jest.mock('@/config', () => ({
      STRIPE_SECRET_KEY: 'sk_test_aaaaaaaaaaaaaaaaaaaaaaaaa',
    }))
    const { getStripe } = require('./stripe')

    const result = getStripe()
    expect(result).toBeInstanceOf(Object)
  })
})
