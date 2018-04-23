// Cache the local asset during the installation

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pokemon').then(function(cache) {
      return cache.addAll([
        '/',
      ]);
    })
  );
});

// Go to the network then serve with the cache as fallback

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});