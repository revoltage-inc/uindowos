import { useWindow } from '@libs/window'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NotFound } from '@components/pages/NotFound'

const NotFoundPage: NextPage = () => {
  const { t } = useTranslation()
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | 404 ${t('pageNotFound')}`}</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>
      <main>
        <NotFound />
      </main>
    </>
  )
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
})

export default NotFoundPage
