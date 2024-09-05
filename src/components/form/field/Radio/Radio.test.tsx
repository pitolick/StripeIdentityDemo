import React from 'react'
import { render } from '@testing-library/react'
import { Radio } from './Radio'

describe('Radio', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<Radio id="my-radio" label="ラジオ" labelContents="ラベルコンテンツ" radioClassName="custom-radio" labelClassName="custom-label" wrapper={true} />)
    expect(container).toMatchSnapshot()
  })

  it('デフォルト値が正しく設定されること', () => {
    const { container } = render(<Radio id="my-radio" />)
    expect(container).toMatchSnapshot()
  })
})
