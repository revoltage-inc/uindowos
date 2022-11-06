import { Terminal } from '@components/parts/Login/Terminal'
import { LoginForm } from '@components/parts/Login/LoginForm'

export const Login = () => {
  return (
    <>
      <div id="overlay" className="absolute top-0 left-0 z-20 hidden h-full w-full bg-white"></div>
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-coral-pink">
        <LoginForm />
        <Terminal />
      </div>
    </>
  )
}
