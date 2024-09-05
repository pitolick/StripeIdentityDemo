/**
 * @jest-environment node
 */

describe('POST', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('正常にキャッシュを再検証できる', async () => {
    // revalidateTagのモック化
    jest.mock('next/cache', () => ({
      revalidateTag: jest.fn().mockResolvedValue(undefined),
    }))

    // リクエストをモックする
    const request = new Request('https://hoge.com/', {
      method: 'POST',
    })

    const { POST } = require('./route')

    // レスポンスをモックする
    const response = await POST(request)
    expect(response.status).toBe(200)

    const result = await response.json()
    expect(result).toEqual({ message: 'revalidated success' })
  })
})
