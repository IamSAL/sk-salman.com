import { ReactNode } from "react"

export type Role = "ADMIN" | "USER"

export type TAppStatus = {
  isMAXIMIZED: boolean
  isLOADING: boolean
  isFOREGROUND: boolean
  isHidden: boolean
}
export type ISizes = "S" | "M" | "L"
export type APP_SUPPORTS = "DESKTOP" | "MOBILE"
export type WidgetProps = {
  size?: ISizes
  className?: string
  isEditing?: boolean
}

export interface IWidget {
  name: string
  description: string
  multiSized: boolean
  component: (WidgetProps: any) => JSX.Element
  appId?: number
}
export interface IApp {
  // Basic Information
  id: number
  name: string
  launcherType: "APP" | "PORTFOLIO"
  icon: {
    svg: string
    png: string
  }
  // Status and Behavior
  status: Partial<TAppStatus>
  // Metadata
  metadata: {
    title: string // The title of the app
    description?: string // A short description or tooltip
    version?: string // App version number
    author?: string // App author or developer
    website?: string // App's official website URL
    source?: string
    details?: string
  }
  // UI and Layout
  component: () => JSX.Element // The React component that represents the app,
  mobileComponent?: () => JSX.Element // The React component that represents the app
  config: {
    isHidden: boolean
    initTitle?: string // Initial window title
    initWindowWidth: number // Initial window width (e.g., "800px")
    initWindowHeight: number // Initial window height (e.g., "600px")
    startMaximized: boolean
    isPinned: boolean
    isDefault: boolean
    template: IAppTemplate
  }
  // Windows and Tabs (if applicable)
  windows?: IAppWindow[] // An array of open windows or tabs
  widgets?: IWidget[]
  supports: Array<APP_SUPPORTS>
}

export enum IAppTemplate {
  WINDOW,
  IMMERSIVE,
  WEBVIEW,
}

// Interface for representing an app window or tab
export interface IAppWindow {
  id: number
  title: string
  content: React.ReactNode // Content displayed in the window/tab
  isMaximized: boolean // Is the window/tab maximized?
  // Other window-specific properties (e.g., position, size)
}

// Interface for managing notifications within the app
export interface INotification {
  id: number
  content: string // Notification message or content
  timestamp: Date // Timestamp when the notification was created
  isRead: boolean // Has the notification been read?
  // Other notification-specific properties (e.g., actions)
}

// Interface for defining keyboard shortcuts
export interface IShortcut {
  id: number
  keyCombination: string // Keyboard combination (e.g., "Ctrl+C")
  action: () => void // Function to execute when the shortcut is triggered
  description: string // Description of the shortcut
}

// Interface for defining context menu items
export interface IMenuItem {
  id: number
  label: string // Label or text of the menu item
  action: () => void // Function to execute when the item is clicked
  isEnabled: boolean // Is the item enabled (clickable)?
  // Other menu item-specific properties (e.g., icons)
}

export const DROPPABLES = {
  WIDGET: "WIDGET",
  SYSTEM_WIDGET: "SYSTEM_WIDGET",
} as const

export const DROPPABLE_ACTIONS = {
  COPY: "COPY",
  MOVE: "MOVE",
} as const

export interface IDroppableItem<T> {
  payload: T
  action: keyof typeof DROPPABLE_ACTIONS
}

export enum DOCK_STATUS {
  STICKY,
  NORMAL,
  HOVER,
  HIDDEN,
}

export interface SiteData {
  id: string
  title: string
  img?: string
  link: string
  inner?: boolean
}

export interface SiteSectionData {
  title: string
  sites: SiteData[]
}

export interface WebsitesData {
  favorites: SiteSectionData
  freq: SiteSectionData
}

export interface TerminalData {
  id: string
  title: string
  type: string
  content?: JSX.Element | string
  children?: TerminalData[]
}
export type ExcludeFields<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PORTFOLIO_TAGS =
  | "WEBSITE"
  | "APP"
  | "CLI"
  | "PET"
  | "BUSINESS"
  | "WORDPRESS"
  | "REACT"
  | "FLUTTER"
  | "NATIVE"

export type IGalleryItem = { type: "image" | "video" | "document"; path: string }
export type IFeatureItem = {
  title: string
  value: string | ReactNode
  footer: string
}
export type IInfoItem = {
  name: string
  value: string
}

export enum IPortfolioType {
  INTERNAL,
  EMBED,
  INFO,
  EXTERNAL,
}

interface CommonPortfolioProps extends ExcludeFields<IApp, "component"> {
  thumbnailPath: string
  gallery: Array<IGalleryItem>
  tags: Array<PORTFOLIO_TAGS>
  details?: string
  features?: Array<IFeatureItem>
  infos?: Array<IInfoItem>
}

type EmbedProps = CommonPortfolioProps & { type: IPortfolioType.EMBED; iframeURL: string; exploreURL?: string }
type ExternalProps = CommonPortfolioProps & { type: IPortfolioType.EXTERNAL; iframeURL?: never; exploreURL: string }
export type InfoProps = CommonPortfolioProps & {
  type: IPortfolioType.INFO
  iframeURL?: never
  exploreURL?: string
}
type InternalProps = CommonPortfolioProps & {
  type: IPortfolioType.INTERNAL
  component: IApp["component"]
  iframeURL?: never
  exploreURL?: string
}

export type IPortfolio = EmbedProps | ExternalProps | InfoProps | InternalProps
