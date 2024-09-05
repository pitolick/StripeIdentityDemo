import React from 'react'
import { render } from '@testing-library/react'
import FormStripe, { metadata } from './page'

// HeadingLineをモック化
jest.mock('@/components/elements', () => ({
  HeadingLine: () => <div>HeadingLine</div>,
}))

// FormStripeInputClientをモック化
jest.mock('./_components/FormStripeInputClient', () => ({
  FormStripeInputClient: () => <div>FormStripeInputClient</div>,
}))

// DOMAIN_PRODをモック化
jest.mock('@/config', () => ({
  DOMAIN_PROD: 'example.com',
}))

describe('FormStripeコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<FormStripe />)
    expect(container).toMatchSnapshot()
  })

  it('metadataが正しく設定されていること', () => {
    expect(metadata).toHaveProperty('title')
  })
})
