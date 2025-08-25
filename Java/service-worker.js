const CACHE_NAME = 'v1';
const CACHE_FILES = [
  './',
  './index.html',
  './Source/assets/style.css',
  './Source/System.html',
  './Java/APIjs',
  './Java/Audio.js',
  './Java/Save.js',
  './Java/Script.js',
  './Audio/Intro.mp3',
  './Audio/English/Dialogues_System_Eng.txt',
  './Audio/Portuguese/Dialogues_System_Por.txt',
  './Audio/Spanish/Dialogues_System_Spa.txt',
  './Source/icon/icon-128.png',
  './Source/icon/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('[SW] Instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
      .catch(err => console.error('Falha ao adicionar arquivos ao cache', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request).catch(() => caches.match('./index.html')))
  );
});