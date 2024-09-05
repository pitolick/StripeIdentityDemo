/**
 * セレクトボックス非制御コンポーネント
 * @module Select
 */
import React, { forwardRef } from 'react'

/**
 * セレクトボックスコンポーネントのプロパティ
 * @typedef {Object} SelectProps
 * @property {string} options - セレクトボックスに表示するテキスト
 * @property {boolean} full - ブロック要素化
 * @property {React.SelectHTMLAttributes<HTMLSelectElement>} - セレクトボックスタグのHTML属性
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * 子要素
   */
  options: React.OptionHTMLAttributes<HTMLOptionElement>[]
  /**
   * 初期値
   */
  defaultValue?: string
}

/**
 * セレクトボックス非制御コンポーネント
 * @param {SelectProps} props - セレクトボックスコンポーネントのプロパティ
 * @returns {JSX.Element} - セレクトボックスコンポーネント
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { options, className = undefined, defaultValue, ...selectProps } = props
  const classNameProps = className ? className : ''
  return (
    <>
      <select
        ref={ref}
        defaultValue={defaultValue}
        {...selectProps}
        className={`${classNameProps} block w-full rounded-md border-gray-500 py-2 pl-3 pr-7 text-sm md:py-3 md:pl-5 md:pr-9 md:text-base`}
      >
        {options.map((option, index) => {
          const { label, ...optionAttr } = option
          return (
            <option key={`${option.value}_${index}`} label={label} {...optionAttr}>
              {label}
            </option>
          )
        })}
      </select>
    </>
  )
})

Select.displayName = 'Select'
