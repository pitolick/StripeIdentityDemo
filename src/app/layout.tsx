import './globals.css'
import { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { ScriptProps } from 'next/script'

const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-notojp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Stripe Identity Demo',
    absolute: 'Stripe Identity Demo',
  },
  description: '',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const gtmArgs: ScriptProps = { strategy: 'afterInteractive' }
  return (
    <html lang="ja">
      <body className={`${notojp.variable}  flex min-h-screen flex-col justify-between font-sans text-black`}>{children}</body>
    </html>
  )
}

export default RootLayout
