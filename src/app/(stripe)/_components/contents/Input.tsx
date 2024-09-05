/**
 * Stripeフォーム個人情報入力画面の内容を定義するコンポーネント
 * @module StripeInputContents
 */
import React from 'react'
import { HeadingCaption } from '@/components/elements'
import { StripeElements, StripePaymentIntent, StripeIdentityVerificationSession } from '@/components/plugins/Stripe'
import { useFormContext } from 'react-hook-form'

/**
 * Stripeフォーム個人情報入力画面の内容を定義するProps
 * @typedef {Object} StripeInputContentsProps
 */
export interface StripeInputContentsProps {}

/**
 * Stripeフォーム個人情報入力画面の内容を定義するコンポーネント
 * @param {StripeInputContentsProps} props - Stripeフォーム個人情報入力画面の内容を定義するコンポーネントのプロパティ
 * @returns {JSX.Element} - Stripeフォーム個人情報入力画面の内容を定義するコンポーネント
 */
export const StripeInputContents: React.FC<StripeInputContentsProps> = (props) => {
  const {
    formState: { errors },
  } = useFormContext()

  /**
   * フォームの設定
   */

  return (
    <>
      {/* お支払い情報 */}
      <div className="mt-16">
        <HeadingCaption className="mb-8 text-lg md:text-xl">お支払い情報</HeadingCaption>
        <div className="space-y-5">
          {/* StripeElements */}
          <StripeElements intentType="setup">
            <StripePaymentIntent nameId="stripeSetupIntent" label="カード情報" required={true} error={errors.stripeSetupIntent} />
          </StripeElements>
        </div>
      </div>

      {/* 本人確認 */}
      <div className="mt-16">
        <HeadingCaption className="mb-8 text-lg md:text-xl">本人確認</HeadingCaption>
        <div className="space-y-5">
          <StripeIdentityVerificationSession nameId="stripeIdentity" label="本人確認" required={true} error={errors.stripeIdentity} />
        </div>
      </div>
    </>
  )
}
