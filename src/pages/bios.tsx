import type { NextPage } from 'next'
import Head from 'next/head'
import { Bios } from '../components/pages/Bios'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | BIOS</title>
      </Head>
      <main>
        <Bios />
      </main>
    </>
  )
}

export default TopPage
