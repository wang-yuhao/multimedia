var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
      * A class for performing AJAX calls.
      */
var AJAX = /** @class */ (function () {
    function AJAX() {
    }
    /**
     * Performs a GET request to a given URL
     *
     * @param {URL | string} url The request URL
     * @param {Object} options Request options
     * @returns {Promise<any>}
     */
    AJAX.prototype.get = function (url, options) {
        return fetch(url, __assign({ method: 'GET' }, options))
            .then(function (res) { return res.json(); });
    };
    /**
     * Performs a POST request to a given URL with a given payload
     *
     * @param {URL | string} url The request URL
     * @param {any} payload Data submitted with the request
     * @param {Object} options Request options
     * @returns {Promise<any>}
     */
    AJAX.prototype.post = function (url, payload, options) {
        return fetch(url, __assign({ method: 'POST', body: payload }, options))
            .then(function (res) { return res.json(); });
    };
    return AJAX;
}());
var SpotifyAPI = /** @class */ (function (_super) {
    __extends(SpotifyAPI, _super);
    function SpotifyAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * Queries the Spotify API for items of a given type matching the search query
      *
      * @param {string} query Album title query
      * @param {string} type Type of the requested search results
      * @returns {Promise<Object>}
      */
    SpotifyAPI.prototype.search = function (query, type) {
        // const url = `/search?type=${type}&q=${query}&key=${this.API_KEY}`;
        var url = new URL('/search', this.BASE_URL);
        url.searchParams.set('type', type);
        url.searchParams.set('q', query);
        url.searchParams.set('key', this.API_KEY);
        return this.get(url);
    };
    /**
      * Queries the Spotify API for albums matching the search query
      *
      * @param {string} query Album title query
      * @returns {Promise<Object>}
      */
    SpotifyAPI.prototype.searchAlbum = function (query) {
        return this.search(query, 'album');
    };
    /**
      * Queries the Spotify API for artists matching the search query
      *
      * @param {string} query Artist name query
      * @returns {Promise<Object>}
      */
    SpotifyAPI.prototype.searchArtist = function (query) {
        return this.search(query, 'artist');
    };
    return SpotifyAPI;
}(AJAX));
SpotifyAPI.prototype.BASE_URL = 'http://flobe-online.de:3000';
SpotifyAPI.prototype.API_KEY = '--- api key goes here ---';
var SpotifyApp = /** @class */ (function () {
    /**
     * @param {HTMLInputElement} input
     * @param {HTMLDivElement} output
     */
    function SpotifyApp(input, output) {
        var _this = this;
        this.input = input;
        this.output = output;
        this.api = new SpotifyAPI();
        // Unfortunately this cannot be eta-reduced due to this-scoping.
        this.input.addEventListener('keyup', function (e) { return _this.queryHandler(e); });
    }
    /**
     * @param {KeyboardEvent} e
     */
    SpotifyApp.prototype.queryHandler = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var results, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(e.keyCode === 13 && this.input.value.length > 2)) return [3 /*break*/, 2];
                        e.preventDefault();
                        return [4 /*yield*/, this.api.searchArtist(this.input.value)];
                    case 1:
                        results = _a.sent();
                        this.renderResults(results);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpotifyApp.prototype.renderResults = function (results) {
        var _this = this;
        this.output.innerHTML = '';
        var artists = results.artists.items;
        artists.forEach(function (_a) {
            var name = _a.name, href = _a.external_urls.spotify, images = _a.images;
            var wrapper = document.createElement('a');
            if (images.length) {
                var image = new Image();
                image.src = images[0].url;
                wrapper.appendChild(image);
            }
            wrapper.appendChild(document.createTextNode(name));
            wrapper.href = href;
            _this.output.appendChild(wrapper);
        });
    };
    return SpotifyApp;
}());
window.addEventListener('DOMContentLoaded', function () {
    new SpotifyApp(document.querySelector('input'), document.querySelector('.output'));
});
