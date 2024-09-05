import type { Meta, StoryObj } from '@storybook/react'
import { InputControl } from './InputControl'

const meta: Meta<typeof InputControl> = {
  title: 'Form/Field/Input/Control',
  component: InputControl,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputControl>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    type: 'text',
    nameId: 'base',
  },
}

/**
 * プレースホルダー
 */
export const Placeholder: Story = {
  args: {
    type: 'text',
    placeholder: '入力してください',
    nameId: 'placeholder',
  },
}

/**
 * 初期値
 */
export const InitialValue: Story = {
  args: {
    type: 'text',
    defaultValue: '初期値',
    nameId: 'initial-value',
  },
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    type: 'text',
    label: 'ラベル',
    nameId: 'label',
  },
}

/**
 * 注釈
 */
export const Note: Story = {
  args: {
    type: 'text',
    note: { list: ['注釈'] },
    nameId: 'note',
  },
}

/**
 * バリデーション：必須
 */
export const Required: Story = {
  args: {
    type: 'text',
    label: '必須',
    required: true,
    nameId: 'required',
  },
}

/**
 * バリデーション：任意
 */
export const Optional: Story = {
  args: {
    type: 'text',
    label: '任意',
    required: false,
    nameId: 'optional',
  },
}

/**
 * バリデーション：エラー
 */
export const Error: Story = {
  args: {
    type: 'text',
    label: 'エラー',
    required: true,
    nameId: 'error',
    error: { type: 'required', message: '必須項目です' },
  },
}

/**
 * 基本形：テキスト
 */
export const Text: Story = {
  args: {
    type: 'text',
    label: 'テキスト',
    required: false,
    nameId: 'text',
    placeholder: '入力してください',
  },
}

/**
 * 基本形：パスワード
 */
export const Password: Story = {
  args: {
    type: 'password',
    label: 'パスワード',
    required: false,
    nameId: 'password',
    placeholder: 'パスワードを入力してください',
  },
}

/**
 * 基本形：日付
 */
export const Date: Story = {
  args: {
    type: 'date',
    label: '日付',
    required: false,
    nameId: 'date',
    placeholder: '日付を選択してください',
  },
}

/**
 * 基本形：時刻
 */
export const Time: Story = {
  args: {
    type: 'time',
    label: '時刻',
    required: false,
    nameId: 'time',
    placeholder: '時刻を選択してください',
  },
}

/**
 * 基本形：日時
 */
export const DateTime: Story = {
  args: {
    type: 'datetime-local',
    label: '日時',
    required: false,
    nameId: 'datetime',
    placeholder: '日時を選択してください',
  },
}

/**
 * 基本形：月
 */
export const Month: Story = {
  args: {
    type: 'month',
    label: '月',
    required: false,
    nameId: 'month',
    placeholder: '月を選択してください',
  },
}

/**
 * 基本形：週
 */
export const Week: Story = {
  args: {
    type: 'week',
    label: '週',
    required: false,
    nameId: 'week',
    placeholder: '週を選択してください',
  },
}

/**
 * 基本形：メールアドレス
 */
export const Email: Story = {
  args: {
    type: 'email',
    label: 'メールアドレス',
    required: false,
    nameId: 'email',
    placeholder: 'メールアドレスを入力してください',
  },
}

/**
 * 基本形：電話番号
 */
export const Tel: Story = {
  args: {
    type: 'tel',
    label: '電話番号',
    required: false,
    nameId: 'tel',
    placeholder: '電話番号を入力してください',
  },
}

/**
 * 基本形：URL
 */
export const Url: Story = {
  args: {
    type: 'url',
    label: 'URL',
    required: false,
    nameId: 'url',
    placeholder: 'URLを入力してください',
  },
}

/**
 * 基本形：検索
 */
export const Search: Story = {
  args: {
    type: 'search',
    label: '検索',
    required: false,
    nameId: 'search',
    placeholder: '検索してください',
  },
}

/**
 * 基本形：数値
 */
export const Number: Story = {
  args: {
    type: 'number',
    label: '数値',
    required: false,
    nameId: 'number',
    placeholder: '数値を入力してください',
  },
}

/**
 * 基本形：範囲
 */
export const Range: Story = {
  args: {
    type: 'range',
    label: '範囲',
    required: false,
    nameId: 'range',
    placeholder: '範囲を選択してください',
  },
}

/**
 * 基本形：ファイル
 */
export const File: Story = {
  args: {
    type: 'file',
    label: 'ファイル',
    required: false,
    nameId: 'file',
    placeholder: 'ファイルを選択してください',
  },
}

/**
 * 基本形：非表示
 */
export const Hidden: Story = {
  args: {
    type: 'hidden',
    nameId: 'hidden',
    placeholder: '非表示を選択してください',
  },
}
