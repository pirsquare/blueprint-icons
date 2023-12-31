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
exports.SpellCheck = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SpellCheck = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "spell-check", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M177.8 388.8L277.8 188.8C279 186.2 280 183.2 280 180C280 169 271 160 260 160C252.2 160 245.6 164.6 242.2 171L217.6 220H102.4L77.8 171.2C74.4 164.6 67.8 160 60 160C49 160 40 169 40 180C40 183.2 41 186.2 42.4 188.8L89.4 283.4L107.4 319.6L142.2 388.8C145.6 395.4 152.2 400 160 400C167.8 400 174.4 395.4 177.8 388.8zM122.4024 259.9954L160.0024 335.1954L197.6024 259.9954H122.4024zM345.8 174.2C349.4 177.8 354.4 180 360 180C371 180 380 171 380 160C380 154.4 377.8 149.4 374.2000000000001 145.8L234.2 5.8C230.6 2.2 225.6 0 220 0C214.4 0 209.4 2.2 205.8 5.8L145.8 65.8C142.2 69.4 140 74.4 140 80C140 91 149 100 160 100C165.6 100 170.6 97.8 174.2 94.2000000000001L220 48.2L345.8 174.2z" : "M137.8 308.8L217.8 148.8C219 146.2 220 143.2 220 140C220 129 211 120 200 120C192.2 120 185.6 124.6 182.2 131H182L167.6 160H72.4L58 131.2H57.8C54.4 124.6 47.8 120 40 120C29 120 20 129 20 140C20 143.2 21 146.2 22.4 148.8L62 228.4L80 264.8L102.2 308.8C105.6 315.4 112.2 320 120 320C127.8 320 134.4 315.4 137.8 308.8zM280 140C274.4000000000001 140 269.4000000000001 137.8 265.8 134.2L180 48.2L134.2 94.2C130.6 97.8 125.6 100 120 100C109 100 100 91 100 80C100 74.4 102.2 69.4 105.8 65.8L165.8 5.8C169.4 2.2 174.4 0 180 0C185.6 0 190.6 2.2 194.2 5.8L294.2000000000001 105.8C297.8 109.4 300 114.4 300 120C300 131 291 140 280 140zM120.0024 255.1954L92.4024 199.9954H147.6024L120.0024 255.1954z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SpellCheck.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SpellCheck.displayName = "Blueprint5.Icon.SpellCheck";
exports.default = exports.SpellCheck;
//# sourceMappingURL=spell-check.js.map