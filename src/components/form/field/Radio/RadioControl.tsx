/**
 * ラジオボタン制御コンポーネント（react-hook-form）
 * @module RadioControl
 * @todo カードスタイルのときにTabでフォーカスした場合にアウトラインがでないのを修正
 */
import React, { forwardRef } from 'react'
import { Radio, RadioProps } from './Radio'
import { InputBox, InputBoxProps } from '@/components/form/parts'

/**
 * ラジオボタンコンポーネントのプロパティ
 * @typedef {Object} RadioControlProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} - ラジオボタンタグのHTML属性
 */

export interface RadioControlProps extends React.InputHTMLAttributes<HTMLInputElement>, Omit<InputBoxProps, 'children'> {
  /**
   * リスト
   */
  lists: RadioProps[]
  /**
   * ラベルのタイプ
   */
  labelType?: 'default'
  /**
   * 並び方
   */
  direction?: 'row' | 'col'
  /**
   * ラジオボタンの位置
   */
  radioPosition?: 'center' | 'top' | 'hidden'
  /**
   * ラジオボタンの色
   */
  radioColor?: 'black' | 'red' | 'blue' | 'gray'
}

/**
 * ラジオボタン制御コンポーネント（react-hook-form）
 * @param {RadioControlProps} props - ラジオボタンコンポーネントのプロパティ
 * @returns {JSX.Element} ラジオボタンコンポーネント
 */
export const RadioControl = forwardRef<HTMLInputElement, RadioControlProps>((props, ref) => {
  const { lists, nameId, label, note, required = undefined, error, labelType = 'default', direction = 'row', radioPosition = 'center', radioColor = 'blue', contentWidth, ...radioControlProps } = props

  const radioList = lists.map((list, index) => {
    const { labelContents, radioClassName, labelClassName, ...radioProps } = list
    // class名
    let radioClassNameProps = `${radioClassName ? radioClassName : ''}`
    let labelClassNameProps = `${labelClassName ? labelClassName : ''} inline-block relative pl-5`

    // ラジオボタンの位置
    switch (radioPosition) {
      case 'center':
        radioClassNameProps = radioClassNameProps + ' absolute margin-auto top-1/2 transform -translate-y-1/2'
        break
      case 'top':
        radioClassNameProps = radioClassNameProps + ' absolute margin-auto'
        // ラベルのタイプによって分岐
        switch (labelType) {
          case 'default':
            radioClassNameProps = radioClassNameProps + ' top-1'
            break
        }
        break
      case 'hidden':
        radioClassNameProps = 'hidden'
        break
    }

    // エラー時のclass名
    let errorLabelClass = ''
    let errorRadioClass = ''

    // ラベルのタイプ
    switch (labelType) {
      case 'default':
        radioClassNameProps = radioClassNameProps + ' left-0'
        errorLabelClass = error ? ' text-red' : ''
        errorRadioClass = error ? ' bg-red-pale text-red border-red' : ''
        break
    }

    // ラジオボタンの色
    switch (radioColor) {
      case 'black':
        radioClassNameProps = radioClassNameProps + ' checked:text-black focus:text-black'
        break
      case 'red':
        radioClassNameProps = radioClassNameProps + ' checked:text-red focus:text-red'
        break
      case 'blue':
        radioClassNameProps = radioClassNameProps + ' checked:text-blue focus:text-blue'
        break
      case 'gray':
        radioClassNameProps = radioClassNameProps + ' checked:text-gray-700 focus:text-gray-700'
        break
    }

    // カードコンポーネント
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      return <>{children}</>
    }

    return (
      <div key={`${nameId}_${index}`} className={`${direction === 'col' && 'w-full'} ${direction === 'row' && contentWidth === 'full' && 'flex-auto'}`}>
        <Wrapper>
          <Radio
            ref={ref}
            labelContents={labelContents}
            radioClassName={`${radioClassNameProps} ${errorRadioClass}`}
            labelClassName={`${labelClassNameProps} ${errorLabelClass}`}
            wrapper={true}
            {...radioProps}
            {...radioControlProps}
          />
        </Wrapper>
      </div>
    )
  })

  return (
    <InputBox nameId={nameId} label={label} note={note} required={required} error={error} contentWidth={contentWidth}>
      {/* ラジオボタン */}
      <div className={`${'flex-' + direction} ${contentWidth === 'full' && 'w-full'} flex flex-wrap gap-3`}>{radioList}</div>
    </InputBox>
  )
})

RadioControl.displayName = 'RadioControl'
