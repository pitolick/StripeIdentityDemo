import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Form/Field/Input/Base',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

/**
 * 基本形：テキスト
 */
export const Base: Story = {
  args: {
    type: 'text',
    placeholder: '入力してください',
  },
}

/**
 * 基本形：パスワード
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'パスワードを入力してください',
  },
}

/**
 * 基本形：日付
 */
export const Date: Story = {
  args: {
    type: 'date',
    placeholder: '日付を選択してください',
  },
}

/**
 * 基本形：時刻
 */
export const Time: Story = {
  args: {
    type: 'time',
    placeholder: '時刻を選択してください',
  },
}

/**
 * 基本形：日時
 */
export const DateTime: Story = {
  args: {
    type: 'datetime-local',
    placeholder: '日時を選択してください',
  },
}

/**
 * 基本形：月
 */
export const Month: Story = {
  args: {
    type: 'month',
    placeholder: '月を選択してください',
  },
}

/**
 * 基本形：週
 */
export const Week: Story = {
  args: {
    type: 'week',
    placeholder: '週を選択してください',
  },
}

/**
 * 基本形：メールアドレス
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'メールアドレスを入力してください',
  },
}

/**
 * 基本形：電話番号
 */
export const Tel: Story = {
  args: {
    type: 'tel',
    placeholder: '電話番号を入力してください',
  },
}

/**
 * 基本形：URL
 */
export const Url: Story = {
  args: {
    type: 'url',
    placeholder: 'URLを入力してください',
  },
}

/**
 * 基本形：検索
 */
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: '検索してください',
  },
}

/**
 * 基本形：数値
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '数値を入力してください',
  },
}

/**
 * 基本形：範囲
 */
export const Range: Story = {
  args: {
    type: 'range',
    placeholder: '範囲を選択してください',
  },
}

/**
 * 基本形：ファイル
 */
export const File: Story = {
  args: {
    type: 'file',
    placeholder: 'ファイルを選択してください',
  },
}

/**
 * 基本形：非表示
 */
export const Hidden: Story = {
  args: {
    type: 'hidden',
    placeholder: '非表示を選択してください',
  },
}
