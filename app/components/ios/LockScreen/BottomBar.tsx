import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaMoon } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
const BottomBar = () => {
    return (
        <div className="BottomActions w-full px-4 absolute bottom-6 h-12 justify-between items-center inline-flex">
            <div className="Flashlight w-12 h-12 relative bg-neutral-900 bg-opacity-30 rounded-full backdrop-blur-xl flex justify-center items-center" >
                <Link href="https://github.com/IamSAL" target='_blank'> <TbBrandGithubFilled size={25} /></Link>
            </div>
            <div className="Focus justify-center items-center gap-1.5 flex">
                <div onClick={() => {
                    //@ts-expect-error
                    eruda && eruda.init();
                }}> <FaMoon size={20} /></div>

                <div className="SwipeUp text-white text-base font-normal font-['SF Pro Display'] leading-tight ">Swipe up</div>
            </div>
            <div className="Flashlight w-12 h-12 relative bg-neutral-900 bg-opacity-30 rounded-full backdrop-blur-xl flex justify-center items-center" >
                <Link href="https://www.linkedin.com/in/sk-salman-dev/"><FaLinkedinIn size={22} /></Link>
            </div>
        </div>
    )
}

export default BottomBar