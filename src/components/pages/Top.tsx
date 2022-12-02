import Image from 'next/image'
import { useEffect } from 'react'
import { animateApp, animateWallpaper } from '@libs/animation/desktop'
import { Menu } from '@components/parts/Top/Menu'
import { Switch } from '@components/common/Switch'
import { Window } from '@components/common/Window'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@libs/store'
import { animationSlice } from '@libs/store/animation'
import { windowSlice } from '@libs/store/window'

export const Top = () => {
  const dispatch = useDispatch()
  const animationState = useSelector((state: RootState) => state.animation)
  const windowState = useSelector((state: RootState) => state.window)

  useEffect(() => {
    animateWallpaper()

    if (animationState.animation.moveApp) {
      animateApp()
    }

    setTimeout(() => {
      const newAnimation = structuredClone(animationState.animation)
      newAnimation.switchOff = false
      newAnimation.moveApp = false
      dispatch(animationSlice.actions.updateAnimation(newAnimation))
    }, 2000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getApp = (id?: string) => {
    switch (id) {
      case 'folder':
        return <></>
      default:
        return <></>
    }
  }

  return (
    <>
      {animationState.animation.switchOff && <Switch type="off" />}
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
            onClick={() => {
              if (
                windowState.window.propsList.find((windowProps) => windowProps.id === 'folder') ===
                undefined
              ) {
                const newWindow = structuredClone(windowState.window)

                newWindow.propsList.push({
                  id: 'folder',
                  index: 0,
                  title: 'Folder',
                })

                dispatch(windowSlice.actions.updateWindow(newWindow))
              }
            }}
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
        <div id="window" className="absolute top-0 left-0 z-40">
          {windowState.window.propsList.map((props, index) => {
            const newProps = structuredClone(props)
            newProps.index = index
            newProps.contents = getApp(props.id)
            return <Window key={index} {...newProps}></Window>
          })}
        </div>
      </div>
    </>
  )
}
