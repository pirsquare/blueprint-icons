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
exports.Cloud = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Cloud = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "cloud", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 260C297.6 260 295.2 259.4 292.8 259.2C276.6 306.2 232.4 340 180 340C113.8 340 60 286.2 60 220C60 219 60.2 218.2 60.2 217.2C25.6 208.4 0 177.4 0 140C0 95.8 35.8 60 80 60H300C355.2 60 400 104.8 400 160S355.2000000000001 260 300 260z" : "M240 200C239.4 200 238.6 200 238 199.8C228.8 245.6 188.4 280 140 280C84.8 280 40 235.2 40 180C40 177.8 40.2 175.6 40.4 173.4C16.6 162.2 0 138 0 110C0 71.4 31.4 40 70 40H240C284.2000000000001 40 320 75.8 320 120C320 164.2 284.2000000000001 200 240 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Cloud.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Cloud.displayName = "Blueprint5.Icon.Cloud";
exports.default = exports.Cloud;
//# sourceMappingURL=cloud.js.map