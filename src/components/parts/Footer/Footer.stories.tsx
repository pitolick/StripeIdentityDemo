import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'parts/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

/**
 * デフォルト
 */
export const Default: Story = {}

/**
 * 子要素あり
 */
export const WithChildren: Story = {
  args: {
    children: <div className="container text-center">children</div>,
  },
}

/**
 * コピーライトのPropsあり
 */
export const WithCopyRightProps: Story = {
  args: {
    children: <div className="container text-center">children</div>,
  },
}
