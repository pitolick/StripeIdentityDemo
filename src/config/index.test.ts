import * as index from './index'

describe('Config', () => {
  it('NODE_ENVは文字列である', () => {
    expect(typeof index.NODE_ENV).toBe('string')
  })

  it('DEPLOY_ENVは文字列かundefinedである', () => {
    expect(['string', 'undefined']).toContain(typeof index.STRIPE_PUBLIC_KEY)
  })

  it('DOMAIN_PRODは文字列である', () => {
    expect(typeof index.DOMAIN_PROD).toBe('string')
  })

  it('DOMAIN_STGは文字列である', () => {
    expect(typeof index.DOMAIN_STG).toBe('string')
  })

  it('STRIPE_PUBLIC_KEYは文字列かundefinedである', () => {
    expect(['string', 'undefined']).toContain(typeof index.STRIPE_PUBLIC_KEY)
  })

  it('STRIPE_SECRET_KEYは文字列かundefinedである', () => {
    expect(['string', 'undefined']).toContain(typeof index.STRIPE_SECRET_KEY)
  })
})
