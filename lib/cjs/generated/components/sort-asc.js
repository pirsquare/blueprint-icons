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
exports.SortAsc = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SortAsc = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "sort-asc", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 240H300C311 240 320 249 320 260V280C320 291 311 300 300 300H200C189 300 180 291 180 280V260C180 249 189 240 200 240zM200 140H340C351 140 360 149 360 160V180C360 191 351 200 340 200H200C189 200 180 191 180 180V160C180 149 189 140 200 140zM200 340H260C271 340 280 349 280 360V380C280 391 271 400 260 400H200C189 400 180 391 180 380V360C180 349 189 340 200 340zM380 100H200C189 100 180 91 180 80V60C180 49 189 40 200 40H380C391 40 400 49 400 60V80C400 91 391 100 380 100zM140 120C134.4 120 129.4 117.8 125.8 114.2000000000001L100 88.2V200C100 211 91 220 80 220S60 211 60 200V88.2L34.2 114C30.6 117.8 25.6 120 20 120C9 120 0 111 0 100C0 94.4 2.2 89.4 5.8 85.8L65.8 25.8C69.4 22.2 74.4 20 80 20S90.6 22.2 94.2 25.8L154.2 85.8C157.8 89.4 160 94.4 160 100C160 111 151 120 140 120z" : "M160 180H220C231 180 240 189 240 200C240 211 231 220 220 220H160C149 220 140 211 140 200C140 189 149 180 160 180zM160 260H180C191 260 200 269 200 280C200 291 191 300 180 300H160C149 300 140 291 140 280C140 269 149 260 160 260zM160 100H260C271 100 280 109 280 120C280 131 271 140 260 140H160C149 140 140 131 140 120C140 109 149 100 160 100zM100 80C94.4 80 89.4 77.8 85.8 74.2L80 68.2V140C80 151 71 160 60 160S40 151 40 140V68.2L34.2 74C30.6 77.8 25.6 80 20 80C9 80 0 71 0 60C0 54.4 2.2 49.4 5.8 45.8L45.8 5.8C49.4 2.2 54.4 0 60 0S70.6 2.2 74.2 5.8L114.2 45.8C117.8 49.4 120 54.4 120 60C120 71 111 80 100 80zM300 60H160C149 60 140 51 140 40C140 29 149 20 160 20H300C311 20 320 29 320 40C320 51 311 60 300 60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SortAsc.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SortAsc.displayName = "Blueprint5.Icon.SortAsc";
exports.default = exports.SortAsc;
//# sourceMappingURL=sort-asc.js.map