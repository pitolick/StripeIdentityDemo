import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './LinkButton'

const meta: Meta<typeof LinkButton> = {
  title: 'Elements/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LinkButton>

/**
 * 基本形
 */
export const Base: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
  },
}

/**
 * カラーバリエーション：黒（ベタ）
 */
export const ColorBlackSolid: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'black',
    buttonStyle: 'solid',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：赤（ベタ）
 */
export const ColorRedSolid: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'red',
    buttonStyle: 'solid',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：青（ベタ）
 */
export const ColorBlueSolid: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'blue',
    buttonStyle: 'solid',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：グレー（ベタ）
 */
export const ColorGraySolid: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'gray',
    buttonStyle: 'solid',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：黒（線）
 */
export const ColorBlackOutline: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'black',
    buttonStyle: 'outline',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：赤（線）
 */
export const ColorRedOutline: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'red',
    buttonStyle: 'outline',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：青（線）
 */
export const ColorBlueOutline: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'blue',
    buttonStyle: 'outline',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * カラーバリエーション：グレー（線）
 */
export const ColorGrayOutline: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    color: 'gray',
    buttonStyle: 'outline',
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * 子要素にDOMを含める
 */
export const DOM_Children: Story = {
  args: {
    children: (
      <span className="text-center text-sm">
        Link
        <br />
        Button
      </span>
    ),
    href: '#',
  },
}

/**
 * インラインボタン
 */
export const InlineButton: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    full: false,
  },
}

/**
 * インラインボタン（アイコンあり）
 */
export const InlineButton_Icon: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    full: false,
    iconLeft: 'arrow',
    iconRight: 'arrow',
  },
}

/**
 * アイコン（左側Arrow）
 */
export const IconLeftArrow: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    iconLeft: 'arrow',
  },
}

/**
 * アイコン（左側SVG）
 */
export const IconLeft: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    iconLeft: (
      <svg className="h-auto w-2.5 rotate-180" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
}

/**
 * アイコン（右側Arrow）
 */
export const IconRightArrow: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    iconRight: 'arrow',
  },
}

/**
 * アイコン（右側SVG）
 */
export const IconRight: Story = {
  args: {
    children: 'LinkButton',
    href: '#',
    iconRight: (
      <svg className="h-auto w-2.5" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
}

/**
 * 別タブで開く
 */
export const TargetBlank: Story = {
  args: {
    children: 'Go To Google',
    href: 'https://www.google.com/',
    target: '_blank',
  },
}
