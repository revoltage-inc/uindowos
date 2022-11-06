import Image from 'next/image'
import { useEffect } from 'react'
import { wallpaperAnimation } from '@libs/animation/WallpaperAnimation'
import { appMoveAnimation } from '@libs/animation/AppMoveAnimation'
import { Menu } from '@components/parts/Top/Menu'
import { Switch } from '@components/common/Switch'
import { Window } from '@components/common/Window'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@libs/store'
import { uindowosSlice } from '@libs/store/uindowos'

export const Top = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.uindowos)

  useEffect(() => {
    wallpaperAnimation()
    if (state.uindowos.appMoveAnimation) {
      appMoveAnimation()
    }

    const newUindowOS = JSON.parse(JSON.stringify(state.uindowos)) as typeof state.uindowos
    newUindowOS.terminalAnimation = false
    newUindowOS.switchOffAnimation = false
    newUindowOS.appMoveAnimation = false
    dispatch(uindowosSlice.actions.updateUindowOS(newUindowOS))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Switch type="off" />
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
        <div id="window" className="absolute top-0 left-0 z-40 h-full w-full">
          <Window>
            <p>test</p>
          </Window>
        </div>
      </div>
    </>
  )
}
