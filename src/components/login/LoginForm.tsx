import { useRef, useState, useEffect, KeyboardEvent } from 'react'
import { useCookies } from 'react-cookie'
import { gsap, Power2 } from 'gsap'
import Umbrella2SVG from '@svg/login/umbrella2.svg'
import BurstSVG from '@svg/login/burst.svg'
import NextButtonSVG from '@svg/login/next-button.svg'
import styles from '@style/components/layouts/Login.module.css'
import { detect } from 'detect-browser'
import { Switch } from './Switch'

export const LoginForm = () => {
  const didLogRef = useRef(false)
  const passwordRef = useRef<HTMLInputElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const browser = detect()
  const [cookies, setCookie] = useCookies(['showTerminal'])
  const [showSwitch, setShowSwitch] = useState(false)

  useEffect(() => {
    if (!didLogRef.current && typeof window !== 'undefined') {
      didLogRef.current = true

      // 初回ページロード時のみターミナルのアニメーションを実行
      setAnimation(cookies.showTerminal !== 'false')
      setCookie('showTerminal', false)
    }
  }, [cookies.showTerminal, setCookie])

  const showCaret = () => {
    if (caretRef.current) {
      caretRef.current.style.display = 'block'
    }
  }

  const hideCaret = () => {
    if (caretRef.current) {
      caretRef.current.style.display = 'none'
    }
  }

  const blinkCaret = (isBlink: boolean) => {
    if (caretRef.current) {
      if (isBlink) {
        caretRef.current.classList.add(styles.blink)
      } else {
        caretRef.current.classList.remove(styles.blink)
      }
    }
  }

  const updateCaretPosition = () => {
    blinkCaret(false)

    if (caretRef.current && passwordRef.current) {
      const caretPosition = passwordRef.current.selectionStart
        ? passwordRef.current.selectionStart
        : 0

      // FIXME: なぜかブラウザごとにキャレットの位置がずれるので暫定対応
      let caretLeft = `calc(${caretPosition * 0.58}rem + 0.4rem)`
      if (browser) {
        if (browser.name === 'safari') {
          caretLeft = `calc(${caretPosition * 0.645}rem + 0.4rem)`
        } else if (browser.name === 'firefox') {
          caretLeft = `calc(${caretPosition * 0.6043}rem + 0.4rem)`
        }
      }

      caretRef.current.style.left = caretLeft
    }

    setTimeout(() => {
      blinkCaret(true)
    }, 500)
  }

  const handleClick = () => {
    if (nextButtonRef.current && !nextButtonRef.current.classList.contains(styles.shrink)) {
      nextButtonRef.current.classList.add(styles.shrink)
      setTimeout(() => {
        if (nextButtonRef.current) {
          nextButtonRef.current.classList.remove(styles.shrink)
          setShowSwitch(true)
        }
      }, 100)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowSwitch(true)
    }
  }

  const setAnimation = (showTerminal: boolean) => {
    // ターミナルのアニメーション時間だけ遅延させる
    const timeline = gsap.timeline({
      duration: showTerminal ? 5.6 : 0,
    })

    timeline
      // ログインフォームをフェードインして表示する
      .fromTo(
        '#login-form',
        {
          display: 'none',
          transform: 'scale(2.5)',
          filter: 'blur(2.2px)',
        },
        {
          display: 'block',
          transform: 'scale(1)',
          filter: 'blur(0px)',
          duration: 0.5,
          ease: Power2.easeOut,
        },
        '-=0.1'
      )
      .fromTo(
        '#login-form #text-ShigureUi',
        {
          'letter-spacing': '0.5em',
        },
        {
          'letter-spacing': '0.05em',
          duration: 1,
          ease: Power2.easeOut,
        },
        '-=0.5'
      )
      .to(
        '#login-form #password',
        {
          onComplete: () => {
            if (passwordRef.current) {
              passwordRef.current.focus()
            }
          },
        },
        '-=0.5'
      )
  }

  return (
    <>
      {showSwitch && <Switch type="on" href="/home" />}
      <div
        id="login-form-wrap"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          id="login-form"
          className="z-10 hidden"
          style={{ transform: 'scale(2.5)', filter: 'blur(2.2px)' }}
        >
          <div className="flex flex-col items-center">
            <div className="relative h-[160px] w-[160px]">
              <Umbrella2SVG
                id="umbrella2"
                className="absolute top-1/2 left-1/2 z-10 w-[85px] -translate-x-1/2 -translate-y-1/2 fill-coral-pink"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <BurstSVG id="burst" className={`${styles.fluct} w-[160px] fill-snow`} />
              </div>
            </div>
            <span
              id="text-ShigureUi"
              className="mt-[6px] whitespace-nowrap font-[hatch] text-[1.5rem] font-medium leading-none tracking-[0.5em] text-snow"
            >
              Shigure Ui
            </span>
            <div className="mt-[28px] flex items-center justify-center gap-x-2">
              <button
                ref={nextButtonRef}
                type="button"
                className="flex h-[28px] w-[28px] cursor-default items-center justify-center"
                onClick={handleClick}
              >
                <NextButtonSVG className="h-fit w-fit select-none fill-snow" />
              </button>
              <div className="relative h-[28px] w-[140px]">
                <input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  className="test-[16px] absolute top-0 left-0 h-[28px] w-[140px] rounded-sm border-none bg-snow px-[8px] py-[2px] font-[hatch] font-bold leading-none tracking-[3px] text-coral-pink caret-transparent focus:ring-0"
                  autoComplete="off"
                  maxLength={12}
                  size={12}
                  onChange={updateCaretPosition}
                  onKeyUp={updateCaretPosition}
                  onKeyDown={handleKeyDown}
                  onFocus={showCaret}
                  onBlur={hideCaret}
                />
                <span
                  ref={caretRef}
                  id="caret"
                  className="absolute top-1/2 left-[6px] hidden h-[55%] w-[2px] -translate-y-1/2 bg-coral-pink"
                ></span>
              </div>
              <div className="h-[30px] w-[30px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
