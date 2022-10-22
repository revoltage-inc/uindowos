import type { NextPage } from 'next'
import Head from 'next/head'
import { NotFound } from '../components/pages/NotFound'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | 404 Page Not Found</title>
      </Head>
      <main>
        <NotFound />
      </main>
    </>
  )
}

export default NotFoundPage
