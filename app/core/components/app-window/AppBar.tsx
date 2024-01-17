import React from "react"
import AppControl from "./AppControl"
import Toolbar from "../common/toolbars/Toolbar"
import IconSearch from "/src/assets/icons/System/Search.svg"
import IconShield from "/src/assets/icons/System/Shield.svg"
import { useModal } from "@ebay/nice-modal-react"
import { IApp } from "types"
import { useAppContext } from "./appContext"

const AppBar = () => {
  const { AppBarElement } = useAppContext()
  return (
    <>
      <div className="NavigationBar">{AppBarElement}</div>
    </>
  )
}

export default AppBar
