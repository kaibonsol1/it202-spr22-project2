self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('sw-cache').then(function(cache) {
        return cache.add('https://kaibonsol1.github.io/it202-spr22-project2/index.html');
      })
    );
  });
   
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });