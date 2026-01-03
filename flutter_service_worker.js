'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7ac79f09af267cf169a359a60702c09a",
"assets/AssetManifest.bin.json": "bb2222155240a08657ff79530ad72c33",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/NOTICES": "25fe7388782618e47ec729764ff7f79e",
"assets/packages/card_game/assets/10_of_clubs.svg": "de119dfd6101052ec09a19ce36b5d884",
"assets/packages/card_game/assets/10_of_diamonds.svg": "d2570c3dbc44b3ea9328c3b0373c8da6",
"assets/packages/card_game/assets/10_of_hearts.svg": "f949327834dd2e52ba45699415fd7dd8",
"assets/packages/card_game/assets/10_of_spades.svg": "d5d5cde9cd5dc1920bb2c367a65520ac",
"assets/packages/card_game/assets/2_of_clubs.svg": "ab031abeae51aaff7c62fdc6d2f77397",
"assets/packages/card_game/assets/2_of_diamonds.svg": "a72a9b4eaa823f0e79bdf20defe1f37e",
"assets/packages/card_game/assets/2_of_hearts.svg": "86a8388d8484baaaa774330645ae8df2",
"assets/packages/card_game/assets/2_of_spades.svg": "60c1a2af891bea23194f6adf07ba18e4",
"assets/packages/card_game/assets/3_of_clubs.svg": "3637a924d1f479f0aa810968940a4b27",
"assets/packages/card_game/assets/3_of_diamonds.svg": "e8f1caabebdd3d7193fec4a5218ccfa7",
"assets/packages/card_game/assets/3_of_hearts.svg": "a0abbdfa08ed7b83f24ff1e8f7aa6f16",
"assets/packages/card_game/assets/3_of_spades.svg": "295e6cd4ed7d3b49e5745472a5ce32d2",
"assets/packages/card_game/assets/4_of_clubs.svg": "776f1f5a36c8bd28bb991e1f0a91824c",
"assets/packages/card_game/assets/4_of_diamonds.svg": "89979f5298a5116afc9c2a0bb2f67b9a",
"assets/packages/card_game/assets/4_of_hearts.svg": "9d3f9a3759820826f966ccf9b8d52220",
"assets/packages/card_game/assets/4_of_spades.svg": "c61fab0088def64a53768f888147091b",
"assets/packages/card_game/assets/5_of_clubs.svg": "9794d7a77bde4b091e40d3a0d42f406b",
"assets/packages/card_game/assets/5_of_diamonds.svg": "918773e60cafb95b627af0f86d4b9de8",
"assets/packages/card_game/assets/5_of_hearts.svg": "9c260cf6d8980d3476ad150a6ae21855",
"assets/packages/card_game/assets/5_of_spades.svg": "aaf3566d41f2441c594a9a0af7f4fa34",
"assets/packages/card_game/assets/6_of_clubs.svg": "ee4d61d1c1b6dcc23537f3920bf4a5ec",
"assets/packages/card_game/assets/6_of_diamonds.svg": "5a578b72e98989ec7b7a73270880b8df",
"assets/packages/card_game/assets/6_of_hearts.svg": "2e03d778ac1aae8c90b8942e82edf2ae",
"assets/packages/card_game/assets/6_of_spades.svg": "495971b41fd48624749cdb260a27fab6",
"assets/packages/card_game/assets/7_of_clubs.svg": "aee3dfcbad42472bb09c84c33e78ef86",
"assets/packages/card_game/assets/7_of_diamonds.svg": "02eeefe10db6f3a5adbb83532b611cad",
"assets/packages/card_game/assets/7_of_hearts.svg": "d705fb76597e64be2589eab421ac36b4",
"assets/packages/card_game/assets/7_of_spades.svg": "10bdb4a7db398414cbc8004fed7f489e",
"assets/packages/card_game/assets/8_of_clubs.svg": "d8658aaff92f5efbec4fbbc87b4c6c06",
"assets/packages/card_game/assets/8_of_diamonds.svg": "e9f5bb5e8b92f5ccbe68a8610c4fea12",
"assets/packages/card_game/assets/8_of_hearts.svg": "f45fcff958d446725bf64faa453cc8ee",
"assets/packages/card_game/assets/8_of_spades.svg": "e3c78ddddcde9ea523c9f56c1d1d3aa6",
"assets/packages/card_game/assets/9_of_clubs.svg": "c77364f5efc5e3c72195de67ef6b0b00",
"assets/packages/card_game/assets/9_of_diamonds.svg": "b292640ac281f47a09149b502fcf3312",
"assets/packages/card_game/assets/9_of_hearts.svg": "130d9ca1f2b69591f53651909f182ec6",
"assets/packages/card_game/assets/9_of_spades.svg": "084512675ea0c48e010c4470dda096a3",
"assets/packages/card_game/assets/ace_of_clubs.svg": "d054a8b0823c069436560284e86470fa",
"assets/packages/card_game/assets/ace_of_diamonds.svg": "afb53b15f15ee7f673d28ba9c70ff8b6",
"assets/packages/card_game/assets/ace_of_hearts.svg": "b57d61417475572202e04d6e7d56d60d",
"assets/packages/card_game/assets/ace_of_spades.svg": "650157ddf174f8defdf7578094280d64",
"assets/packages/card_game/assets/jack_of_clubs.svg": "42f124e0508a3913959196f97695ca91",
"assets/packages/card_game/assets/jack_of_diamonds.svg": "4db22fffcc663aa621e64b730384453f",
"assets/packages/card_game/assets/jack_of_hearts.svg": "0891dbac086b00106b5c250f2c1f7e56",
"assets/packages/card_game/assets/jack_of_spades.svg": "4da5c20b3039348b8aa5f55f6c45511c",
"assets/packages/card_game/assets/king_of_clubs.svg": "94fce4e70cf9344e8393257fd5cc886b",
"assets/packages/card_game/assets/king_of_diamonds.svg": "4042641be3fc00d60e0a3d20dcb7a9d1",
"assets/packages/card_game/assets/king_of_hearts.svg": "3b6cd425e7361eb6f1b578da68d9f294",
"assets/packages/card_game/assets/king_of_spades.svg": "ce085f880de86dab1e1244ff0b4e7909",
"assets/packages/card_game/assets/queen_of_clubs.svg": "ad3bbf70d225fee8121c458397d4cb11",
"assets/packages/card_game/assets/queen_of_diamonds.svg": "a487b5d7cec45be284def73bbb90a7a1",
"assets/packages/card_game/assets/queen_of_hearts.svg": "b3c950fc2ad388187922e3fb704e6465",
"assets/packages/card_game/assets/queen_of_spades.svg": "6bb55d42e8ebb69d864edad217e76010",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "faf1b1ef1176690d3e1ff86ab4734281",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c60f8f48b5e6adb3930eef3a7193dd6",
"/": "8c60f8f48b5e6adb3930eef3a7193dd6",
"main.dart.js": "c7e38c69d642fc1879d0f98413b0c2cf",
"manifest.json": "2584a6bbbc29262e8b95b9103b19f2b7",
"version.json": "db0ef17395c16d393668ae535f8ade02"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
