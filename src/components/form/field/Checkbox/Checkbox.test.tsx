import React from 'react'
import { render } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(
      <Checkbox id="my-checkbox" label="チェックボックス" labelContents="ラベルコンテンツ" checkboxClassName="custom-checkbox" labelClassName="custom-label" wrapper={true} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('デフォルト値が正しく設定されること', () => {
    const { container } = render(<Checkbox id="my-checkbox" />)
    expect(container).toMatchSnapshot()
  })
})
