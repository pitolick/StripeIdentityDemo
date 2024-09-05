import React from 'react'
import { render } from '@testing-library/react'
import { HeadingCaption } from './HeadingCaption'

describe('HeadingCaptionコンポーネント', () => {
  it('子要素が正しく表示されること', () => {
    const { container } = render(<HeadingCaption>見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h1タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h1">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h2タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h2">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h3タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h3">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h4タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h4">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h5タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h5">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h6タグが正しく設定されること', () => {
    const { container } = render(<HeadingCaption tag="h6">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('class名が正しく設定されること', () => {
    const { container } = render(<HeadingCaption className="text-red">見出し</HeadingCaption>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
