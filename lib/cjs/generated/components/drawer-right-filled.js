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
exports.DrawerRightFilled = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.DrawerRightFilled = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "drawer-right-filled", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M220 400L380 400C391.0456940000001 400 400 391.045695 400 380L400 20C400 8.954306 391.0456940000001 0 380 0L220 0C208.954306 0 200 8.954306 200 20L200 380C200 391.045695 208.954306 400 220 400zM200 220L68.1999994 220L113.9999996 265.7999988000001C117.7999996 269.3999988 120 274.3999988 120 280C120 290.999999 110.9999996 300 100 300C94.3999994 300 89.3999994 297.799999 85.7999994 294.199999L5.79999902 214.1999986C2.19999902 210.5999986 1.7e-12 205.5999986 1.7e-12 200C1.7e-12 194.399998 2.19999902 189.399998 5.79999902 185.799998L85.7999994 105.799998C89.3999994 102.199998 94.3999994 100 100 100C110.9999996 100 120 108.999998 120 120C120 125.599998 117.7999996 130.599998 114.1999996 134.199998L68.1999994 180L200 180L200 220z" : "M180 320L300 320C311.045694 320 320 311.045695 320 300L320 20C320 8.954306 311.045694 0 300 0L180 0C168.954305 0 160 8.954306 160 20L160 300C160 311.045695 168.954305 320 180 320zM160.000001 180L68.2000004 180L94.0000006 205.7999988C97.8000006 209.3999988 100.000001 214.3999988 100.000001 220C100.000001 230.999999 91.0000006 240 80.000001 240C74.4000004 240 69.4000004 237.799999 65.8000004 234.199999L5.80000004 174.1999986C2.20000002 170.5999986 9.999991e-7 165.5999986 9.999991e-7 160C9.999991e-7 154.3999984 2.20000002 149.3999984 5.80000004 145.7999984L65.8000004 85.799998C69.4000004 82.199998 74.4000004 80 80.000001 80C91.0000006 80 100.000001 88.999998 100.000001 100C100.000001 105.599998 97.8000006 110.599998 94.2000006 114.199998L68.2000004 140L160.000001 140L160.000001 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.DrawerRightFilled.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.DrawerRightFilled.displayName = "Blueprint5.Icon.DrawerRightFilled";
exports.default = exports.DrawerRightFilled;
//# sourceMappingURL=drawer-right-filled.js.map