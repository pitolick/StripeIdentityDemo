/**
 * 完結フォームのスキーマ
 */
import { stripeSchema } from '@/components/plugins/Stripe'

export const getSchema = () => {
  const indexSchema = stripeSchema({ required: true })

  return indexSchema
}
