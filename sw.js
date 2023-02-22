const CACHE = "content-v1" // name of the current cache
const OFFLINE = "/offline"

const AUTO_CACHE = [
	OFFLINE,
	"/",

	"/assets/css/fonts/CinzelVariableFont_wght.woff2",
	"/assets/css/fonts/InterMedium.woff2",
	"/assets/css/continue.css",
	"/assets/css/eventInfo.css",
	"/assets/css/pay.css",
	"/assets/css/style.css",

	"/assets/js/app.js",
	"/assets/js/continue.js",
	"/assets/js/events.js",
	"/assets/js/eventsHandler.js",
	"/assets/js/html2canvas.js",
	"/assets/js/idbkeyval.js",
	"/assets/js/pay.js",
	"/assets/js/claim.js",
	"/assets/js/publicEvents.js",

	"/assets/images/contact/event.svg",
	"/assets/images/contact/hostel.svg",
	"/assets/images/contact/payment.svg",

	"/assets/images/days/thursday.webp",
	"/assets/images/days/friday.webp",
	"/assets/images/days/saturday.webp",
	"/assets/images/days/sunday.webp",
	"/assets/images/days/location.webp",

	"/assets/images/events/cultural.svg",
	"/assets/images/events/dance.svg",
	"/assets/images/events/drama.svg",
	"/assets/images/events/entrepreneurship.svg",
	"/assets/images/events/music.svg",
	"/assets/images/events/pda.svg",
	"/assets/images/events/question.svg",
	"/assets/images/events/quill.svg",
	"/assets/images/events/tamil.svg",
	"/assets/images/events/ted.svg",

	"/assets/images/members/chair.webp",
	"/assets/images/members/vice.webp",

	"/assets/images/passes/1.webp",
	"/assets/images/passes/2.webp",
	"/assets/images/passes/3.webp",
	"/assets/images/passes/4.webp",

	"/assets/images/aboutBackground.webp",
	"/assets/images/gallery.webp",
	"/assets/images/hero.svg",
	"/assets/images/heroOrange.webp",
	"/assets/images/swipe.svg",
	"/assets/images/upi.webp",

	"/assets/videos/bgstarter.webp",
]

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(AUTO_CACHE))
			.then(self.skipWaiting())
	)
})

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return cacheNames.filter((cacheName) => CACHE !== cacheName)
			})
			.then((unusedCaches) => {
				console.debug("DESTROYING CACHE", unusedCaches.join(","))
				return Promise.all(
					unusedCaches.map((unusedCache) => {
						return caches.delete(unusedCache)
					})
				)
			})
			.then(() => self.clients.claim())
	)
})

self.addEventListener("fetch", (event) => {
	if (
		!event.request.url.startsWith(self.location.origin) ||
		event.request.method !== "GET"
	) {
		return void event.respondWith(
			fetch(event.request).catch((err) => console.log(err))
		)
	}

	if (!event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			fetch(event.request)
				.then((response) => {
					caches.open(CACHE).then((cache) => {
						cache.put(event.request, response)
					})
					return response.clone()
				})
				.catch((_err) => {
					return caches
						.match(event.request)
						.then((cachedResponse) => {
							if (cachedResponse) {
								return cachedResponse
							}

							return caches.open(CACHE).then((cache) => {
								const offlineRequest = new Request(OFFLINE)
								return cache.match(offlineRequest)
							})
						})
				})
		)
	} else {
		event.respondWith(
			caches
				.match(event.request, {
					ignoreSearch: true,
				})
				.then((response) => {
					if (response) {
						return response
					}

					// if

					return fetch(event.request).then((response) => {
						caches.open(CACHE).then((cache) => {
							cache.put(event.request, response)
						})
						return response.clone()
					})
				})
		)
	}
})
