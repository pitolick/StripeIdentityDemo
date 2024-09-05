/**
 * 商品マスタ
 */
'use client'
import Stripe from 'stripe'
import { useState, useEffect } from 'react'
import { stripeLists } from '../types'

/**
 * 商品マスタの戻り値
 */
export type stripeProductReturnType = {
  /**
   * 商品マスタの値を取得する関数
   */
  getProducts: () => Stripe.Product[]
  /**
   * 商品マスタの値を取得する関数
   */
  getProduct: (id: Stripe.Product['id']) => Stripe.Product | undefined
}

/**
 * 商品マスタのカスタムフック
 */
export const useStripeProducts = (): stripeProductReturnType => {
  // 商品マスタ
  const [products, setProducts] = useState<Stripe.Product[]>([])

  /**
   * 初期値をAPIから並行取得する
   */
  useEffect(() => {
    // 商品マスタの初期値を取得する
    fetch('/api/stripe/products/list', { next: { tags: ['stripe'] } }).then(async (res) => {
      const response = await res.json()

      // 返り値が空のオブジェクトの場合、何もしない
      if (Object.keys(response).length === 0) return
      const data = (response as stripeLists).data

      // 商品マスタの一覧を更新する
      if (data && data.length > 0) setProducts(data as Stripe.Product[])
    })
  }, [])

  /**
   * 商品マスタ一覧の値を取得する関数
   * @returns {Stripe.Product[]} - 商品マスタ一覧
   * @returns {undefined} - 商品マスタ一覧が存在しない場合
   */
  const getProducts = (): Stripe.Product[] => products

  /**
   * 商品マスタの値を取得する関数
   * @param {Stripe.Product['id']} id - 商品マスタのID
   * @returns {Stripe.Product | undefined} - 商品マスタ
   * @returns {undefined} - IDに一致する商品マスタが存在しない場合
   * @returns {undefined} - 商品マスタ一覧が存在しない場合
   * @returns {undefined} - IDが空の場合
   */
  const getProduct = (id: Stripe.Product['id']): Stripe.Product | undefined => {
    // IDが空の場合
    if (!id) return undefined
    // 商品マスタ一覧が存在しない場合
    if (!products) return undefined

    // IDに一致する商品マスタを返す
    return products.find((product) => product.id === id)
  }

  return {
    getProducts,
    getProduct,
  }
}
