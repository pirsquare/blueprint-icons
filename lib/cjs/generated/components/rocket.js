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
exports.Rocket = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Rocket = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "rocket", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 250C140 310 177.1428 375 200 400C222.858 375 260 310 260 250C260 190 245.714 125 240 100H160C154.2858 125 140 190 140 250zM276.802 200.0174C274.02 167.594 267.4 131.908 260 99.79L340 80L320 160L276.802 200.0174zM180.1668 80C180 77.222 180 74.326 180 71.428C180 57.142 180 50 200 0C220 50 220 57.142 220 71.428C220 74.326 220 77.222 219.834 80H180.1668zM140 99.774C132.599 131.89 125.98 167.576 123.1982 200L80 159.982L60 80L140 99.774zM200 300.0002C188.9544 300.0002 180 291.0458 180 280.0002C180 268.9544 188.9544 260.0002 200 260.0002C211.046 260.0002 220 268.9544 220 280.0002C220 291.0458 211.046 300.0002 200 300.0002z" : "M120.0002 80C87.9498 170.8134 88.296 230.6902 159.9998 320C231.704 230.3054 232.036 170.395 200 80H120.0002zM180 220C180 208.9544 171.0456 200 160 200C148.9542 200 140 208.9544 140 220C140 231.0456 148.9542 240 160 240C171.0456 240 180 231.0456 180 220zM40 59.552L100 79.552L98.9222 82.714C92.7074 100.916 81.5282 133.6578 80 160L60 140L40 59.552zM220 79.552L280 59.552L260 140L240 160C238.472 133.6578 227.292 100.916 221.078 82.714L220 79.552zM140 59.998V60H180V59.998C180 29.998 170 10 160 0C150 10 140 29.998 140 59.998z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Rocket.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Rocket.displayName = "Blueprint5.Icon.Rocket";
exports.default = exports.Rocket;
//# sourceMappingURL=rocket.js.map