/**
 * StripeマスタのコンテキストコンポーネントProvider
 * @modue StripeContext
 */
'use client'
import React from 'react'
import { translateInterval } from './features'
import { StripeContext } from './Context'
import { useStripePrices, stripePriceReturnType, useStripeProducts, stripeProductReturnType, useStripeCoupons, stripeCouponReturnType } from './hooks'

/**
 * StripeマスタのコンテキストProviderの型
 */
export interface StripeContextProviderMethods extends stripePriceReturnType, stripeProductReturnType, stripeCouponReturnType {
  /**
   * 料金の継続単位を和訳する関数
   */
  translateInterval: typeof translateInterval
}

/**
 * StripeマスタのコンテキストProviderコンポーネントのProps
 */
export type StripeContextProviderProps = {
  /**
   * 子要素
   */
  children: React.ReactNode
}

/**
 * StripeマスタのコンテキストProviderコンポーネント
 * @param {React.ReactNode} children - 子要素
 * @returns {React.FC} - Stripeマスタのコンテキストプロバイダー
 */
export const StripeContextProvider: React.FC<StripeContextProviderProps> = ({ children }: StripeContextProviderProps) => {
  // 料金マスタ
  const prices = useStripePrices()
  // 商品マスタ
  const products = useStripeProducts()
  // クーポンマスタ
  const coupons = useStripeCoupons()

  // Stripeマスタのコンテキストメソッド
  const methods = {
    ...prices,
    ...products,
    ...coupons,
    translateInterval,
  }

  // Stripeマスタのコンテキストプロバイダー
  return <StripeContext.Provider value={methods}>{children}</StripeContext.Provider>
}
