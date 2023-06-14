import React from 'react'
import Marquee from 'react-fast-marquee'

const CanvasCard = () => {
  return (
    <div
    className="w-full h-auto"
    style={{ backgroundImage: "url(icons/BigGrid.svg)" }}
  >
    <div className="w-full h-[9.188rem] border-b-[0.313rem] border-white bg-black flex justify-center items-center ">
      <div className="flex gap-6">
        <div>
          <img src="icons/RaceArrow.svg" />
        </div>
        <h1 className="font-Eskell_Display font-light text-5xl tracking-[1px] text-white">
          My life basically revolves around
        </h1>
        <div className="rotate-180">
          <img src="icons/RaceArrow.svg" />
        </div>
      </div>
    </div>

    {/* stickers */}
    <div className="h-[41rem] relative">
      <img
        src="icons/STICKER-2.svg"
        className="absolute top-[108px] left-[113.25px]"
      />
      <img
        src="icons/Rectangle.svg"
        className="absolute top-[150px] left-[444.25px]"
      />
      <img
        src="icons/Rectangle1.svg"
        className="absolute top-[249.32px] left-[84.27px]"
      />
      <img
        src="icons/Rectangle2.svg"
        className="absolute top-[230px] left-[267.64px]"
      />
      <img
        src="icons/sticker-one-yellow.svg"
        className="absolute top-[168.64px] right-[85.54px]"
      />
      <img
        src="icons/STICKER-3 1.svg"
        className="absolute top-[323px] right-[235.17px]"
      />
      <img
        src="icons/Rectangle3.svg"
        className="absolute top-[343px] right-[67.17px]"
      />
    </div>
    <div>
      <Marquee>
        <div className="flex h-[63px] items-center bg-[#00030a] ">
          <div className="flex gap-[21.27px] mr-[20.51px]">
            <img src="icons/WARNING_ GRAPHIC_CONTENT.svg" />
            <img src="icons/vector (1).svg" />
          </div>
          <div className="flex gap-[21.27px] mr-[20.51px]">
            <img src="icons/WARNING_ GRAPHIC_CONTENT.svg" />
            <img src="icons/vector (1).svg" />
          </div>
          <div className="flex gap-[21.27px] mr-[20.51px]">
            <img src="icons/WARNING_ GRAPHIC_CONTENT.svg" />
            <img src="icons/vector (1).svg" />
          </div>
        </div>
      </Marquee>
    </div>
  </div>
  )
}

export default CanvasCard