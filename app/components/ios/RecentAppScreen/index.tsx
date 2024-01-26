import React from 'react'
import { useDispatch } from 'react-redux'
import { useSwipeable } from 'react-swipeable'
import { terminateApp } from 'app/core/redux/memory/memory.slice'
import { apps } from 'app/misc/placeholder-data/apps'

type Props = {

}
const RecentAppScreen = () => {
    const dispatch = useDispatch();
    const RecentApp = apps.find((app) => app.id == 101)
    const handles = useSwipeable({
        onSwipedDown: (e) => {
            console.log(e)
            if (e.deltaY > 50 && RecentApp) {
                dispatch(terminateApp(RecentApp.id))
            }
        }
    })
    return (
        <div {...handles} className='h-screen w-screen  absolute top-0 left-0  py-5 bg-red-500/20 '>
            <div className="boxes h-full w-full flex justify-center items-center">
                <div className="box h-[75%] w-[75%] bg-black/50 rounded-3xl">

                </div>
            </div>
        </div>
    )
}

export default RecentAppScreen