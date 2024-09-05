import type { Meta, StoryObj } from '@storybook/react'
import { SelectControl } from './SelectControl'

const meta: Meta<typeof SelectControl> = {
  title: 'Form/Field/Select/Control',
  component: SelectControl,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectControl>

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
    nameId: 'base',
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
    nameId: 'placeholder',
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
    nameId: 'initial-value',
  },
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'label',
    label: 'ラベル',
  },
}

/**
 * 注釈
 */
export const Note: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'note',
    label: 'ラベル',
    note: { list: ['注釈'] },
  },
}

/**
 * バリデーション：必須
 */
export const Required: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'required',
    label: 'ラベル',
    required: true,
  },
}

/**
 * バリデーション：任意
 */
export const Optional: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'optional',
    label: 'ラベル',
    required: false,
  },
}

/**
 * バリデーション：エラー
 */
export const Error: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'error',
    label: 'ラベル',
    note: { list: ['注釈'] },
    required: true,
    error: { type: 'required', message: '必須項目です' },
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
    nameId: 'multi-select',
    label: 'ラベル',
    note: { list: ['注釈'] },
    required: true,
    multiple: true,
  },
}

/**
 * マルチセレクト：エラー
 */
export const MultiSelectError: Story = {
  args: {
    options: [
      { value: '1', label: '選択肢1' },
      { value: '2', label: '選択肢2' },
      { value: '3', label: '選択肢3' },
    ],
    nameId: 'multi-select-error',
    label: 'ラベル',
    note: { list: ['注釈'] },
    required: true,
    multiple: true,
    error: { type: 'required', message: '必須項目です' },
  },
}
