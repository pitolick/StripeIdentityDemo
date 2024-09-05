import React from 'react'
import { render } from '@testing-library/react'
import { InputControl } from './InputControl'

describe('InputControl', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(
      <InputControl
        nameId="inputName"
        label="名前"
        note={{ list: ['必須項目です'] }}
        required
        className="text-red"
        error={{ type: 'test' }}
        afterChildren={<span>After Children</span>}
        contentWidth="full"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('デフォルト値が正しく設定されること', () => {
    const { container } = render(<InputControl nameId="inputName" />)
    expect(container).toMatchSnapshot()
  })
})
