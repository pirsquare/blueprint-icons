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
exports.HandRight = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.HandRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "hand-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400 230C400 246.6 386.6 260 370 260H205.2L191.8 260.2C211.4 277.2 227 298.6 229.6 325C233.2 360.8 203 366.6 196.6 353.6C179.8 318.4 129.6 285.4 98 269C48.6 248.2 0 244.2 0 157.4C0 109.8 15.2 79 53 60.9999999999999C84 46.2 109.6 40 195.8 40H215.6C232 40 245.2 53.8 245.2 70.8C245.2 78.4 242.4 85.4 238 90.8C250 94.6 259 106.4 259 120.2C259 129.6 255.0000000000001 138 248.6 143.6C258.0000000000001 148.8 264.4000000000001 159 264.4000000000001 170.8C264.4000000000001 183.8 256.6 194.8 245.8000000000001 199.4L261.2 200H370C379.6 200 388.2 204.6 393.6 211.8C397.4000000000001 216 400 221.6 400 228.8C400 229 400 229.2 400 229.4C400 229.6 400 229.8 400 230z" : "M290 220H157.8C166 231.6 182 251 183.8 269.4C186.8 300.6 162.4 305.8 157.4 294.4C144 263.6 103.8 234.6 78.4 220.4C39 202.2 0 198.6 0 122.8C0 81 12.2 54.2 42.4 38.4C67.2 25.4 104.2 20 156.6 20H172.4C185.4 20 196 32 196 47C196 53.8 193.8 59.8 190.2000000000001 64.6C199.8000000000001 68 207 78.2 207 90.4C207 98.6 203.8 106 198.6 111C206 115.6 211.2000000000001 124.4 211.2000000000001 134.8C211.2000000000001 146.2 205 155.8 196.4 159.8L209 160H290C306.6 160 320 173.4 320 190S306.6 220 290 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.HandRight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.HandRight.displayName = "Blueprint5.Icon.HandRight";
exports.default = exports.HandRight;
//# sourceMappingURL=hand-right.js.map