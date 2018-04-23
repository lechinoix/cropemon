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
  var staticUrl = '/static/';
  if (event.request.url.indexOf(staticUrl) > -1) {
    event.respondWith(
      caches.open('pokemon-dynamic').then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
              cache.put(event.request, response.clone());
              return response;
            });
        });
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  }
});
