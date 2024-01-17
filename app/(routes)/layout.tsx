"use client"
import "styles/tailwind.scss"
import "styles/globals.scss"
import { Provider } from "react-redux"
import { ModalsProvider } from "app/components"

import store from "app/core/redux/redux"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ModalsProvider>{children}</ModalsProvider>
        </Provider>
      </body>
    </html>
  )
}
