// sw.js - Basic service worker for offline cache
const CACHE_NAME = 'deepak-portfolio-v1';
const urlsToCache = [
  '/',
  'index copy.html',
  'site.webmanifest'
  // Add your CSS/JS/icon paths here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});