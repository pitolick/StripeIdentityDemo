import type { Meta, StoryObj } from '@storybook/react'
import { TextareaControl } from './TextareaControl'

const meta: Meta<typeof TextareaControl> = {
  title: 'Form/Field/Textarea/Control',
  component: TextareaControl,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextareaControl>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    nameId: 'base',
  },
}

/**
 * プレースホルダー
 */
export const Placeholder: Story = {
  args: {
    placeholder: '入力してください',
    nameId: 'placeholder',
  },
}

/**
 * 初期値
 */
export const InitialValue: Story = {
  args: {
    defaultValue: '初期値',
    nameId: 'initial-value',
  },
}

/**
 * 行数
 */
export const Rows: Story = {
  args: {
    rows: 5,
    nameId: 'rows',
  },
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    label: 'ラベル',
    nameId: 'label',
  },
}

/**
 * 注釈
 */
export const Note: Story = {
  args: {
    note: { list: ['注釈'] },
    nameId: 'note',
  },
}

/**
 * バリデーション：必須
 */
export const Required: Story = {
  args: {
    required: true,
    nameId: 'required',
    label: '必須',
  },
}

/**
 * バリデーション：任意
 */
export const Optional: Story = {
  args: {
    required: false,
    nameId: 'optional',
    label: '任意',
  },
}

/**
 * バリデーション：エラー
 */
export const Error: Story = {
  args: {
    required: true,
    nameId: 'error',
    label: 'エラー',
    error: { type: 'required', message: '必須項目です' },
  },
}
