/**
 * ルビ付きの見出し
 * @module HeadingRuby
 * @example
 * <HeadingRuby>見出し</HeadingRuby>
 */
import React from 'react'

/**
 * ルビ付きの見出しコンポーネントのプロパティ
 */
interface HeadingRubyProps {
  /**
   * 子要素
   */
  children: React.ReactNode
  /**
   * ルビ
   */
  ruby: string
  /**
   * タグ名
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * class名
   */
  className?: React.HTMLAttributes<HTMLHeadingElement>['className']
}

/**
 * ルビ付きの見出しコンポーネント
 */
export const HeadingRuby: React.FC<HeadingRubyProps> = ({ children, ruby, tag: CustomTag = 'h2', className }) => {
  return (
    <>
      <CustomTag className={`${className}`}>
        <span className="block text-base text-gray-900">{ruby}</span>
        <span className="text-3xl font-bold">{children}</span>
      </CustomTag>
    </>
  )
}
