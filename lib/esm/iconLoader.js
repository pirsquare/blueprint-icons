/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { __awaiter, __generator } from "tslib";
import { IconNames, IconNamesSet } from "./iconNames";
import { IconSize } from "./iconTypes";
import { wrapWithTimer } from "./loaderUtils";
function getLoaderFn(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, loader;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = options.loader, loader = _a === void 0 ? singleton.defaultLoader : _a;
                    if (!(typeof loader === "function")) return [3 /*break*/, 1];
                    return [2 /*return*/, loader];
                case 1:
                    if (!(loader === "all")) return [3 /*break*/, 3];
                    return [4 /*yield*/, import(
                        /* webpackChunkName: "blueprint-icons-all-paths-loader" */
                        "./paths-loaders/allPathsLoader")];
                case 2: return [2 /*return*/, (_b.sent()).allPathsLoader];
                case 3: return [4 /*yield*/, import(
                    /* webpackChunkName: "blueprint-icons-split-paths-by-size-loader" */
                    "./paths-loaders/splitPathsBySizeLoader")];
                case 4: return [2 /*return*/, (_b.sent()).splitPathsBySizeLoader];
            }
        });
    });
}
/**
 * Blueprint icons loader.
 */
var Icons = /** @class */ (function () {
    function Icons() {
        /** @internal */
        this.defaultLoader = "split-by-size";
        /** @internal */
        this.loadedIconPaths16 = new Map();
        /** @internal */
        this.loadedIconPaths20 = new Map();
    }
    /**
     * Set global icon loading options for all subsequent `Icons.load()` calls.
     */
    Icons.setLoaderOptions = function (options) {
        if (options.loader !== undefined) {
            singleton.defaultLoader = options.loader;
        }
    };
    Icons.load = function (icons, size, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(icons)) {
                            icons = [icons];
                        }
                        return [4 /*yield*/, Promise.all(icons.map(function (icon) { return _this.loadImpl(icon, size, options); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load all available icons for use in Blueprint components.
     */
    Icons.loadAll = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var allIcons;
            var _this = this;
            return __generator(this, function (_a) {
                allIcons = Object.values(IconNames);
                wrapWithTimer("[Blueprint] loading all icons", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all([
                                    this.load(allIcons, IconSize.STANDARD, options),
                                    this.load(allIcons, IconSize.LARGE, options),
                                ])];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get the icon SVG paths. Returns `undefined` if the icon has not been loaded yet.
     */
    Icons.getPaths = function (icon, size) {
        if (!this.isValidIconName(icon)) {
            // don't warn, since this.load() will have warned already
            return undefined;
        }
        var loadedIcons = size < IconSize.LARGE ? singleton.loadedIconPaths16 : singleton.loadedIconPaths20;
        return loadedIcons.get(icon);
    };
    Icons.loadImpl = function (icon, size, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var loadedIcons, loaderFn, supportedSize, paths, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isValidIconName(icon)) {
                            console.error("[Blueprint] Unknown icon '".concat(icon, "'"));
                            return [2 /*return*/];
                        }
                        loadedIcons = size < IconSize.LARGE ? singleton.loadedIconPaths16 : singleton.loadedIconPaths20;
                        if (loadedIcons.has(icon)) {
                            // already loaded, no-op
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getLoaderFn(options)];
                    case 1:
                        loaderFn = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        supportedSize = size < IconSize.LARGE ? IconSize.STANDARD : IconSize.LARGE;
                        return [4 /*yield*/, loaderFn(icon, supportedSize)];
                    case 3:
                        paths = _a.sent();
                        loadedIcons.set(icon, paths);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error("[Blueprint] Unable to load ".concat(size, "px icon '").concat(icon, "'"), e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @returns true if the given string is a valid {@link IconName}
     */
    Icons.isValidIconName = function (iconName) {
        return IconNamesSet.has(iconName);
    };
    return Icons;
}());
export { Icons };
var singleton = new Icons();
//# sourceMappingURL=iconLoader.js.map