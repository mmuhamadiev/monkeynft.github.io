'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3b6f966992f8328fb2d95abf89a3ad28",
"index.html": "7dd1ed9834d17b3a68a3e9bbc18ac13f",
"/": "7dd1ed9834d17b3a68a3e9bbc18ac13f",
"main.dart.js": "84454042f7ba1e0b83fa3471a489cad0",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4624c936d1d6141a1ac0a943c373ac41",
"assets/AssetManifest.json": "f4456019d675fc0ee4cbf6460211a849",
"assets/NOTICES": "39d7fabf196c911f74ecf89fd2ebfaa5",
"assets/FontManifest.json": "a789d2a0d9f6b7d0a44f634324463b29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/nft/cats/cat1.png": "038d872961fbcd4c15acc3542e47fe4d",
"assets/assets/nft/cats/cat2.png": "c34abf99639aee5fca60587bcfce72a3",
"assets/assets/nft/cats/cat3.png": "ad9b2c9fb50c67c5582cfaff8fe327e4",
"assets/assets/nft/cats/cat4.png": "85c03bb77205fe1bd66abe6895781ead",
"assets/assets/nft/cats/cat5.png": "9ae9764c5279701b04be955925b97138",
"assets/assets/nft/hypebeast/hype1.png": "65e8bafcdf4b5f47ba86f63e14b74c7a",
"assets/assets/nft/hypebeast/hype2.png": "c56eebcb0708e294dc2dfdf718f1fac8",
"assets/assets/nft/hypebeast/hype3.png": "5c82be9a7acab8eda67607b8fca4696f",
"assets/assets/nft/hypebeast/hype6.png": "813ace32b002dd8067c9266ab7267145",
"assets/assets/nft/hypebeast/hype4.png": "ab600390c246be6469e3ff453faba213",
"assets/assets/nft/hypebeast/hype5.png": "fb4bff2afc0f130623674774a4c08daf",
"assets/assets/nft/astro/astro1.png": "327529692fad1112b20e5575d7fcd8d8",
"assets/assets/nft/astro/astro2.png": "65f48519804f2eed32fd6eb24556b9d9",
"assets/assets/nft/astro/astro3.png": "6fedc7840dfbeb618c5f510125233c75",
"assets/assets/nft/astro/astro4.png": "e990565455a45abc84f02c93f57e7a70",
"assets/assets/nft/astro/astro5.png": "a7e9ab33ed202a562f5f694044abe2ef",
"assets/assets/nft/bg_home.png": "d82c7d8ba12da02d5a83016d1e626757",
"assets/assets/nft/anime/anime4.png": "d98bbcf2549513e160c9c9084d3dda27",
"assets/assets/nft/anime/anime1.png": "1aefad38f7a60b7a937225bf64df0373",
"assets/assets/nft/anime/anime2.png": "24da434011501316a516cdfa40bf1084",
"assets/assets/nft/anime/anime3.png": "1f3fdf84daf67d316eb125127da2a0f7",
"assets/assets/nft/hypebeast_bg_home_page.png": "4cab2596464bc1391fb444972d608be2",
"assets/assets/nft_icon/etherium.png": "319a611d6f606d55b823b9e70a7a693b",
"assets/assets/nft_icon/etherium_black.png": "dbacf13f83a6a869f12dead234808eda",
"assets/assets/icons/menu_dots.png": "d1d944d2a64a3ec0bd2ffb748a059ab3",
"assets/assets/icons/verified_white.png": "c3f21155513890daae30cd696e0742b5",
"assets/assets/icons/verified.png": "81dcad2caf357279700ae2ae6a3693e0",
"assets/assets/icons/btn/cart_btn.png": "5d46ee76e824797e5ea476eb62cd2177",
"assets/assets/icons/btn/filter_btn.png": "de0a81d544d1a33a84ec2fc17f93ad5a",
"assets/assets/icons/btn/arrow_btn.png": "0b124426c5da35da8f949792bd64f11c",
"assets/assets/icons/btn/bid_btn.png": "b855747df9f363842fefb529392dfb2e",
"assets/assets/icons/btn/wallet_btn.png": "26c719a1cbdbdefa14a1773cf3a0aeab",
"assets/assets/icons/trash.png": "c9bb569f7b72010bf53932ab42bf036f",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/AtypDisplay-Bold.ttf": "07c3c683e0c4cfc51e039c25725afe51",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "202ed785290892875b3c8b3d0584efc5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
