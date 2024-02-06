import { useModal } from "@ebay/nice-modal-react"
import React from "react"
import { IApp } from "types"
import { useAppContext } from "./appContext"
import AppControl from "./AppControl"
import Toolbar from "../common/toolbars/Toolbar"
import IconSearch from "/app/assets/icons/System/Search.svg"
import IconShield from "/app/assets/icons/System/Shield.svg"

const AppBar = () => {
  const { AppBarElement } = useAppContext()
  return (
    <>
      <div className="NavigationBar absolute top-0 w-full z-50">{AppBarElement}</div>
    </>
  )
}

export default AppBar
