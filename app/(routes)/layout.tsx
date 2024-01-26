"use client"
import "styles/globals.scss"
import "styles/custom.scss"
import Script from "next/script"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { ModalsProvider } from "app/components"
import "app/core/config/modals"
import StartupScreen from "app/components/startup-screen/StartupScreen"
import DnDContextProvider from "app/components/wrappers/DnDContextProvider"
import store from "app/core/redux/redux"

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body className="dark">
        <style>
          {` body{
              display: block !important;
            }

            @keyframes applePulse {
  0% {

    opacity: 0.7;
  }
  50% {

    opacity: 1;
  }
  100% {

    opacity: 0.7;
  }
}

            #globalLoader {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
background-color: #000;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}`}
        </style>
        <StartupScreen />
        <DnDContextProvider>
          <Provider store={store}>
            <ModalsProvider>{children}</ModalsProvider>
          </Provider>
        </DnDContextProvider>
        {/* <Script src="/scripts/preloader.js" strategy="beforeInteractive" /> */}
      </body>
    </html>
  )
}
