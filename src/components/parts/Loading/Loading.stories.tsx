import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading'

const meta: Meta<typeof Loading> = {
  title: 'parts/Loading',
  component: Loading,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Loading>

/**
 * デフォルト
 */
export const Default: Story = {
  args: {
    show: false,
  },
}

/**
 * 子要素
 */
export const WithChildren: Story = {
  args: {
    show: false,
    children: <div className="text-white">Loading...</div>,
  },
}
