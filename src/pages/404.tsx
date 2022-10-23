import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NotFound } from '../components/pages/NotFound'

const NotFoundPage: NextPage = () => {
  const { text } = useLocale()

  return (
    <>
      <Head>
        <title>{`UindowOS | 404 ${text.PAGE_NOT_FOUND}`}</title>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      </Head>
      <main>
        <NotFound />
      </main>
    </>
  )
}

export default NotFoundPage
