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
exports.FilterOpen = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.FilterOpen = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "filter-open", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 360C300 354.4 297.8 349.4 294.2000000000001 346L200 251.8L200 140C200 134.4 197.8 129.4 194.2 125.8L134.2 65.8C130.6 62.2 125.6 60 120 60C109 60 100 69 100 80L100 251.8L5.8 345.8C2.2 349.4 1e-13 354.4 1e-13 360C1e-13 371 9 380 20 380L280 380C291 380 300 371 300 360zM394.142136 134.142136C401.952622 126.33165 401.952622 113.66835 394.142136 105.857864L314.142136 25.8578640000001C301.542838 13.258568 280 22.181902 280 40L280 200C280 217.818097 301.542838 226.7414328 314.142136 214.1421356L394.142136 134.142136z" : "M314.142136 114.142136C321.952622 106.33165 321.952622 93.66835 314.142136 85.857864L254.142136 25.857864C241.542838 13.258568 220 22.181902 220 40L220 160C220 177.818097 241.542838 186.7414328 254.142136 174.1421356L314.142136 114.142136zM240 280C240 274.4 237.8 269.4 234.2 266L160 191.8L160 120C160 114.4 157.8 109.4 154.2 105.8L114.2 65.8C110.6 62.2 105.6 60 100 60C89 60 80 69 80 80L80 191.8L5.8 265.8C2.2 269.4 -1e-13 274.4 -1e-13 280C-1e-13 291 9 300 20 300L220 300C231 300 240 291 240 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.FilterOpen.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FilterOpen.displayName = "Blueprint5.Icon.FilterOpen";
exports.default = exports.FilterOpen;
//# sourceMappingURL=filter-open.js.map