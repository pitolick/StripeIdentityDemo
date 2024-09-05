/**
 * テキストエリア制御コンポーネント（react-hook-form）
 * @module TextareaControl
 */
import React, { forwardRef } from 'react'
import { Textarea, TextareaProps } from './Textarea'
import { InputBox, InputBoxProps } from '@/components/form/parts'

/**
 * テキストエリアコンポーネントのプロパティ
 * @memo バリデーションスキーマ（zod）は各入力子コンポーネント内でexportしformコンポーネント内でresolverに指定する
 * @typedef {Object} TextareaControlProps
 */
export interface TextareaControlProps extends TextareaProps, Omit<InputBoxProps, 'children'> {}

/**
 * テキストエリア制御コンポーネント（react-hook-form）
 * @param {TextareaControlProps} props - テキストエリアコンポーネントのプロパティ
 * @returns {JSX.Element} - テキストエリアコンポーネント
 */
export const TextareaControl = forwardRef<HTMLTextAreaElement, TextareaControlProps>((props, ref) => {
  const { nameId, label, note, required = undefined, className, error, contentWidth, ...textareaProps } = props
  const classNameProps = className ? className : ''
  // エラー時のclass名
  const errorClass = error ? `bg-red-pale outline outline-red outline-2 -outline-offset-2` : ''

  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} contentWidth={contentWidth}>
      {/* テキストエリア */}
      <Textarea id={nameId} ref={ref} {...textareaProps} className={`${errorClass} ${classNameProps}`} />
    </InputBox>
  )
})

TextareaControl.displayName = 'TextareaControl'
