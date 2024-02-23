import React from "react"
import { GoQuestion } from "react-icons/go"
import { IoIosLaptop } from "react-icons/io"
import { IoMdTabletPortrait } from "react-icons/io"
import { IoIosNavigate } from "react-icons/io"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { TbNavigationEast } from "react-icons/tb"
import { useAppContext } from "app/components/app-window/appContext"
import SeeMore from "app/components/ui/SeeMore"
import { IPortfolio } from "types"
import BadgeSlider from "./BadgeSlider"
import ScreenshotSlider from "./ScreenshotSlider"

const AppDetail = () => {
    const { app } = useAppContext();
    const appInfo = app as IPortfolio
    return (
        <div className="h-full w-full  overflow-y-auto overflow-x-hidden p-5 pb-16 dark:bg-md-dark-surface">
            <div className="flex gap-6">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-24 w-24" src={appInfo?.icon.png} alt="App" />
                </div>
                <div>
                    {" "}
                    <h5 className="mb-0 text-xl font-extrabold text-gray-900 dark:text-white">{appInfo?.metadata.title}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{appInfo.metadata.description}</span>
                    <div className="mt-4 flex ">
                        <a
                            href={appInfo.exploreURL}
                            target="_blank"
                            className="inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer"
                        >
                            Visit App
                        </a>
                        <a
                            href={appInfo.metadata.source}
                            target="_blank"
                            className="ms-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" rel="noreferrer"
                        >
                            View Source
                        </a>
                    </div>
                </div>
            </div>
            <hr className="my-4 opacity-30" />
            {appInfo.features && <BadgeSlider badges={appInfo.features} />}

            <div className="my-8 p-4">
                <ScreenshotSlider gallery={appInfo.gallery} />
            </div>

            <div className="flex items-end gap-2">
                <div className="flex items-end">
                    <IoIosLaptop />
                    <IoMdTabletPortrait />
                    <IoPhonePortraitOutline />
                </div>
                <span className="font-semibold text-gray-400">Responsive UI using TailwindCSS</span>
            </div>

            <div className="flex w-full justify-between gap-4 py-4">
                <div className="text-left text-sm">
                    <SeeMore
                        words={26}
                        text={appInfo?.details || ""}
                    ></SeeMore>
                </div>
                <div className="links ">
                    <h4 className="text-xl text-blue-600 shadow-lg">Resources</h4>
                    <a href={appInfo.metadata?.website} target="_blank" rel="noreferrer">
                        <div className="flex items-center justify-end text-gray-500">
                            <div>Website</div> <TbNavigationEast />
                        </div>
                    </a>
                    <a href={appInfo?.metadata.source} target="_blank" rel="noreferrer"><div className="flex items-center justify-end text-gray-500">
                        <div>Code</div> <GoQuestion />
                    </div></a>
                </div>
            </div>
            <hr className="my-4 opacity-30" />
            <h4 className="text-3xl">Information</h4>
            <div className="my-4 grid grid-cols-2 gap-5">
                {appInfo.infos?.map((info, idx) => {
                    return (
                        <div key={idx} className="badge flex flex-col  items-start justify-start">
                            <h4 className="font-bold text-gray-500">{info.name}</h4>

                            <div className="badge-footer text-gray-200">{info.value}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AppDetail
