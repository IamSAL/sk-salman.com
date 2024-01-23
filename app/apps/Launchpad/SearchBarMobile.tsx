import React, { useState } from "react"
import IconSearch from "app/assets/icons/System/Search.svg"
import SearchScreen from "app/components/ios/SearchScreen"
const SearchBarMobile = () => {


    return (
        <div className="mt-4 flex justify-center align-middle">
            <div className="Search relative h-7 w-20 rounded-2xl bg-neutral-800/50 backdrop-blur-3xl" >
                <div className="Content inline-flex h-full w-full items-center justify-center gap-1">
                    <IconSearch color="white" fontSize={"20px"} />
                    <div className="Search font-['SF Pro Text'] text-center text-xs font-medium leading-none text-white">
                        Search
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBarMobile
