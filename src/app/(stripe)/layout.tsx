/**
 * 完結フォームのレイアウト
 */
'use client'
import { StripeContextProvider } from '@/features/context'

const FormStripeLayout = ({ children }: { children: React.ReactNode }) => {
  return <StripeContextProvider>{children}</StripeContextProvider>
}

export default FormStripeLayout
