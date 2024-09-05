import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Form/Field/Select/Base',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
  },
}

/**
 * プレースホルダー
 */
export const Placeholder: Story = {
  args: {
    options: [
      { value: '', label: '選択してください', disabled: true },
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    defaultValue: '',
  },
}

/**
 * 初期値
 */
export const InitialValue: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    defaultValue: '2',
  },
}

/**
 * マルチセレクト
 */
export const MultiSelect: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    multiple: true,
  },
}
