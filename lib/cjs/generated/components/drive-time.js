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
exports.DriveTime = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.DriveTime = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "drive-time", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400.2000000000001 246C400.2000000000001 258.6 390.2000000000001 268.8 378.2 268.8H351.8L332.8 320.2C328.0000000000001 333 313.8 346.4 301 350.2C301 350.2 268 360 200 360C132 360 99.2 350.2 99.2 350.2C86.6 346.4 72.2 333 67.4 320.2L48.4 268.8H22C10 268.8 0 258.6 0 246C0 233.4 10 223.2 22 223.2H31.4L24.6 205C19.8 192.2 16 170.6 16 157V49.2C16 33.2 28.6 20.2 44 20.2C59.4 20.2 72 33.2 72 49.2V65.8H328.0000000000001V49.2C328.0000000000001 33.2 340.6 20.2 356 20.2S384 33.2 384 49.2V157C384 170.6 380.2 192.4 375.4 205L368.6 223.2000000000001H378C390.2000000000001 223.2 400.2000000000001 233.4 400.2000000000001 246zM70.8 239.2L93.2 302.4000000000001C94.8 306.8 99.6 310.2 104 310.2H296C300.4000000000001 310.2 305.2000000000001 306.8 306.8 302.4L329.2000000000001 239.2C330.8 235 328.4000000000001 231.4 324 231.4H76C71.6 231.6 69.2 235 70.8 239.2zM90 140.4C73.4 140.4 60 153.8 60 170.4C60 187 73.4 200.4 90 200.4S120 186.8 120 170.4C120 153.8 106.6 140.4 90 140.4zM310 140.4C293.4 140.4 280 153.8 280 170.4C280 187 293.4 200.4 310 200.4S340 187 340 170.4C340 153.8 326.6 140.4 310 140.4z" : "M302.4 224.8H281.4L266.2 267.2C262.4 277.8 251 288.8 240.8 292C240.8 292 214.4 300 160 300C105.6 300 79.2 292 79.2 292C69.2 288.8 57.8 277.8 54 267.2L38.6 224.8H17.6C8 224.8 0 216.4 0 206C0 195.6 8 187.2 17.6 187.2H25.2L20 180C19.4 166.2 20 151.2 20 140V40C20 26.8 27.6 20 40 20C52.4 20 60 26.8 60 40V60H260V40C260 26.8 267.6 20 280 20C292.4 20 300 26.8 300 40V140C300 151.2 299.8 167.4 300 180L294.8 187.4H302.4000000000001C312 187.4 320 195.8 320 206C320 216.4 312 224.8 302.4 224.8zM100 120H60V160H100V120zM260 120H220V160H260V120zM260 200H60C56.4 200 58.8 216.4 60 220L74.6 252.6C75.8 256.2 76.4 260 80 260H240C243.6 260 244.2 256.2 245.4 252.6L260 220C261.2 216.4 263.6 200 260 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.DriveTime.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.DriveTime.displayName = "Blueprint5.Icon.DriveTime";
exports.default = exports.DriveTime;
//# sourceMappingURL=drive-time.js.map