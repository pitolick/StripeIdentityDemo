/**
 * クーポンマスタ
 */
'use client'
import Stripe from 'stripe'
import { useState, useEffect } from 'react'
import { stripeLists } from '../types'

/**
 * クーポンマスタの戻り値
 */
export type stripeCouponReturnType = {
  /**
   * クーポンマスタ一覧の値を取得する関数
   */
  getCoupons: () => Stripe.Coupon[]
  /**
   * クーポンマスタの値を取得する関数
   */
  getCoupon: (id: Stripe.Coupon['id']) => Stripe.Coupon | undefined
}

/**
 * クーポンマスタのカスタムフック
 */
export const useStripeCoupons = (): stripeCouponReturnType => {
  // クーポンマスタ
  const [coupons, setCoupons] = useState<Stripe.Coupon[]>([])

  /**
   * 初期値をAPIから並行取得する
   */
  useEffect(() => {
    // クーポンマスタの初期値を取得する
    fetch('/api/stripe/coupons/list', { next: { tags: ['stripe'] } }).then(async (res) => {
      const response = await res.json()

      // 返り値が空のオブジェクトの場合、何もしない
      if (Object.keys(response).length === 0) return
      const data = (response as stripeLists).data

      // クーポンマスタの一覧を更新する
      if (data && data.length > 0) setCoupons(data as Stripe.Coupon[])
    })
  }, [])

  /**
   * クーポンマスタ一覧の値を取得する関数
   * @returns {Stripe.Coupon[]} - クーポンマスタ一覧
   * @returns {undefined} - クーポンマスタ一覧が存在しない場合
   */
  const getCoupons = (): Stripe.Coupon[] => coupons

  /**
   * クーポンマスタの値を取得する関数
   * @param {Stripe.Coupon['id']} id - クーポンマスタのID
   * @returns {Stripe.Coupon | undefined} - クーポンマスタ
   * @returns {undefined} - IDに一致するクーポンマスタが存在しない場合
   * @returns {undefined} - クーポンマスタ一覧が存在しない場合
   * @returns {undefined} - IDが空の場合
   */
  const getCoupon = (id: Stripe.Coupon['id']): Stripe.Coupon | undefined => {
    // IDが空の場合
    if (!id) return undefined
    // クーポンマスタ一覧が存在しない場合
    if (!coupons) return undefined

    // IDに一致するクーポンマスタを返す
    return coupons.find((coupon) => coupon.id === id)
  }

  return {
    getCoupons,
    getCoupon,
  }
}
