import React from 'react'
import { render } from '@testing-library/react'
import { StripePaymentIntent, PaymentIntentProps } from './StripePaymentIntent'

describe('StripePaymentIntent', () => {
  it('正しくレンダリングされること', () => {
    const props: PaymentIntentProps = {
      nameId: 'nameId',
      label: 'label',
    }

    expect(StripePaymentIntent)
  })
})
