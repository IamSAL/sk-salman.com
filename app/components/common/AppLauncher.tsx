import { useRouter } from "next/navigation"
import React, { Children } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useWindowSize } from "react-use"
import { startApp, terminateApp, updateAppStatus } from "app/core/redux/memory/memory.slice"
import { AppState } from "app/core/redux/redux"
import { setMaximized } from "app/core/redux/system/system.slice"
import { apps } from "app/misc/placeholder-data/apps"
import { IApp, IAppTemplate, IPortfolio, IPortfolioType } from "types"

export interface IAppLauncherProps {
  children: React.ReactNode
  appId: number
}

const AppLauncher = ({ children, appId }: IAppLauncherProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const app = apps.find((app) => app.id == appId)
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const runningInstance = runningApps.find((instance) => instance.id === appId)
  const { width } = useWindowSize()
  const isMobile = width < 1000;

  const triggerApp = (app: IApp) => {
    switch (app.config.template) {
      case IAppTemplate.IMMERSIVE:
        if (runningInstance) {
          dispatch(terminateApp(app.id))
        }
      case IAppTemplate.WINDOW:
        //close all immersive apps
        runningApps.forEach((runningApp) => {
          if (runningApp.config.template === IAppTemplate.IMMERSIVE) {
            dispatch(terminateApp(runningApp.id))
            // dispatch(setMaximized(false))
          }
        })
      default:
        if (runningInstance) {
          dispatch(updateAppStatus([app, { isHidden: false, isFOREGROUND: true }]))
        } else {
          dispatch(startApp(app))
        }
        break
    }
  }
  const launchApp = () => {

    if (app) {

      if (app.launcherType == "APP") {
        triggerApp(app)
      } else if (app.launcherType === "PORTFOLIO") {
        const portfolio = app as IPortfolio;
        switch (portfolio.type) {
          case IPortfolioType.EXTERNAL:
            window.open(portfolio.exploreURL, "_blank")
            break;
          case IPortfolioType.INTERNAL:

          case IPortfolioType.EMBED:

          case IPortfolioType.INFO:


          default:
            triggerApp(portfolio as IApp)
            break
        }
      }

    }
  }
  return <span onClick={launchApp}>{children}</span>
}

export default AppLauncher
