import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { switchOnAnimation, switchOffAnimation } from '@libs/animation/SwitchAnimation'
import TitleSVG from '@assets/svg/common/title.svg'
import { useCookies } from 'react-cookie'

interface Args {
  type?: 'on' | 'off'
  href?: string
}

export const Switch = (args: Args) => {
  const state = useRef(false)
  const type = args.type ? args.type : 'off'
  const href = args.href ? args.href : '/'
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['switchOnAnimation', 'switchOffAnimation'])

  useEffect(() => {
    if (!state.current && typeof window !== 'undefined') {
      state.current = true
      if (type === 'on' && cookies.switchOnAnimation !== 'false') {
        switchOnAnimation()
        setInterval(() => router.push(href), 800)
      } else if (type === 'off' && cookies.switchOffAnimation !== 'false') {
        switchOffAnimation()
      }
    }
  })

  return (
    <>
      <div
        id="switch-wrap"
        className="absolute top-0 left-0 z-[1000] hidden h-full w-full select-none"
        style={{ perspective: '3000px' }}
      >
        <div
          id="switch"
          className="relative h-full origin-center"
          style={{ perspective: '3000px' }}
        >
          <div id="thumbnail" className="absolute top-0 left-0 h-full w-full bg-[#ffa7b0]"></div>
          <div className="absolute top-0 left-0 z-10 h-full w-full">
            <TitleSVG className="absolute top-1/2 left-1/2 h-[75px] w-[240px] -translate-x-1/2 -translate-y-1/2 fill-white" />
            <span className="sr-only">しぐれうい</span>
          </div>
        </div>
      </div>
    </>
  )
}
