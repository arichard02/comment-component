// /*
// Copyright 2018 Google Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// */

// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
// );

// import {
//   pageCache,
//   imageCache,
//   staticResourceCache,
//   googleFontsCache,
//   offlineFallback,
// } from "workbox-recipes";

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);

//   workbox.precaching.precacheAndRoute(["**/*.html"]);

//   pageCache();

//   googleFontsCache();

//   staticResourceCache();

//   imageCache();

//   offlineFallback();

//   // workbox.routing.registerRoute(
//   //   /(.*)articles(.*)\.(?:png|gif|jpg)/,
//   //   workbox.strategies.cacheFirst({
//   //     cacheName: "images-cache",
//   //     plugins: [
//   //       new workbox.expiration.Plugin({
//   //         maxEntries: 50,
//   //         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//   //       }),
//   //     ],
//   //   })
//   // );

//   //     const articleHandler = workbox.strategies.networkFirst({
//   //       cacheName: 'articles-cache',
//   //       plugins: [
//   //         new workbox.expiration.Plugin({
//   //           maxEntries: 50,
//   //         })
//   //       ]
//   //     });

//   //   // workbox.routing .registerRoute(/(.*)

//   //     workbox.routing.registerRoute(/(.*)\.html/, args => {
//   //       return articleHandler.handle(args).then(response => {
//   //           if (!response) {
//   //             return caches.match('pages/offline.html');
//   //           } else if (response.status === 404) {
//   //             return caches.match('pages/404.html');
//   //           }
//   //           return response;
//   //         });
//   //     });
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }
