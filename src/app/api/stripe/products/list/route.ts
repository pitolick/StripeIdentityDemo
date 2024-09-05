/**
 * Products を一覧取得する
 * @param {Request} req
 * @returns {NextResponse}
 * @see https://stripe.com/docs/api/products/list?lang=node
 */
import { NextResponse } from 'next/server'
import { getStripeMasters } from '@/app/api/stripe/_features/getStripeMasters'

export const GET = async (request: Request) => {
  // パラメータを取得
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit') || '100'

  // limit以外のパラメータを取得
  const params: { [key: string]: any } = {}
  searchParams.forEach((value, key) => {
    if (key !== 'limit') {
      params[key] = value
    }
  })

  // Products を一覧取得
  const products = await await getStripeMasters('products', { limit: Number(limit), ...params })
    .then((products) => {
      return NextResponse.json(products, { status: 200 })
    })
    .catch((error) => {
      return NextResponse.json({ error: error.message }, { status: 500 })
    })

  return products
}
