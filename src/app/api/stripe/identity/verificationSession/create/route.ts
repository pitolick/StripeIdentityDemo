/**
 * VerificationSession を作成する
 * @param {Request} req
 * @returns {NextResponse}
 * @see https://docs.stripe.com/api/identity/verification_sessions/create?lang=node
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

  // VerificationSession を作成
  const verificationSession = await stripe.identity.verificationSessions
    .create(req)
    .then((verificationSession) => {
      return NextResponse.json(verificationSession, { status: 200 })
    })
    .catch((error) => {
      return NextResponse.json({ error: error.message }, { status: 500 })
    })

  return verificationSession
}
