import { useWindow } from '@lib/window'
import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NotFound } from '../components/pages/NotFound'

const NotFoundPage: NextPage = () => {
  const { text } = useLocale()
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | 404 ${text.PAGE_NOT_FOUND}`}</title>
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

export default NotFoundPage
