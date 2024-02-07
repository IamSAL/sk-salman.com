/* eslint-disable import/prefer-default-export */

import Calendar from "app/apps/Calendar"
import ComponentMobileTemp from "app/components/common/ComponentMobileTemp"

import { IAppTemplate, IPortfolio, IPortfolioType } from "types"
import { generateRandomWidgets } from "./generators"

export const Portfolios: IPortfolio[] = [
    {
        id: 104,
        name: "InternalPortfolio",
        icon: {
            svg: "/static/images/icons/ios-weather.svg",
            png: "/static/images/icons/PNG/Calendar.png",
        },
        status: {},
        launcherType: "PORTFOLIO",
        supports: ["DESKTOP", "MOBILE"],
        mobileComponent: ComponentMobileTemp,
        metadata: {
            title: "ExternalPortfolio", // The title of the app
            description: "System default launcher", // A short description or tooltip
            version: "0.0.1", // App version number
        },
        component: Calendar,
        config: {
            isHidden: false,
            initTitle: "Launchpad",
            initWindowWidth: 640,
            initWindowHeight: 480,
            startMaximized: true,
            isDefault: false,
            isPinned: true,
            template: IAppTemplate.WINDOW,
        },
        widgets: generateRandomWidgets(3, 7),
        type: IPortfolioType.INTERNAL,
        exploreURL: "",
        gallery: [],
        tags: [],
        thumbnailPath: "",
    },
    {
        id: 105,
        name: "ExternalPortfolio",
        icon: {
            svg: "/static/images/icons/ios-weather.svg",
            png: "/static/images/icons/PNG/Calendar.png",
        },
        status: {},
        launcherType: "PORTFOLIO",
        supports: ["DESKTOP", "MOBILE"],
        mobileComponent: ComponentMobileTemp,
        metadata: {
            title: "ExternalPortfolio", // The title of the app
            description: "System default launcher", // A short description or tooltip
            version: "0.0.1", // App version number
        },
        config: {
            isHidden: false,
            initTitle: "Launchpad",
            initWindowWidth: 640,
            initWindowHeight: 480,
            startMaximized: true,
            isDefault: false,
            isPinned: true,
            template: IAppTemplate.WINDOW,
        },
        widgets: generateRandomWidgets(3, 7),
        type: IPortfolioType.EXTERNAL,
        exploreURL: "https://iamsal.github.io/Dhaka-Bus-Route/home.html",
        gallery: [],
        tags: [],
        thumbnailPath: "",
    },
    {
        id: 106,
        name: "EmbedPortfolio",
        icon: {
            svg: "/static/images/icons/ios-weather.svg",
            png: "/static/images/icons/PNG/Calendar.png",
        },
        status: {},
        launcherType: "PORTFOLIO",
        supports: ["DESKTOP", "MOBILE"],
        metadata: {
            title: "EmbedPortfolio", // The title of the app
            description: "System default launcher", // A short description or tooltip
            version: "0.0.1", // App version number
        },
        config: {
            isHidden: false,
            initTitle: "Launchpad",
            initWindowWidth: 640,
            initWindowHeight: 480,
            startMaximized: true,
            isDefault: false,
            isPinned: true,
            template: IAppTemplate.WINDOW,
        },
        widgets: generateRandomWidgets(3, 7),
        type: IPortfolioType.EMBED,
        exploreURL: "",
        gallery: [],
        tags: [],
        thumbnailPath: "",
        iframeURL: ""
    },
    {
        id: 107,
        name: "InfoPortfolio",
        icon: {
            svg: "/static/images/icons/ios-weather.svg",
            png: "/static/images/icons/PNG/Calendar.png",
        },
        status: {},
        launcherType: "PORTFOLIO",
        supports: ["DESKTOP", "MOBILE"],
        metadata: {
            title: "InfoPortfolio", // The title of the app
            description: "System default launcher", // A short description or tooltip
            version: "0.0.1", // App version number
        },
        config: {
            isHidden: false,
            initTitle: "Launchpad",
            initWindowWidth: 640,
            initWindowHeight: 480,
            startMaximized: true,
            isDefault: false,
            isPinned: true,
            template: IAppTemplate.WINDOW,
        },
        widgets: generateRandomWidgets(3, 7),
        type: IPortfolioType.INFO,
        exploreURL: "",
        gallery: [],
        tags: [],
        thumbnailPath: "",
    },
]
