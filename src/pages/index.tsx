import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch } from '../components/common/Switch'
import { Top } from '../components/pages/Top'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | Top</title>
        <meta name="description" content="UindowOS" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Switch />
        <Top />
      </main>
    </>
  )
}

export default TopPage
