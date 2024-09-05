import { stripeDefaultValuesType, stripeDefaultValues } from './defaultValues'

describe('stripeDefaultValues', () => {
  it('正しい初期値を持っていること', () => {
    const expectedDefaultValues: stripeDefaultValuesType = {
      stripeCardNumber: '',
      stripeSetupIntent: '',
      stripePaymentMethod: '',
      stripeIdentity: '',
    }

    expect(stripeDefaultValues).toEqual(expectedDefaultValues)
  })

  it('stripeCardNumberが正しく更新されること', () => {
    const newStripeCardNumber = '1234'

    stripeDefaultValues.stripeCardNumber = newStripeCardNumber

    expect(stripeDefaultValues.stripeCardNumber).toEqual(newStripeCardNumber)
  })

  it('stripeSetupIntentが正しく更新されること', () => {
    const newStripeSetupIntent = 'setup_intent_123'

    stripeDefaultValues.stripeSetupIntent = newStripeSetupIntent

    expect(stripeDefaultValues.stripeSetupIntent).toEqual(newStripeSetupIntent)
  })

  it('stripePaymentMethodが正しく更新されること', () => {
    const newStripePaymentMethod = 'payment_method_123'

    stripeDefaultValues.stripePaymentMethod = newStripePaymentMethod

    expect(stripeDefaultValues.stripePaymentMethod).toEqual(newStripePaymentMethod)
  })

  it('stripeIdentityが正しく更新されること', () => {
    const newStripeIdentity = 'vs_123'

    stripeDefaultValues.stripeIdentity = newStripeIdentity

    expect(stripeDefaultValues.stripeIdentity).toEqual(newStripeIdentity)
  })
})
