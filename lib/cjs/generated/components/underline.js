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
exports.Underline = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Underline = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "underline", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 60C266 60 320 114 320 180V330C320 346 306 360 290 360C274 360 260 346 260 330V180C260 146 234 120 200 120S140 146 140 180V330C140 346 126 360 110 360C94 360 80 346 80 330V180C80 114 134 60 200 60zM330 20H70C64 20 60 16 60 10C60 4 64 0 70 0H330C336 0 340 4 340 10C340 16 336 20 330 20z" : "M160 40C216 40 260 84 260 140V260C260 272 252 280 240 280C228 280 220 272 220 260V140C220 106 194 80 160 80S100 106 100 140V260C100 272 92 280 80 280C68 280 60 272 60 260V140C60 84 104 40 160 40zM270 20H50C44 20 40 16 40 10C40 4 44 0 50 0H270C276 0 280 4 280 10C280 16 276 20 270 20z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Underline.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Underline.displayName = "Blueprint5.Icon.Underline";
exports.default = exports.Underline;
//# sourceMappingURL=underline.js.map