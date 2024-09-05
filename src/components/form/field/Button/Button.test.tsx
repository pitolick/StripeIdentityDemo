import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Buttonコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<Button>テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('fullプロパティがtrueの場合、ブロック要素としてレンダリングされること', () => {
    const { container } = render(<Button full>テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('fullプロパティがfalseの場合、インライン要素としてレンダリングされること', () => {
    const { container } = render(<Button full={false}>テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが黒色でbuttonStyleプロパティがsolidを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="black" buttonStyle="solid">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが黒色でbuttonStyleプロパティがoutlineを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="black" buttonStyle="outline">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが赤色でbuttonStyleプロパティがsolidを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="red" buttonStyle="solid">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが赤色でbuttonStyleプロパティがoutlineを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="red" buttonStyle="outline">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが青色でbuttonStyleプロパティがsolidを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="blue" buttonStyle="solid">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが青色でbuttonStyleプロパティがoutlineを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="blue" buttonStyle="outline">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが灰色でbuttonStyleプロパティがsolidを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="gray" buttonStyle="solid">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorプロパティが灰色でbuttonStyleプロパティがoutlineを指定した場合、正しく適用されること', () => {
    const { container } = render(
      <Button color="gray" buttonStyle="outline">
        テストボタン
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('iconLeftプロパティにarrowを指定した場合、正しく表示されること', () => {
    const { container } = render(<Button iconLeft="arrow">テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('iconLeftプロパティにアイコンを指定した場合、正しく表示されること', () => {
    const { container } = render(<Button iconLeft={<span>アイコン</span>}>テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('iconRightプロパティにarrowを指定した場合、正しく表示されること', () => {
    const { container } = render(<Button iconRight="arrow">テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })

  it('iconRightプロパティにアイコンを指定した場合、正しく表示されること', () => {
    const { container } = render(<Button iconRight={<span>アイコン</span>}>テストボタン</Button>)
    expect(container).toMatchSnapshot()
  })
})
