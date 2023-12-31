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
exports.AlignRight = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.AlignRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "align-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 60H100C89 60 80 51 80 40C80 29 89 20 100 20H380C391 20 400 29 400 40C400 51 391 60 380 60zM20 340H380C391 340 400 349 400 360C400 371 391 380 380 380H20C9 380 0 371 0 360C0 349 9 340 20 340zM380 140H260C249 140 240 131 240 120C240 109 249 100 260 100H380C391 100 400 109 400 120C400 131 391 140 380 140zM380 220H20C9 220 0 211 0 200C0 189 9 180 20 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM380 300H180C169 300 160 291 160 280C160 269 169 260 180 260H380C391 260 400 269 400 280C400 291 391 300 380 300z" : "M300 60.4H60C49 60.4 40 51.4 40 40.4C40 29.4 49 20.4 60 20.4H300C311 20.4 320 29.4 320 40.4C320 51.4 311 60.4 300 60.4zM20 260.4H300C311 260.4 320 269.4 320 280.4C320 291.4 311 300.4 300 300.4H20C9 300.4 0 291.4 0 280.4C0 269.2 9 260.4 20 260.4zM300 240.4H140C129 240.4 120 231.4 120 220.4C120 209.4 129 200.4 140 200.4H300C311 200.4 320 209.4 320 220.4C320 231.4 311 240.4 300 240.4zM300 120.4H220C209 120.4 200 111.4 200 100.4C200 89.4 209 80.4 220 80.4H300C311 80.4 320 89.4 320 100.4C320 111.4 311 120.4 300 120.4zM300 180.4H20C9 180.4 0 171.4 0 160.4C0 149.4 9 140.4 20 140.4H300C311 140.4 320 149.4 320 160.4C320 171.4 311 180.4 300 180.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.AlignRight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.AlignRight.displayName = "Blueprint5.Icon.AlignRight";
exports.default = exports.AlignRight;
//# sourceMappingURL=align-right.js.map