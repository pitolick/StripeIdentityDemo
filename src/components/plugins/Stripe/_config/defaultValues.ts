/**
 * Stripeの初期値
 */
export interface stripeDefaultValuesType {
  // カード番号（下4桁）
  stripeCardNumber?: string
  // StripeSetupIntentID
  stripeSetupIntent?: string
  // StripePaymentMethodID
  stripePaymentMethod?: string
  // StripeItentityID
  stripeIdentity?: string
}

export const stripeDefaultValues: stripeDefaultValuesType = {
  // カード番号（下4桁）
  stripeCardNumber: '',
  // StripeSetupIntentID
  stripeSetupIntent: '',
  // StripePaymentMethodID
  stripePaymentMethod: '',
  // StripeItentityID
  stripeIdentity: '',
}
