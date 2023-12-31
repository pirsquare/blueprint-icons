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
exports.ImageRotateLeft = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ImageRotateLeft = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "image-rotate-left", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M210 140C226.6 140 240 153.4 240 170S226.6 200 210 200S180 186.6 180 170S193.4 140 210 140zM280 260H20C9 260 0 251 0 240V20C0 9 9 0 20 0H280C291 0 300 9 300 20V240C300 251 291 260 280 260zM260 60L160 120L140 80L100 160L40 70V220H260V60zM320 360H288.2L294 365.8C297.8 369.4 300 374.4 300 380C300 391 291 400 280 400C274.4000000000001 400 269.4000000000001 397.8 265.8 394.2L225.8 354.2C222.2 350.6 220 345.6 220 340C220 334.4 222.2 329.4 225.8 325.8L265.8 285.8C269.4000000000001 282.2 274.4000000000001 280 280 280C291 280 300 289 300 300C300 305.6 297.8 310.6 294.2000000000001 314.2L288.2 320H320C342 320 360 302 360 280V220C360 209 369 200 380 200S400 209 400 220V280C400 324.2 364.2000000000001 360 320 360z" : "M260 280H228.2L234 285.8C237.8 289.4 240 294.4 240 300C240 311 231 320 220 320C214.4 320 209.4 317.8 205.8 314.2L165.8 274.2C162.2 270.6 160 265.6 160 260C160 254.4 162.2 249.4 165.8 245.8L205.8 205.8C209.4 202.2 214.4 200 220 200C231 200 240 209 240 220C240 225.6 237.8 230.6 234.2 234.2L228.2 240H260C271 240 280 231 280 220V160C280 149 289 140 300 140S320 149 320 160V220C320 253.2 293.2 280 260 280zM150 100C155.6 100 160 104.4 160 110C160 115.6 155.6 120 150 120S140 115.6 140 110C140 104.4 144.4 100 150 100zM200 180H20C9 180 0 171 0 160V20C0 9 9 0 20 0H200C211 0 220 9 220 20V160C220 171 211 180 200 180zM180 53.4L140 80L120 60L80 120L40 66.6V140H180V53.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ImageRotateLeft.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ImageRotateLeft.displayName = "Blueprint5.Icon.ImageRotateLeft";
exports.default = exports.ImageRotateLeft;
//# sourceMappingURL=image-rotate-left.js.map