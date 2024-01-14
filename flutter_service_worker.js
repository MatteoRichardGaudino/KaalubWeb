'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9914deceddea045183da224593fa60d3",
"assets/AssetManifest.json": "ec775e7f23225745e29c9a70d0e84b22",
"assets/assets/candela-animazione.gif": "91ad08a0d2f90cf526dcc1e8734c6fc1",
"assets/assets/candela-spenta.png": "371f7a26f3d3df4c55e3cfad604cf495",
"assets/assets/cards/eyes/2%2520of%2520Eyes.png": "35a6d5ae50d090bae6e422f92aa6592f",
"assets/assets/cards/eyes/3%2520of%2520Eyes.png": "4c62ded245b24f6ab6cf2a87b0fe5daa",
"assets/assets/cards/eyes/4%2520of%2520Eyes.png": "68c8337f8d00572e790a9456037f5ed4",
"assets/assets/cards/eyes/5%2520of%2520Eyes.png": "f0c48bfbe3d1c1f47411a59bf8525d58",
"assets/assets/cards/eyes/6%2520of%2520Eyes.png": "fc3ba1b449cdc579dafa1388c77e3d79",
"assets/assets/cards/eyes/7%2520of%2520Eyes.png": "87e823ac02ba3135c317995a3cc41f0b",
"assets/assets/cards/eyes/Ace%2520of%2520Eyes.png": "b70d2549146a88599c608a58a3896079",
"assets/assets/cards/eyes/King%2520of%2520Eyes.png": "d3dee8462db988de3e223f4088c05237",
"assets/assets/cards/eyes/Knight%2520of%2520Eyes.png": "7e13e40883921ac74cea8cab0c4a3cae",
"assets/assets/cards/eyes/Page%2520of%2520Eyes.png": "a548e7aa8fae84ec087d2bde5705ec48",
"assets/assets/cards/hearts/2%2520of%2520Hearts.png": "890bf22cf60da6bcc7aeb58c99d457de",
"assets/assets/cards/hearts/3%2520of%2520Hearts.png": "225de74d6864c2ae727751f0313be308",
"assets/assets/cards/hearts/4%2520of%2520Hearts.png": "74b36a86bc03ad9dbdcedb2f4ce0d758",
"assets/assets/cards/hearts/5%2520of%2520Hearts.png": "6e5f4a74ccaf31a72c4c61dc90558d0f",
"assets/assets/cards/hearts/6%2520of%2520Hearts.png": "4cc60fd19c97773abe5d31edbb3d8df4",
"assets/assets/cards/hearts/7%2520of%2520Hearts.png": "a4a1e90c8fe2569dce6e52edf35cc719",
"assets/assets/cards/hearts/Ace%2520of%2520Hearts.png": "843af17d5d9fba6c4b14f04c4dba8d24",
"assets/assets/cards/hearts/King%2520of%2520Hearts.png": "941e9de8598d427ef99d045f95e77d0d",
"assets/assets/cards/hearts/Knight%2520of%2520Hearts.png": "1b24a64ee6d93dcdcd882512addd4a44",
"assets/assets/cards/hearts/Page%2520of%2520Hearts.png": "c745da918ffe04b5717b890774c1b88d",
"assets/assets/cards/mirrors/2%2520of%2520Mirrors.png": "967175ea35de2b73bb8b64876e9960c3",
"assets/assets/cards/mirrors/3%2520of%2520Mirrors.png": "b44d3c1bb4b5a5c98a3f6488bdf2c0fd",
"assets/assets/cards/mirrors/4%2520of%2520Mirrors.png": "d4b724dbc1fa83f3235ce47965a693b3",
"assets/assets/cards/mirrors/5%2520of%2520Mirrors.png": "d22d07c3ed936d837614b2af175871f8",
"assets/assets/cards/mirrors/6%2520of%2520Mirrors.png": "22262decc7f5ffbf07dbb4a8ffa3b097",
"assets/assets/cards/mirrors/7%2520of%2520Mirrors.png": "e62163c08ed2c9daa079cae02088eb9c",
"assets/assets/cards/mirrors/Ace%2520of%2520Mirrors.png": "e862a17465d77f0a1a0fb5c21e11ff22",
"assets/assets/cards/mirrors/King%2520of%2520Mirrors.png": "6d76f74356ce828a207f9a4d8fa09f98",
"assets/assets/cards/mirrors/Knight%2520of%2520Mirrors.png": "27b630714cf95d0df7b53669833b8d4e",
"assets/assets/cards/mirrors/Page%2520of%2520Mirrors.png": "6508c17e2cc2e57840c8ca69e66e845a",
"assets/assets/cards/spectres/2%2520of%2520Spectres.png": "7405c90cda6df71f1161d70cfae4d760",
"assets/assets/cards/spectres/3%2520of%2520Spectres.png": "8d1c9c58d0bba56e9f22bb547db3acb2",
"assets/assets/cards/spectres/4%2520of%2520Spectres.png": "22d4fc839edcb269be06ab36b0f11484",
"assets/assets/cards/spectres/5%2520of%2520Spectres.png": "e6da10d9acfe46125562b2a993043ca0",
"assets/assets/cards/spectres/6%2520of%2520Spectres.png": "70fddb37ba24a4ded7e52796b4e63f6e",
"assets/assets/cards/spectres/7%2520of%2520Spectres.png": "7b59877920f81a5c3fa442dc6f0bfe18",
"assets/assets/cards/spectres/Ace%2520of%2520Spectres.png": "db60147617113429593fa79c8b6f3201",
"assets/assets/cards/spectres/King%2520of%2520Spectres.png": "38000541c3143f663971bb75dc22279c",
"assets/assets/cards/spectres/Knight%2520of%2520Spectres.png": "fcd5fef4b33e76e450bd8017f8907d31",
"assets/assets/cards/spectres/Page%2520of%2520Spectres.png": "fcfd59d23ea85059991e61d9c7fb4e5d",
"assets/assets/carta-retro.png": "a4770ea826ca9e646322c2c41ddb0e6c",
"assets/assets/effects/exit_game.wav": "00bcfa87d2227cd8f71a3692ae1a3eef",
"assets/assets/effects/game_over_completo.wav": "9f1832e29e076e405251ccdadf12e1e0",
"assets/assets/effects/options_hover.wav": "a1429b0e983e20775bf74432a337ea9c",
"assets/assets/effects/options_selection.wav": "5b4b727384c576d18a750d2550b35c3b",
"assets/assets/effects/rules.wav": "e569b0745ed35f4a0d41fe56e645717f",
"assets/assets/effects/suono_accedi_pila_scarti.wav": "a97b61ba7a1dba56500da98d02843a2f",
"assets/assets/effects/suono_candele_che_si_accendono.wav": "68b479c61b5db5ff1edac6380651db7e",
"assets/assets/effects/suono_evoca_Asso.wav": "0c040fdb3b07d84bb52789d659077cd6",
"assets/assets/effects/suono_evoca_carta.wav": "a1bf116778eeaf83720aad6b5de20d7b",
"assets/assets/effects/suono_mettere_carta_nella_mano_del_demone.wav": "d8f9b408de5a43d2484059e1ae3efcc8",
"assets/assets/effects/suono_metti_carta_in_un_posto_qualsiasi.wav": "5abd768da82246ac5d0a2aab9b660d02",
"assets/assets/effects/suono_pesca_dal_mazzo_di_pesca.wav": "7e0d8c449346eee577600dc73edfc81f",
"assets/assets/effects/suono_scegli_carta_discard_pile.wav": "75a65f4e2365c1da3ca46b7ee7403c69",
"assets/assets/effects/suono_vittoria_completo.wav": "5d4b96438663f93b1749bead44c38e03",
"assets/assets/fonts/Sahitya-Bold.ttf": "385a3ea5fd9fe6da295bf2b46b4d9cd6",
"assets/assets/fonts/Sahitya-Regular.ttf": "7cd92bf9177ea8d398aedec07763d100",
"assets/assets/Main_Title_start.png": "7a3a6836a180c3cc8ef1d0fbc3dcfde8",
"assets/assets/mano-demone.png": "a4679830f51a3e66eda2d3030ca714a3",
"assets/assets/music/divinazione_game_compressed.mp3": "7ae02366cabee992f9fc684d050652ed",
"assets/assets/music/divinazione_maintitle_compressed.mp3": "65e1446593eaead66cbedef6ea59bdca",
"assets/FontManifest.json": "aa77a3610f8bbbd6ccb724012c4d7bd9",
"assets/fonts/MaterialIcons-Regular.otf": "b5a550cb61a572d2d490a494d0afbec6",
"assets/NOTICES": "7da43e2af4203d9a0e557a3aa75a2c85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "feb3c68fd10ad3436e78c80f96fad871",
"/": "feb3c68fd10ad3436e78c80f96fad871",
"main.dart.js": "6e472a822e6473bc41d09f2e8f500747",
"manifest.json": "f04a57ebad8b4da71724a601c8670bb0",
"version.json": "e5da233236b7a0964e3fc50e8334e7ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
