if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),a={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-05160e81"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/happy-BxIwtmVH.png",revision:null},{url:"assets/index-3qARxP92.js",revision:null},{url:"assets/index-DkdB8dFE.css",revision:null},{url:"assets/laugh-Dm8Eb7Qj.png",revision:null},{url:"assets/logo-192-W34R16MK.png",revision:null},{url:"assets/logo-fc-j6EcaRDy.png",revision:null},{url:"assets/party-DDjooVI6.png",revision:null},{url:"assets/roulette-D1GfS2iV.gif",revision:null},{url:"assets/sad-DnzBGVZJ.png",revision:null},{url:"index.html",revision:"e4feff151705420601172f195cc26c1e"},{url:"logo-192.png",revision:"5e239a26ac6e313cbefb6609f253f2fa"},{url:"logo-512.png",revision:"49ba2a873abfe90659f0602e44330e53"},{url:"registerSW.js",revision:"731371c63e38bb242afc9e0f335551a9"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo-192.png",revision:"5e239a26ac6e313cbefb6609f253f2fa"},{url:"logo-512.png",revision:"49ba2a873abfe90659f0602e44330e53"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.json",revision:"6a8e7c0fc31edc1207936d971a0396dd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination||"style"===e.destination),new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
