import { useEffect, useRef } from 'react'
import { terminalAnimation } from '@lib/animation/TerminalAnimation'
import TerminalEdgeSVG from '@svg/login/terminal/terminal-edge.svg'
import TerminalEyeSVG from '@svg/login/terminal/terminal-eye.svg'
import TerminalMouthSVG from '@svg/login/terminal/terminal-mouth.svg'
import TerminalTongueSVG from '@svg/login/terminal/terminal-tongue.svg'
import RainSVG from '@svg/login/rain.svg'
import UmbrellaSVG from '@svg/login/umbrella.svg'

export const Terminal = () => {
  const state = useRef(false)

  useEffect(() => {
    if (!state.current && typeof window !== 'undefined') {
      state.current = true
      terminalAnimation()
    }
  })

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          id="terminal-wrap"
          className="hidden flex-col items-center justify-center font-[hatch] font-medium text-snow"
        >
          <div className="relative h-[200px] w-[320px] fill-snow">
            <div
              id="terminal"
              className="absolute bottom-[-130px] left-1/2 h-[40px] w-[25px] -translate-x-1/2"
            >
              <TerminalEdgeSVG id="edge" className="h-full w-full" />
              <div
                id="face"
                className="absolute bottom-[-16px] left-1/2 h-[32px] w-[40px] -translate-x-1/2"
              >
                <div
                  id="eye"
                  className="absolute left-1/2 bottom-[20px] hidden h-[12px] w-[28px] -translate-x-1/2"
                >
                  <TerminalEyeSVG
                    id="left-eye"
                    className="absolute top-1/2 left-0 h-[12px] w-[7px] -translate-y-1/2"
                  />
                  <TerminalEyeSVG
                    id="right-eye"
                    className="absolute top-1/2 right-0 h-[12px] w-[7px] -translate-y-1/2"
                  />
                </div>
                <TerminalMouthSVG
                  id="mouth"
                  className="absolute bottom-[8px] left-1/2 hidden h-[4px] w-[40px] -translate-x-1/2"
                />
                <TerminalTongueSVG
                  id="tongue"
                  className="absolute right-[2px] top-[1.48em] hidden h-[0px] w-[16px]"
                />
              </div>
            </div>
            <UmbrellaSVG
              id="umbrella"
              className="absolute bottom-[80px] right-[0px] hidden h-[180px] w-[135px] origin-bottom-left rotate-[60deg]"
            />
            <RainSVG
              id="left-rain"
              className="absolute bottom-[70px] left-[80px] hidden h-[24px] w-[12px]"
            />
            <RainSVG
              id="right-rain"
              className="absolute bottom-[160px] right-[95px] hidden h-[24px] w-[12px]"
            />
          </div>
          <div
            id="text-UindowOS"
            className="relative flex h-[40px] w-[124px] text-[1.25rem] leading-none tracking-wider"
          >
            <div className="h-full">
              <span id="char-U" className="mt-[0px] hidden">
                U
              </span>
            </div>
            <div className="h-full">
              <span id="char-i" className="mt-[0px] hidden">
                i
              </span>
            </div>
            <div className="h-full">
              <span id="char-n" className="mt-[0px] hidden">
                n
              </span>
            </div>
            <div className="h-full">
              <span id="char-d" className="mt-[0px] hidden">
                d
              </span>
            </div>
            <div className="h-full">
              <span id="char-o" className="mt-[0px] hidden">
                o
              </span>
            </div>
            <div className="h-full">
              <span id="char-w" className="mt-[0px] hidden">
                w
              </span>
            </div>
            <div className="h-full">
              <span id="char-space" className="mt-[0px]">
                &nbsp;
              </span>
            </div>
            <svg
              id="char-O"
              className="absolute bottom-[2px] right-[32px] h-[16px] w-[16px] fill-snow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
            >
              <path
                id="path-0"
                className="invisible"
                d="M17.5,7.49h0c1.88,0,3.64,.36,5.17,1.05l3.73-6.46c-2.6-1.36-5.63-2.08-8.9-2.08h0V7.49Z"
              />
              <path
                id="path-1"
                className="invisible"
                d="M22.67,8.55c1.72,.78,3.14,1.99,4.12,3.59l6.17-3.56c-1.51-2.86-3.78-5.04-6.55-6.49l-3.73,6.46Z"
              />
              <path
                id="path-2"
                className="invisible"
                d="M26.78,12.14c.89,1.47,1.41,3.26,1.41,5.36h6.81c0-3.45-.74-6.44-2.05-8.92l-6.17,3.56Z"
              />
              <path
                id="path-3"
                className="invisible"
                d="M26.78,22.86c.89-1.47,1.41-3.26,1.41-5.36h6.81c0,3.45-.74,6.44-2.05,8.92l-6.17-3.56Z"
              />
              <path
                id="path-4"
                className="invisible"
                d="M22.67,26.45c1.72-.78,3.14-1.99,4.12-3.59l6.17,3.56c-1.51,2.86-3.78,5.04-6.55,6.49l-3.73-6.46Z"
              />
              <path
                id="path-5"
                className="invisible"
                d="M17.5,27.51h0c1.88,0,3.64-.36,5.17-1.05l3.73,6.46c-2.6,1.36-5.63,2.08-8.9,2.08h0v-7.49Z"
              />
              <path
                id="path-6"
                className="invisible"
                d="M17.5,27.51h0c-1.88,0-3.64-.36-5.17-1.05l-3.73,6.46c2.6,1.36,5.63,2.08,8.9,2.08h0v-7.49Z"
              />
              <path
                id="path-7"
                className="invisible"
                d="M12.33,26.45c-1.72-.78-3.14-1.99-4.12-3.59l-6.17,3.56c1.51,2.86,3.78,5.04,6.55,6.49l3.73-6.46Z"
              />
              <path
                id="path-8"
                className="invisible"
                d="M8.22,22.86c-.89-1.47-1.41-3.26-1.41-5.36H0c0,3.45,.74,6.44,2.05,8.92l6.17-3.56Z"
              />
              <path
                id="path-9"
                className="invisible"
                d="M8.22,12.14c-.89,1.47-1.41,3.26-1.41,5.36H0c0-3.45,.74-6.44,2.05-8.92l6.17,3.56Z"
              />
              <path
                id="path-10"
                className="invisible"
                d="M12.33,8.55c-1.72,.78-3.14,1.99-4.12,3.59l-6.17-3.56c1.51-2.86,3.78-5.04,6.55-6.49l3.73,6.46Z"
              />
              <path
                id="path-11"
                className="invisible"
                d="M17.5,7.49h0c-1.88,0-3.64,.36-5.17,1.05l-3.73-6.46C11.2,.72,14.23,0,17.5,0h0V7.49Z"
              />
            </svg>
            <svg
              id="char-S"
              className="absolute bottom-[2px] right-[6px] h-[16px] w-[0.9rem] fill-snow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 35"
            >
              <path
                id="path-0"
                className="invisible"
                d="M23.15,10.29c.42,.57,.8,1.18,1.07,1.85,.15,.39,.44,.48,.78,.39l1.99-.68c.49-.19,.63-.43,.63-.87V4.83c0-.17-.08-.35-.21-.52-2.07,1.49-3.61,3.47-4.26,5.97Z"
              />
              <path
                id="path-1"
                className="invisible"
                d="M27.41,4.32s-.02-.04-.04-.06C23.96,1.27,19.79,.29,16.46,.06c-.65,2.05-1.14,4.09-.52,6.14,2.86,.44,5.56,1.87,7.21,4.09,.65-2.5,2.19-4.48,4.26-5.97Z"
              />
              <path
                id="path-2"
                className="invisible"
                d="M14.65,14.31c-4.17-.34-7.76-.77-7.76-3.92,0-2.37,2.43-4.35,7.13-4.35,.64,0,1.28,.06,1.92,.15-.62-2.05-.13-4.09,.52-6.14-.6-.04-1.18-.06-1.71-.06C5.63,0,.78,4.01,.78,10.64c0,8.12,6.84,8.99,12.76,9.43,.43,.04,.85,.07,1.27,.11v-5.85h-.15Z"
              />
              <path
                id="path-3"
                className="invisible"
                d="M28,23.2c0-8.01-7.21-8.41-13.19-8.88v5.85c3.91,.32,7.13,.66,7.13,3.28,0,1.73-.95,3.21-3.08,4.03,.14,2.21,.63,4.56,1.75,6.47,5.03-1.94,7.39-6.28,7.39-10.74Z"
              />
              <path
                id="path-4"
                className="invisible"
                d="M20.61,33.95c-1.12-1.91-1.61-4.26-1.75-6.47-1.14,.44-2.62,.7-4.49,.7-1.35,0-2.71-.1-4-.36-1.05,2.06-1.6,4.5-1.43,6.73,1.72,.3,3.55,.45,5.52,.45,2.37,0,4.42-.39,6.15-1.05Z"
              />
              <path
                id="path-5"
                className="invisible"
                d="M10.37,27.83c-3.09-.61-5.77-2.12-6.83-5.4-.15-.34-.44-.48-.78-.34l-2.09,.82c-.49,.19-.68,.43-.68,.87v6.24c0,.29,.15,.58,.34,.72,2.48,2.06,5.33,3.24,8.6,3.81-.17-2.23,.39-4.66,1.43-6.73Z"
              />
            </svg>
          </div>
          <div id="loading" className="relative mt-[8px] h-[6px] w-[50px]">
            <div
              id="loading-progress"
              className="absolute top-1/2 left-0 z-10 h-full w-[4%] -translate-y-1/2 rounded-full bg-snow"
            ></div>
            <div className="absolute top-1/2 left-0 h-full w-full -translate-y-1/2 rounded-full bg-snow opacity-30"></div>
          </div>
        </div>
      </div>
    </>
  )
}
