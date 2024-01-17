import { IApp } from "types"
import React from "react"
import AppLauncher from "app/core/components/common/AppLauncher"
import Image from "next/image"
import { useAutoAnimate } from "@formkit/auto-animate/react"

type TProps = {
  apps: IApp[]
}
const AppSlides = ({ apps }: TProps) => {
  const [animeParent, setAnimations] = useAutoAnimate()

  return (
    <div className="px-36 h-[70vh]">
      <div ref={animeParent} className="apps grid gap-x-14 gap-y-14 grid-cols-7">
        {apps?.map((app, idx) => {
          return (
            <AppLauncher key={app.id} appId={app.id}>
              <div
                className="flex flex-col justify-center items-center gap-2 text-center "
                key={app.id}
              >
                <Image src={app.icon.png} width={95} height={95} alt={app.name} />
                <h4 className="text-white font-light text-sm">{app.name}</h4>
              </div>
            </AppLauncher>
          )
        })}
      </div>
    </div>
  )
}

export default AppSlides
