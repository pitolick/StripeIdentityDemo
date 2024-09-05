import React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from './Textarea'

describe('Textareaコンポーネント', () => {
  it('正しくレンダリングされていること', () => {
    const { container } = render(<Textarea />)
    expect(container).toMatchSnapshot()
  })

  it('classNameプロパティが指定された場合、正しく適用されること', () => {
    const { container } = render(<Textarea className="text-red" />)
    expect(container).toMatchSnapshot()
  })
})
