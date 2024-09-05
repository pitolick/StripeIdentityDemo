import { stripeSchema } from './schema'

describe('stripeSchema', () => {
  it('必須の場合、正しいバリデーションスキーマを返すこと', () => {
    const schema = stripeSchema({ required: true })
    // カード番号（下4桁）
    expect(schema.shape.stripeCardNumber).toBeDefined()
    // StripeSetupIntentID
    expect(schema.shape.stripeSetupIntent).toBeDefined()
    // StripePaymentMethodID
    expect(schema.shape.stripePaymentMethod).toBeDefined()
    // StripeItentityID
    expect(schema.shape.stripeIdentity).toBeDefined()

    // 正しい値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).not.toThrow()

    // stripeCardNumberが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '123',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripeCardNumberが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: 12345,
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripeSetupIntentが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'error',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripeSetupIntentが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 12345,
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripePaymentMethodが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'error',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripePaymentMethodが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 12345,
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripeIdentityが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'error',
      }),
    ).toThrow('本人確認書類が不正です')

    // stripeIdentityが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 12345,
      }),
    ).toThrow('本人確認書類を提出してください')
  })

  it('必須でない場合、正しいバリデーションスキーマを返すこと', () => {
    const schema = stripeSchema({ required: false })
    // カード番号（下4桁）
    expect(schema.shape.stripeCardNumber).toBeDefined()
    // StripeSetupIntentID
    expect(schema.shape.stripeSetupIntent).toBeDefined()
    // StripePaymentMethodID
    expect(schema.shape.stripePaymentMethod).toBeDefined()
    // StripeItentityID
    expect(schema.shape.stripeIdentity).toBeDefined()

    // 正しい値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).not.toThrow()

    // stripeCardNumberが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '123',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripeCardNumberが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: 12345,
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripeCardNumberが空文字
    expect(() =>
      schema.parse({
        stripeCardNumber: '',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).not.toThrow()

    // stripeSetupIntentが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'error',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripeSetupIntentが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 12345,
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripeSetupIntentが空文字
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: '',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).not.toThrow()

    // stripePaymentMethodが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'error',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報が不正です')

    // stripePaymentMethodが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 12345,
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).toThrow('カード情報を入力してください')

    // stripePaymentMethodが空文字
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: '',
        stripeIdentity: 'vs_stripe_identity',
      }),
    ).not.toThrow()

    // stripeIdentityが不正な値
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 'error',
      }),
    ).toThrow('本人確認書類が不正です')

    // stripeIdentityが不正な型
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: 12345,
      }),
    ).toThrow('本人確認書類を提出してください')

    // stripeIdentityが空文字
    expect(() =>
      schema.parse({
        stripeCardNumber: '4242',
        stripeSetupIntent: 'seti_test',
        stripePaymentMethod: 'pm_stripe_payment_method',
        stripeIdentity: '',
      }),
    ).not.toThrow()
  })

  it('デフォルト値が正しいこと', () => {
    const schema = stripeSchema()

    expect(schema.shape.stripeCardNumber).toBeDefined()
  })
})
