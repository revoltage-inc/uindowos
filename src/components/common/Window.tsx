import { useEffect, useState, useRef, ReactElement, DragEvent } from 'react'
import Draggable from 'react-draggable'
import CloseButtonSVG from '@assets/svg/common/window/close-button.svg'
import MaximizeButtonSVG from '@assets/svg/common/window/maximize-button.svg'
import MinimizeButtonSVG from '@assets/svg/common/window/minimize-button.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@libs/store'
import { windowSlice } from '@libs/store/window'

export interface Props {
  id: string
  index: number
  title?: string
  titleBarColor?: 'royal-blue' | 'khaki' | 'dark-olive'
  width?: number
  height?: number
  positionX?: number
  positionY?: number
  contents?: ReactElement
}

export const Window = (props: Props) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.window)

  const nodeRef = useRef(null)
  const [width, setWidth] = useState(props.width ? (props.width >= 200 ? props.width : 200) : 850)
  const [height, setHeight] = useState(
    props.height ? (props.height >= 200 ? props.height : 200) : 500
  )
  const [positionX, setPositionX] = useState(
    props.positionX === undefined ? (window.innerWidth - width) / 2 : props.positionX
  )
  const [positionY, setPositionY] = useState(
    props.positionY === undefined ? 100 : props.positionY
    // positionY === undefined ? (window.innerHeight - height) / 2 : positionY
  )
  const [resizing, setResizing] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const resizeTop = (event: DragEvent<HTMLDivElement>) => {
    if (event.clientY !== 0) {
      const moveY = positionY - event.clientY
      const newHeight = height + moveY
      if (newHeight >= 200) {
        setHeight(newHeight)
        setPositionY(positionY - moveY)
      }
    }
  }

  const resizeBottom = (event: DragEvent<HTMLDivElement>) => {
    if (event.clientY !== 0) {
      const newHeight = event.clientY - positionY - 42
      if (newHeight >= 200) setHeight(newHeight)
    }
  }

  const resizeLeft = (event: DragEvent<HTMLDivElement>) => {
    if (event.clientX !== 0) {
      const moveX = positionX - event.clientX
      const newWidth = width + moveX
      if (newWidth >= 200) {
        setWidth(newWidth)
        setPositionX(positionX - moveX)
      }
    }
  }

  const resizeRight = (event: DragEvent<HTMLDivElement>) => {
    if (event.clientX !== 0) {
      const newWidth = event.clientX - positionX
      if (newWidth >= 200) setWidth(newWidth)
    }
  }

  const resizeMaximized = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setPositionX(0)
    setPositionY(0)
  }

  const closeWindow = () => {
    // TODO: Close window function here
  }

  useEffect(() => {
    // Update window maximized
    if (
      width === window.innerWidth &&
      height === window.innerHeight &&
      positionX === 0 &&
      positionY === 0
    ) {
      setIsMaximized(true)
    } else {
      setIsMaximized(false)
    }

    // Update Window size and position
    const newWindow = structuredClone(state.window)
    newWindow.propsList[props.index].width = width
    newWindow.propsList[props.index].height = height
    newWindow.propsList[props.index].positionX = positionX
    newWindow.propsList[props.index].positionY = positionY
    dispatch(windowSlice.actions.updateWindow(newWindow))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, positionX, positionY])

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        handle=".windowHeader"
        position={{ x: positionX, y: positionY }}
        onDrag={(_, data) => {
          setPositionX(data.x)
          setPositionY(data.y)
        }}
      >
        <div
          ref={nodeRef}
          id={props.id}
          className={[
            'relative flex flex-col overflow-hidden bg-snow',
            isMaximized ? '' : 'rounded-2xl',
          ].join(' ')}
          style={{
            boxShadow: '8px 8px 0px 0 rgba(150, 140, 130, 0.4)',
            width: width + 'px',
            height: height + 'px',
          }}
        >
          {/* ResizeArea */}
          <>
            {/* Top */}
            <div
              className="absolute -top-2 left-3 z-10 h-3 w-[calc(100%-24px)] cursor-ns-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => resizeTop(event)}
            ></div>
            {/* Bottom */}
            <div
              className="absolute -bottom-2 left-3 z-10 h-3 w-[calc(100%-24px)] cursor-ns-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => resizeBottom(event)}
            ></div>
            {/* Left */}
            <div
              className="absolute top-3 -left-2 z-10 h-[calc(100%-24px)] w-3 cursor-ew-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => {
                resizeLeft(event)
              }}
            ></div>
            {/* Right */}
            <div
              className="absolute top-3 -right-2 z-10 h-[calc(100%-24px)] w-3 cursor-ew-resize"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => resizeRight(event)}
            ></div>
            {/* TopLeft */}
            <div
              className="absolute -top-2 -left-2 z-10 h-5 w-5 cursor-nwse-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => {
                resizeTop(event)
                resizeLeft(event)
              }}
            ></div>
            {/* TopRight */}
            <div
              className="absolute -top-2 -right-2 z-10 h-5 w-5 cursor-nesw-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => {
                resizeTop(event)
                resizeRight(event)
              }}
            ></div>
            {/* BottomLeft */}
            <div
              className="absolute -bottom-2 -left-2 z-10 h-5 w-5 cursor-nesw-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => {
                resizeBottom(event)
                resizeLeft(event)
              }}
            ></div>
            {/* BottomRight */}
            <div
              className="absolute -bottom-2 -right-2 z-10 h-5 w-5 cursor-nwse-resize"
              draggable="true"
              onDragStart={() => setResizing(true)}
              onDragEnd={() => setResizing(false)}
              onDrag={(event) => {
                resizeBottom(event)
                resizeRight(event)
              }}
            ></div>
          </>

          {/* Header */}
          <div
            className={[
              'windowHeader',
              'flex h-[42px] min-h-[42px] w-full items-center justify-between gap-2',
              // HACK: If className is dynamic, Tainwind won't include CSS, so include it in comments
              // 'bg-royal-blue',
              // 'bg-khaki',
              // 'bg-dark-olive'
              'bg-' + (props.titleBarColor ? props.titleBarColor : 'royal-blue'),
            ].join(' ')}
          >
            <div className="ml-4 flex w-[70px] items-center gap-x-2">
              <CloseButtonSVG
                className="h-[18px] w-[18px] fill-snow drop-shadow-sm"
                onClick={closeWindow}
              />
              <MaximizeButtonSVG
                className="h-[18px] w-[18px] fill-snow drop-shadow-sm"
                onClick={resizeMaximized}
              />
              <MinimizeButtonSVG className="h-[18px] w-[18px] fill-snow drop-shadow-sm" />
            </div>
            <span className="select-none overflow-hidden text-ellipsis whitespace-nowrap font-[hatch] text-xs font-bold text-snow drop-shadow-sm">
              {props.title}
            </span>
            <div className="mr-4 w-[70px]"></div>
          </div>

          {/* Contents */}
          <div
            className={[
              'h-full w-full overflow-auto whitespace-pre-wrap',
              // HACK: Disable select while resizing
              resizing ? 'select-none' : '',
            ].join(' ')}
          >
            {props.contents}
          </div>
        </div>
      </Draggable>
    </>
  )
}
