import { useEffect, useState, useRef } from 'react'
import { useCookies } from 'react-cookie'
import { Terminal } from '../login/Terminal'
import { LoginForm } from '../login/LoginForm'

export const Login = () => {
  const state = useRef(false)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies([
    'showTerminal',
    'switchOffAnimation',
    'homeAnimation',
  ])
  const [showTerminal, setShowTerminal] = useState(true)

  useEffect(() => {
    if (!state.current && typeof window !== 'undefined') {
      state.current = true
      setShowTerminal(cookies.showTerminal !== 'false')
      removeCookies('switchOffAnimation')
      removeCookies('homeAnimation')
    }
  }, [cookies.showTerminal, removeCookies])

  return (
    <>
      <div id="overlay" className="absolute top-0 left-0 z-20 hidden h-full w-full bg-white"></div>
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-coral-pink">
        <LoginForm />
        {showTerminal && <Terminal />}
      </div>
    </>
  )
}
