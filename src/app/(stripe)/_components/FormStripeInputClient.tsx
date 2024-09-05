/**
 * 完結フォームの個人情報入力画面のクライアントサイドコンポーネント
 */
'use client'
import React, { useState } from 'react'
import { HeadingLine } from '@/components/elements'
import { Button } from '@/components/form/field'
import { formStripeDefaultValuesType, getSchema } from '../_config'
import { StripeInputContents } from '../_components'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const FormStripeInputClient: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // useFormの設定
  const useFormMethods = useForm<formStripeDefaultValuesType>({
    resolver: zodResolver(getSchema()),
  })

  // フォームの送信
  const onSubmit = (data: formStripeDefaultValuesType) => {
    console.log('SubmitData:', data)
    // 送信後の処理
    setIsSubmitting(true)
  }

  return (
    <>
      <FormProvider {...useFormMethods}>
        <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
          <HeadingLine tag="h2" className="mb-8 text-xl md:text-3xl">
            お客様情報の入力
          </HeadingLine>

          <div>
            <StripeInputContents />
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-5 md:flex-row">
            <div className="w-full max-w-md">
              <Button iconRight=">" type="submit">
                <span className="text-lg md:py-2 md:text-2xl">{isSubmitting ? '送信済み' : '送信する'}</span>
              </Button>
              {isSubmitting && (
                <p className="mt-4 text-center text-2xl font-bold">
                  デモはここまで。
                  <br />
                  取得したIDをCRMに繋ぎ込もう！
                </p>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
