/**
 * スピナー
 * @module Spinner
 */
import React from 'react'

/**
 * スピナーのプロパティ
 */
interface SpinnerProps {
  /**
   * サイズ
   */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * スピナーコンポーネント
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  // サイズによって表示を変える
  let sizeClass = ''
  switch (size) {
    case 'sm':
      sizeClass = 'w-4 h-4'
      break
    case 'md':
      sizeClass = 'w-6 h-6'
      break
    case 'lg':
      sizeClass = 'w-8 h-8'
      break
  }

  return (
    <div className={`inline-block animate-spin ${sizeClass} rounded-full border-[3px] border-current border-t-transparent text-blue`} role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
