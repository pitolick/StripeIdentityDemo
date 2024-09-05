import React from 'react'
import { render } from '@testing-library/react'
import { LinkButton } from './LinkButton'

describe('LinkButton', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(<LinkButton href={'test'}>テストボタン</LinkButton>)
    expect(container).toMatchSnapshot()
  })

  it('class名が正しく設定されること', () => {
    const { container } = render(
      <LinkButton href={'test'} className={'text-red'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが黒色でbuttonStyleがsolidの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'black'} buttonStyle={'solid'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが黒色でbuttonStyleがoutlineの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'black'} buttonStyle={'outline'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが赤色でbuttonStyleがsolidの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'red'} buttonStyle={'solid'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが赤色でbuttonStyleがoutlineの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'red'} buttonStyle={'outline'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが青色でbuttonStyleがsolidの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'blue'} buttonStyle={'solid'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが青色でbuttonStyleがoutlineの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'blue'} buttonStyle={'outline'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが灰色でbuttonStyleがsolidの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'gray'} buttonStyle={'solid'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('colorが灰色でbuttonStyleがoutlineの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} color={'gray'} buttonStyle={'outline'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('fullがfalseの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} full={false}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('fullがtrueの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} full={true}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('iconLeftがarrowの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} iconLeft={'arrow'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('iconLeftがarrow以外の場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} iconLeft={<div>test</div>}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('iconRightがarrowの場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} iconRight={'arrow'}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })

  it('iconRightがarrow以外の場合、正しくレンダリングされること', () => {
    const { container } = render(
      <LinkButton href={'test'} iconRight={<div>test</div>}>
        テストボタン
      </LinkButton>,
    )
    expect(container).toMatchSnapshot()
  })
})
