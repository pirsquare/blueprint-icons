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
exports.Slash = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Slash = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "slash", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M240 360C230.8 360 223 353.6 220.6 345.2L140.8 66C140.4 64 140 62 140 60C140 49 149 40 160 40C169.2 40 177 46.4 179.4 54.8L259.2000000000001 334C259.6 336 260 338 260 340C260 351 251 360 240 360z" : "M200 280C190.8 280 183 273.8 180.8 265.4L121 66.2C120.4 64.2 120 62.2 120 60C120 49 129 40 140 40C149.2 40 157 46.2 159.2 54.6L219 253.8C219.6 255.8 220 257.8 220 260C220 271 211 280 200 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Slash.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Slash.displayName = "Blueprint5.Icon.Slash";
exports.default = exports.Slash;
//# sourceMappingURL=slash.js.map