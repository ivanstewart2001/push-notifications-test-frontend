if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7dbe4f270a9ddb7f45862fac808a14f1"},{url:"/_next/static/chunks/078dd349-f6f3a6711eddaef1.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/386-fc58b981d9005aa8.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/69-cfc6f9b2495c926c.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/app/_not-found-80b481dc6a642d4c.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/app/layout-c4a86223d395612e.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/app/page-a498c3436279dfec.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/bc9e92e6-12637af7768c289e.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/fd9d1056-e59718bda6436d2a.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/main-app-31c10d84d40a87bd.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/main-c8760e3dc131dea0.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5e9bedb58c3695d7.js",revision:"eq4RBk2PmB9NrvzJBbNJ6"},{url:"/_next/static/eq4RBk2PmB9NrvzJBbNJ6/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/eq4RBk2PmB9NrvzJBbNJ6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/firebase-messaging-sw.js",revision:"04a8376bd8bf5d74b8adab03f3f33132"},{url:"/icon-192x192.png",revision:"9929edde458ae18ddc77fb1ecd61b24a"},{url:"/icon-256x256.png",revision:"ed91fbee3853a26d7df160df42b274ce"},{url:"/icon-384x384.png",revision:"ca78dcd18bbf466480cfcd44b4007317"},{url:"/icon-512x512.png",revision:"74ddb9d84084393edefcf237d08b58b8"},{url:"/manifest.json",revision:"e8a7c07208b7ca03c2fb3e9d8bd37bb4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swenv.js",revision:"6d793068dcf54939ef46f55d8359b179"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
