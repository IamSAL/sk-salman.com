import Chance from "chance"
import AppStore from "app/apps/AppStore"
import PlaceHolderWidget from "app/components/widgets-bar/PlaceHolderWidget"
import { IApp, IAppTemplate, IWidget } from "types"
const AppIconPlaceHolder = "/static/images/icons/app-icons-placeholder.svg"
const generateRandomWidgets = (count: number, appId?: number): IWidget[] => {
  let chance = new Chance()

  let randomWidgets: IWidget[] = []

  for (let i = 1; i <= count; i++) {
    randomWidgets.push({
      name: chance.name({}),
      description: chance.sentence({ words: 16 }),
      multiSized: chance.bool({ likelihood: 90 }),
      appId,
      component: PlaceHolderWidget,
    })
  }

  return randomWidgets
}

const generateRandomApps = (count: number, appId?: number): IApp[] => {
  let chance = new Chance()

  let randomApps: IApp[] = []

  for (let i = 1; i <= count; i++) {
    randomApps.push({
      id: count + i,
      name: chance.name({}),
      icon: {
        svg: AppIconPlaceHolder,
        png: "/static/images/icons/PNG/app-icons-placeholder.png",
      },
      status: {},
      metadata: {
        title: chance.name({}), // The title of the app
        description: chance.paragraph(), // A short description or tooltip
        version: chance.android_id(), // App version number
      },
      component: AppStore,
      config: {
        isHidden: false,
        initTitle: chance.name({}),
        initWindowWidth: 640,
        initWindowHeight: 480,
        startMaximized: true,
        isDefault: false,
        isPinned: false,
        template: IAppTemplate.WINDOW,
      },
      supports: ["DESKTOP", "MOBILE"]
    })
  }

  return randomApps
}

export { generateRandomWidgets, generateRandomApps }
