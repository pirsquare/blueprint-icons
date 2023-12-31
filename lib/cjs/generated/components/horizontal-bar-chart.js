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
exports.HorizontalBarChart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.HorizontalBarChart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "horizontal-bar-chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 380C9 380 0 371 0 360V40C0 29 9 20 20 20S40 29 40 40V360C40 371 31 380 20 380zM80 280H300C311 280 320 289 320 300V340C320 351 311 360 300 360H80C69 360 60 351 60 340V300C60 289 69 280 80 280zM240 120H80C69 120 60 111 60 100V60C60 49 69 40 80 40H240C251 40 260 49 260 60V100C260 111 251 120 240 120zM380 240H80C69 240 60 231 60 220V180C60 169 69 160 80 160H380C391 160 400 169 400 180V220C400 231 391 240 380 240z" : "M80 220H220C231 220 240 229 240 240V260C240 271 231 280 220 280H80C69 280 60 271 60 260V240C60 229 69 220 80 220zM20 300C9 300 0 291 0 280V20C0 9 9 0 20 0S40 9 40 20V280C40 291 31 300 20 300zM300 180H80C69 180 60 171 60 160V140C60 129 69 120 80 120H300C311 120 320 129 320 140V160C320 171 311 180 300 180zM180 80H80C69 80 60 71 60 60V40C60 29 69 20 80 20H180C191 20 200 29 200 40V60C200 71 191 80 180 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.HorizontalBarChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.HorizontalBarChart.displayName = "Blueprint5.Icon.HorizontalBarChart";
exports.default = exports.HorizontalBarChart;
//# sourceMappingURL=horizontal-bar-chart.js.map