import React from 'react'

const MobileView = () => {
  return (
      <main className="h-full w-full">
          <div className="h-full w-full bg-black rounded-4xl overflow-hidden py-2 relative">
              <div className="w-28 h-6 bg-black absolute left-1/2 rounded-b-2xl transform -translate-x-1/2" />
              <div className="h-full w-full rounded-3xl bg-white bg-center bg-cover wallpaper">
                  <div className="flex items-center justify-between text-xs text-white py-2 px-4">
                      <p>9:41</p>
                      <div className="flex space-x-1">
                          <img src="https://s.svgbox.net/hero-solid.svg?ic=chart-bar&fill=fff" className="h-2" />
                          <img src="https://s.svgbox.net/hero-solid.svg?ic=wifi&fill=fff" className="h-2" />
                          <img src="https://s.svgbox.net/materialui.svg?ic=battery_full&fill=fff" className="h-2 transform rotate" />
                      </div>
                  </div>
                  <div className="h-full flex flex-col">
                      <div className="flex-auto p-2 space-y-4">
                          <div className="grid grid-cols-4 grid-rows-2 gap-4">
                              <img src="https://cdn.jim-nielsen.com/macos/1024/1password-7-password-manager-2020-12-17.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/1024/pages-2020-12-10.png" />
                              <img src="https://i.ibb.co/M2pkGxS/Activity.png" className="col-span-2 row-span-2" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/day-one-2019-04-22.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/messenger-2020-11-11.png" />
                          </div>
                          <div className="grid grid-cols-4 grid-rows-2 gap-4">
                              <img src="https://i.ibb.co/4mSDs9c/Todoist-Checkmarks-Neutral.png" className="col-span-2 row-span-2" />
                              {/* <div class="bg-gradient-to-br from-indigo-900 to-gray-700 rounded-xl col-span-2 row-span-2"></div> */}
                              <img src="https://cdn.jim-nielsen.com/macos/256/image-view-studio-2020-08-18.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/1doc-word-processor-for-writer-2020-08-17.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/apple-developer-2020-07-01.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/doc-scanner-scan-pdf-2020-05-08.png" />
                          </div>
                          <div className="grid grid-cols-4 grid-rows-2 gap-4">
                              <img src="https://cdn.jim-nielsen.com/macos/256/bear-2018-10-26.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/microsoft-to-do-2019-10-08.png" />
                              <img src="https://i.ibb.co/QYRG25X/Weather.png" className="col-span-2 row-span-2" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/reminders-2019-09-25.png" />
                              <img src="https://cdn.jim-nielsen.com/macos/256/news-2019-09-25.png" />
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                              <div className="h-1 w-1 bg-gray-200 rounded-full" />
                              <div className="h-1 w-1 bg-gray-400 rounded-full" />
                          </div>
                      </div>
                      <div className="p-2">
                          <div className="h-20 bg-frosted rounded-3xl mb-8 p-2 flex items-center">
                              <div className="grid grid-cols-4 gap-4 w-full">
                                  <div className="h-14 bg-green-100 rounded-xl flex items-center">
                                      <img src="https://cdn.jim-nielsen.com/macos/1024/facetime-2019-09-25.png" className="h-8 w-8 mx-auto" />
                                  </div>
                                  <div className="h-14 bg-gray-100 rounded-xl flex items-center">
                                      <img src="https://cdn.jim-nielsen.com/macos/1024/safari-2019-09-25.png" className="h-8 w-8 mx-auto" />
                                  </div>
                                  <div className="h-14 bg-blue-100 rounded-xl flex items-center">
                                      <img src="https://cdn.jim-nielsen.com/macos/1024/messages-2019-09-25.png" className="h-8 w-8 mx-auto" />
                                  </div>
                                  <div className="h-14 bg-red-200 rounded-xl flex items-center">
                                      <img src="https://cdn.jim-nielsen.com/macos/1024/music-2019-09-25.png" className="h-8 w-8 mx-auto" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default MobileView