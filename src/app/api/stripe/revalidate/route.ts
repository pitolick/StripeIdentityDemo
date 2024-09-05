/**
 * 'stripe' タグのついたAPIのキャッシュを再検証する
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
 * @see https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation
 */
import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export const POST = async (request: NextRequest) => {
  // キャッシュを再検証する
  await revalidateTag('stripe')

  return NextResponse.json({ message: 'revalidated success' }, { status: 200 })
}
