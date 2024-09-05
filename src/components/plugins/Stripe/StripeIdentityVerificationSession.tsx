/**
 * StripeのIdentityVerificationSessionコンポーネントをラップしたコンポーネント
 * @module StripeIdentityVerificationSession
 */
'use client'
import React, { PropsWithChildren, useState, useEffect } from 'react'
import { InputProps } from '@/components/form/field'
import { InputBox, InputBoxProps } from '@/components/form/parts'
import { loadStripe } from '@stripe/stripe-js'
import { STRIPE_PUBLIC_KEY } from '@/config'
import { Button } from '@/components/form/field'
import { useFormContext } from 'react-hook-form'

/**
 * StripeのIdentityVerificationSessionコンポーネントをラップしたコンポーネントのprops
 */
export interface StripeIdentityVerificationSessionProps extends Omit<InputProps, 'options'>, Omit<InputBoxProps, 'children'> {}

/**
 * StripeのIdentityVerificationSessionコンポーネントをラップしたコンポーネント
 */
export const StripeIdentityVerificationSession = ({ children, ...props }: PropsWithChildren<StripeIdentityVerificationSessionProps>) => {
  const { nameId, label, note, required = undefined, contentWidth, error } = props

  const { setValue, setError, trigger } = useFormContext()

  // 本人確認書類提出フラグ
  const [isSubmitted, setIsSubmitted] = useState(false)
  // 本人確認ID
  const [identityId, setIdentityId] = useState<string | null>(null)

  const handleClick = async () => {
    /**
     * stripeの設定
     * @see https://stripe.com/docs/payments/quickstart?client=react&lang=node
     */
    const stripe = STRIPE_PUBLIC_KEY && (await loadStripe(STRIPE_PUBLIC_KEY))

    if (!stripe) {
      return
    }

    const response = await fetch('/api/stripe/identity/verificationSession/create', {
      method: 'POST',
      body: JSON.stringify({
        type: 'document',
        options: {
          document: {
            require_matching_selfie: true,
          },
        },
      }),
    })
    const session = await response.json()

    // Show the verification modal.
    const { error } = await stripe.verifyIdentity(session.client_secret)

    if (error) {
      console.log('[error]', error)
    } else {
      setIsSubmitted(true)
      setIdentityId(session.id)
      setValue(nameId, session.id)
    }

    console.log('StripeIdentity', session)
  }

  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} contentWidth={contentWidth}>
      {!isSubmitted ? (
        <div className="max-w-md">
          <Button iconRight=">" type="button" onClick={handleClick}>
            <span className="text-lg md:py-2 md:text-2xl">本人確認書類を提出する</span>
          </Button>
        </div>
      ) : (
        <div>
          <p>本人確認書類の提出が完了しました。</p>
          <p>本人確認ID: {identityId}</p>
        </div>
      )}
    </InputBox>
  )
}
