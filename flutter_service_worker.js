'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "31bfd1ad42cb6c1966d25d89920b5e3f",
"favicon.ico": "372ef609b4df7490ca3e1b142a3fde95",
"index.html": "61e77559fcf5aed0cf88d92a0b6d954c",
"/": "61e77559fcf5aed0cf88d92a0b6d954c",
"main.dart.js": "b5cf4923d6a907d598ac73cfb20bf029",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "09eb7c5592b2719fe50827f26f6264fc",
"icons/Icon-512.png": "d3a6deeb2057862fc4e05c17ea75b8a7",
"manifest.json": "ccd1e13d8a230450c5e862e60bc8acf8",
".git/config": "fee921ac34c4ada72d127bd525481453",
".git/objects/59/4dc98e1e3955ac0c319273ad249b1d72ed50c3": "797415d4d24f59de2bc8f679b6b49103",
".git/objects/3e/145e7c36c6fa5df6812f204d0262734a91bc80": "4c704d385e458199aa5d7b0d9ecbaf8c",
".git/objects/57/28ab99ade3cfdac61d9b1cb826df7f60065e56": "d60f7f512340ac1d550221b6116c8c75",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/6548633f7a061d8aba0bc63aa25331b40535b7": "09896355074c49f98c70f91d7d1f9f08",
".git/objects/6a/600b6090fa7acab8da6ee9d2864dad2854c2f0": "a6da8bbfb0f890a776ad496f32e5be27",
".git/objects/3c/504a5a477059deb636603a3e825d449a4d55de": "f77088c3caa60d81f90c09dce009e756",
".git/objects/02/98496d511dfdd3f7d6efbcf2d6f473bee3e342": "4020c0cc0f5ece2e5aa58e245b4e08e5",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/8d86ce89033621e06b2138b65359be02517a78": "63257604d46356b64c76f86341d484b8",
".git/objects/ad/d2b974671d3824d6f25f1b50548434df697ae7": "73d177e7483bf50b3f99ce8c0bce8d3d",
".git/objects/bb/7f42b55044d3cd19e75c570068d6db9c08bf96": "86cf176d28b1d0cf041e7d117804e83a",
".git/objects/be/a141cdda4e27e9f2b66b4900e97b22a90b73a1": "70bc155e8dc67849051e82dae6cdea17",
".git/objects/be/7d906df7f25a03e1afea065c2b27f24a493363": "d3c44fde4bc73ba1d9dfab7268f7ef34",
".git/objects/da/67e4136977de4b05abc61914c87d0e174001a9": "0f42e6e90c5f15eaacbe1caf99364b4a",
".git/objects/da/20b0a2e31007c1b0cd09b6a18cf2417cadb1a4": "e77103ebc1dec229fa25bc5af6be90da",
".git/objects/da/d77faa2687ec02fb44c9644c890fba49489bf3": "0503b77d7b5f1cd5b14737243b7d38a7",
".git/objects/d1/36d1d7d3b8d0b7dab2dfd88645e42b79c08853": "ad2f6d944eb3be00a14f5fa5e262d743",
".git/objects/ab/2e966a84a9f4725a630e24552935c0f74d9eb6": "6130739559c1eda0aa254fe7776bedc3",
".git/objects/c9/54c6f4e1036c310cae7a3e2dec4b4bc73ff921": "d8d1b8784cfee130fc9ed58becd64fe9",
".git/objects/fc/de1d737aa0c159e671cd5f4a3b4cb504f83f20": "7d83c1cc9479a290d1580f35c21e182b",
".git/objects/fc/162558b0644a58fa3c502b4a639181fc4fe719": "90c2a86ddc66dc4d0b3707fa224c2d4b",
".git/objects/fc/f99143292a2c915a289d990c40321601142812": "77d8fb5d410431bc754bd18020a60a88",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c6/96f48d31483dae46197b788b760065bd87962f": "ea71e10231ccb3571db26e44685dfbd8",
".git/objects/c6/ff98a4bc0e1bae121bdfa0c83e2bc96b9aeb64": "b053302ead0e2f922579eb1bfc918f33",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/9ff3a80c5c85f0d09030838a19f62393ff3009": "71a6c18cea75630a9aa1e69bfbdf8959",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/c6a86584880027f899ebe8477cf8dc102a24aa": "bbaa0615ab6c36306733c3ca57520514",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/62dba9b9999abe744c3f2ef8d61f6c52bba17c": "e0e71e52b7f6441e357675373738a369",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/4e2d60d4c88ad7672e39ad3e2743454b118e1c": "7fb3af7d2a93f5a91926669e92e5f627",
".git/objects/10/fe457ce0cdfa4cec47d03207068d5acdb082ba": "a610405d3908f7027fcb69863cddf186",
".git/objects/26/0986993465b21477d43a30e9bfbb971cea93e5": "662041b240add23cbe021f5c4bda59b6",
".git/objects/81/a8c1723125386f67ed579019b48aca56aa92b0": "fe31a4ab614433c6d5f2368699af70c2",
".git/objects/72/f87c9b73cf63771304759b5768338b2648e1b4": "c6ac66c90dfb1634f1035321083b9d86",
".git/objects/72/e9bc110bf57aa580c32ac3b7811d9542f91720": "15c599678d08d5ed4ab0d0db4e9507a9",
".git/objects/44/1ed25452d27e2e9a67777fa8730d4feae31fc3": "17fe603b3b5d54b51c60062d9c14081c",
".git/objects/2a/cf4911ef541b49b502d80a80718603e22bcd1f": "2a4bdc205c0b9ae05fdd0ca878b8301b",
".git/objects/2f/904d15de28ff33c26b0ed1ea5ab0b49ee5f0b6": "5e2094da3123495832c9598c228695d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/dcea564dc4f5ea502771afae1d9872ddbc95a5": "8fbc5f08e5a7b6eb9ea6d341bf706792",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/54/b7359171294aa5d379f6527d1ea81f81b6ca9e": "c6cd2c98a0bc4acafafc911f1534f7eb",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/6f3665e266342c329585f5850eed21d8e00a65": "b315be1d1a32d2ac2dc04d4639ebe997",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/5849a07277ae6c5a991ed0b729a0c7b7ab114f": "585d1342937aaf18cded7d15e5f45bb9",
".git/objects/bf/7dbe31b2da26dc9bbc86f2a06d1f3634d4e3bb": "d3514846279c0751b92491072ad6cef9",
".git/objects/ba/c380bad746ab948e12a7f1bf328eabc82edf84": "b0f1deee1de6e5028c7b0ef4bfa54d06",
".git/objects/ba/b4afb3b628a58658922ae05d9d331de993c36a": "2a3c186559b7a034ff9b095a0fdfad44",
".git/objects/dd/4e48a2e75fa1a632b1d6848b9837ea4df73cdf": "96b9f4a6250055d6e1091d45dcd69c89",
".git/objects/b6/046f535181f8636dfadc3b7547278999bb7cec": "1bcdf439c188930b834451bda8981b93",
".git/objects/d5/a44498ee6a6986448498b109bd0c1b706705b9": "097e10da39cb3bc52ce665efa2243fb6",
".git/objects/aa/aadc41f42af517ca78b544a9127bddb7f89615": "dbb4628c428b7a8cc6cbb98a1097e639",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/90561942556d4173125b82587846068f719a9d": "656cd9d984d92010f1845873890b9542",
".git/objects/a8/f09e3f22b19fb7a73971426c7f11436fe37605": "1112e82336aa366b78c5f53a38d2b760",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/44ba0ea1e466bac5dabec13613194014f99b9b": "11977e04f9c5d7fad2f7eebee5310a4f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/4b85761f0389ad44ad0ec5bf3014a1e89b0ccf": "c26da4bd73ad63328c96bd07d849678c",
".git/objects/f9/47fbbb796880fc200d1851a55fd9e3f1404cac": "b7012b086fb688ac2aba26a7c772f219",
".git/objects/c2/ca4d53371757046eb8d99af55147c93923d21c": "84e35f0ac5dfecc16aeada039971920c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/6405fb7bf930f47e67cb0b99bde01a17870b97": "0de91c771ef176dae3c52652421102f7",
".git/objects/48/6b0d63b96f4d92d1407f251509a9aca979e18c": "79421dd75e43fec78f21d5e70aced24e",
".git/objects/1d/72abe45aef83dea431a8a4b82d6ee0a2f6ee82": "abc7ff1bec0a8225f91ea4595432c422",
".git/objects/1d/25282f3cb660bc055cdf2b4b4ce99d9ada14ad": "af9ecb92a1c7368cf5f3e46ec2ffea3a",
".git/objects/76/99fcc30bd8af36ccec718ad4d337b90ef0d58b": "41d2c9d8480ec83230e3f7d80279d766",
".git/objects/2e/f3ddaa5932f94ee8645232cf5f5f540f16a219": "0b2cc70b8d05f945e379a608ac5cd5ad",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7f/ca1b837ba8ba4edc0bb422b153e045b70dd5ff": "1c5a234221dfcb8cf8536a6330e033e0",
".git/objects/7f/39cb3808dfef5b55f4bc61dd7ad54a13fad148": "573c778f8317b321d62e876524053e9d",
".git/objects/7a/06ee6756f6e4cace0691a5018ae73b08a572e8": "7e7700e9b10aeae92f6147f81debde0f",
".git/objects/8e/d7a9d7de72ba85bc6ecc66906b470a9fcb837e": "41800a651c0005734942bd0698f721c0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be99c3a4fdec979f0e73966b44c867e5",
".git/logs/refs/heads/main": "be99c3a4fdec979f0e73966b44c867e5",
".git/logs/refs/remotes/origin/main": "5a5f48cca8248dcc0c49b4a19fff900a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "065d1b1e4282e40cfbf0b7eddd4b59e6",
".git/refs/remotes/origin/main": "065d1b1e4282e40cfbf0b7eddd4b59e6",
".git/index": "1a0408e033a60d8afdde0efe0acf6e43",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "f447bfc48e599dc9433b3bfeb1f2bd4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/shaders/ink_sparkle.frag": "1d8ef1ab9afab7182bce59e8a18d4755",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
