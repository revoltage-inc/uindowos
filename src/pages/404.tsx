import { useWindow } from '@libs/window'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NotFound } from '@components/pages/NotFound'

const NotFoundPage: NextPage = () => {
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>UindowOS | 404 Page Not Found</title>
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
