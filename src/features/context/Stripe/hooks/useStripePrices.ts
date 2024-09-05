/**
 * 料金マスタ
 */
'use client'
import Stripe from 'stripe'
import { useState, useEffect } from 'react'
import { stripeLists } from '../types'

/**
 * 料金マスタの戻り値
 */
export type stripePriceReturnType = {
  /**
   * 料金マスタ一覧の値を取得する関数
   */
  getPrices: () => Stripe.Price[]
  /**
   * 料金マスタの値を取得する関数
   */
  getPrice: (id: Stripe.Price['id']) => Stripe.Price | undefined
}

/**
 * 料金マスタのカスタムフック
 */
export const useStripePrices = (): stripePriceReturnType => {
  // 料金マスタ
  const [prices, setPrices] = useState<Stripe.Price[]>([])

  /**
   * 初期値をAPIから並行取得する
   */
  useEffect(() => {
    // 料金マスタの初期値を取得する
    fetch('/api/stripe/prices/list', { next: { tags: ['stripe'] } }).then(async (res) => {
      const response = await res.json()

      // 返り値が空のオブジェクトの場合、何もしない
      if (Object.keys(response).length === 0) return
      const data = (response as stripeLists).data

      // 料金マスタの一覧を更新する
      if (data && data.length > 0) setPrices(data as Stripe.Price[])
    })
  }, [])

  /**
   * 料金マスタ一覧の値を取得する関数
   * @returns {Stripe.Price[]} - 料金マスタ一覧
   * @returns {undefined} - 料金マスタ一覧が存在しない場合
   */
  const getPrices = (): Stripe.Price[] => prices

  /**
   * 料金マスタの値を取得する関数
   * @param {Stripe.Price['id']} id - 料金マスタのID
   * @returns {Stripe.Price | undefined} - 料金マスタ
   * @returns {undefined} - IDに一致する料金マスタが存在しない場合
   * @returns {undefined} - 料金マスタ一覧が存在しない場合
   * @returns {undefined} - IDが空の場合
   */
  const getPrice = (id: Stripe.Price['id']): Stripe.Price | undefined => {
    // IDが空の場合
    if (!id) return undefined
    // 料金マスタ一覧が存在しない場合
    if (!prices) return undefined

    // IDに一致する料金マスタを返す
    return prices.find((price) => price.id === id)
  }

  return {
    getPrices,
    getPrice,
  }
}
