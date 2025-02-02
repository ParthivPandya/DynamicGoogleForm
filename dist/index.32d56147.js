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
        globalObject
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
})({"cP7kO":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "dc9ee53a32d56147";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lbDgN":[function(require,module,exports,__globalThis) {
// src/main.ts
var _formBuilder = require("./components/form-builder");
document.addEventListener('DOMContentLoaded', function() {
    var formBuilder = new (0, _formBuilder.FormBuilder)('form-container');
    formBuilder.initialize();
});

},{"./components/form-builder":"4q1O9"}],"4q1O9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormBuilder", ()=>FormBuilder);
// form-builder.ts
var _storage = require("./storage");
var _formTypes = require("../types/form-types");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var FormBuilder = /** @class */ function() {
    function FormBuilder(containerId) {
        this.currentForm = null;
        this.isPreviewMode = false;
        var container = document.getElementById(containerId);
        if (!container) throw new Error('Container element not found');
        this.container = container;
        this.storage = new (0, _storage.FormStorage)();
        this.initialize();
    }
    FormBuilder.prototype.initialize = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.renderFormsList()
                        ];
                    case 1:
                        _a.sent();
                        this.setupEventListeners();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormBuilder.prototype.setupEventListeners = function() {
        var _this = this;
        // New Form Button
        var newFormBtn = document.getElementById('newFormBtn');
        if (newFormBtn) newFormBtn.addEventListener('click', function() {
            return _this.createNewForm();
        });
        // Global event delegation for dynamic elements
        this.container.addEventListener('click', function(e) {
            var target = e.target;
            if (target.matches('.edit-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId) _this.editForm(formId);
            }
            if (target.matches('.delete-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId && confirm('Are you sure you want to delete this form?')) _this.deleteForm(formId);
            }
            if (target.matches('.preview-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId) _this.previewForm(formId);
            }
        });
    };
    FormBuilder.prototype.renderFormsList = function() {
        return __awaiter(this, void 0, void 0, function() {
            var forms;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.storage.getForms()
                        ];
                    case 1:
                        forms = _a.sent();
                        this.container.innerHTML = "\n            <div class=\"header\">\n                <h1>Form Builder</h1>\n                <button id=\"newFormBtn\" class=\"btn primary\">Create New Form</button>\n            </div>\n            <div class=\"forms-grid\">\n                ".concat(forms.map(function(form) {
                            return _this.renderFormCard(form);
                        }).join(''), "\n            </div>\n        ");
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormBuilder.prototype.renderFormCard = function(form) {
        return "\n            <div class=\"form-card\">\n                <h3>".concat(this.escapeHtml(form.title), "</h3>\n                <p>").concat(this.escapeHtml(form.description || 'No description'), "</p>\n                <div class=\"form-card-actions\">\n                    <button class=\"btn edit-form-btn\" data-form-id=\"").concat(form.id, "\">Edit</button>\n                    <button class=\"btn preview-form-btn\" data-form-id=\"").concat(form.id, "\">Preview</button>\n                    <button class=\"btn delete-form-btn\" data-form-id=\"").concat(form.id, "\">Delete</button>\n                </div>\n            </div>\n        ");
    };
    FormBuilder.prototype.createNewForm = function() {
        this.currentForm = {
            id: crypto.randomUUID(),
            title: 'Untitled Form',
            description: '',
            fields: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.renderFormEditor();
    };
    FormBuilder.prototype.renderFormEditor = function() {
        var _this = this;
        if (!this.currentForm) return;
        this.container.innerHTML = "\n            <div class=\"form-editor\">\n                <div class=\"form-editor-header\">\n                    <input type=\"text\" \n                           class=\"form-title\" \n                           value=\"".concat(this.escapeHtml(this.currentForm.title), "\"\n                           placeholder=\"Form Title\">\n                    <textarea \n                        class=\"form-description\"\n                        placeholder=\"Form Description\">").concat(this.escapeHtml(this.currentForm.description), "</textarea>\n                </div>\n                <div class=\"form-fields\">\n                    ").concat(this.currentForm.fields.map(function(field) {
            return _this.renderFormField(field, false);
        }).join(''), "\n                </div>\n                <div class=\"form-actions\">\n                    <button class=\"btn add-field-btn\">Add Field</button>\n                    <button class=\"btn save-form-btn\">Save Form</button>\n                    <button class=\"btn cancel-btn\">Cancel</button>\n                </div>\n            </div>\n        ");
        this.setupFormEditorListeners();
    };
    FormBuilder.prototype.escapeHtml = function(unsafe) {
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };
    FormBuilder.prototype.addField = function(type) {
        if (!this.currentForm) return;
        // Create a new field with default values based on the field type
        var newField = {
            id: crypto.randomUUID().toString(),
            label: 'New Field',
            type: type,
            required: false,
            options: type === (0, _formTypes.FormFieldType).RADIO || type === (0, _formTypes.FormFieldType).CHECKBOX ? [
                {
                    id: crypto.randomUUID().toString(),
                    value: '',
                    label: 'Option 1'
                }
            ] // Default option for radio/checkbox
             : [],
            order: 0
        };
        // Add the new field to the current form
        this.currentForm.fields.push(newField);
        // Re-render the form editor to reflect the new field
        this.renderFormEditor();
    };
    FormBuilder.prototype.editForm = function(formId) {
        return __awaiter(this, void 0, void 0, function() {
            var forms, form;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.storage.getForms()
                        ];
                    case 1:
                        forms = _a.sent();
                        form = forms.find(function(f) {
                            return f.id === formId;
                        });
                        if (form) {
                            this.currentForm = form;
                            this.renderFormEditor();
                        }
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormBuilder.prototype.deleteForm = function(formId) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.storage.deleteForm(formId)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.renderFormsList()
                        ];
                    case 2:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormBuilder.prototype.previewForm = function(formId) {
        return __awaiter(this, void 0, void 0, function() {
            var forms, form, previewForm, backBtn;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.storage.getForms()
                        ];
                    case 1:
                        forms = _a.sent();
                        form = forms.find(function(f) {
                            return f.id === formId;
                        });
                        if (!form) return [
                            2 /*return*/ 
                        ];
                        this.container.innerHTML = "\n            <div class=\"form-preview\">\n                <div class=\"form-preview-header\">\n                    <h2>".concat(this.escapeHtml(form.title), "</h2>\n                    <p>").concat(this.escapeHtml(form.description), "</p>\n                </div>\n                <form id=\"previewForm\">\n                    ").concat(form.fields.map(function(field) {
                            return _this.renderFormField(field, true);
                        }).join(''), "\n                    <div class=\"form-actions\">\n                        <button type=\"submit\" class=\"btn primary\">Submit</button>\n                        <button type=\"button\" class=\"btn\" id=\"backToList\">Back</button>\n                    </div>\n                </form>\n            </div>\n        ");
                        previewForm = document.getElementById('previewForm');
                        backBtn = document.getElementById('backToList');
                        if (previewForm) previewForm.addEventListener('submit', function(e) {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a) {
                                    switch(_a.label){
                                        case 0:
                                            e.preventDefault();
                                            return [
                                                4 /*yield*/ ,
                                                this.handleFormSubmission(form)
                                            ];
                                        case 1:
                                            _a.sent();
                                            return [
                                                2 /*return*/ 
                                            ];
                                    }
                                });
                            });
                        });
                        if (backBtn) backBtn.addEventListener('click', function() {
                            return _this.renderFormsList();
                        });
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormBuilder.prototype.renderFormField = function(field, isPreview) {
        var _this = this;
        var _a, _b;
        if (isPreview === void 0) isPreview = false;
        var fieldHtml = "\n            <div class=\"form-field\" data-field-id=\"".concat(field.id, "\">\n                ").concat(isPreview ? '' : '<div class="field-header">', "\n        ");
        if (!isPreview) fieldHtml += "\n                <input type=\"text\" \n                    class=\"field-label\" \n                    value=\"".concat(this.escapeHtml(field.label), "\"\n                    placeholder=\"Question\">\n                <div class=\"field-type\">").concat(field.type, "</div>\n            ");
        else fieldHtml += "<label>".concat(this.escapeHtml(field.label), "</label>");
        // Field content based on type
        switch(field.type){
            case (0, _formTypes.FormFieldType).TEXT:
                fieldHtml += "\n                    <input type=\"text\" \n                        class=\"field-input\" \n                        name=\"".concat(field.id, "\"\n                        ").concat(field.required ? 'required' : '', "\n                        ").concat(!isPreview ? 'disabled' : '', ">\n                ");
                break;
            case (0, _formTypes.FormFieldType).RADIO:
                fieldHtml += "<div class=\"radio-group\">";
                (_a = field.options) === null || _a === void 0 || _a.forEach(function(option) {
                    fieldHtml += "\n                        <div class=\"radio-option\">\n                            <input type=\"radio\" \n                                name=\"".concat(field.id, "\" \n                                value=\"").concat(option.value, "\"\n                                ").concat(field.required ? 'required' : '', "\n                                ").concat(!isPreview ? 'disabled' : '', ">\n                            ").concat(!isPreview ? "<input type=\"text\" class=\"option-label\" value=\"".concat(_this.escapeHtml(option.label), "\">") : "<label>".concat(_this.escapeHtml(option.label), "</label>"), "\n                        </div>\n                    ");
                });
                fieldHtml += '</div>';
                break;
            case (0, _formTypes.FormFieldType).CHECKBOX:
                fieldHtml += "<div class=\"checkbox-group\">";
                (_b = field.options) === null || _b === void 0 || _b.forEach(function(option) {
                    fieldHtml += "\n                        <div class=\"checkbox-option\">\n                            <input type=\"checkbox\" \n                                name=\"".concat(field.id, "\" \n                                value=\"").concat(option.value, "\"\n                                ").concat(!isPreview ? 'disabled' : '', ">\n                            ").concat(!isPreview ? "<input type=\"text\" class=\"option-label\" value=\"".concat(_this.escapeHtml(option.label), "\">") : "<label>".concat(_this.escapeHtml(option.label), "</label>"), "\n                        </div>\n                    ");
                });
                fieldHtml += '</div>';
                break;
        }
        if (!isPreview) fieldHtml += "\n                <div class=\"field-actions\">\n                    <label class=\"required-toggle\">\n                        <input type=\"checkbox\" \n                            ".concat(field.required ? 'checked' : '', " \n                            class=\"required-checkbox\">\n                        Required\n                    </label>\n                    <button class=\"btn delete-field-btn\">Delete</button>\n                </div>\n            ");
        fieldHtml += "</div>";
        return fieldHtml;
    };
    FormBuilder.prototype.setupFormEditorListeners = function() {
        var _this = this;
        // Title and description listeners
        var titleInput = this.container.querySelector('.form-title');
        var descInput = this.container.querySelector('.form-description');
        if (titleInput && this.currentForm) titleInput.addEventListener('change', function(e) {
            if (_this.currentForm) _this.currentForm.title = e.target.value;
        });
        if (descInput && this.currentForm) descInput.addEventListener('change', function(e) {
            if (_this.currentForm) _this.currentForm.description = e.target.value;
        });
        // Add Field button
        var addFieldBtn = this.container.querySelector('.add-field-btn');
        if (addFieldBtn) addFieldBtn.addEventListener('click', function() {
            _this.showAddFieldDialog();
        });
        // Save Form button
        var saveFormBtn = this.container.querySelector('.save-form-btn');
        if (saveFormBtn) saveFormBtn.addEventListener('click', function() {
            return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!this.currentForm) return [
                                3 /*break*/ ,
                                3
                            ];
                            return [
                                4 /*yield*/ ,
                                this.storage.saveForm(this.currentForm)
                            ];
                        case 1:
                            _a.sent();
                            return [
                                4 /*yield*/ ,
                                this.renderFormsList()
                            ];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        });
        // Cancel button
        var cancelBtn = this.container.querySelector('.cancel-btn');
        if (cancelBtn) cancelBtn.addEventListener('click', function() {
            _this.renderFormsList();
        });
        // Field-specific event delegation
        this.container.addEventListener('click', function(e) {
            var target = e.target;
            if (target.matches('.delete-field-btn')) {
                var fieldElement = target.closest('.form-field');
                if (fieldElement && _this.currentForm) {
                    var fieldId_1 = fieldElement.getAttribute('data-field-id');
                    if (fieldId_1) {
                        _this.currentForm.fields = _this.currentForm.fields.filter(function(f) {
                            return f.id !== fieldId_1;
                        });
                        _this.renderFormEditor();
                    }
                }
            }
        });
    };
    FormBuilder.prototype.showAddFieldDialog = function() {
        var _this = this;
        var dialog = document.createElement('div');
        dialog.className = 'field-type-dialog';
        dialog.innerHTML = "\n            <div class=\"dialog-content\">\n                <h3>Select Field Type</h3>\n                <button class=\"btn\" data-type=\"".concat((0, _formTypes.FormFieldType).TEXT, "\">Text Input</button>\n                <button class=\"btn\" data-type=\"").concat((0, _formTypes.FormFieldType).RADIO, "\">Multiple Choice</button>\n                <button class=\"btn\" data-type=\"").concat((0, _formTypes.FormFieldType).CHECKBOX, "\">Checkboxes</button>\n                <button class=\"btn cancel\">Cancel</button>\n            </div>\n        ");
        var handleTypeSelection = function(e) {
            var target = e.target;
            var type = target.getAttribute('data-type');
            if (type && _this.currentForm) {
                _this.addField(type);
                document.body.removeChild(dialog);
            }
            if (target.classList.contains('cancel')) document.body.removeChild(dialog);
        };
        dialog.addEventListener('click', handleTypeSelection);
        document.body.appendChild(dialog);
    };
    FormBuilder.prototype.handleFormSubmission = function(form) {
        return __awaiter(this, void 0, void 0, function() {
            var formData, response;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        formData = new FormData(document.getElementById('previewForm'));
                        response = {
                            id: crypto.randomUUID(),
                            formId: form.id,
                            answers: [],
                            submittedAt: new Date().toISOString()
                        };
                        form.fields.forEach(function(field) {
                            if (field.type === (0, _formTypes.FormFieldType).CHECKBOX) {
                                var values = formData.getAll(field.id);
                                response.answers.push({
                                    fieldId: field.id,
                                    value: values
                                });
                            } else {
                                var value = formData.get(field.id);
                                if (value) response.answers.push({
                                    fieldId: field.id,
                                    value: value
                                });
                            }
                        });
                        return [
                            4 /*yield*/ ,
                            this.storage.saveFormResponse(response)
                        ];
                    case 1:
                        _a.sent();
                        alert('Form submitted successfully!');
                        return [
                            4 /*yield*/ ,
                            this.renderFormsList()
                        ];
                    case 2:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return FormBuilder;
}();

},{"./storage":"5bUWi","../types/form-types":"gSnHU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bUWi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormStorage", ()=>FormStorage);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var FormStorage = /** @class */ function() {
    function FormStorage() {
        this.FORMS_KEY = 'forms';
        this.RESPONSES_KEY = 'form_responses';
    }
    FormStorage.prototype.getForms = function() {
        return __awaiter(this, void 0, void 0, function() {
            var data;
            return __generator(this, function(_a) {
                data = localStorage.getItem(this.FORMS_KEY);
                return [
                    2 /*return*/ ,
                    data ? JSON.parse(data) : []
                ];
            });
        });
    };
    FormStorage.prototype.saveForm = function(form) {
        return __awaiter(this, void 0, void 0, function() {
            var forms, existingIndex;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.getForms()
                        ];
                    case 1:
                        forms = _a.sent();
                        existingIndex = forms.findIndex(function(f) {
                            return f.id === form.id;
                        });
                        if (existingIndex !== -1) forms[existingIndex] = __assign(__assign({}, form), {
                            updatedAt: new Date().toISOString()
                        });
                        else forms.push(__assign(__assign({}, form), {
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        }));
                        localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormStorage.prototype.deleteForm = function(id) {
        return __awaiter(this, void 0, void 0, function() {
            var forms, updatedForms;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.getForms()
                        ];
                    case 1:
                        forms = _a.sent();
                        updatedForms = forms.filter(function(form) {
                            return form.id !== id;
                        });
                        localStorage.setItem(this.FORMS_KEY, JSON.stringify(updatedForms));
                        return [
                            4 /*yield*/ ,
                            this.deleteFormResponses(id)
                        ];
                    case 2:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    FormStorage.prototype.getFormResponses = function(formId) {
        return __awaiter(this, void 0, void 0, function() {
            var data, allResponses;
            return __generator(this, function(_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                return [
                    2 /*return*/ ,
                    allResponses[formId] || []
                ];
            });
        });
    };
    FormStorage.prototype.saveFormResponse = function(response) {
        return __awaiter(this, void 0, void 0, function() {
            var data, allResponses;
            return __generator(this, function(_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                if (!allResponses[response.formId]) allResponses[response.formId] = [];
                allResponses[response.formId].push(__assign(__assign({}, response), {
                    submittedAt: new Date().toISOString()
                }));
                localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    FormStorage.prototype.deleteFormResponses = function(formId) {
        return __awaiter(this, void 0, void 0, function() {
            var data, allResponses;
            return __generator(this, function(_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                delete allResponses[formId];
                localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    return FormStorage;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"gSnHU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormFieldType", ()=>FormFieldType);
var FormFieldType;
(function(FormFieldType) {
    FormFieldType["TEXT"] = "text";
    FormFieldType["RADIO"] = "radio";
    FormFieldType["CHECKBOX"] = "checkbox";
})(FormFieldType || (FormFieldType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cP7kO","lbDgN"], "lbDgN", "parcelRequire94c2")

//# sourceMappingURL=index.32d56147.js.map
