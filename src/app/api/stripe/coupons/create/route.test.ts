/**
 * @jest-environment node
 */

describe('POST', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('正常に取得できる', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        coupons: {
          create: jest.fn().mockResolvedValue({
            id: 'test',
          }),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'POST',
      body: JSON.stringify({
        endpoint: 'test',
      }),
    })

    const { POST } = require('./route')

    // レスポンスをモックする
    const response = await POST(request)
    expect(response.status).toBe(200)

    const result = await response.json()
    expect(result).toEqual({ id: 'test' })
  })

  it('エラーが返る', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        coupons: {
          create: jest.fn().mockRejectedValue(new Error('error')),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'POST',
      body: JSON.stringify({
        endpoint: 'test',
      }),
    })

    const { POST } = require('./route')

    // レスポンスをモックする
    const response = await POST(request)
    expect(response.status).toBe(500)

    const result = await response.json()
    expect(result).toEqual({ error: 'error' })
  })

  it('リクエストボディがなければエラーが返る', async () => {
    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'POST',
    })

    const { POST } = require('./route')

    // レスポンスをモックする
    const response = await POST(request)
    expect(response.status).toBe(500)

    const result = await response.json()
    expect(result).toEqual({ error: 'request body is not defined' })
  })
})
