import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { wallpaperAnimation, iconAnimation } from '@libs/animation/TopAnimation'
import { useCookies } from 'react-cookie'
import { Menu } from '@components/parts/Top/Menu'

export const Top = () => {
  const state = useRef(false)
  const [cookies, setCookie] = useCookies(['switchOffAnimation', 'topAnimation'])

  useEffect(() => {
    if (!state.current && typeof window !== 'undefined') {
      state.current = true

      wallpaperAnimation()
      if (cookies.topAnimation !== 'false') {
        iconAnimation()
      }

      setCookie('topAnimation', false)
      setCookie('switchOffAnimation', false)
    }
  })

  return (
    <>
      <div className="flex h-full w-full flex-col bg-main">
        <Menu />
        <div className="absolute top-0 left-0 z-10 aspect-[1280/720] h-auto w-full">
          <div id="wallpaper" className="absolute top-0 left-0 aspect-[2560/7200] h-auto w-full">
            <Image className="" src="/img/top/wallpaper/wallpaper-loop.png" layout="fill" alt="" />
          </div>
        </div>
        <div id="desktop" className="absolute top-0 left-0 z-20 h-full w-full">
          <div
            id="palette"
            className="absolute top-[52px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/palette.png" width={48} height={48} alt="" />
          </div>
          <div
            id="music"
            className="absolute top-[124px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/music.png" width={48} height={48} alt="" />
          </div>
          <div
            id="stream"
            className="absolute top-[196px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/stream.png" width={48} height={48} alt="" />
          </div>
          <div
            id="folder"
            className="absolute top-[274px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/folder.png" width={48} height={39} alt="" />
          </div>
          <div
            id="tetris"
            className="absolute top-[340px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/tetris.png" width={48} height={48} alt="" />
          </div>
          <div
            id="controller"
            className="absolute top-[412px] right-[104px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/controller.png" width={48} height={48} alt="" />
          </div>

          <div
            id="uiscord"
            className="absolute top-[52px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/uiscord.png" width={48} height={48} alt="" />
          </div>
          <div
            id="ui"
            className="absolute top-[124px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/ui.png" width={48} height={48} alt="" />
          </div>
          <div
            id="uine"
            className="absolute top-[196px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/uine.png" width={48} height={48} alt="" />
          </div>
          <div
            id="memo"
            className="absolute top-[268px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/memo.png" width={48} height={48} alt="" />
          </div>
          <div
            id="camera"
            className="absolute top-[340px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/camera.png" width={48} height={48} alt="" />
          </div>
          <div
            id="mail"
            className="absolute top-[412px] right-[32px] h-[48px] w-[48px] rounded-md drop-shadow-sm"
          >
            <Image src="/img/top/desktop/mail.png" width={48} height={48} alt="" />
          </div>
        </div>
        <div id="window" className="absolute top-0 left-0 z-40 h-full w-full"></div>
      </div>
    </>
  )
}
