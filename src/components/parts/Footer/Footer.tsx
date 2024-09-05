/**
 * フッター
 * @module Footer
 */
import React from 'react'

/**
 * フッターのコンポーネントのプロパティ
 */
interface FooterProps {
  /**
   * 子要素
   */
  children?: React.ReactNode
}

/**
 * フッターのコンポーネント
 * @param {FooterProps} props -  フッターコンポーネントのプロパティ
 * @returns {React.FC} -  フッターコンポーネント
 */
export const Footer: React.FC<FooterProps> = ({ children, ...footerProps }) => {
  return (
    <footer id="footer" className="mt-auto" {...footerProps}>
      {children}
    </footer>
  )
}
