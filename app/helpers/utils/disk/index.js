import deleteFromIDB from "./disk.delete"
import dispatchIDB from "./disk.dispatch"
import searchInIDB from "./disk.read"
import writeInIDB from "./disk.write"

export const updateProgramData = (DISK) => (STORENAME, data, callback) => {
  if (window)
    dispatchIDB(DISK, STORENAME, writeInIDB(data))
      .then((res) => callback && callback({ data: res }))
      .catch((err) => callback && callback({ error: err }))
}

export const getProgramData = (DISK) => (STORENAME, key, callback) => {
  dispatchIDB(DISK, STORENAME, searchInIDB(key))
    .then((res) => callback && callback({ data: res }))
    .catch((err) => callback && callback({ error: err }))
}

export const deleteProgramData = (DISK) => (STORENAME, key, callback) => {
  dispatchIDB(DISK, STORENAME, deleteFromIDB(key))
    .then((res) => callback && callback({ data: res }))
    .catch((err) => callback && callback({ error: err }))
}

export const initDisk = (DB_NAME, DB_VERSION) => ({
  DB_NAME,
  DB_VERSION,
})
