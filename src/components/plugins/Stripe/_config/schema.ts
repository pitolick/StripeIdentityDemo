/**
 * Stripeのバリデーションスキーマ
 * @param {object} param
 * @param {boolean} [param.required=true] - 必須の場合はtrue
 * @returns {z.ZodSchema} - Stripeのバリデーションスキーマ
 */
import * as z from 'zod'

export const stripeSchema = ({ required = true }: { required?: boolean } = {}) => {
  return z.object({
    // カード番号（下4桁）
    stripeCardNumber: z.string({ invalid_type_error: 'カード情報を入力してください', required_error: 'カード情報を入力してください' }).refine(
      (val) => {
        // 空文字の場合は必須チェックを行わない
        if (val === '') return !required

        // 文字列がカード番号の命名規則に合致しているかチェック
        const regex = /^[0-9]{4}$/g
        if (!regex.test(val)) return false

        return true
      },
      { message: 'カード情報が不正です' },
    ),
    // StripeSetupIntentID
    stripeSetupIntent: z.string({ invalid_type_error: 'カード情報を入力してください', required_error: 'カード情報を入力してください' }).refine(
      (val) => {
        // 空文字の場合は必須チェックを行わない
        if (val === '') return !required

        // 文字列がSetupIntentIDの命名規則に合致しているかチェック
        const regex = /^seti_/
        if (!regex.test(val)) return false

        return true
      },
      { message: 'カード情報が不正です' },
    ),
    // StripePaymentMethodID
    stripePaymentMethod: z.string({ invalid_type_error: 'カード情報を入力してください', required_error: 'カード情報を入力してください' }).refine(
      (val) => {
        // 空文字の場合は必須チェックを行わない
        if (val === '') return !required

        // 文字列がPaymentMethodIDの命名規則に合致しているかチェック
        const regex = /^pm_/
        if (!regex.test(val)) return false

        return true
      },
      { message: 'カード情報が不正です' },
    ),
    // StripeItentityID
    stripeIdentity: z.string({ invalid_type_error: '本人確認書類を提出してください', required_error: '本人確認書類を提出してください' }).refine(
      (val) => {
        // 空文字の場合は必須チェックを行わない
        if (val === '') return !required

        // 文字列がItentityIDの命名規則に合致しているかチェック
        const regex = /^vs_/
        if (!regex.test(val)) return false

        return true
      },
      { message: '本人確認書類が不正です' },
    ),
  })
}
