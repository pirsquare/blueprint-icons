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
exports.LayoutBalloon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutBalloon = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-balloon", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 80C357.2 80 354.4 79.6 351.6 79L317 148C330.8 157 339.8 172.4 339.8 190S330.6 223 317 232L351.6 301C354.4 300.4 357.2 300 360 300C382 300 400 318 400 340S382 380 360 380S320 362 320 340C320 328 325.4 317.4 333.8 310L298.4000000000001 239.2C295.6 239.6 292.8 240 290 240C265.8 240 245.6 222.8 241 200H159C154.4 222.8 134.2 240 110 240C107.2 240 104.4 239.6 101.6 239.2L66.2 310C74.6 317.4 80 328 80 340C80 362 62 380 40 380S0 362 0 340S18 300 40 300C42.8 300 45.6 300.4 48.4 301L82.8 232C69.2 223 60 207.6 60 190S69.2 157 82.8 148L48.2 79C45.6 79.6 42.8 80 40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40C80 52 74.6 62.6 66.2 70L101.6 140.8C104.4 140.4 107.2 140 110 140C134.2 140 154.4 157.2 159 180H241C245.6 157.2 265.8 140 290 140C292.8 140 295.6 140.4 298.4 140.8L333.8 70C325.4 62.6 320 52 320 40C320 18 338 0 360 0S400 18 400 40S382 80 360 80z" : "M280 100C276 100 272.4 99.2 268.8 98.2L248.4 132C255.6 139.2 260 149 260 160C260 171 255.6 180.8 248.4 188L268.6 221.8C272.4 220.8 276 220 280 220C302 220 320 238 320 260S302 300 280 300S240 282 240 260C240 249 244.4 239.2 251.6 232L231.4 198.2C227.6 199.2 224 200 220 200C201.4 200 185.8 187.2 181.4 170H138.6C134.2 187.2 118.6 200 100 200C96 200 92.4 199.2 88.8 198.2L68.4 232C75.6 239.2 80 249 80 260C80 282 62 300 40 300S0 282 0 260S18 220 40 220C44 220 47.6 220.8 51.2 221.8L71.6 188C64.4 180.8 60 171 60 160C60 149 64.4 139.2 71.6 132L51.4 98.2C47.6 99.2 44 100 40 100C18 100 0 82 0 60S18 20 40 20S80 38 80 60C80 71 75.6 80.8 68.4 88L88.6 121.8C92.4 120.8 96 120 100 120C118.6 120 134.2 132.8 138.6 150H181.4C185.8 132.8 201.4 120 220 120C224 120 227.6 120.8 231.2 121.8L251.4 88C244.4 80.8 240 71 240 60C240 38 258 20 280 20S320 38 320 60S302 100 280 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutBalloon.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutBalloon.displayName = "Blueprint5.Icon.LayoutBalloon";
exports.default = exports.LayoutBalloon;
//# sourceMappingURL=layout-balloon.js.map