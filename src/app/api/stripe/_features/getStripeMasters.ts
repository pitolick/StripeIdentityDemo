/**
 * Stripeマスタの一覧を全て取得する関数
 * @param {string} endpoint - APIのエンドポイント
 * @param {stripeLists | {}} obj - Stripeマスタの一覧
 * @returns {Promise<stripeLists | {}>} - Stripeマスタの一覧
 * @todo stripe[endpoint] の型定義アサーションを正しく設定する
 */
import deepmerge from 'deepmerge'
import { stripeLists } from '@/features/context/Stripe/types'
import { getStripe } from '@/app/api/stripe/_config/stripe'
import Stripe from 'stripe'

// paramsの型定義
type params = {
  limit?: Stripe.PriceListParams['limit']
  starting_after?: Stripe.PriceListParams['starting_after']
  ending_before?: Stripe.PriceListParams['ending_before']
}

export const getStripeMasters = async (endpoint: 'prices' | 'products' | 'coupons' | 'taxRates', params: params = {}, obj: stripeLists | {} = {}): Promise<stripeLists | {}> => {
  // Stripe オブジェクトを取得
  const stripe = getStripe()

  // Stripeマスタの一覧を取得する
  const res = await (stripe[endpoint] as Stripe.PricesResource).list(params).then(async (res) => {
    const result: stripeLists = await res
    obj = deepmerge(obj, result)

    if (result.has_more && result.data) {
      // has_moreがtrueの場合、配列の最後のidを渡して続きを再帰的に取得
      const index = Object.keys(result.data).length - 1
      return await getStripeMasters(endpoint, { ...params, starting_after: result.data[index].id }, obj)
    }
    return obj
  })

  // Stripeマスタの一覧を返す
  return await res
}
