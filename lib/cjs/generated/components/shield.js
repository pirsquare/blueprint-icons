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
exports.Shield = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Shield = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "shield", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 0C320 76.190476 380 180.95238 380 314.2857142000001C340 314.2857142000001 280 342.8571428 200 400C120 342.8571428 60 314.2857142000001 20 314.2857142000001C20 180.95238 80 76.190476 200 0zM200 346.9693256C251.549258 312.278675 295.5223880000001 289.3705758 333.345966 278.5886604C324.5513360000001 186.047024 280.620436 111.514582 200 52.645212L200 346.9693256z" : "M160 0C253.333334 60.95238 300 144.7619048 300 251.4285714C268.888888 251.4285714 222.222222 274.2857142000001 160 320C97.7777778 274.2857142000001 51.1111112 251.4285714 20 251.4285714C20 144.7619048 66.6666666 60.95238 160 0zM160 277.5754604C200.093868 249.82294 234.295192 231.4964608 263.71353 222.8709284C256.873262 148.8376194 222.704784 89.211664 160 42.116168L160 277.5754604z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Shield.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Shield.displayName = "Blueprint5.Icon.Shield";
exports.default = exports.Shield;
//# sourceMappingURL=shield.js.map