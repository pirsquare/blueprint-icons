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
exports.Tank = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Tank = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "tank", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M79.125 310.6C82.7798 316.4476 89.1892 320 96.085 320H160H223.916C230.81 320 237.2200000000001 316.4476 240.876 310.6L260 280.0002H360C371.046 280.0002 380 271.0456 380 260C380 248.9544 371.046 240.0002 360 240.0002H260V220.0004H340C373.1380000000001 220.0004 400 193.138 400 160C400 126.864 373.1380000000001 100 340 100H60C26.863 100 0 126.864 0 160C0 193.138 26.863 220.0004 60 220.0004L60 274.264C60 278.0124 61.0534 281.6854 63.04 284.8640000000001L79.125 310.6zM60 180H340C351.046 180 360 171.046 360 160C360 148.954 351.046 140 340 140H60C48.9544 140 40 148.954 40 160C40 171.046 48.9544 180 60 180z" : "M74 252C77.777 257.0362 83.7048 260 90 260H140H191.7158C197.02 260 202.108 257.8928 205.858 254.1422L220 240V239.9994H280C291.046 239.9994 300 231.045 300 219.9994C300 208.9536 291.046 199.9994 280 199.9994H220V180.0004H270C297.614 180.0004 320 157.6146 320 130.0004C320 102.386 297.614 80 270 80H50C22.3858 80 0 102.386 0 130.0004C0 157.6146 22.3858 180.0004 50 180.0004H60V226.6666C60 230.994 61.4036 235.2048 64 238.6666L74 252zM50 140.0004H270C275.522 140.0004 280 135.5232 280 130.0004C280 124.4774 275.522 120.0004 270 120.0004H50C44.4772 120.0004 40 124.4774 40 130.0004C40 135.5232 44.4772 140.0004 50 140.0004z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Tank.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Tank.displayName = "Blueprint5.Icon.Tank";
exports.default = exports.Tank;
//# sourceMappingURL=tank.js.map