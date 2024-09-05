/**
 * QRコードを表示するコンポーネント
 */
import React from 'react'
import Image from 'next/image'

/**
 * QRコードを表示するProps
 * @typedef {Object} QRProps
 */
export interface QRProps {}

/**
 * QRコードを表示するコンポーネント
 * @param {QRProps} props - QRコードを表示するコンポーネントのプロパティ
 * @returns {JSX.Element} - QRコードを表示するコンポーネント
 */
export const QR: React.FC<QRProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">＼ デモ環境へのアクセスはこちら！ ／</p>
      <Image src="/qr.png" alt="QRコード" width={288} height={288} />
    </div>
  )
}
