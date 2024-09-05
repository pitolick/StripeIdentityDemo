import React from 'react'
import { render } from '@testing-library/react'
import { InputBox, InputBoxProps } from './InputBox'

describe('InputBox', () => {
  const defaultProps: InputBoxProps = {
    nameId: 'test',
    label: 'テスト',
    note: { list: ['注釈'] },
    required: true,
    error: { type: 'test', message: 'エラーメッセージ' },
    children: <input type="text" />,
    afterChildren: <button>ボタン</button>,
    styleType: 'input',
    contentWidth: 'full',
  }

  it('正しくレンダリングされること', () => {
    const { container } = render(<InputBox {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleTypeがinputの場合、正しくレンダリングされること', () => {
    const { container } = render(<InputBox {...defaultProps} styleType="input" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleTypeがconfirmの場合、正しくレンダリングされること', () => {
    const { container } = render(<InputBox {...defaultProps} styleType="confirm" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('requiredがfalseの場合、必須任意の表示が非表示になること', () => {
    const { container } = render(<InputBox {...defaultProps} required={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('contentWidthがautoの場合、コンテンツ幅がautoになること', () => {
    const { container } = render(<InputBox {...defaultProps} contentWidth="auto" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('contentWidthが未入力の場合、コンテンツ幅がデフォルト値になること', () => {
    const { container } = render(<InputBox {...defaultProps} contentWidth={undefined} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('labelが未入力の場合、ラベルが非表示になること', () => {
    const { container } = render(<InputBox {...defaultProps} label={undefined} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('noteが未入力の場合、注釈が非表示になること', () => {
    const { container } = render(<InputBox {...defaultProps} note={undefined} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('errorが未入力の場合、エラーが非表示になること', () => {
    const { container } = render(<InputBox {...defaultProps} error={undefined} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
