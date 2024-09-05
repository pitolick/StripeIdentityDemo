/**
 * ボタン風のリンク
 * @module LinkButton
 */
import React from 'react'
import Link, { LinkProps } from 'next/link'

/**
 * ボタン風のリンクコンポーネントのプロパティ
 * @typedef {Object} LinkButtonProps
 * @property {string} children - ボタンに表示するテキスト
 * @property {boolean} full - ブロックボタンにするか
 * @property {LinkProps} linkProps - Next.jsのLinkコンポーネントのプロパティ
 * @property {React.AnchorHTMLAttributes<HTMLAnchorElement>} - アンカータグのHTML属性（hrefが競合するためLinkPropsを優先）
 */
interface LinkButtonProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * 子要素
   */
  children: React.ReactNode
  /**
   * 色（デフォルトカラーはコンポーネント側で指定）
   */
  color?: 'black' | 'red' | 'blue' | 'gray'
  /**
   * ボタンのスタイル
   */
  buttonStyle?: 'solid' | 'outline'
  /**
   * trueでブロック要素化
   */
  full?: boolean
  /**
   * アイコンを設置（左側）
   * `arrow`で組み込みの矢印を表示
   */
  iconLeft?: React.ReactNode | 'arrow'
  /**
   * アイコンを設置（右側）
   * `arrow`で組み込みの矢印を表示
   */
  iconRight?: React.ReactNode | 'arrow'
}

/**
 * ボタン風のリンクコンポーネント
 * @param {LinkButtonProps} props - ボタン風のリンクコンポーネントのプロパティ
 * @returns {React.FC} - ボタン風のリンクコンポーネント
 */
export const LinkButton: React.FC<LinkButtonProps> = ({ children, color = 'blue', buttonStyle = 'solid', full = true, iconLeft, iconRight, ...linkProps }) => {
  // 色
  let colorClass = ''
  let iconColorClass = ''
  switch (color) {
    case 'black':
      switch (buttonStyle) {
        case 'solid':
          colorClass = 'border-transparent text-white bg-black hover:bg-gray-900'
          iconColorClass = 'text-white'
          break
        case 'outline':
          colorClass = 'border-black text-black bg-white hover:text-white hover:bg-black'
          iconColorClass = 'text-black group-hover:text-white'
          break
      }
      break
    case 'red':
      switch (buttonStyle) {
        case 'solid':
          colorClass = 'border-transparent text-white bg-red hover:bg-red-light'
          iconColorClass = 'text-white'
          break
        case 'outline':
          colorClass = 'border-red text-red bg-white hover:text-white hover:bg-red'
          iconColorClass = 'text-red group-hover:text-white'
          break
      }
      break
    case 'blue':
      switch (buttonStyle) {
        case 'solid':
          colorClass = 'border-transparent text-white bg-blue hover:bg-blue-light'
          iconColorClass = 'text-white'
          break
        case 'outline':
          colorClass = 'border-blue text-blue bg-white hover:text-white hover:bg-blue'
          iconColorClass = 'text-blue group-hover:text-white'
          break
      }
      break
    case 'gray':
      switch (buttonStyle) {
        case 'solid':
          colorClass = 'border-transparent text-gray-900 bg-gray-500 hover:bg-gray-300'
          iconColorClass = 'text-gray-900'
          break
        case 'outline':
          colorClass = 'border-gray-500 text-gray-500 bg-white hover:border-transparent hover:text-gray-900 hover:bg-gray-500'
          iconColorClass = 'text-gray-500 group-hover:text-gray-900'
          break
      }
      break
  }

  // アイコン用の共通クラス
  const iconBaseClass = 'absolute inset-y-0 inline-flex items-center justify-center m-auto h-full w-3.5 '
  return (
    <Link
      className={`
        ${full && 'w-full'} ${colorClass} group relative inline-flex items-center justify-center gap-2 rounded-md border-2 px-10 py-2.5 text-base  font-bold transition-all
      `}
      {...linkProps}
    >
      {iconLeft && <span className={`${iconBaseClass} ${iconColorClass} left-4`}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={`${iconBaseClass} ${iconColorClass} right-4`}>{iconRight}</span>}
    </Link>
  )
}
