import { useWindow } from '@lib/window'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Bios } from '../components/pages/Bios'

const TopPage: NextPage = () => {
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | BIOS`}</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>
      <main>
        <Bios />
      </main>
    </>
  )
}

export default TopPage
