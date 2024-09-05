import { render } from '@testing-library/react'
import RootLayout, { metadata } from './layout'

describe('RootLayout', () => {
  it('正しくレンダリングされること', () => {
    const { asFragment } = render(<RootLayout>テストコンテンツ</RootLayout>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('metadata', () => {
  it('必要なプロパティが存在すること', () => {
    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })
})
