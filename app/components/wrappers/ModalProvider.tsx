'use client';
import NiceModal from "@ebay/nice-modal-react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { ReactNode } from "react";

const ModalsProvider = ({ children }:{children:ReactNode}) => {
  const modals = useSelector((s: AppState) => s.modals)
  const dispatch = useDispatch()
  return (
    <NiceModal.Provider modals={modals} dispatch={dispatch}>
      {children}
    </NiceModal.Provider>
  )
}

export default ModalsProvider
