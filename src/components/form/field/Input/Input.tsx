/**
 * 入力項目非制御コンポーネント
 * @module Input
 */
import React, { forwardRef } from 'react'

/**
 * 入力項目コンポーネントのプロパティ
 * @typedef {Object} InputProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} - 入力項目タグのHTML属性
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * 入力項目非制御コンポーネント
 * @param {InputProps} props - 入力項目コンポーネントのプロパティ
 * @returns {JSX.Element} - 入力項目コンポーネント
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className = undefined, ...inputProps } = props
  const classNameProps = className ? className : ''
  return (
    <>
      <input
        ref={ref}
        {...inputProps}
        className={`${classNameProps} block w-full rounded-md border border-gray-500 px-3 py-2 text-sm file:mr-4 file:border-0 file:bg-gray-300 file:px-4 file:py-3 md:px-5 md:py-3 md:text-base`}
      />
    </>
  )
})

Input.displayName = 'Input'
