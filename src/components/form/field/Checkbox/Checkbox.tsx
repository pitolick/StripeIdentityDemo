/**
 * チェックボックス非制御コンポーネント
 * @module Checkbox
 */
import React, { forwardRef } from 'react'

/**
 * チェックボックスコンポーネントのプロパティ
 * @typedef {Object} CheckboxProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} - チェックボックスタグのHTML属性
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * class名：チェックボックス
   */
  checkboxClassName?: React.HTMLAttributes<HTMLInputElement>['className']
  /**
   * class名：ラベル
   */
  labelClassName?: React.HTMLAttributes<HTMLLabelElement>['className']
  /**
   * ラベルコンテンツ
   */
  labelContents?: React.ReactNode
  /**
   * ラベル（確認画面表示用）
   */
  label?: string
  /**
   * ラッパー
   */
  wrapper?: boolean
}

/**
 * チェックボックス非制御コンポーネント
 * @param {CheckboxProps} props - チェックボックスコンポーネントのプロパティ
 * @returns {JSX.Element} - チェックボックスコンポーネント
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { checkboxClassName = undefined, labelClassName = undefined, labelContents = undefined, wrapper = true, ...checkboxProps } = props
  const checkboxClassNameProps = checkboxClassName ? checkboxClassName : ''
  const labelClassNameProps = labelClassName ? labelClassName : ''

  // ラッパーコンポーネント
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // wrapperがtrueの場合はlabelをfalseの場合はフラグメントを返す
    return wrapper ? <label className={`${labelClassNameProps} cursor-pointer`}>{children}</label> : <>{children}</>
  }

  return (
    <>
      <Wrapper>
        <input ref={ref} {...checkboxProps} type="checkbox" className={`rounded focus:ring-transparent ${checkboxClassNameProps}`} />
        {labelContents && <span className="text-sm md:text-base">{labelContents}</span>}
      </Wrapper>
    </>
  )
})

Checkbox.displayName = 'Checkbox'
