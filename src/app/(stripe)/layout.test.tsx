import React from 'react'
import { render } from '@testing-library/react'
import FormStripeLayout from './layout'

// StripeContextProvider, MicroCMSContextProviderをモック化する
jest.mock('@/features/context', () => ({
  StripeContextProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="StripeContextProvider">{children}</div>,
}))

describe('FormStripeLayout', () => {
  it('子コンポーネントを正しくレンダリングすること', () => {
    const { container } = render(
      <FormStripeLayout>
        <div>子コンポーネント</div>
      </FormStripeLayout>,
    )

    expect(container).toMatchSnapshot()
  })
})
