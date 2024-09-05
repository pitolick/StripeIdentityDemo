import React from 'react'
import { render } from '@testing-library/react'
import { HeadingRuby } from './HeadingRuby'

describe('HeadingRuby', () => {
  it('子要素が正しく表示されること', () => {
    const { container } = render(<HeadingRuby ruby="見出し">見出し</HeadingRuby>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h1タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h1">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h2タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h2">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h3タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h3">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h4タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h4">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h5タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h5">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('h6タグが正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" tag="h6">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('class名が正しく設定されること', () => {
    const { container } = render(
      <HeadingRuby ruby="見出し" className="text-red">
        見出し
      </HeadingRuby>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
