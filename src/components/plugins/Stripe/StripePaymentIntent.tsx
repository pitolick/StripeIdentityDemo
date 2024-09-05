/**
 * PaymentIntent
 * @see https://stripe.com/docs/payments/quickstart?client=react&lang=node
 */
'use client'
import React, { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { StripePaymentElementChangeEvent, StripePaymentElementOptions } from '@stripe/stripe-js'
import { InputProps } from '@/components/form/field'
import { Loading } from '@/components/parts/Loading/Loading'
import { InputBox, InputBoxProps } from '@/components/form/parts'
import { useFormContext } from 'react-hook-form'

/**
 * PaymentIntentのプロパティ
 */
export interface PaymentIntentProps extends Omit<InputProps, 'options'>, Omit<InputBoxProps, 'children'> {}

/**
 * PaymentIntent
 * @param props - プロパティ
 * @returns {React.FC} PaymentIntent
 */
export const StripePaymentIntent: React.FC<PaymentIntentProps> = (props) => {
  const {
    // clientSecret,
    nameId,
    label,
    note,
    required = undefined,
    contentWidth,
    error,
  } = props

  const stripe = useStripe()
  const elements = useElements()
  const { setValue, setError, trigger } = useFormContext()

  // 読み込み時にフォームの値をリセット
  useEffect(() => {
    setValue(nameId, '')
    setValue('stripePaymentMethod', '')
    setValue('stripeCardNumber', '')
  }, [setValue, nameId])

  const [isLoading, setIsLoading] = useState(false)
  const loadingTextDefault = 'カード情報を確認中...'
  const [loadingText, setLoadingText] = useState(loadingTextDefault)

  const handleOnChange = async (event: StripePaymentElementChangeEvent) => {
    if (!stripe || !elements) {
      return
    }

    if (event.complete) {
      setIsLoading(true)
      elements.submit()

      // 5秒後にローディングテキストを変更（5秒以内に通信が完了した場合はタイマーを解除）
      const timer = setTimeout(() => {
        setLoadingText('確認が終わらない場合は、お手数ですが一度前の画面に戻って再度お試しください。')
      }, 5000)

      /**
       * clientSecretの取得
       * @memo 一度使用されたclientSecretは使用できないため、処理内で都度取得する
       */
      const clientSecret = await fetch('/api/stripe/setupIntents/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          automatic_payment_methods: {
            enabled: true,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => data.client_secret)

      // 入力状態は保持して初期化
      setValue(nameId, '')
      setValue('stripePaymentMethod', '')

      await stripe
        .confirmSetup({
          elements,
          clientSecret,
          confirmParams: {
            // 銀行決済など中間リダイレクトが必要な場合があるため必須
            return_url: window.location.href,
            payment_method_data: {
              billing_details: {
                address: {
                  country: 'JP',
                },
              },
            },
          },
          // Uncomment below if you only want redirect for redirect-based payments
          redirect: 'if_required',
        })
        .then((result) => {
          // レスポンスがエラーの場合はエラーを表示
          if (result.error) throw result.error

          // レスポンスが成功の場合はセット
          setValue(nameId, result.setupIntent.id)
          setValue('stripePaymentMethod', result.setupIntent.payment_method)

          return result.setupIntent.payment_method
        })
        .then(async (paymentMethod) => {
          // レスポンスが成功の場合はカードの詳細を取得
          return await fetch('/api/stripe/paymentMethods/retrieve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: paymentMethod,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              // カードの下4桁を保存
              setValue('stripeCardNumber', data.card.last4)
            })
            .catch((error) => {
              // エラーをthrow
              throw error
            })
        })
        .catch((error) => {
          console.error('error', error)
          // 入力状態は保持して初期化
          setValue(nameId, '')
          setValue('stripePaymentMethod', '')

          // エラーを表示
          setError(nameId, { type: 'manual', message: '入力されたカードは使用できません' })
        })
        .finally(() => {
          trigger(nameId)
          trigger('stripePaymentMethod')
          setIsLoading(false)
          clearTimeout(timer)
          setLoadingText(loadingTextDefault)
        })
    }
  }

  const options: StripePaymentElementOptions = {
    fields: {
      billingDetails: {
        address: {
          country: 'never',
        },
      },
    },
  }

  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} contentWidth={contentWidth}>
      <div className="w-full">
        <PaymentElement options={options} onChange={handleOnChange} />
      </div>
      <Loading show={isLoading}>
        <p className="mt-4 text-white">{loadingText}</p>
      </Loading>
    </InputBox>
  )
}
