"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citation = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Citation = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "citation", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 380C35.8 380 0 344.2 0 300S35.8 220 80 220C82 220 84 220.2 86 220.4C76.4 173.6 50.6 140 20 140C9 140 0 131 0 120C0 109 9 100 20 100C97.4 100 160 189.6 160 300C160 344.2 124.2 380 80 380zM320 380C275.8 380 240 344.2 240 300S275.8 220 320 220C322 220 324 220.2 326 220.4C316.4 173.6 290.6 140 260 140C249 140 240 131 240 120C240 109 249 100 260 100C337.4000000000001 100 400 189.6 400 300C400 344.2 364.2000000000001 380 320 380z" : "M300.4 220C300.4 253.2 273.6 280 240.4 280S180.4 253.2 180.4 220S207.2 160 240.4 160C244.6 160 248.6 160.4 252.4 161.2C242 124.8 222.8 100 200.4 100C189.4 100 180.4 91 180.4 80C180.4 69 189.4 60 200.4 60C255.6 60 300.4 122.6 300.4 200C300.4 204 300 207.8 299.6 211.6C299.8 214.4 300.4 217.2 300.4 220zM80.4 280C47.2 280 20.4 253.2 20.4 220S47.2 160 80.4 160C84.6 160 88.6 160.4 92.4 161.2C82 124.8 62.8 100 40.4 100C29.4 100 20.4 91 20.4 80C20.4 69 29.4 60 40.4 60C95.6 60 140.4 122.6 140.4 200C140.4 204 140 207.8 139.6 211.6C139.8 214.4 140.4 217.2 140.4 220C140.4 253.2 113.4 280 80.4 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Citation.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Citation.displayName = "Blueprint5.Icon.Citation";
exports.default = exports.Citation;
//# sourceMappingURL=citation.js.map