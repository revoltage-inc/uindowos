import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/pages/Login'

const LoginPage: NextPage = () => {
  const { text } = useLocale()

  return (
    <>
      <Head>
        <title>UindowOS | {text.LOGIN}</title>
      </Head>
      <main>
        <Login />
      </main>
    </>
  )
}

export default LoginPage
