import React from 'react'
import { render } from '@testing-library/react'
import { Note, NoteProps } from './Note'

describe('Noteコンポーネント', () => {
  const defaultProps: NoteProps = {
    list: ['注釈1', '注釈2', '注釈3'],
  }

  it('正しくレンダリングされること', () => {
    const { container } = render(<Note {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('listが空の場合、空の要素が返されること', () => {
    const { container } = render(<Note list={[]} />)
    expect(container).toMatchSnapshot()
  })

  it('tagが"ol"の場合、正しいクラスが設定されること', () => {
    const { container } = render(<Note {...defaultProps} tag="ol" />)
    expect(container).toMatchSnapshot()
  })

  it('tagが"ul"の場合、正しいクラスが設定されること', () => {
    const { container } = render(<Note {...defaultProps} tag="ul" />)
    expect(container).toMatchSnapshot()
  })
})
