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
exports.Video = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Video = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "video", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 360H20C9 360 0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60V340C400 351 391 360 380 360zM140 120V280L260 200L140 120z" : "M300 280H20C9 280 0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60V260C320 271 311 280 300 280zM100 100V220L220 160L100 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Video.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Video.displayName = "Blueprint5.Icon.Video";
exports.default = exports.Video;
//# sourceMappingURL=video.js.map