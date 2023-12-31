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
exports.Power = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Power = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "power", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 200C211 200 220 209 220 220V380C220 391 211 400 200 400S180 391 180 380V220C180 209 189 200 200 200zM260 349V305.8C307.2 283.4 340 235.8 340 180C340 102.6 277.4000000000001 40 200 40S60 102.6 60 180C60 235.8 92.8 283.4 140 305.8V349C70.2 324.2 20 258.2 20 180C20 80.6 100.6 0 200 0S380 80.6 380 180C380 258.2 329.8 324.2 260 349z" : "M160 160C171 160 180 169 180 180V300C180 311 171 320 160 320S140 311 140 300V180C140 169 149 160 160 160zM220 266.4V219.6C244.2 201.4 260 172.6 260 140C260 84.8 215.2 40 160 40S60 84.8 60 140C60 172.6 75.8 201.2 100 219.6V266.4C52.8 243.8 20 195.8 20 140C20 62.6 82.6 0 160 0S300 62.6 300 140C300 195.8 267.2 243.8 220 266.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Power.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Power.displayName = "Blueprint5.Icon.Power";
exports.default = exports.Power;
//# sourceMappingURL=power.js.map