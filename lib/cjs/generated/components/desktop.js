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
exports.Desktop = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Desktop = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "desktop", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400H20C9 400 0 391 0 380V120C0 109 9 100 20 100H133.4L123.4 40H100C89 40 80 31 80 20C80 9 89 0 100 0H300C311 0 320 9 320 20C320 31 311 40 300 40H276.6L266.6 100H380C391 100 400 109 400 120V380C400 391 391 400 380 400zM360 140H40V360H360V140z" : "M300 320H20C9 320 0 311 0 300V100C0 89 9 80 20 80H115L105 40H80C69 40 60 31 60 20C60 9 69 0 80 0H240C251 0 260 9 260 20C260 31 251 40 240 40H215L205 80H300C311 80 320 89 320 100V300C320 311 311 320 300 320zM280 120H40V280H280V120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Desktop.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Desktop.displayName = "Blueprint5.Icon.Desktop";
exports.default = exports.Desktop;
//# sourceMappingURL=desktop.js.map