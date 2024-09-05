/**
 * テキストエリア非盛業コンポーネント
 * @module Textarea
 */
import React, { forwardRef } from 'react'

/**
 * テキストエリアコンポーネントのプロパティ
 * @typedef {Object} TextareaProps
 * @property {React.TextareaHTMLAttributes<HTMLTextAreaElement>} - テキストエリアタグのHTML属性
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * テキストエリア非制御コンポーネント
 * @param {TextareaProps} props - テキストエリアコンポーネントのプロパティ
 * @returns {JSX.Element} - テキストエリアコンポーネント
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className = undefined, ...textareaProps } = props
  const classNameProps = className ? className : ''
  return (
    <>
      <textarea ref={ref} {...textareaProps} className={`${classNameProps} block w-full rounded-md border border-gray-500 px-3 py-2 text-sm md:px-5  md:py-3 md:text-base`} />
    </>
  )
})

Textarea.displayName = 'Textarea'
