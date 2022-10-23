import { useWindow } from '@lib/window'
import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/pages/Login'

const LoginPage: NextPage = () => {
  const { text } = useLocale()
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | ${text.LOGIN}`}</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>
      <main>
        <Login />
      </main>
    </>
  )
}

export default LoginPage
