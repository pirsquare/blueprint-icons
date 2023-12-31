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
exports.AlignJustify = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.AlignJustify = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "align-justify", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 340H380C391 340 400 349 400 360C400 371 391 380 380 380H20C9 380 0 371 0 360C0 349 9 340 20 340zM380 60H20C9 60 0 51 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60zM380 300H20C9 300 0 291 0 280C0 269 9 260 20 260H380C391 260 400 269 400 280C400 291 391 300 380 300zM380 220H20C9 220 0 211 0 200C0 189 9 180 20 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM380 140H20C9 140 0 131 0 120C0 109 9 100 20 100H380C391 100 400 109 400 120C400 131 391 140 380 140z" : "M300 60.4H20C9 60.4 0 51.4 0 40.4C0 29.4 9 20.4 20 20.4H300C311 20.4 320 29.4 320 40.4C320 51.4 311 60.4 300 60.4zM20 260.4H300C311 260.4 320 269.4 320 280.4C320 291.4 311 300.4 300 300.4H20C9 300.4 0 291.4 0 280.4C0 269.2 9 260.4 20 260.4zM300 180.4H20C9 180.4 0 171.4 0 160.4C0 149.4 9 140.4 20 140.4H300C311 140.4 320 149.4 320 160.4C320 171.4 311 180.4 300 180.4zM300 240.4H20C9 240.4 0 231.4 0 220.4C0 209.4 9 200.4 20 200.4H300C311 200.4 320 209.4 320 220.4C320 231.4 311 240.4 300 240.4zM300 120.4H20C9 120.4 0 111.4 0 100.4C0 89.4 9 80.4 20 80.4H300C311 80.4 320 89.4 320 100.4C320 111.4 311 120.4 300 120.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.AlignJustify.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.AlignJustify.displayName = "Blueprint5.Icon.AlignJustify";
exports.default = exports.AlignJustify;
//# sourceMappingURL=align-justify.js.map