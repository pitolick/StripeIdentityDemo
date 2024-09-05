import { translateInterval } from './translateInterval'
import Stripe from 'stripe'

describe('translateInterval関数', () => {
  it('日', () => {
    const interval = 'day'
    const translatedInterval = translateInterval(interval)
    expect(translatedInterval).toBe('日')
  })

  it('週', () => {
    const interval = 'week'
    const translatedInterval = translateInterval(interval)
    expect(translatedInterval).toBe('週')
  })

  it('ヶ月', () => {
    const interval = 'month'
    const translatedInterval = translateInterval(interval)
    expect(translatedInterval).toBe('ヶ月')
  })

  it('年', () => {
    const interval = 'year'
    const translatedInterval = translateInterval(interval)
    expect(translatedInterval).toBe('年')
  })

  it('それ以外', () => {
    const interval = 'invalid'
    const translatedInterval = translateInterval(interval as Stripe.Price.Recurring.Interval)
    expect(translatedInterval).toBe('')
  })
})
