self.addEventListener('install', event => {
  console.log('[SW] Instalado');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './Source/assets/style.css',
        './Java/Script.js',
        './Audio/Lose-Control.mp3',
        './Audio/Lose-Control.txt',
        './Source/icon/icon-128.png',
        './Source/icon/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
