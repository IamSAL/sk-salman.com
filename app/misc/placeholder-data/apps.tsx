/* eslint-disable import/prefer-default-export */

import AppStore from "app/apps/AppStore"
import AppStoreMobile from "app/apps/AppStore/AppStoreMobile"
import Blog from "app/apps/Blog"
import BlogMobile from "app/apps/Blog/BlogMobile"
import Calendar from "app/apps/Calendar"
import CalendarMobile from "app/apps/Calendar/CalendarMobile"
import Contacts from "app/apps/Contacts"
import ContactsMobile from "app/apps/Contacts/ContactsMobile"
import FaceTime from "app/apps/FaceTime"
import FaceTimeMobile from "app/apps/FaceTime/FaceTimeMobile"
import Finder from "app/apps/Finder"
import LaunchPad from "app/apps/Launchpad"
import Mail from "app/apps/Mail"
import Maps from "app/apps/Maps"
import Messages from "app/apps/Messages"
import MessagesMobile from "app/apps/Messages/MessagesMobile"
import Photos from "app/apps/Photos"
import RecentAppScreen from "app/apps/RecentApps"
import Safari from "app/apps/Safari"
import SystemPreferences from "app/apps/SystemPreferences"
import Terminal from "app/apps/Terminal"
import TerminalMobile from "app/apps/Terminal/TerminalMobile"
import VsCode from "app/apps/VsCode"
import WidgetsEditor from "app/apps/WidgetsEditor"
import ComponentMobileTemp from "app/components/common/ComponentMobileTemp"

import WidgetWeather from "app/components/widgets-bar/WidgetWeather"
import { IApp, IAppTemplate, IPortfolio } from "types"
import { generateRandomApps, generateRandomWidgets } from "./generators"
import { Portfolios } from "./portfolios"

export const apps: Array<IApp> = [
  {
    id: 13,
    name: "Weather",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/ios-weather.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    metadata: {
      title: "Weather", // The title of the app
      description: "Weather.com forecasts", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor as any,
    config: {
      isHidden: true,
      initTitle: "Weather",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WEBVIEW,
    },
    widgets: [
      {
        name: "Forecast",
        description: "See a compact view of current weather",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
      {
        name: "How's Temp",
        description: "See a compact view of temperature forecast.",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
      {
        name: "Weather Details",
        description: "See a compact view of current weather",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
    ],
  },
  {
    id: 0,
    name: "Finder",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Finder.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    metadata: {
      title: "Finder", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Finder,
    config: {
      isHidden: false,
      initTitle: "Finder",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: true,
      isDefault: true,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 1,
    name: "Launchpad",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Launchpad.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP"],
    mobileComponent: ComponentMobileTemp,
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: LaunchPad as any,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.IMMERSIVE,
    },
  },

  // {
  //   id: 2,
  //   name: "App Store",
  //   icon: {
  //     svg: "/static/images/icons/ios-weather.svg",
  //     png: "/static/images/icons/PNG/App-store.png",
  //   },
  //   status: {},
  //   launcherType: "APP",
  //   supports: ["DESKTOP", "MOBILE"],
  //   mobileComponent: AppStoreMobile,
  //   metadata: {
  //     title: "AppStore", // The title of the app
  //     description: "System default launcher", // A short description or tooltip
  //     version: "0.0.1", // App version number
  //   },
  //   component: AppStore,
  //   config: {
  //     isHidden: false,
  //     initTitle: "Launchpad",
  //     initWindowWidth: 1306,
  //     initWindowHeight: 804,
  //     startMaximized: true,
  //     isDefault: true,
  //     isPinned: false,
  //     template: IAppTemplate.WINDOW,
  //   },
  // },
  {
    id: 3,
    name: "Mail",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Mail.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    metadata: {
      title: "Mail", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Mail,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(4, 3),
  },
  {
    id: 4,
    name: "Safari",
    icon: {
      svg: "/static/images/icons/app-icons-safari.svg",
      png: "/static/images/icons/PNG/Safari.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Safari,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 1024,
      initWindowHeight: 768,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(7, 4),
  },
  {
    id: 5,
    name: "Photos",
    icon: {
      svg: "/static/images/icons/app-icons-photos.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Photos", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    component: Photos,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: false,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(2, 5),
  },
  {
    id: 6,
    name: "System Preferences",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Settings.png",
    },
    metadata: {
      title: "System Preferences", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: SystemPreferences,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 7,
    name: "Calendar",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Calendar.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: CalendarMobile,
    metadata: {
      title: "Calendar", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Calendar,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 581,
      initWindowHeight: 700,
      startMaximized: true,
      isDefault: false,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(3, 7),
  },
  {
    id: 8,
    name: "Messages",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: MessagesMobile,
    icon: {
      svg: "/static/images/icons/app-icons-messages.svg",
      png: "/static/images/icons/PNG/Messages.png",
    },
    metadata: {
      title: "Messages", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Messages,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(2, 8),
  },
  {
    id: 9,
    name: "Maps",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    icon: {
      svg: "/static/images/icons/app-icons-maps.svg",
      png: "/static/images/icons/PNG/Maps.png",
    },
    metadata: {
      title: "Maps", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Maps,
    config: {
      isHidden: false,
      initTitle: "Maps",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 10,
    name: "Contacts",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],

    icon: {
      svg: "/static/images/icons/app-icons-contacts.svg",
      png: "/static/images/icons/PNG/Contacts.png",
    },
    metadata: {
      title: "Contacts", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Contacts,
    mobileComponent: ContactsMobile,
    config: {
      isHidden: false,
      initTitle: "Contacts",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },

  {
    id: 11,
    name: "Visual Studio Code",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: ComponentMobileTemp,
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/vscode-app.png",
    },
    metadata: {
      title: "Visual Studio Code", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: VsCode,
    config: {
      isHidden: false,
      initTitle: "Vs code",
      initWindowWidth: 927,
      initWindowHeight: 652,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 111,
    name: "Blog",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: BlogMobile,
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/hashnode.png",
    },
    metadata: {
      title: "Blog", // The title of the app
      description: "Salman's blog at hashnode", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Blog,
    config: {
      isHidden: false,
      initTitle: "Blog",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: true,
      isDefault: true,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 12,
    name: "Widgets Editor",
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP"],
    mobileComponent: ComponentMobileTemp,
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/widget-icon.png",
    },
    metadata: {
      title: "Widgets", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor as any,
    config: {
      isHidden: false,
      initTitle: "Widgets",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: true,
      isDefault: true,
      template: IAppTemplate.IMMERSIVE,
    },
  },
  {
    id: 101,
    name: "Recent Apps",
    status: {},
    launcherType: "APP",
    supports: ["MOBILE"],
    mobileComponent: RecentAppScreen,
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/widget-icon.png",
    },
    metadata: {
      title: "Widgets", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor as any,
    config: {
      isHidden: true,
      initTitle: "Widgets",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: false,
      isDefault: true,
      template: IAppTemplate.IMMERSIVE,
    },
  },

  {
    id: 102,
    name: "Terminal",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Terminal.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP", "MOBILE"],
    mobileComponent: TerminalMobile,
    metadata: {
      title: "Terminal", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Terminal,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: false,
      isDefault: true,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(3, 7),
  },
  {
    id: 103,
    name: "FaceTime",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Face-time.png",
    },
    status: {},
    launcherType: "APP",
    supports: ["DESKTOP"],
    mobileComponent: FaceTimeMobile,
    metadata: {
      title: "FaceTime", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: FaceTime,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 852,
      initWindowHeight: 637,
      startMaximized: false,
      isDefault: true,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(3, 7),
  },
  ...Portfolios as IApp[],
]
