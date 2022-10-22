import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch } from '../components/common/Switch'
import { Top } from '../components/pages/Top'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | Top</title>
      </Head>
      <main>
        <Switch />
        <Top />
      </main>
    </>
  )
}

export default TopPage
