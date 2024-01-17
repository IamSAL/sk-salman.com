import Chance from "chance"
import AppStore from "app/apps/AppStore"
import PlaceHolderWidget from "app/core/components/widgets-bar/PlaceHolderWidget"
import { IApp, IAppTemplate, IWidget } from "types"
const AppIconPlaceHolder = "/static/images/icons/app-icons-placeholder.svg"
const generateRandomWidgets = (count, appId?): IWidget[] => {
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

const generateRandomApps = (count, appId?): IApp[] => {
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
        isHidden: true,
        initTitle: chance.name({}),
        initWindowWidth: 640,
        initWindowHeight: 480,
        startMaximized: true,
        isDefault: true,
        isPinned: false,
        template: IAppTemplate.WINDOW,
      },
    })
  }

  return randomApps
}

export { generateRandomWidgets, generateRandomApps }
