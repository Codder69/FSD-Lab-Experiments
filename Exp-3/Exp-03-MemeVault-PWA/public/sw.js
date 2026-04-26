const CACHE_NAME="simple-cache-v1";

self.addEventListener("install",(event)=>{
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll([
"/",
"/favicon.ico"
]);
})
);
});

self.addEventListener("fetch",(event)=>{

if(event.request.method !== "GET") return;

event.respondWith(
caches.match(event.request)
.then(response=>{
return response || fetch(event.request);
})
);

});const CACHE_NAME="simple-cache-v1";

self.addEventListener("install",(event)=>{
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll([
"/",
"/favicon.ico"
]);
})
);
});

self.addEventListener("fetch",(event)=>{

if(event.request.method !== "GET") return;

event.respondWith(
caches.match(event.request)
.then(response=>{
return response || fetch(event.request);
})
);

});