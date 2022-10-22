import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/pages/Login'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>UindowOS | Login</title>
        <meta name="description" content="UindowOS" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/meh2xys.css" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  )
}

export default LoginPage
