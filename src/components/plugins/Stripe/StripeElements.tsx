/**
 * StripeのElementsコンポーネントをラップしたコンポーネント
 * @module StripeElements
 */
import React, { PropsWithChildren } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { STRIPE_PUBLIC_KEY } from '@/config'

/**
 * stripeの設定
 * @see https://stripe.com/docs/payments/quickstart?client=react&lang=node
 */
const stripePromise = STRIPE_PUBLIC_KEY && loadStripe(STRIPE_PUBLIC_KEY)

/**
 * StripeのElementsコンポーネントをラップしたコンポーネントのprops
 */
export interface StripeElementsProps {
  /**
   * Intentsの種類
   */
  intentType: 'payment' | 'setup'
}

/**
 * StripeのElementsコンポーネントをラップしたコンポーネント
 */
export const StripeElements = ({ children, ...props }: PropsWithChildren<StripeElementsProps>) => {
  const { intentType } = props

  return stripePromise ? (
    <Elements
      options={{
        mode: intentType,
        currency: 'jpy',
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#1d73e9',
            colorText: '#1c2023',
            colorDanger: '#ff4d62',
            fontFamily: 'Noto Sans JP, Helvetica Neue, Helvetica, Hiragino Sans, Hiragino Kaku Gothic ProN, system-ui, Arial, Meiryo,Yu Gothic, sans-serif',
            fontSizeBase: '1rem',
            spacingUnit: '4px',
            borderRadius: '0.375rem',
          },
          rules: {
            '.Input': {
              padding: '13px 14px',
              borderColor: '#cbd6e0',
              borderStyle: 'solid',
              borderWidth: '1px',
            },
            '.Input:focus': {
              outline: '2px solid #1d73e9',
              outlineOffset: '-2px',
            },
            '.Input--invalid': {
              outline: '2px solid #ff4d62',
              outlineOffset: '-2px',
              backgroundColor: '#fee',
              color: '#1c2023',
            },
            '.Input::placeholder': {
              color: '#cbd6e0',
            },
            '.Label': {
              fontSize: '0.875rem',
              fontWeight: 'bold',
            },
          },
        },
      }}
      stripe={stripePromise}
    >
      {children}
    </Elements>
  ) : (
    <></>
  )
}
