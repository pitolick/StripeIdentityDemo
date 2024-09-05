/**
 * StripeAPIリスト取得の共通型
 */
import Stripe from 'stripe'

export type stripeLists = {
  data: Stripe.Price[] | Stripe.Product[] | Stripe.Coupon[]
  has_more: boolean
  object: string
  url: string
}
