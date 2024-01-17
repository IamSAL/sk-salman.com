import { useModal } from "@ebay/nice-modal-react"
import React from "react"
import { IApp } from "types"
import { useAppContext } from "./appContext"
import AppControl from "./AppControl"
import Toolbar from "../common/toolbars/Toolbar"
import IconSearch from "/src/assets/icons/System/Search.svg"
import IconShield from "/src/assets/icons/System/Shield.svg"

const AppBar = () => {
  const { AppBarElement } = useAppContext()
  return (
    <>
      <div className="NavigationBar">{AppBarElement}</div>
    </>
  )
}

export default AppBar
