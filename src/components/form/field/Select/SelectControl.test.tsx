import React from 'react'
import { render } from '@testing-library/react'
import { SelectControl, SelectControlProps } from './SelectControl'

describe('SelectControl', () => {
  it('正しくレンダリングされること', () => {
    const props: SelectControlProps = {
      nameId: 'mySelect',
      label: 'マイセレクト',
      defaultValue: 'option1',
      note: { list: ['オプションを選択してください'] },
      required: true,
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
      className: 'my-select',
      contentWidth: 'full',
      error: { type: 'test' },
    }

    const { container } = render(<SelectControl {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('デフォルト値が正しく設定されること', () => {
    const props: SelectControlProps = {
      nameId: 'mySelect',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    }

    const { container } = render(<SelectControl {...props} />)
    expect(container).toMatchSnapshot()
  })
})
