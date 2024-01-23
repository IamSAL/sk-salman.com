"use client"
import "styles/globals.scss"
import "styles/custom.scss"
import { Provider } from "react-redux"
import { ModalsProvider } from "app/components"
import "app/core/config/modals"
import DnDContextProvider from "app/components/wrappers/DnDContextProvider"
import store from "app/core/redux/redux"

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="dark">
        <DnDContextProvider>
          <Provider store={store}>
            <ModalsProvider>{children}</ModalsProvider>
          </Provider>
        </DnDContextProvider>
      </body>
    </html>
  )
}
