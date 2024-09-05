/**
 * Products を取得する
 * @param {Request} req
 * @returns {NextResponse}
 * @see https://stripe.com/docs/api/products/retrieve?lang=node
 */
import { NextResponse } from 'next/server'
import { getStripe } from '@/app/api/stripe/_config/stripe'

export const POST = async (request: Request) => {
  // リクエストボディを取得
  const req = await request.json().catch(() => {
    return undefined
  })

  // リクエストボディがなければエラー
  if (!req) {
    return NextResponse.json({ error: 'request body is not defined' }, { status: 500 })
  }

  // id がない場合はエラー
  if (!req.id) {
    return NextResponse.json({ error: 'id is required' }, { status: 400 })
  }

  // Stripe オブジェクトを取得
  const stripe = getStripe()

  // Products を取得
  const product = await stripe.products
    .retrieve(req.id)
    .then((product) => {
      return NextResponse.json(product, { status: 200 })
    })
    .catch((error) => {
      return NextResponse.json({ error: error.message }, { status: 500 })
    })

  return product
}
