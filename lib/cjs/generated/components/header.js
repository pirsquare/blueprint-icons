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
exports.Header = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Header = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "header", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M120 180V80C120 68.954 111.0456 60 100 60C88.9544 60 80 68.954 80 80V180V220V340C80 351.0456 88.9544 360 100 360C111.0456 360 120 351.0456 120 340V220H280V340C280 351.0456 288.954 360 300 360C311.046 360 320 351.0456 320 340V220V180V80C320 68.954 311.046 60 300 60C288.954 60 280 68.954 280 80V180H120z" : "M240 280C229 280 220 271 220 260V180H100V260C100 271 91 280 80 280C69 280 60 271 60 260V60C60 49 69 40 80 40C91 40 100 49 100 60V140H220V60C220 49 229 40 240 40C251 40 260 49 260 60V260C260 271 251 280 240 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Header.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Header.displayName = "Blueprint5.Icon.Header";
exports.default = exports.Header;
//# sourceMappingURL=header.js.map