import React from 'react'
import { render } from '@testing-library/react'
import { HeadingLine } from './HeadingLine'

describe('HeadingLine', () => {
  it('子要素が正しく表示されること', () => {
    const { container } = render(<HeadingLine>見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h1タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h1">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h2タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h2">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h3タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h3">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h4タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h4">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h5タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h5">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h6タグが正しく設定されること', () => {
    const { container } = render(<HeadingLine tag="h6">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('class名が正しく設定されること', () => {
    const { container } = render(<HeadingLine className="text-red">見出し</HeadingLine>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
