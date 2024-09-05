import React from 'react'
import { render, act } from '@testing-library/react'
import { Loading } from './Loading'

describe('Loadingコンポーネント', () => {
  it('表示フラグがtrueの場合、ローディングが表示されること', () => {
    act(() => {
      const { container } = render(<Loading show={true} />)
      expect(container).toMatchSnapshot()
    })
  })

  it('表示フラグがfalseの場合、ローディングが非表示になること', () => {
    act(() => {
      const { container } = render(<Loading show={false} />)
      expect(container).toMatchSnapshot()
    })
  })

  it('表示フラグがfalseからtrueに変わった場合、0.2秒待ってからローディングが表示されること', () => {
    act(() => {
      jest.useFakeTimers()
      const { container, rerender } = render(<Loading show={false} />)
      rerender(<Loading show={true} />)
      expect(container).toMatchSnapshot()
      jest.advanceTimersByTime(200)
      expect(container).toMatchSnapshot()
    })
  })
})
