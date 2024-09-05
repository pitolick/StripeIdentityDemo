/**
 * @jest-environment node
 */

describe('GET', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('正常に取得できる', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        products: {
          list: jest.fn().mockResolvedValue({
            data: [
              {
                id: 'test',
              },
            ],
          }),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'GET',
    })

    const { GET } = require('./route')

    // レスポンスをモックする
    const response = await GET(request)
    expect(response.status).toBe(200)

    const result = await response.json()
    expect(result).toEqual({ data: [{ id: 'test' }] })
  })

  it('エラーが返る', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        products: {
          list: jest.fn().mockRejectedValue(new Error('error')),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'GET',
    })

    const { GET } = require('./route')

    // レスポンスをモックする
    const response = await GET(request)
    expect(response.status).toBe(500)

    const result = await response.json()
    expect(result).toEqual({ error: 'error' })
  })

  it('limitがあれば正常に取得できる', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        products: {
          list: jest.fn().mockResolvedValue({
            data: [
              {
                id: 'test',
              },
            ],
          }),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/?limit=1', {
      method: 'GET',
    })

    const { GET } = require('./route')

    // レスポンスをモックする
    const response = await GET(request)
    expect(response.status).toBe(200)

    const result = await response.json()
    expect(result).toEqual({ data: [{ id: 'test' }] })
  })

  it('limit以外のパラメータがあっても正常に取得できる', async () => {
    // getStripeのモック化
    jest.mock('@/app/api/stripe/_config/stripe', () => ({
      getStripe: jest.fn().mockReturnValue({
        products: {
          list: jest.fn().mockResolvedValue({
            data: [
              {
                id: 'test',
              },
            ],
          }),
        },
      }),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/?test=test', {
      method: 'GET',
    })

    const { GET } = require('./route')

    // レスポンスをモックする
    const response = await GET(request)
    expect(response.status).toBe(200)

    const result = await response.json()
    expect(result).toEqual({ data: [{ id: 'test' }] })
  })
})
