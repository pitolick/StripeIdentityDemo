import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Headerコンポーネント', () => {
  it('子要素が正しく表示されること', () => {
    const { container } = render(
      <Header>
        <div>テスト</div>
      </Header>,
    )
    expect(container).toMatchSnapshot()
  })

  it('isFixedがtrueの場合、fixedクラスが追加されること', () => {
    const { container } = render(<Header isFixed={true} />)
    expect(container).toMatchSnapshot()
  })

  it('isFixedがfalseの場合、fixedクラスが追加されないこと', () => {
    const { container } = render(<Header isFixed={false} />)
    expect(container).toMatchSnapshot()
  })
})
