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
exports.WaterfallChart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.WaterfallChart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "waterfall-chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260 260H300C311 260 320 269 320 280V300C320 311 311 320 300 320H260C249 320 240 311 240 300V280C240 269 249 260 260 260zM80 100H100C111 100 120 109 120 120V200C120 211 111 220 100 220H80C69 220 60 211 60 200V120C60 109 69 100 80 100zM160 220H200C211 220 220 229 220 240C220 251 211 260 200 260H160C149 260 140 251 140 240C140 229 149 220 160 220zM380 320H360C349 320 340 311 340 300V120C340 109 349 100 360 100H380C391 100 400 109 400 120V300C400 311 391 320 380 320zM380 80H40V340C40 351 31 360 20 360S0 351 0 340V60C0 57.2 0.6 54.6 1.6 52.2C4.6 45 11.8 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M160 180C171 180 180 189 180 200C180 211 171 220 160 220S140 211 140 200C140 189 149 180 160 180zM80 100H100C111 100 120 109 120 120V160C120 171 111 180 100 180H80C69 180 60 171 60 160V120C60 109 69 100 80 100zM220 220C231 220 240 229 240 240V260C240 271 231 280 220 280S200 271 200 260V240C200 229 209 220 220 220zM300 280H280C269 280 260 271 260 260V120C260 109 269 100 280 100H300C311 100 320 109 320 120V260C320 271 311 280 300 280zM300 80H40V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.WaterfallChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.WaterfallChart.displayName = "Blueprint5.Icon.WaterfallChart";
exports.default = exports.WaterfallChart;
//# sourceMappingURL=waterfall-chart.js.map