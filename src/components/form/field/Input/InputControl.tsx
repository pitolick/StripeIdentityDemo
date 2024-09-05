/**
 * 入力項目制御コンポーネント（react-hook-form）
 * @module InputControl
 */
import React, { forwardRef } from 'react'
import { Input, InputProps } from './Input'
import { InputBox, InputBoxProps } from '@/components/form/parts'

/**
 * 入力項目コンポーネントのプロパティ
 * @memo バリデーションスキーマ（zod）は各入力子コンポーネント内でexportしformコンポーネント内でresolverに指定する
 * @typedef {Object} InputControlProps
 */

export interface InputControlProps extends InputProps, Omit<InputBoxProps, 'children'> {}

/**
 * 入力項目制御コンポーネント（react-hook-form）
 * @param {InputControlProps} props - 入力項目コンポーネントのプロパティ
 * @returns {JSX.Element} - 入力項目コンポーネント
 */
export const InputControl = forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
  const { nameId, label, note, required = undefined, className, error, afterChildren, contentWidth, ...inputProps } = props
  const classNameProps = className ? className : ''
  // エラー時のclass名
  const errorClass = error ? `bg-red-pale outline outline-red outline-2 -outline-offset-2` : ''
  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} afterChildren={afterChildren} contentWidth={contentWidth}>
      {/* 入力項目 */}
      <Input id={nameId} ref={ref} className={`${classNameProps} ${errorClass}`} {...inputProps} />
    </InputBox>
  )
})

InputControl.displayName = 'InputControl'
