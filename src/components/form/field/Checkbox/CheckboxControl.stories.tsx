import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxControl } from './CheckboxControl'

const meta: Meta<typeof CheckboxControl> = {
  title: 'Form/Field/Checkbox/Control',
  component: CheckboxControl,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CheckboxControl>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    nameId: 'base',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
  },
}

/**
 * 基本形：デフォルトチェック
 */
export const BaseDefaultChecked: Story = {
  args: {
    nameId: 'base-default-checked',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
  },
}

/**
 * 基本形：DOM
 */
export const BaseDom: Story = {
  args: {
    nameId: 'base-dom',
    lists: [
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス1
          </span>
        ),
        value: '1',
      },
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス2
          </span>
        ),
        value: '2',
      },
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス3
          </span>
        ),
        value: '3',
      },
    ],
  },
}

/**
 * className
 */
export const ClassName: Story = {
  args: {
    nameId: 'class-name',
    lists: [
      {
        labelContents: 'チェックボックス1',
        value: '1',
        checkboxClassName: 'border-4',
        labelClassName: 'text-5xl',
      },
      {
        labelContents: <span className="text-4xl">チェックボックス2</span>,
        value: '2',
      },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
  },
}

/**
 * ラベル
 */
export const Label: Story = {
  args: {
    nameId: 'label',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
  },
}

/**
 * バリデーション：必須
 */
export const ValidationRequired: Story = {
  args: {
    nameId: 'validation-required',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    required: true,
  },
}

/**
 * バリデーション：任意
 */
export const ValidationOptional: Story = {
  args: {
    nameId: 'validation-optional',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    required: false,
  },
}

/**
 * バリデーション：エラー
 */
export const ValidationError: Story = {
  args: {
    nameId: 'error',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    required: true,
    error: { type: 'required', message: '必須項目です' },
  },
}

/**
 * 注釈
 */
export const Note: Story = {
  args: {
    nameId: 'note',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    note: { list: ['注釈'] },
  },
}

/**
 * 並び方：横
 */
export const DirectionRow: Story = {
  args: {
    nameId: 'direction-row',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
      { labelContents: 'チェックボックス4', value: '4' },
      { labelContents: 'チェックボックス5', value: '5' },
      { labelContents: 'チェックボックス6', value: '6' },
      { labelContents: 'チェックボックス7', value: '7' },
      { labelContents: 'チェックボックス8', value: '8' },
      { labelContents: 'チェックボックス9', value: '9' },
    ],
    label: 'ラベル',
    direction: 'row',
  },
}

/**
 * 並び方：縦
 */
export const DirectionColmun: Story = {
  args: {
    nameId: 'direction-colmun',
    lists: [
      { labelContents: 'チェックボックス1', value: '1' },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    direction: 'col',
  },
}

/**
 * チェックボックスの位置：中央
 */
export const CheckboxPosition: Story = {
  args: {
    nameId: 'checkbox-position',
    lists: [
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス1
          </span>
        ),
        value: '1',
      },
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス
            <br />2
          </span>
        ),
        value: '2',
      },
      { labelContents: <span>チェックボックス3</span>, value: '3' },
    ],
    label: 'ラベル',
    checkboxPosition: 'center',
  },
}

/**
 * チェックボックスの位置：上
 */
export const CheckboxPositionTop: Story = {
  args: {
    nameId: 'checkbox-position-top',
    lists: [
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス1
          </span>
        ),
        value: '1',
      },
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス
            <br />2
          </span>
        ),
        value: '2',
      },
      { labelContents: <span>チェックボックス3</span>, value: '3' },
    ],
    label: 'ラベル',
    checkboxPosition: 'top',
  },
}

/**
 * チェックボックスの位置：非表示
 */
export const CheckboxPositionHidden: Story = {
  args: {
    nameId: 'checkbox-position-hidden',
    lists: [
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス1
          </span>
        ),
        value: '1',
      },
      {
        labelContents: (
          <span>
            チェック
            <br />
            ボックス
            <br />2
          </span>
        ),
        value: '2',
      },
      { labelContents: <span>チェックボックス3</span>, value: '3' },
    ],
    label: 'ラベル',
    checkboxPosition: 'hidden',
  },
}

/**
 * チェックボックスの色：黒
 */
export const CheckboxColorBlack: Story = {
  args: {
    nameId: 'checkbox-color-black',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    checkboxColor: 'black',
  },
}

/**
 * チェックボックスの色：赤
 */
export const CheckboxColorRed: Story = {
  args: {
    nameId: 'checkbox-color-red',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    checkboxColor: 'red',
  },
}

/**
 * チェックボックスの色：青
 */
export const CheckboxColorBlue: Story = {
  args: {
    nameId: 'checkbox-color-blue',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    checkboxColor: 'blue',
  },
}

/**
 * チェックボックスの色：グレー
 */
export const CheckboxColorGray: Story = {
  args: {
    nameId: 'checkbox-color-gray',
    lists: [
      { labelContents: 'チェックボックス1', value: '1', defaultChecked: true },
      { labelContents: 'チェックボックス2', value: '2' },
      { labelContents: 'チェックボックス3', value: '3' },
    ],
    label: 'ラベル',
    checkboxColor: 'gray',
  },
}
