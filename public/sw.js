self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll([
				"./public/index.html",
				"./public/App.js",
				"./public/style.css",
				"./public/assets/android-chrome-192x192.png",
			]);
		})
	);
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request);
		})
	);
});
