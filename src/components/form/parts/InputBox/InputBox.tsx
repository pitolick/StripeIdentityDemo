/**
 * 入力コンポーネントのレイアウトを定義する
 * @module InputBox
 */
import React from 'react'
import { Required } from '@/components/form/parts'
import { Note, NoteProps } from '@/components/elements'
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

/**
 * 入力コンポーネントのプロパティ
 * @memo バリデーションスキーマ（zod）は各入力子コンポーネント内でexportしformコンポーネント内でresolverに指定する
 * @typedef {Object} InputBoxProps
 */
type NestedError = {
  [key: string]: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | NestedError
}
export interface InputBoxProps {
  /**
   * フォームの名前（ID）
   */
  nameId: string
  /**
   * フォームのラベル
   */
  label?: string
  /**
   * 注釈
   */
  note?: NoteProps
  /**
   * 必須任意の表示
   */
  required?: boolean
  /**
   * useFormから取得できるエラーオブジェクト
   */
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | NestedError
  /**
   * 子要素
   */
  children: React.ReactNode
  /**
   * 子要素の後ろに表示する要素
   */
  afterChildren?: React.ReactNode
  /**
   * 表示スタイルタイプ
   */
  styleType?: 'input' | 'confirm'
  /**
   * コンテンツ幅
   */
  contentWidth?: 'full' | 'auto'
}

/**
 * 入力コンポーネントのレイアウトを定義する
 * @param {InputBoxProps} props - 入力コンポーネントのプロパティ
 * @returns {React.FC} - 入力コンポーネント
 */
export const InputBox: React.FC<InputBoxProps> = (props) => {
  const { nameId, label, note, required, error, children, afterChildren, styleType, contentWidth = 'auto' } = props
  return (
    <div className={`${contentWidth === 'full' && 'w-full flex-auto'} space-y-2 ${styleType === 'confirm' && 'border-b border-b-gray-700'}`}>
      {(required !== undefined || label) && (
        <div className="flex items-center justify-start gap-x-2">
          {/* requiredがundefinedの時は非表示 */}
          {required !== undefined && <Required required={required} />}
          {/* labelが指定されていないときは非表示 */}
          {label && (
            <label htmlFor={nameId} className="block text-sm font-bold">
              {label}
            </label>
          )}
        </div>
      )}
      <div className={`space-y-2 ${styleType === 'confirm' && 'px-2 pb-3 pt-2'}`}>
        <div className={`flex w-full items-center justify-start gap-x-3`}>
          {children}
          {afterChildren}
        </div>
        {/* 注釈 */}
        {note && <Note {...note} />}
        {/* エラーメッセージ */}
        {error && (
          <p className="text-sm text-red">
            <>{error?.message}</>
          </p>
        )}
      </div>
    </div>
  )
}
