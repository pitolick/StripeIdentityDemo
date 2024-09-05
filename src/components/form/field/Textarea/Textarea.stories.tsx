import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Field/Textarea/Base',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

/**
 * 基本形
 */
export const Base: Story = {}

/**
 * プレースホルダー
 */
export const Placeholder: Story = {
  args: {
    placeholder: '入力してください',
  },
}

/**
 * 初期値
 */
export const InitialValue: Story = {
  args: {
    defaultValue: '初期値',
  },
}

/**
 * 行数
 */
export const Rows: Story = {
  args: {
    rows: 5,
  },
}
