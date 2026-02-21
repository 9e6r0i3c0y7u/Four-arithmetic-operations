const CACHE_NAME = "four-arithmetic-v2";
const urlsToCache = [
  "/Four-arithmetic-operations/",
  "/Four-arithmetic-operations/index.html",
  "/Four-arithmetic-operations/manifest.json",
  "/Four-arithmetic-operations/icon-192.png",
  "/Four-arithmetic-operations/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
