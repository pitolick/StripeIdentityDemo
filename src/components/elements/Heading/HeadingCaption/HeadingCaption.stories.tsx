import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { HeadingCaption } from './HeadingCaption'

const meta: Meta<typeof HeadingCaption> = {
  title: 'elements/Heading/HeadingCaption',
  component: HeadingCaption,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeadingCaption>

/**
 * デフォルト
 */
export const Default: Story = {
  args: {
    children: '見出し',
  },
}

/**
 * h1
 */
export const H1: Story = {
  args: {
    children: '見出し',
    tag: 'h1',
  },
}

/**
 * h2
 */
export const H2: Story = {
  args: {
    children: '見出し',
    tag: 'h2',
  },
}

/**
 * h3
 */
export const H3: Story = {
  args: {
    children: '見出し',
    tag: 'h3',
  },
}

/**
 * h4
 */
export const H4: Story = {
  args: {
    children: '見出し',
    tag: 'h4',
  },
}

/**
 * h5
 */
export const H5: Story = {
  args: {
    children: '見出し',
    tag: 'h5',
  },
}

/**
 * h6
 */
export const H6: Story = {
  args: {
    children: '見出し',
    tag: 'h6',
  },
}

/**
 * カスタムクラス
 */
export const CustomClass: Story = {
  args: {
    children: '見出し',
    className: 'text-red',
  },
}

/**
 * 子要素
 */
export const Children: Story = {
  args: {
    children: (
      <>
        <span className="text-4xl">これは見出しです。</span>
        <br />
        <span className="text-xl">これはサブタイトルです。</span>
      </>
    ),
  },
}
