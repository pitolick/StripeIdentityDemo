/**
 * Charge を作成する
 * @param {Request} req
 * @returns {NextResponse}
 * @see https://stripe.com/docs/api/charges/create?lang=node
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

  // Stripe オブジェクトを取得
  const stripe = getStripe()

  // Charge を作成
  const charge = await stripe.charges
    .create(req)
    .then((charge) => {
      return NextResponse.json(charge, { status: 200 })
    })
    .catch((error) => {
      return NextResponse.json({ error: error.message }, { status: 500 })
    })

  return charge
}
