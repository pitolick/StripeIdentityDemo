/**
 * 必須任意項目
 * @module Required
 */
import React from 'react'

/**
 * 必須任意項目コンポーネントのプロパティ
 */
interface RequiredProps {
  /**
   * 必須項目か
   */
  required?: boolean
}

/**
 * 必須任意項目コンポーネント
 */
export const Required: React.FC<RequiredProps> = ({ required = true }) => {
  const requiredClass = 'text-xs text-center px-1.5 md:px-3 py-1 rounded-md whitespace-nowrap'
  return <>{required ? <span className={`${requiredClass} bg-red text-white`}>必須</span> : <span className={`${requiredClass} bg-gray-500 text-white`}>任意</span>}</>
}
