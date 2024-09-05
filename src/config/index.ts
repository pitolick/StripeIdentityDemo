/**
 * 各種設定ファイル
 */
/**
 * 定数
 */
// 実行中のモード
export const NODE_ENV: string = process.env.NODE_ENV
// デプロイしたいモード
export const DEPLOY_ENV: 'dev' | 'prod' = process.env.NEXT_PUBLIC_DEPLOY_ENV as 'dev' | 'prod'
// 本番環境ドメイン（プロトコル無し）
export const DOMAIN_PROD: string = 'sample.com'
// ステージング環境ドメイン（プロトコル無し）
export const DOMAIN_STG: string = 'dev.' + DOMAIN_PROD

/**
 * 環境変数を読み込み
 */
// Stripe API Key
export const STRIPE_PUBLIC_KEY: string | undefined = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
export const STRIPE_SECRET_KEY: string | undefined = process.env.STRIPE_SECRET_KEY
