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
exports.Badge = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Badge = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "badge", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M338.8 285.4C335 313.6 351.2000000000001 335.8 366.4 357.2L340.6 387C297.8 364.8 237.6 370.4 200 400C162.4 370.4 102.2 364.8 59.4 387L33.6 357.2C48.8 335.8 65 313.6 61.2 285.4C53.6 228.2 0 181.2 28 118.4C39.2 89.8 64.2 71 96 63.4C135 54.2 184 45.2 200 0C216 45.1999999999999 265 54.2 304 63.4C336 71 360.8 89.8000000000001 372 118.4C400 181.2 346.4 228.2 338.8 285.4z" : "M267.2 228.2C264.2 250.8 277.2 268.4 289.2 285.6L268.6 309.4C234.2 291.8 186.2 296.4 156 320C125.8 296.4 77.8 291.8 43.4 309.6L22.8 285.6C35 268.4 47.8 250.8 44.8 228.2C38.8 182.4 -4.2 144.8 18.4 94.6C27.4 71.8 47.2 56.6 72.8 50.6C104 43.4 143.2 36.2 156 0C168.8 36.2 208 43.2 239.2 50.8C264.8 56.8 284.6 72 293.6 94.8C316 144.8 273 182.4 267.2 228.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Badge.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Badge.displayName = "Blueprint5.Icon.Badge";
exports.default = exports.Badge;
//# sourceMappingURL=badge.js.map