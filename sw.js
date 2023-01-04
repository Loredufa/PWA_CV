const staticMiCv = "dev-miCv-site-v1"
const assets = [
  "/",
  "./index.html",
  "./style/responsive.css",
  "./style/styleGeneral.css",
  "./app.js",
  "./assets/logo_icon.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMiCv).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  

