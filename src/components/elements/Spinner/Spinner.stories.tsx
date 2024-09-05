import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'elements/Spinner',
  component: Spinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Spinner>

/**
 * デフォルト
 */
export const Default: Story = {
  args: {},
}

/**
 * サイズ：sm
 */
export const Sm: Story = {
  args: {
    size: 'sm',
  },
}

/**
 * サイズ：md
 */
export const Md: Story = {
  args: {
    size: 'md',
  },
}

/**
 * サイズ：lg
 */
export const Lg: Story = {
  args: {
    size: 'lg',
  },
}
