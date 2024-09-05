/**
 * ローディング
 * @module Loading
 * @todo ReferenceError: document is not definedが出ることがある？
 */
'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Spinner } from '@/components/elements'

/**
 * ローディングのプロパティ
 */
export interface LoadingProps {
  /**
   * 表示フラグ
   */
  show: boolean
  /**
   * 子要素
   */
  children?: React.ReactNode
}

/**
 * ローディングコンポーネント
 */
export const Loading: React.FC<LoadingProps> = ({ show, children }) => {
  // アニメーションフラグ
  const [animation, setAnimation] = useState(show)

  // showが変わってから0.2秒後にアニメーションを開始する
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setAnimation(show)
      }, 200)
    } else {
      setAnimation(show)
    }
  }, [show])

  // ドキュメントがマウントされたら表示する
  const [documentMouned, setDocumentMounted] = useState(false)
  useEffect(() => {
    setDocumentMounted(true)
  }, [])

  return (
    <>
      {documentMouned &&
        createPortal(
          <div className={`fixed inset-0 z-50 bg-gray-900/50 transition duration-200 ${show ? 'opacity-100' : 'opacity-0'} ${!animation && 'hidden'}`}>
            <div className="flex size-full flex-col items-center justify-center">
              <Spinner size="lg" />
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
