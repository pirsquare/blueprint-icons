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
exports.GanttChart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.GanttChart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "gantt-chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 260H180C191 260 200 269 200 280V300C200 311 191 320 180 320H80C69 320 60 311 60 300V280C60 269 69 260 80 260zM140 220V200C140 189 149 180 160 180H280C291 180 300 189 300 200V220C300 231 291 240 280 240H160C149 240 140 231 140 220zM380 160H260C249 160 240 151 240 140V120C240 109 249 100 260 100H380C391 100 400 109 400 120V140C400 151 391 160 380 160zM380 80H40V340C40 351 31 360 20 360S0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M200 120C200 109 209 100 220 100H300C311 100 320 109 320 120C320 131 311 140 300 140H220C209 140 200 131 200 120zM120 180C120 169 129 160 140 160H220C231 160 240 169 240 180C240 191 231 200 220 200H140C129 200 120 191 120 180zM300 80H40V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80zM80 220H140C151 220 160 229 160 240C160 251 151 260 140 260H80C69 260 60 251 60 240C60 229 69 220 80 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.GanttChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.GanttChart.displayName = "Blueprint5.Icon.GanttChart";
exports.default = exports.GanttChart;
//# sourceMappingURL=gantt-chart.js.map