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
exports.Satellite = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Satellite = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "satellite", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M180 40C192 40 200 32 200 20S192 0 180 0C80 0 0 80 0 180C0 192 8 200 20 200S40 192 40 180C40 102 102 40 180 40zM180 120C192 120 200 112 200 100S192 80 180 80C124 80 80 124 80 180C80 192 88 200 100 200S120 192 120 180C120 146 146 120 180 120zM294 194C302 202 314 202 322 194L394 122C402 114 402 102 394 94L366 66C358.0000000000001 58.0000000000001 346 58.0000000000001 338.0000000000001 66L266.0000000000001 138C258.0000000000001 146 258.0000000000001 158 266.0000000000001 166L294 194zM94 394C102 402 114 402 122 394L194 322C202 314 202 302 194 294L166 266C158 258 146 258 138 266L66 338C58 346 58 358 66 366L94 394zM316 374C324 382 336 382 344 374L376 342C384 334 384 322 376 314L246 184C238 176 226 176 218 184L186 216C178 224 178 236 186 244.0000000000001L316 374zM180 160C168 160 160 168 160 180S168 200 180 200S200 192 200 180S192 160 180 160z" : "M60 140C60 152 68 160 80 160S100 152 100 140C100 118 118 100 140 100C152 100 160 92 160 80S152 60 140 60C96 60 60 96 60 140zM0 140C0 152 8 160 20 160S40 152 40 140C40 84 84 40 140 40C152 40 160 32 160 20S152 0 140 0C62 0 0 62 0 140zM140 120C128 120 120 128 120 140S128 160 140 160S160 152 160 140S152 120 140 120zM166 176C158 184 158 196 166 204L256 294C264 302 276 302 284 294L294 284C302 276 302 264 294 256L204 166C196 158 184 158 176 166L166 176zM104 314C112 322 124 322 132 314L174 272C182 264 182 252 174 244L156 226C148 218 136 218 128 226L86 268C78 276 78 288 86 296L104 314zM244 174C252 182 264 182 272 174L314 132C322 124 322 112 314 104L296 86C288 78 276 78 268 86L226 128C218 136 218 148 226 156L244 174z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Satellite.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Satellite.displayName = "Blueprint5.Icon.Satellite";
exports.default = exports.Satellite;
//# sourceMappingURL=satellite.js.map