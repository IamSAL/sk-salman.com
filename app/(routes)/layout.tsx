import "styles/tailwind.scss"
import "styles/globals.scss"
import { ModalsProvider } from "app/core/components"
import Provider from "app/core/redux/redux"
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
