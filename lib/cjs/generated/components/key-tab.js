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
exports.KeyTab = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.KeyTab = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "key-tab", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 140H88.2L134 185.8C137.8 189.4 140 194.4 140 200C140 211 131 220 120 220C114.4 220 109.4 217.8 105.8 214.2L40 148.2V200C40 211 31 220 20 220S0 211 0 200V40C0 29 9 20 20 20S40 29 40 40V91.8L105.8 26C109.4 22.2 114.4 20 120 20C131 20 140 29 140 40C140 45.6 137.8 50.6 134.2 54.2L88.2 100H380C391 100 400 109 400 120C400 131 391 140 380 140zM380 380C369 380 360 371 360 360V308.2L294.2000000000001 374C290.6 377.8 285.6 380 280 380C269 380 260 371 260 360C260 354.4 262.2 349.4 265.8 345.8L311.8 300H20C9 300 0 291 0 280C0 269 9 260 20 260H311.8L266 214.2C262.2 210.6 260 205.6 260 200C260 189 269 180 280 180C285.6 180 290.6 182.2 294.2000000000001 185.8L360 251.8V200C360 189 369 180 380 180S400 189 400 200V360C400 371 391 380 380 380z" : "M300 120H88.2L114 145.8C117.8 149.4 120 154.4 120 160C120 171 111 180 100 180C94.4 180 89.4 177.8 85.8 174.2L40 128.2V160C40 171 31 180 20 180S0 171 0 160V40C0 29 9 20 20 20S40 29 40 40V71.8L85.8 26C89.4 22.2 94.4 20 100 20C111 20 120 29 120 40C120 45.6 117.8 50.6 114.2 54.2L88.2 80H300C311 80 320 89 320 100C320 111 311 120 300 120zM300 300C289 300 280 291 280 280V248.2L234.2 294C230.6 297.8 225.6 300 220 300C209 300 200 291 200 280C200 274.4 202.2 269.4 205.8 265.8L231.8 240H20C9 240 0 231 0 220C0 209 9 200 20 200H231.8L206 174.2C202.2 170.6 200 165.6 200 160C200 149 209 140 220 140C225.6 140 230.6 142.2 234.2 145.8L280 191.8V160C280 149 289 140 300 140S320 149 320 160V280C320 291 311 300 300 300z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.KeyTab.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.KeyTab.displayName = "Blueprint5.Icon.KeyTab";
exports.default = exports.KeyTab;
//# sourceMappingURL=key-tab.js.map