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
exports.SymbolSquare = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SymbolSquare = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "symbol-square", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 319.8H100C89 319.8 80 310.8 80 299.8V99.8C80 88.8 89 79.8000000000001 100 79.8000000000001H300C311 79.8000000000001 320 88.8 320 99.8000000000001V299.8000000000001C320 311 311 319.8 300 319.8z" : "M240 259.8H80C69 259.8 60 250.8 60 239.8V79.8C60 68.8 69 59.8 80 59.8H240C251 59.8 260 68.8 260 79.8V239.8C260 251 251 259.8 240 259.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SymbolSquare.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SymbolSquare.displayName = "Blueprint5.Icon.SymbolSquare";
exports.default = exports.SymbolSquare;
//# sourceMappingURL=symbol-square.js.map