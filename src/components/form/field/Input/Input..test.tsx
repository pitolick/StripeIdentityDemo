import React from 'react'
import { render } from '@testing-library/react'
import { Input } from './Input'

describe('Input コンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })

  it('classNameプロパティが指定された場合、正しく適用されること', () => {
    const { container } = render(<Input className="text-red" />)
    expect(container).toMatchSnapshot()
  })
})
