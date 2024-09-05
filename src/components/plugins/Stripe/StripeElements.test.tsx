import React from 'react'
import { render } from '@testing-library/react'
import { StripeElements } from './StripeElements'

describe('StripeElements', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(
      <StripeElements intentType="payment">
        <div>テストコンテンツ</div>
      </StripeElements>,
    )

    expect(container).toMatchSnapshot()
  })
})
