/**
 * taxRates を取得する
 * @param {Request} req
 * @returns {NextResponse}
 * @see https://stripe.com/docs/api/tax_rates/retrieve?lang=node
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

  // taxRates を取得
  const taxRate = await stripe.taxRates
    .retrieve(req.id)
    .then((taxRate) => {
      return NextResponse.json(taxRate, { status: 200 })
    })
    .catch((error) => {
      return NextResponse.json({ error: error.message }, { status: 500 })
    })

  return taxRate
}
