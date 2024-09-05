/**
 * ヘッダー
 * @module Header
 */
import React from 'react'

/**
 * ヘッダーのコンポーネントのプロパティ
 */
interface HeaderProps {
  /**
   * 子要素
   */
  children?: React.ReactNode
  /**
   * 追従するかどうか
   */
  isFixed?: boolean
}

/**
 * ヘッダーのコンポーネント
 * @param {HeaderProps} props -  ヘッダーコンポーネントのプロパティ
 * @returns {React.FC} -  ヘッダーコンポーネント
 */
export const Header: React.FC<HeaderProps> = ({ children, isFixed = false, ...headerProps }) => {
  // 追従するかどうか
  const fixedClass = isFixed ? 'fixed top-0 left-0 w-full z-50' : ''

  return (
    <header id="header" className={`${fixedClass}`} {...headerProps}>
      {children}
    </header>
  )
}
