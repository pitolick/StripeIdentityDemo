/**
 * 料金の継続単位を和訳する関数
 * @param {Stripe.Price.Recurring.Interval} interval - 料金の継続単位
 */
import Stripe from 'stripe'

export const translateInterval = (interval: Stripe.Price.Recurring.Interval): string => {
  switch (interval) {
    case 'day':
      return '日'
    case 'week':
      return '週'
    case 'month':
      return 'ヶ月'
    case 'year':
      return '年'
    default:
      return ''
  }
}
