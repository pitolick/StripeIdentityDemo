import React from 'react'
import { render } from '@testing-library/react'
import { TextareaControl, TextareaControlProps } from './TextareaControl'

describe('TextareaControl', () => {
  it('正しくレンダリングされること', () => {
    const defaultProps: TextareaControlProps = {
      nameId: 'textarea',
      label: 'テキストエリア',
      note: { list: ['テキストエリアの説明'] },
      required: true,
      className: 'custom-class',
      error: { type: 'test' },
      contentWidth: 'full',
    }

    const { container } = render(<TextareaControl {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('デフォルト値が正しく設定されること', () => {
    const defaultProps: TextareaControlProps = {
      nameId: 'textarea',
    }

    const { container } = render(<TextareaControl {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
