/**
 * Stripeオブジェクトの設定
 */
import Stripe from 'stripe'
import { STRIPE_SECRET_KEY } from '@/config'

/**
 * Stripeオブジェクトを返す関数
 * @returns {Stripe} Stripeオブジェクト
 */
export const getStripe = () => {
  if (!STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEYが設定されていません。')
  }

  return new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  })
}
