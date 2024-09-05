/**
 * セレクトボックス制御コンポーネント（react-hook-form）
 * @module SelectControl
 */
import React, { forwardRef } from 'react'
import { Select, SelectProps } from './Select'
import { InputBox, InputBoxProps } from '@/components/form/parts'

/**
 * セレクトボックスコンポーネントのプロパティ
 * @memo バリデーションスキーマ（zod）は各入力子コンポーネント内でexportしformコンポーネント内でresolverに指定する
 * @typedef {Object} SelectControlProps
 */
export interface SelectControlProps extends SelectProps, Omit<InputBoxProps, 'children'> {}

/**
 * セレクトボックス制御コンポーネント（react-hook-form）
 * @param {SelectControlProps} props - セレクトボックスコンポーネントのプロパティ
 * @returns {JSX.Element} - セレクトボックスコンポーネント
 */
export const SelectControl = forwardRef<HTMLSelectElement, SelectControlProps>((props, ref) => {
  const { nameId, label, defaultValue, note, required = undefined, options, className, error, contentWidth, ...selectProps } = props
  const classNameProps = className ? className : ''
  // エラー時のclass名
  const errorClass = error ? `bg-red-pale outline outline-red outline-2 -outline-offset-2` : ''
  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} contentWidth={contentWidth}>
      <Select ref={ref} id={nameId} options={options} defaultValue={defaultValue} className={`${classNameProps} ${errorClass}`} {...selectProps} />
    </InputBox>
  )
})

SelectControl.displayName = 'SelectControl'
