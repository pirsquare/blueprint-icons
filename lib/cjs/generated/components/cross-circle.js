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
exports.CrossCircle = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.CrossCircle = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "cross-circle", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 0C310.456 0 400 89.544 400 200C400 310.457 310.456 400 200 400C89.543 400 0 310.457 0 200C0 89.544 89.543 0 200 0zM294 265.8L228.2 200L294.2000000000001 134.2000000000001C297.8 130.6 300 125.6 300 120C300 109 291 100 280 100C274.4000000000001 100 269.4000000000001 102.2 265.8 106L200 171.8L134.2 105.8C130.6 102.2 125.6 100 120 100C109 100 100 109 100 120C100 125.6 102.2 130.6 106 134.2000000000001L171.8 200L105.8 265.8C102.2 269.4 100 274.4 100 280C100 291 109 300 120 300C125.6 300 130.6 297.8 134.2 294.2L200 228.2L265.8 294.2C269.4000000000001 297.8 274.4000000000001 300 280 300C291 300 300 291 300 280C300 274.4 297.8 269.4 294 265.8z" : "M160 0C248.366 0 320 71.634 320 160C320 248.3656 248.366 320 160 320C71.6344 320 0 248.3656 0 160C0 71.634 71.6344 0 160 0zM234 205.8L188.2 160L234.2 114.2C237.8 110.6 240 105.6 240 100C240 89 231 80 220 80C214.4 80 209.4 82.2 205.8 86L160 131.8L114.2 85.8C110.6 82.2 105.6 80 100 80C89 80 80 89 80 100C80 105.6 82.2 110.6 86 114.2L131.8 160L85.8 205.8C82.2 209.4 80 214.4 80 220C80 231 89 240 100 240C105.6 240 110.6 237.8 114.2 234.2L160 188.2L205.8 234.2C209.4 237.8 214.4 240 220 240C231 240 240 231 240 220C240 214.4 237.8 209.4 234 205.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.CrossCircle.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.CrossCircle.displayName = "Blueprint5.Icon.CrossCircle";
exports.default = exports.CrossCircle;
//# sourceMappingURL=cross-circle.js.map