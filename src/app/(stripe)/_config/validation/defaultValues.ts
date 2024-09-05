/**
 * 完結フォームの初期値
 */
import { stripeDefaultValuesType, stripeDefaultValues } from '@/components/plugins/Stripe'

export interface formStripeDefaultValuesType extends stripeDefaultValuesType {}

export const formStripeDefaultValues: formStripeDefaultValuesType = {
  // Stripeの初期値
  ...stripeDefaultValues,
}
