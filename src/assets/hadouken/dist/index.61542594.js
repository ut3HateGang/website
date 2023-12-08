// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d6di4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dfbb1b1861542594";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ahc7M":[function(require,module,exports) {
var _scriptMjs = require("../radioactive-attack/script.mjs");
var _snakeMjs = require("../snake/snake.mjs");
let konamiCount = 0;
let timer;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const keypress = (e)=>{
    console.log("oui", e);
    if (e.keyCode === 83) (0, _scriptMjs.startgame)();
    if (e.keyCode === 77) openModal();
    timer = clearTimeout(timer);
    timer = setTimeout(()=>{
        konamiCount = 0;
    }, 3000);
    switch(konamiCount){
        case 0:
        case 1:
            if (e.keyCode === 38) konamiCount++;
            else konamiCount = 0;
            break;
        case 2:
            if (e.keyCode === 38) break;
        case 3:
            if (e.keyCode === 40) konamiCount++;
            else konamiCount = 0;
            break;
        case 4:
        case 6:
            if (e.keyCode === 37) konamiCount++;
            else konamiCount = 0;
            break;
        case 5:
        case 7:
            if (e.keyCode === 39) konamiCount++;
            else konamiCount = 0;
            break;
        case 8:
            if (e.keyCode === 66) konamiCount++;
            else konamiCount = 0;
            break;
        case 9:
            if (e.keyCode === 65) {
                console.log("KONAMI CODE");
                openModal();
            } else konamiCount = 0;
            break;
        default:
            break;
    }
};
document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("keydown", (e)=>keypress(e));
    const closeModalBtn = document.querySelector(".btn-close");
    // close modal function
    const closeModal = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };
    // close the modal when the close button and overlay is clicked
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    // close modal when the Esc key is pressed
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
    });
    const btnRa = document.getElementById("btnRa");
    const btnSnake = document.getElementById("btnSnake");
    const btnTetris = document.getElementById("btnTetris");
    btnRa.addEventListener("click", ()=>{
        (0, _scriptMjs.startgame)();
    });
    btnSnake.addEventListener("click", ()=>{
        (0, _snakeMjs.snake)();
    });
    btnTetris.addEventListener("click", ()=>{
        window.location = "https://tetris404-6wko0ee43-valps-projects.vercel.app/";
    });
// open modal function
// open modal event
}); //

},{"../radioactive-attack/script.mjs":"kLVwY","../snake/snake.mjs":"bqxfu"}],"kLVwY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startgame", ()=>startgame);
function startgame() {
    const style = document.createElement("style");
    style.innerText = `
      body {
            overflow: hidden;
        }

        .zerg {
          position: absolute;
          user-select: none;
          width: 24px;
          height: 24px;
          background-image: url('./assets/radioactif.png');
          background-size: cover; /* ou background-size: contain; selon votre besoin */
        }
    `;
    document.head.appendChild(style);
    const body = document.body;
    let difficulty = 0;
    function createZerg() {
        difficulty += 0.02;
        const zerg = document.createElement("div");
        zerg.className = "zerg";
        let xPos = 0;
        let yPos = 0;
        if (Math.random() > 0.5) {
            xPos = Math.random() * window.innerWidth;
            yPos = 0;
        } else {
            xPos = window.innerWidth;
            yPos = Math.random() * window.innerHeight;
        }
        zerg.style.left = xPos + "px";
        zerg.style.top = yPos + "px";
        zerg.addEventListener("click", function() {
            zerg.remove();
        });
        body.appendChild(zerg);
    }
    function createParagraph() {
        const paragraph = document.createElement("p");
        const content = document.createTextNode("This is a paragraph.");
        paragraph.appendChild(content);
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        paragraph.style.left = xPos + "px";
        paragraph.style.top = yPos + "px";
        body.appendChild(paragraph);
    }
    function init() {
        for(let i = 0; i < 10; i++)createZerg();
        const interval = setInterval(createZerg, 1000);
        setInterval(moveZergs, 30);
    }
    function moveZergs() {
        const zergs = document.querySelectorAll(".zerg");
        zergs.forEach((zerg)=>{
            const nearestParagraph = findNearestParagraph(zerg);
            moveTowards(zerg, nearestParagraph);
            if (isColliding(zerg, nearestParagraph)) nearestParagraph.style.opacity = 0.0;
        });
    }
    function findNearestParagraph(zerg) {
        const paragraphs = document.querySelectorAll('span:not([style*="opacity:"])');
        let nearestParagraph = null;
        let minDistance = Infinity;
        paragraphs.forEach((paragraph)=>{
            const distance = calculateDistance(zerg, paragraph);
            if (distance < minDistance) {
                minDistance = distance;
                nearestParagraph = paragraph;
            }
        });
        return nearestParagraph;
    }
    function calculateDistance(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    function moveTowards(zerg, target) {
        if (target == null) zerg.remove();
        try {
            const speed = 1 + difficulty;
            let angle = Math.atan2(target.offsetTop - zerg.offsetTop, target.offsetLeft - zerg.offsetLeft);
            if (angle === 0) angle = Math.random() * 3;
            let deltaX = speed * Math.cos(angle);
            let deltaY = speed * Math.sin(angle);
            zerg.style.left = zerg.offsetLeft + deltaX + "px";
            zerg.style.top = zerg.offsetTop + deltaY + "px";
        } catch (e) {}
    }
    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    }
    init();
    var paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    // Parcours chaque paragraphe
    paragraphs.forEach(function(paragraph) {
        // Récupère le texte du paragraphe et le divise en mots
        var words = paragraph.textContent.split(" ");
        const emojis = [
            "\u267B\uFE0F",
            "\uD83D\uDC9A",
            "\uD83C\uDF32",
            "\uD83C\uDF33",
            "\u2618\uFE0F",
            "\uD83C\uDF40",
            "\uD83C\uDF43",
            "\uD83C\uDF39",
            "\uD83C\uDF38",
            "\uD83C\uDF3A",
            "\uD83C\uDF37"
        ];
        // Crée un nouveau contenu avec des balises span
        var newContent = words.map(function(word) {
            var h = nombreAleatoire(95, 130);
            var s = nombreAleatoire(40, 80);
            var l = nombreAleatoire(40, 70);
            let emojispan = "";
            if (Math.random() < 0.2) {
                const randomIndex = Math.floor(Math.random() * emojis.length);
                emojispan = "<span> " + emojis[randomIndex] + "</span>";
            }
            return '<span style="color :hsl(' + h + "," + s + "%, " + l + "%" + ")" + '">' + word + "</span>" + emojispan;
        }).join(" ");
        function nombreAleatoire(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Remplace le contenu du paragraphe par le nouveau contenu avec les balises span
        paragraph.innerHTML = newContent;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bqxfu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "snake", ()=>snake);
function snake() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    const canvas = document.createElement("canvas");
    canvas.id = "game-board";
    let foods = [];
    const box = 20;
    canvas.width = width;
    canvas.height = height;
    function generateFood() {
        return {
            x: Math.floor(Math.random() * width / box) * box,
            y: Math.floor(Math.random() * height / box) * box
        };
    }
    const container = document.createElement("div");
    container.style.display = "flex";
    container.appendChild(canvas);
    const divContainer = document.createElement("div");
    divContainer.appendChild(container);
    divContainer.className = "main_snake";
    const style = document.createElement("style");
    style.innerText = `
      #game-board {
        width: ${width};
        height: ${height};
      }
      .main_snake {
        position: fixed;
        top: 0;
        left: 0;
      }
      body{
        overflow:hidden;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(divContainer);
    const ctx = canvas.getContext("2d");
    for(let i = 0; i < 5; i++)foods.push(generateFood());
    let score = 0;
    let snake = [];
    snake[0] = {
        x: 10 * box,
        y: 10 * box
    };
    let d;
    document.addEventListener("keydown", direction);
    function direction(event) {
        if (event.keyCode === 37 && d !== "RIGHT") d = "LEFT";
        else if (event.keyCode === 38 && d !== "DOWN") d = "UP";
        else if (event.keyCode === 39 && d !== "LEFT") d = "RIGHT";
        else if (event.keyCode === 40 && d !== "UP") d = "DOWN";
    }
    function collision(head, array) {
        for(let i = 0; i < array.length; i++){
            if (head.x === array[i].x && head.y === array[i].y) return true;
        }
        return false;
    }
    const colors = [
        "#67c211",
        "#7bad4c",
        "#4b8f0b",
        "#64804a",
        "#489401"
    ];
    async function draw() {
        height = window.innerHeight;
        width = window.innerWidth;
        ctx.clearRect(0, 0, width, height);
        // ctx.fillStyle = '#faf3dd';
        // ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgba(0, 0, 0, 0.2)"; // Couleur du quadrillage
        ctx.lineWidth = 1; // Épaisseur de ligne
        // Lignes verticales
        for(let i = 0; i <= canvas.width; i += box){
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        // Lignes horizontales
        for(let i = 0; i <= canvas.height; i += box){
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }
        for(let i = 0; i < snake.length; i++){
            let snakeColor = colors[i % colors.length]; // Utilisation de teintes différentes
            ctx.fillStyle = i === 0 ? "#62a87c" : snakeColor; // Tête verte, corps coloré
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeStyle = "black";
            ctx.strokeStyle = "black";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }
        let foodImage = document.getElementById("food-image");
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
        if (d === "LEFT") snakeX -= box;
        if (d === "UP") snakeY -= box;
        if (d === "RIGHT") snakeX += box;
        if (d === "DOWN") snakeY += box;
        if (snakeX < 0) snakeX = canvas.width - box;
        if (snakeX >= canvas.width) snakeX = 0;
        if (snakeY < 0) snakeY = canvas.height - box;
        if (snakeY >= canvas.height) snakeY = 0;
        let newHead = {
            x: snakeX,
            y: snakeY
        };
        // Fonction pour générer la nourriture mangeable
        // Générer plusieurs food au début du jeu
        // Dans la fonction draw(), dessiner toutes les occurrences de nourriture mangeable
        foods.forEach((foodItem)=>{
            ctx.drawImage(foodImage, foodItem.x, foodItem.y, box, box);
        });
        // Dans la détection de collision avec le serpent
        let ate = false;
        for(let i = 0; i < foods.length; i++)if (snakeX === foods[i].x && snakeY === foods[i].y) {
            ate = true;
            score++;
            // Retirer la food mangée du tableau des foods
            foods.splice(i, 1);
            // Ajouter une nouvelle food
            foods.push(generateFood());
        }
        if (!ate) snake.pop();
        // Si la taille des foods est inférieure à 5, générer plus de food
        while(foods.length < 5)foods.push(generateFood());
        if (collision(newHead, snake)) clearInterval(game);
        snake.unshift(newHead);
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
    }
    let game = setInterval(draw, 75);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d6di4","ahc7M"], "ahc7M", "parcelRequire4c69")

//# sourceMappingURL=index.61542594.js.map
