function trackPageLoadingProgress(callback) {
  const totalResources = document.querySelectorAll('img, script, link[rel="stylesheet"]').length
  let loadedResources = 0

  function resourceLoaded() {
    loadedResources++
    const percentage = (loadedResources / totalResources) * 100

    // Call the provided callback with the loading percentage
    callback(percentage)

    // Check if all resources are loaded
    if (loadedResources === totalResources) {
      console.log("all resource loaded")
    }
  }

  // Listen for load events on images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", resourceLoaded)
    img.addEventListener("error", resourceLoaded) // Handle errors if an image fails to load
  })

  // Listen for load events on scripts
  const scripts = document.querySelectorAll("script")
  scripts.forEach((script) => {
    script.addEventListener("load", resourceLoaded)
    script.addEventListener("error", resourceLoaded) // Handle errors if a script fails to load
  })

  // Listen for load events on stylesheets
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
  stylesheets.forEach((stylesheet) => {
    stylesheet.addEventListener("load", resourceLoaded)
    stylesheet.addEventListener("error", resourceLoaded) // Handle errors if a stylesheet fails to load
  })

  window.addEventListener("load", () => {
    const progressBar = document.querySelector("#preloader-progress")
    const loader = document.getElementById("globalLoader")
    if (progressBar) {
      progressBar.style.width = `100%`
    }
    if (loader) {
      console.log("loader found")
      setTimeout(() => {
        loader.classList.add(...["duration-1000", "opacity-0"])
      }, 1000)
      setTimeout(() => {
        loader.remove()
      }, 2000)
    }
  })
}

trackPageLoadingProgress((percentage) => {
  const logo = document.getElementById("preloader-logo")
  const progressBar = document.querySelector("#preloader-progress")
  if (percentage > 50) {
    logo.style.animation = "applePulse 2s infinite"
  }
  if (progressBar) {
    progressBar.style.width = `${percentage}%`
  }
})
