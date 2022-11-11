import { useRef, ReactElement } from 'react'
import Draggable from 'react-draggable'
import CloseButtonSVG from '@assets/svg/common/window/close-button.svg'
import MaximizeButtonSVG from '@assets/svg/common/window/maximize-button.svg'
import MinimizeButtonSVG from '@assets/svg/common/window/minimize-button.svg'

export interface Args {
  title?: string
  titleBarColor?: 'royal-blue' | 'khaki' | 'dark-olive'
  width?: number
  height?: number
  children: ReactElement
}

export const Window = ({
  title,
  titleBarColor = 'royal-blue',
  width = 850,
  height = 500,
  children,
}: Args) => {
  const nodeRef = useRef(null)

  // HACK: Set the window so that it does not fall below minimum width.
  if (width < 300) {
    width = 300
  }
  if (height < 300) {
    height = 300
  }

  return (
    <>
      <Draggable nodeRef={nodeRef} handle=".windowHeader" defaultPosition={{ x: 0, y: 0 }}>
        <div
          ref={nodeRef}
          className="relative flex flex-col rounded-2xl bg-snow"
          style={{
            boxShadow: '8px 8px 0px 0 rgba(150, 140, 130, 0.4)',
            width: width + 'px',
            height: height + 'px',
          }}
        >
          {/* Header */}
          <div
            className={[
              'windowHeader',
              'flex h-[42px] w-full items-center justify-between rounded-t-2xl',
              // HACK: If className is dynamic, Tainwind won't include CSS, so include it in comments.
              // 'bg-royal-blue',
              // 'bg-khaki',
              // 'bg-dark-olive'
              'bg-' + titleBarColor,
            ].join(' ')}
          >
            <div className="ml-4 flex w-[70px] items-center gap-x-2">
              <CloseButtonSVG className="h-[18px] w-[18px] fill-snow drop-shadow-sm" />
              <MaximizeButtonSVG className="h-[18px] w-[18px] fill-snow drop-shadow-sm" />
              <MinimizeButtonSVG className="h-[18px] w-[18px] fill-snow drop-shadow-sm" />
            </div>
            <span className="font-[hatch] text-xs font-bold text-snow drop-shadow-sm">{title}</span>
            <div className="mr-4 w-[70px]"></div>
          </div>

          {/* Contents */}
          <div className="h-full w-full overflow-hidden p-1">
            <div className="h-full w-full">{children}</div>
          </div>
        </div>
      </Draggable>
    </>
  )
}
