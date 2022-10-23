import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import styles from '@assets/css/components/pages/Bios.module.css'
import { TurnOnAnimation } from '@libs/animation/TurnOnAnimation'
import { BiosTextAnimation } from '@libs/animation/BiosTextAnimation'
import { FlareAnimation } from '@libs/animation/FlareAnimation'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export const Bios = () => {
  const state = useRef(false)
  const ref = useRef(null)
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookies] = useCookies(['showTerminal'])

  useEffect(() => {
    if (!state.current && typeof window !== 'undefined') {
      state.current = true
      removeCookies('showTerminal')
      setAnimation()
    }
  })

  const setAnimation = () => {
    gsap.registerPlugin(TextPlugin)
    const timeline = gsap.timeline()
    const timeline2 = gsap.timeline()
    const timeline3 = gsap.timeline()

    timeline
      .to('body', {
        onStart: () => {
          TurnOnAnimation(timeline2)
        },
      })
      .to('body', {
        onStart: () => {
          BiosTextAnimation(timeline3)
        },
      })
      .to('body', {
        delay: 1,
        onStart: () => {
          FlareAnimation()
        },
      })
      .to('body', {
        delay: 1,
        onStart: () => {
          router.push('/login')
        },
      })
  }

  return (
    <>
      <div className="h-full min-h-screen w-full">
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          <div id="circle-flare" className={styles.circleFlare}></div>
          <div id="stick-flare" className={styles.stickFlare}>
            <div className={styles.leftFlare}></div>
            <div className={styles.rightFlare}></div>
          </div>
        </div>
        <canvas id="canvas" className="absolute left-0 top-0 z-10 h-full w-full" ref={ref} />
        <div id="screen" className={styles.screen}>
          <div className={styles.shake}>
            <p id="text1" className="mb-8"></p>
            <p id="text2" className="mb-8"></p>
            <p id="text3" className="mb-8"></p>
            <div className="mb-8">
              <div className="flex flex-row">
                <p id="text4"></p>
                <span id="done" className="ml-2"></span>
              </div>
              <div className="flex flex-row">
                <p id="text5"></p>
                <span id="ok" className="ml-2"></span>
              </div>
            </div>
            <div className="mb-8 md:ml-96">
              <div className="flex flex-col">
                <p id="text6"></p>
              </div>
            </div>
            <div className="flex flex-col">
              <p id="text7"></p>
              <Link href="https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw" passHref>
                <a id="text8" target="_blank" rel="noopener noreferrer"></a>
              </Link>
              <Link href="https://twitter.com/UindowOS" passHref>
                <a id="text9" target="_blank" rel="noopener noreferrer"></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
