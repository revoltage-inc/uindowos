import { useWindow } from '@lib/window'
import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch } from '../components/common/Switch'
import { Top } from '../components/pages/Top'

const TopPage: NextPage = () => {
  const { text } = useLocale()
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | ${text.TOP}`}</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>
      <main>
        <Switch />
        <Top />
      </main>
    </>
  )
}

export default TopPage
