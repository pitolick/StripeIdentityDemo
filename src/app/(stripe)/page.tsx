/**
 * 完結フォームの個人情報入力画面
 */
import React from 'react'
import { Metadata } from 'next'
import { FormStripeInputClient } from './_components/FormStripeInputClient'

export const metadata: Metadata = {
  title: 'Stripe Demo フォーム',
}

const FormStripe = () => {
  return (
    <div className="container max-w-5xl pb-10 pt-5 md:pb-32 md:pt-14">
      <FormStripeInputClient />
    </div>
  )
}

export default FormStripe
