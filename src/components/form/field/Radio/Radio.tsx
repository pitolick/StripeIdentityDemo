/**
 * ラジオボタン非制御コンポーネント
 * @module Radio
 */
import React, { forwardRef } from 'react'

/**
 * ラジオボタンコンポーネントのプロパティ
 * @typedef {Object} RadioProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} - ラジオボタンタグのHTML属性
 */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * class名：ラジオボタン
   */
  radioClassName?: React.HTMLAttributes<HTMLInputElement>['className']
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
 * ラジオボタン非制御コンポーネント
 * @param {RadioProps} props - ラジオボタンコンポーネントのプロパティ
 * @returns {JSX.Element} - ラジオボタンコンポーネント
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { radioClassName = undefined, labelClassName = undefined, labelContents = undefined, wrapper = true, ...radioProps } = props
  const radioClassNameProps = radioClassName ? radioClassName : ''
  const labelClassNameProps = labelClassName ? labelClassName : ''

  // ラッパーコンポーネント
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // wrapperがtrueの場合はlabelをfalseの場合はフラグメントを返す
    return wrapper ? <label className={`${labelClassNameProps} cursor-pointer`}>{children}</label> : <>{children}</>
  }

  return (
    <>
      <Wrapper>
        <input ref={ref} {...radioProps} type="radio" className={`focus:ring-transparent ${radioClassNameProps}`} />
        {labelContents && <span className="text-sm md:text-base">{labelContents}</span>}
      </Wrapper>
    </>
  )
})

Radio.displayName = 'Radio'
