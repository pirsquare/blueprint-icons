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
exports.ShoppingCart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ShoppingCart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "shopping-cart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 120H174.4L161 160H340C348.8 160 356 165.8 358.8 173.8L359.0000000000001 173.8L399.0000000000001 293.8L398.8 293.8C399.4 295.8 400 297.8 400 300C400 311 391 320 380 320H107.8L99 346.4L98.8 346.4C96 354.2 88.8 360 80 360H20C9 360 0 351 0 340C0 329 9 320 20 320H65.6L132.2 120H100C78 120 60 102 60 80C60 58 78 40 100 40S140 58 140 80H320C320 58 338 40 360 40S400 58 400 80C400 102 382 120 360 120zM121 280H352.2L325.6 200H147.8L121 280z" : "M280 120H154.4L147.8 140H260C267.8 140 274.4000000000001 144.6 277.8 151.2L278 151.2L318 231.2L317.8 231.2C319 233.8 320 236.8 320 240C320 251 311 260 300 260H107.8L99 286.4L98.8 286.4C96 294.2 88.8 300 80 300H20C9 300 0 291 0 280C0 269 9 260 20 260H65.6L112.2 120H80C58 120 40 102 40 80C40 58 58 40 80 40S120 58 120 80H240C240 58 258 40 280 40S320 58 320 80C320 102 302 120 280 120zM121 220H267.6L247.6 180H134.4L121 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ShoppingCart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ShoppingCart.displayName = "Blueprint5.Icon.ShoppingCart";
exports.default = exports.ShoppingCart;
//# sourceMappingURL=shopping-cart.js.map