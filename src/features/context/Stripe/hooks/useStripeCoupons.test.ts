import Stripe from 'stripe'
import { renderHook } from '@testing-library/react'
import { stripeCouponReturnType } from './useStripeCoupons'

describe('useStripeCoupons', () => {
  it('クーポンの配列を返すこと', async () => {
    // 引数のdataをモックする
    const data: Stripe.Coupon[] = [
      {
        id: 'test',
        object: 'coupon',
        amount_off: null,
        created: 1628798640,
        currency: 'jpy',
        duration: 'once',
        duration_in_months: null,
        livemode: false,
        max_redemptions: null,
        metadata: {},
        name: 'test',
        percent_off: 100,
        redeem_by: null,
        times_redeemed: 0,
        valid: true,
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

    const { useStripeCoupons } = require('./useStripeCoupons')

    const stripeCoupons: stripeCouponReturnType = renderHook(() => useStripeCoupons()).result.current

    const getCoupons = stripeCoupons.getCoupons
    const getCoupon = stripeCoupons.getCoupon

    // クーポンの配列を返すこと
    const coupons = await getCoupons()
    expect(Array.isArray(coupons)).toBe(true)

    // undefinedを返すこと
    // @ts-ignore
    expect(await getCoupon()).toBeUndefined()

    // idが一致しない場合クーポンの情報を返すこと
    expect(await getCoupon('hoge')).toBeUndefined()

    // idが一致する場合クーポンの情報を返すこと
    // expect(await getCoupon(data[0].id)).toBe(data[0])
  })

  it('クーポンの配列が空の場合、空の配列を返すこと', async () => {
    // 引数のdataをモックする
    const data: Stripe.Coupon[] = []
    //  global.fetchをモックする
    const fetchMock = () =>
      Promise.resolve({
        json: () => Promise.resolve(data), // Mocking the json method
        status: 200,
        statusText: 'ok',
      })
    global.fetch = jest.fn().mockImplementation(fetchMock)

    const { useStripeCoupons } = require('./useStripeCoupons')

    const stripeCoupons: stripeCouponReturnType = renderHook(() => useStripeCoupons()).result.current

    const getCoupons = stripeCoupons.getCoupons
    const getCoupon = stripeCoupons.getCoupon

    // クーポンの配列を返すこと
    expect(Array.isArray(await getCoupons())).toBe(true)

    // undefinedを返すこと
    expect(await getCoupon('test')).toBeUndefined()
  })
})
