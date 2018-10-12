// Service Worker sourc code
// Example code from: https://developers.google.com/web/fundamentals/primers/service-workers/

const CACHE_NAME = 'RestarauntReviewCache-v1';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/envhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js'
]

self.addEventListener('install', function(event) {
    event.WaitUnitl(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }

            let requestClone = event.requestAnimationFrame.clone();
            return fetch(requestClone).then(function(response) {
                if (!response || response.status !== 200 || reponse.type !== 'basic') {
                    // Not what we are interested in. Just return it.
                    return response;
                }

                let responseClone = response.clone();

                // Cache this item for later use if the web connection is lost
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.requestAnimationFrame, responseClone)
                });

                return response;
            });
        }));
});
