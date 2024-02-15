import React, { useEffect, useRef } from 'react'
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import { useAppContext } from 'app/components/app-window/appContext';
import AppLoader from 'app/components/ui/AppLoader';
const Calendly = () => {
    const loaderRef = useRef<React.ElementRef<'div'>>(null)
    useEffect(() => {
        setTimeout(() => {
            const loader = loaderRef.current;
            if (loader) {
                loader.remove()
            }
        }, 2000);

        return () => {

        }
    }, [])

    const { app } = useAppContext()
    return <div className="w-full h-full relative">
        <InlineWidget url="https://calendly.com/sk_salman/experiment1et?hide_gdpr_banner=1" styles={{ width: "100%", height: "100%" }} />
        <div ref={loaderRef} className="absolute z-10 top-[42%] left-[42%]">
            <AppLoader app={app!!} />
        </div>
    </div>
}

export default Calendly