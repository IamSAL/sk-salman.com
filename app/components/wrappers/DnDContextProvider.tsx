import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'

const DnDContextProvider = ({children}:{children:React.ReactNode}) => {
  return (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}> {children} </DndProvider>
  )
}

export default DnDContextProvider