import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Field/Checkbox/Base',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

/**
 * 基本形
 */
export const Base: Story = {
  args: {},
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    labelContents: 'ラベル',
  },
}

/**
 * ラベルDOM
 */
export const LabelDom: Story = {
  args: {
    labelContents: <span>ラベル</span>,
  },
}

/**
 * className
 */
export const ClassName: Story = {
  args: {
    checkboxClassName: 'border-2',
    labelClassName: 'inline-flex items-center space-x-2',
    labelContents: <span>ラベル</span>,
  },
}

/**
 * デフォルトチェック
 */
export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    labelContents: <span>ラベル</span>,
  },
}

/**
 * ラッパー：true
 */
export const Wrapper: Story = {
  args: {
    wrapper: true,
    labelContents: <span>ラベル</span>,
  },
}

/**
 * ラッパー：false
 */
export const NoWrapper: Story = {
  args: {
    wrapper: false,
    labelContents: <span>ラベル</span>,
  },
}
