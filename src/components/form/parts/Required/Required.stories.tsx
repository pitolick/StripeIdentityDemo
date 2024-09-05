import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Required } from './Required'

const meta: Meta<typeof Required> = {
  title: 'form/parts/Required',
  component: Required,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Required>

/**
 * デフォルト（引数無しだとデフォルトで必須として出力）
 */
export const Default: Story = {}

/**
 * 必須
 */
export const Require: Story = {
  args: {
    required: true,
  },
}

/**
 * 任意
 */
export const Optional: Story = {
  args: {
    required: false,
  },
}
