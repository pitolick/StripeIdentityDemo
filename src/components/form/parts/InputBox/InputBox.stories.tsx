import type { Meta, StoryObj } from '@storybook/react'
import { InputBox } from './InputBox'

const meta: Meta<typeof InputBox> = {
  title: 'Form/Parts/InputBox',
  component: InputBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputBox>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    nameId: 'base',
    children: <input type="text" className="w-full" />,
  },
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    nameId: 'label',
    label: 'ラベル',
    children: <input type="text" className="w-full" />,
  },
}

/**
 * 必須
 */
export const Required: Story = {
  args: {
    nameId: 'required',
    label: '必須',
    required: true,
    children: <input type="text" className="w-full" />,
  },
}

/**
 * 任意
 */
export const Optional: Story = {
  args: {
    nameId: 'optional',
    label: '任意',
    required: false,
    children: <input type="text" className="w-full" />,
  },
}

/**
 * 注釈
 */
export const Note: Story = {
  args: {
    nameId: 'note',
    label: '注釈',
    note: { list: ['注釈です'] },
    children: <input type="text" className="w-full" />,
  },
}

/**
 * エラー
 */
export const Error: Story = {
  args: {
    nameId: 'error',
    label: 'エラー',
    required: true,
    note: { list: ['注釈です'] },
    error: { type: 'required', message: '必須項目です' },
    children: <input type="text" className="w-full" />,
  },
}

/**
 * 子要素の後ろに追加する要素
 */
export const AfterChildren: Story = {
  args: {
    nameId: 'after-children',
    label: '子要素の後ろに追加する要素',
    children: <input type="text" className="w-full" />,
    afterChildren: <span className="text-sm text-gray-500">afterChildren</span>,
  },
}

/**
 * 確認画面用
 */
export const Confirm: Story = {
  args: {
    nameId: 'confirm',
    label: '確認画面用',
    children: '確認画面用',
    styleType: 'confirm',
  },
}
