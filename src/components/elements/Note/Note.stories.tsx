import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Note } from './Note'

const meta: Meta<typeof Note> = {
  title: 'elements/Note',
  component: Note,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Note>

/**
 * ulリスト
 */
export const Ul: Story = {
  args: {
    list: ['注釈1', '注釈2'],
  },
}

/**
 * olリスト
 */
export const Ol: Story = {
  args: {
    tag: 'ol',
    list: ['注釈1', '注釈2'],
  },
}

/**
 * リストなし
 */
export const NoList: Story = {
  args: {
    list: [],
  },
}

/**
 * リンクありリスト
 */
export const LinkList: Story = {
  args: {
    list: [
      <>
        注釈注釈
        <a className="text-blue underline" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          リンク1
        </a>
        注釈注釈
      </>,
      <>
        注釈注釈
        <br />
        <a className="text-blue underline" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          リンク2
        </a>
        注釈注釈
      </>,
    ],
  },
}
