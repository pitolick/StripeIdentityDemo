import React from 'react'
import { render } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinnerコンポーネント', () => {
  it('デフォルトのサイズで正しくレンダリングされること', () => {
    const { container } = render(<Spinner />)
    expect(container).toMatchSnapshot()
  })

  it('サイズがsmの場合、正しくレンダリングされること', () => {
    const { container } = render(<Spinner size="sm" />)
    expect(container).toMatchSnapshot()
  })

  it('サイズがmdの場合、正しくレンダリングされること', () => {
    const { container } = render(<Spinner size="md" />)
    expect(container).toMatchSnapshot()
  })

  it('サイズがlgの場合、正しくレンダリングされること', () => {
    const { container } = render(<Spinner size="lg" />)
    expect(container).toMatchSnapshot()
  })
})
