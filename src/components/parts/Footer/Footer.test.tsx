import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footerコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { container } = render(
      <Footer>
        <div>フッターの子要素</div>
      </Footer>,
    )

    expect(container).toMatchSnapshot()
  })
})
