import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/pages/Login'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | Login</title>
      </Head>
      <main>
        <Login />
      </main>
    </>
  )
}

export default LoginPage
