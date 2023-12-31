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
exports.LayoutSkewGrid = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutSkewGrid = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-skew-grid", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 360A40 40 0 0 1 80 360A40 40 0 0 1 0 360M320 360A40 40 0 0 1 400 360A40 40 0 0 1 320 360M320 200A40 40 0 0 1 400 200A40 40 0 0 1 320 200M320 40A40 40 0 0 1 400 40A40 40 0 0 1 320 40M0 40A40 40 0 0 1 80 40A40 40 0 0 1 0 40M0 200A40 40 0 0 1 80 200A40 40 0 0 1 0 200M160 120A40 40 0 0 1 240 120A40 40 0 0 1 160 120M160 280A40 40 0 0 1 240 280A40 40 0 0 1 160 280" : "M40 200C18 200 0 182 0 160C0 138 18 120 40 120S80 138 80 160C80 182 62 200 40 200zM280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240zM40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320zM160 140C138 140 120 122 120 100C120 78 138 60 160 60S200 78 200 100C200 122 182 140 160 140zM280 200C258 200 240 182 240 160C240 138 258 120 280 120S320 138 320 160C320 182 302 200 280 200zM160 260C138 260 120 242 120 220S138 180 160 180S200 198 200 220S182 260 160 260zM280 80C258 80 240 62 240 40C240 18 258 0 280 0S320 18 320 40C320 62 302 80 280 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutSkewGrid.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutSkewGrid.displayName = "Blueprint5.Icon.LayoutSkewGrid";
exports.default = exports.LayoutSkewGrid;
//# sourceMappingURL=layout-skew-grid.js.map