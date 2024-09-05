import { renderHook } from '@testing-library/react'
import { StripeContext, useStripeContext } from './Context'

describe('StripeContext', () => {
  it('useStripeContextが正しく作成されること', () => {
    expect(useStripeContext).toBeDefined()
  })

  it('useStripeContextがStripeContextの値を返すこと', () => {
    const methods = {
      getPrices: jest.fn(),
      getPrice: jest.fn(),
      getProducts: jest.fn(),
      getProduct: jest.fn(),
      getCoupons: jest.fn(),
      getCoupon: jest.fn(),
      translateInterval: jest.fn(),
    }

    const wrapper = ({ children }: { children: React.ReactNode }) => <StripeContext.Provider value={methods}>{children}</StripeContext.Provider>

    const { result } = renderHook(() => useStripeContext(), { wrapper })

    expect(result.current).toEqual(methods)
  })

  it('getPricesが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getPricesの結果をSpyする
    const spy = jest.spyOn(result.current, 'getPrices')

    // getPricesを実行する
    result.current.getPrices()

    // getPricesが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('getPriceが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getPriceの結果をSpyする
    const spy = jest.spyOn(result.current, 'getPrice')

    // getPriceを実行する
    result.current.getPrice('price_1')

    // getPriceが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('getProductsが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getProductsの結果をSpyする
    const spy = jest.spyOn(result.current, 'getProducts')

    // getProductsを実行する
    result.current.getProducts()

    // getProductsが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('getProductが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getProductの結果をSpyする
    const spy = jest.spyOn(result.current, 'getProduct')

    // getProductを実行する
    result.current.getProduct('prod_1')

    // getProductが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('getCouponsが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getCouponsの結果をSpyする
    const spy = jest.spyOn(result.current, 'getCoupons')

    // getCouponsを実行する
    result.current.getCoupons()

    // getCouponsが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('getCouponが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // getCouponの結果をSpyする
    const spy = jest.spyOn(result.current, 'getCoupon')

    // getCouponを実行する
    result.current.getCoupon('coupon_1')

    // getCouponが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })

  it('translateIntervalが正しく実行される', () => {
    const { result } = renderHook(() => useStripeContext())

    // translateIntervalの結果をSpyする
    const spy = jest.spyOn(result.current, 'translateInterval')

    // translateIntervalを実行する
    result.current.translateInterval('month')

    // translateIntervalが実行されたことを確認する
    expect(spy).toHaveBeenCalled()

    // Spyをリセットする
    spy.mockRestore()
  })
})
