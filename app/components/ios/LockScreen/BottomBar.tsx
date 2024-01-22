import React from 'react'
import { TbBrandGithubFilled} from "react-icons/tb";
import { FaLinkedinIn, FaMoon } from "react-icons/fa6";
const BottomBar = () => {
  return (
      <div className="BottomActions w-full px-4 absolute bottom-6 h-12 justify-between items-center inline-flex">
          <div className="Flashlight w-12 h-12 relative bg-neutral-900 bg-opacity-30 rounded-full backdrop-blur-xl flex justify-center items-center" >
              <TbBrandGithubFilled size={25}/>
          </div>
          <div className="Focus justify-center items-center gap-1.5 flex">
              <FaMoon size={20} />
              <div className="SwipeUp text-white text-base font-normal font-['SF Pro Display'] leading-tight ">Swipe up</div>
          </div>
          <div className="Flashlight w-12 h-12 relative bg-neutral-900 bg-opacity-30 rounded-full backdrop-blur-xl flex justify-center items-center" >
              <FaLinkedinIn size={22} />
          </div>
      </div>
  )
}

export default BottomBar