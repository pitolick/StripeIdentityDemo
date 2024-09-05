/**
 * 注釈コンポーネント
 * @module Note
 */
import React from 'react'

/**
 * 注釈コンポーネントのプロパティ
 * @typedef {Object} NoteProps
 */
export interface NoteProps {
  /**
   * タグ
   */
  tag?: 'ul' | 'ol'
  /**
   * ループ可能な子要素のリスト
   */
  list: React.ReactNode[]
}

/**
 * 注釈コンポーネント
 * @param {NoteProps} props - 注釈コンポーネントのプロパティ
 * @returns {React.FC} - 注釈コンポーネント
 */
export const Note: React.FC<NoteProps> = ({ tag = 'ul', list }) => {
  // listが空の場合は空の要素を返す
  if (!list || list.length === 0) {
    return <></>
  }

  const Tag = tag
  let counterClass = "ps-4 -indent-4 before:content-['※']"
  if (tag === 'ol') {
    counterClass = 'ps-4 -indent-4 note-ol'
  }
  const lists = list.map((item, index) => {
    return (
      <li className={`text-xs text-gray-700 before:me-1 ${counterClass}`} key={'note_' + index}>
        {item}
      </li>
    )
  })
  return <Tag>{lists}</Tag>
}
