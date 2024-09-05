import React from 'react'
import { render } from '@testing-library/react'
import { Select, SelectProps } from './Select'

describe('Select コンポーネント', () => {
  const options: React.OptionHTMLAttributes<HTMLOptionElement>[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const defaultProps: SelectProps = {
    options,
    defaultValue: 'option1',
  }

  it('正しくレンダリングされること', () => {
    const { container } = render(<Select {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('classNameプロパティが指定された場合、正しく適用されること', () => {
    const { container } = render(<Select {...defaultProps} className="text-red" />)
    expect(container).toMatchSnapshot()
  })
})
