import { useAutoAnimate } from "@formkit/auto-animate/react"
import Image from "next/image"
import React from "react"
import AppLauncher from "app/components/common/AppLauncher"
import { IApp } from "types"

type TProps = {
  apps: IApp[]
}
const AppSlides = ({ apps }: TProps) => {
  const [animeParent, setAnimations] = useAutoAnimate()

  return (
    <div className="md:h-[70vh] md:px-36 px-4">
      <div ref={animeParent} className="apps grid grid-cols-4 md:grid-cols-7 md:gap-14 gap-8">
        {apps?.map((app, idx) => {
          return (
            <AppLauncher key={app.id} appId={app.id}>
              <div className="flex flex-col items-center justify-center gap-2 text-center " key={app.id}>
                <Image src={app.icon.png} width={95} height={95} alt={app.name} />
                <h4 className="text-sm font-light text-white">{app.name}</h4>
              </div>
            </AppLauncher>
          )
        })}
      </div>
    </div>
  )
}

export default AppSlides
