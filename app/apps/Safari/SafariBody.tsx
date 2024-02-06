import React, { useState } from "react"
import { checkURL } from "app/helpers/utils/common"
import websites from "app/misc/placeholder-data/websites"
import { SiteData, SiteSectionData } from "types"

interface SafariState {
    goURL: string
    currentURL: string
}

interface SafariProps {
    width?: number
}

interface NavProps {
    width: number
    setGoURL: (url: string) => void
}

interface NavSectionProps extends NavProps {
    section: SiteSectionData
}

const NavSection = ({ width, section, setGoURL }: NavSectionProps) => {
    const grid = width < 640 ? "grid-cols-4" : "grid-cols-9"

    return (
        <div className="x-[4px] mx-auto w-full max-w-screen-md p-[8px]">
            <div className="ml-2 text-[1.5rem] font-medium sm:text-[2rem]">{section.title}</div>
            <div className={`mt-3 grid grid-flow-row ${grid}`}>
                {section.sites.map((site: SiteData) => (
                    <div key={`safari-nav-${site.id}`} className="flex h-28 w-full items-center justify-center">
                        <div className="flex h-full w-full flex-col">
                            <div className="mx-auto h-[max-content] w-[max-content] rounded-md bg-white">
                                {site.img ? (
                                    <img
                                        className="mx-auto h-16 w-16 cursor-pointer rounded-md"
                                        src={site.img}
                                        alt={site.title}
                                        title={site.title}
                                        onClick={() => (site.inner ? () => setGoURL(site.link) : () => window.open(site.link))}
                                    />
                                ) : (
                                    <div
                                        className="mx-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-md text-black"
                                        onClick={() => (site.inner ? () => setGoURL(site.link) : () => window.open(site.link))}
                                    >
                                        <span className="text-[1.125rem]"> {site.title}</span>
                                    </div>
                                )}
                            </div>
                            <span className="mt-2 text-[0.875rem]">{site.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const numTracker = Math.floor(Math.random() * 99 + 1)

const NavPage = ({ width, setGoURL }: NavProps) => {
    const dark = true

    const grid = width < 640 ? "grid-cols-4" : "grid-cols-8"
    const span = width < 640 ? "col-span-3" : "col-span-7"

    return (
        <div
            className="safari-content c-text-black w-full h-full overflow-y-scroll bg-cover bg-center"
            style={{ backgroundImage: `url(${dark ? "a" : "b"})` }}
        >
            <div className=" min-h-full h-full w-full pt-8 bg-black/25">
                {/* Favorites */}
                <NavSection section={websites.favorites} setGoURL={setGoURL} width={width} />

                {/* Frequently Visited */}
                <NavSection section={websites.freq} setGoURL={setGoURL} width={width} />

                {/* Privacy Report */}
                <div className="x-[4px] b-[16px] mx-auto w-full max-w-screen-md p-[8px]">
                    <div className="text-[1.5rem] font-medium sm:text-[2rem]">Privacy Report</div>
                    <div
                        className={`mt-4 grid h-16 w-full ${grid} bg-black/35 rounded-xl text-sm shadow-md`}
                    >
                        <div className="col-span-1 col-start-1 flex items-center space-x-2">
                            <span className="i-fa-solid:shield-alt text-2xl" />
                            <span className="text-xl">{numTracker}</span>
                        </div>
                        <div className={`col-start-2 ${span} flex items-center px-[8px]`}>
                            In the last seven days, Safari has prevented {numTracker} tracker from profiling you.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NoInternetPage = () => {
    const dark = true

    return (
        <div
            className="safari-content w-full overflow-y-scroll bg-blue-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${dark ? "a" : "b"})` }}
        >
            <div className="bg-[rgba(255, 255, 255, 0.8)] flex h-full w-full items-center pb-10 backdrop-blur-[2px]">
                <div className="text-center">
                    <div className="text-2xl font-bold">You Are Not Connected to the Internet</div>
                    <div className="pt-4 text-sm">This page can not be displayed because your computer is currently offline.</div>
                </div>
            </div>
        </div>
    )
}

const SafariBody = ({ width }: SafariProps) => {
    const wifi = true
    const [state, setState] = useState<SafariState>({
        goURL: "",
        currentURL: "",
    })

    const setGoURL = (url: string) => {
        const isValid = checkURL(url)

        if (isValid) {
            if (url.substring(0, 7) !== "http://" && url.substring(0, 8) !== "https://") url = `https://${url}`
        } else if (url !== "") {
            url = `https://www.bing.com/search?q=${url}`
        }

        setState({
            goURL: url,
            currentURL: url,
        })
    }




    return (
        <div className="h-full w-full">

            {/* browser content */}
            {wifi ? (
                state.goURL === "" ? (
                    <NavPage setGoURL={setGoURL} width={width as number} />
                ) : (
                    <iframe title={"Safari clone browser"} src={state.goURL} className="safari-content w-full bg-white" />
                )
            ) : (
                <NoInternetPage />
            )}
        </div>
    )
}

export default SafariBody
