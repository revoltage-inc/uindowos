import TerminalSVG from '@assets/svg/top/terminal.svg'
import BatterySVG from '@assets/svg/top/battery.svg'
import ImeSVG from '@assets/svg/top/ime.svg'
import WifiSVG from '@assets/svg/top/wifi.svg'

export const Menu = () => {
  return (
    <>
      <header
        className="absolute top-0 left-0 z-30 flex h-[20px] w-full min-w-[500px] items-center justify-between bg-snow fill-[#647864] font-[hatch] text-[0.5rem] font-medium text-[#647864] drop-shadow"
        translate="no"
      >
        <div className="flex flex-nowrap items-center gap-4 pl-4">
          <TerminalSVG className="h-[12px]" />
          <span className="whitespace-nowrap">File</span>
          <span className="whitespace-nowrap">Edit</span>
          <span className="whitespace-nowrap">View</span>
          <span className="whitespace-nowrap">Profile</span>
          <span className="whitespace-nowrap">Scene Collection</span>
          <span className="whitespace-nowrap">Tools</span>
          <span className="whitespace-nowrap">Help</span>
        </div>
        <div className="flex items-center gap-3 pr-4">
          <BatterySVG className="w-[18px]" />
          <ImeSVG className="h-[12px]" />
          <WifiSVG className="h-[12px]" />
        </div>
      </header>
    </>
  )
}
