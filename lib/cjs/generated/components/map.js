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
exports.Map = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Map = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "map", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M390.8 316.4L391 316.8L271 396.8L270.8 396.4C267.8 398.4 264.2000000000001 400 260 400S252.2 398.4 249.2 396.4L249.0000000000001 396.8L140 324L31 396.6L30.8 396.4C27.8 398.4 24.2 400 20 400C9 400 0 391 0 380V100C0 93 3.8 87.2 9.2 83.6L9 83.2L129 3.2L129.2 3.6C132.2 1.6 135.8 0 140 0S147.8 1.6 150.8 3.6L151 3.2L260 76L369 3.4L369.2000000000001 3.8C372.2 1.6 375.8 0 380 0C391 0 400 9 400 20V300C400 307 396.2 312.8 390.8 316.4zM120 57.4L40 110.8V342.6L120 289.2V57.4zM240 110.8L160 57.4V289.2L240 342.6V110.8zM360 57.4L280 110.8V342.6L360 289.2V57.4z" : "M311 256.6L311 256.6L221.2 316.6C221.2 316.6 221.2 316.6 221.2 316.6L221.2 316.6L221.2 316.6C218 318.8 214.2 320 210 320C206.2 320 202.8 318.8 199.8 317L199.8 317L110.6 263.6L31.2 316.6C31.2 316.6 31.2 316.6 31.2 316.6L31.2 316.6L31.2 316.6C28 318.8 24.2 320 20 320C9 320 0 311 0 300V80C0 73 3.6 67 9 63.4L9 63.4L98.8 3.4C98.8 3.4 98.8 3.4 98.8 3.4L98.8 3.4L98.8 3.4C102 1.2 105.8 0 110 0C113.8 0 117.2 1.2 120.2 3L120.2 3L209.4 56.4L288.8 3.4C288.8 3.4 288.8 3.4 288.8 3.4L288.8 3.4L288.8 3.4C292 1.2 295.8 0 300 0C311 0 320 9 320 20V240C320 247 316.4 253 311 256.6zM100 50.8L40 90.8V262.8L98.8 223.6C98.8 223.6 98.8 223.6 98.8 223.6L98.8 223.6L98.8 223.6C99.2 223.2 99.6 223 100 222.8V50.8zM200 97.2C200 97.2 199.8 97.2 199.8 97L199.8 97L120 49.4V222.8C120 222.8 120.2 222.8 120.2 223L120.2 223L200 270.6V97.2zM280 57.4L221.2 96.6C221.2 96.6 221.2 96.6 221.2 96.6L221.2 96.6L221.2 96.6C220.8 96.8 220.4 96.9999999999999 220.2 97.2V269.2L280.2 229.2V57.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Map.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Map.displayName = "Blueprint5.Icon.Map";
exports.default = exports.Map;
//# sourceMappingURL=map.js.map