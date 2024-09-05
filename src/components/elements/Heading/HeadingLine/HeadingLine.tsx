/**
 * 下線付きの見出し
 * @module HeadingLine
 * @example
 *  <HeadingLine>見出し</HeadingLine>
 */
import React from 'react'

/**
 * 下線付きの見出しコンポーネントのプロパティ
 */
interface HeadingLineProps {
  /**
   * 子要素
   */
  children: React.ReactNode
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
 * 下線付きの見出しコンポーネント
 */
export const HeadingLine: React.FC<HeadingLineProps> = ({ children, tag: CustomTag = 'h2', className }) => {
  return (
    <>
      <CustomTag
        className={`${className} relative pb-4 font-bold before:absolute before:bottom-0 before:block before:w-full before:border-b-4 before:border-solid before:border-gray-500 before:content-[''] after:absolute after:bottom-0 after:block after:w-1/6 after:border-b-4 after:border-solid after:border-gray-900 after:content-['']`}
      >
        <span className="relative">{children}</span>
      </CustomTag>
    </>
  )
}
