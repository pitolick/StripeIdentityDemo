/**
 * 装飾付きの見出し
 * @module HeadingCaption
 * @example
 *  <HeadingCaption>見出し</HeadingCaption>
 */
import React from 'react'

/**
 * 装飾付きの見出しコンポーネントのプロパティ
 */
interface HeadingCaptionProps {
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
 * 装飾付きの見出しコンポーネント
 */
export const HeadingCaption: React.FC<HeadingCaptionProps> = ({ children, tag: CustomTag = 'h2', className }) => {
  return (
    <>
      <CustomTag className={`${className} relative ps-4 font-bold before:absolute before:inset-y-0 before:left-0 before:block before:w-2 before:bg-gray-500 before:content-[''] `}>
        <span className="relative">{children}</span>
      </CustomTag>
    </>
  )
}
