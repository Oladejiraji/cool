import { createFileRoute } from '@tanstack/react-router'
import CanvasScene from '../components/landing-page/canvas-scene'
import HoverTooltip from '../components/landing-page/hover-tooltip'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="h-screen py-6">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <nav className="flex items-center justify-between w-[376px] mx-auto h-12 shadow px-3 rounded-[15px]">
            <h1 className="text-base geist-medium">foggy</h1>
            <div className="flex items-center gap-3 text-sm geist-medium">
              <p>Docs</p>
              <p>Products</p>
              <p>Pricing</p>
              <button className="bg-[#000000] text-white rounded-[11px] py-2 px-[10px]">
                <p>Free Trial</p>
              </button>
            </div>
          </nav>

          <div className="bg-[#F5F5F5] rounded-[20px] w-[276px] mx-auto mt-5 geist-medium text-[13px] flex items-center gap-1 px-2 py-1">
            <p className="text-[#828282] ">Foggy is currently raising.</p>
            <div className="flex items-center gap-1">
              <p className="text-[#282828] underline">learn more</p>
              <img src="/assets/right.png" alt="" className="w-2 h-auto" />
            </div>
          </div>
        </div>

        <div>
          <div className="relative ">
            <div className="absolute ">
              <img
                src="/assets/paint2.png"
                alt=""
                className="w-[432px] h-[432px] "
              />
            </div>

            <HoverTooltip />

            <CanvasScene />
          </div>
        </div>

        <div className="flex items-center w-[891px] justify-between">
          <div className="geist-normal w-[334px]">
            <h1 className="pb-1 text-2xl">AI Restoration at its Peak.</h1>
            <p className="text-sm text-[#646464] pb-4">
              Foggy makes restoration of pixelated and blurry photos as easy as
              waving a wand. No really, wave your cursor a few times and watch
              foggy work its magic.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[#E27625] text-[13px] p-1 bg-[#F5D6BE] rounded-[5px]">
                Image clean up
              </p>
              <p className="text-[#5CFE9D] text-[13px] p-1 bg-[#E7FBEF] rounded-[5px]">
                Generative fill
              </p>
              <p className="text-[#828282] text-[13px] p-1 bg-[#F5F5F5] rounded-[5px]">
                Generative fill
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#EFEFEF] p-1 rounded-[5px]">
              <input
                type="text"
                placeholder="Email Address here"
                className="px-2 text-sm bg-transparent geist-normal"
              />
              <button className="text-[#919191] p-1 bg-[#C7C7C7] rounded-[5px] text-sm geist-normal">
                Join Waitlist
              </button>
            </div>
            <p className="text-[#828282] geist-normal text-[13px] pt-1">
              be one of the first to get access to foggy
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
