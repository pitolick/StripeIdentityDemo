import React from 'react'
import { render } from '@testing-library/react'
import DefaultLayout, { NotFoundLayout } from './not-found'

// Header・Footerをモック化
jest.mock('@/components/parts', () => ({
  Header: () => <></>,
  Footer: () => <></>,
}))

// HeadingLineをモック化
jest.mock('@/components/elements', () => ({
  HeadingLine: () => <></>,
}))

describe('DefaultLayoutコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<DefaultLayout />)
    expect(container).toMatchSnapshot()
  })
})

describe('NotFoundLayoutコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<NotFoundLayout />)
    expect(container).toMatchSnapshot()
  })
})
