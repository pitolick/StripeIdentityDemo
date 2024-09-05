import React from 'react'
import { render } from '@testing-library/react'
import { Required } from './Required'

describe('Requiredコンポーネント', () => {
  it('必須項目の場合、"必須"と表示されること', () => {
    const { container } = render(<Required required={true} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('任意項目の場合、"任意"と表示されること', () => {
    const { container } = render(<Required required={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('requiredが未入力の場合、"必須"と表示されること', () => {
    const { container } = render(<Required required={undefined} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
