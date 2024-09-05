import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'parts/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(storyFn) => <div className="relative h-80 scale-100 overflow-scroll">{storyFn()}</div>],
}

export default meta
type Story = StoryObj<typeof Header>

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
 * 追従あり
 */
export const Fixed: Story = {
  args: {
    children: <div className="container text-center">children</div>,
    isFixed: true,
  },
}
