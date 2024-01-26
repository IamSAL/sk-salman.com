import app from "next/app"
import { IApp, TAppStatus } from "types"

export const updateAppsInstances = (data: any, app: IApp) => {
  if (data.some((runningApp: IApp) => runningApp.id == app.id)) {
    return data
  }
  const newInstances: IApp[] = [...data, { ...app, status: { isFOREGROUND: true } }]
  return newInstances
}

export const updateAppStatuses = (prevApps: IApp[], app: IApp, newStatus: Partial<TAppStatus>) => {
  let newApps: any = JSON.parse(JSON.stringify(prevApps))
  return newApps?.map((instance: IApp) => {
    if (instance.id === app.id) {
      Object.assign(instance.status, newStatus)
    }
    return instance
  })
}

export const removeAppInstance = (data: IApp[], appId: any) => {
  let newData: IApp[] = []
  newData = data.filter((instance) => instance.id !== appId)
  return newData
}

export const appendRecentAppId = (prevIds: number[], appId: number) => {
  const filteredList = prevIds.filter((prevId) => prevId != appId)
  return [...filteredList, appId]
}
