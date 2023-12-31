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
exports.Train = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Train = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "train", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 40H280L320 0H80C80 0 81 1 82.4 2.4C91.2 11.2 120 40 120 40H80C58 40 40 58 40 80V360C40 382 111.6 400 200 400S360 382 360 360L360 360V80C360 58 342 40 320 40zM110 100C126.6 100 140 113.4 140 130C140 146.6 126.6 160 110 160C93.4 160 80 146.6 80 130C80 113.4 93.4 100 110 100zM180 340H80V220H180V340zM320 340H220V220H320V340zM290 160C273.4 160 260 146.6 260 130C260 113.4 273.4 100 290 100C306.6 100 320 113.4 320 130C320 146.6 306.6 160 290 160z" : "M260 40H240L260 0H60L80 40H60C38 40 20 58 20 80V280C20 302 82.6 320 160 320S300 302 300 280V80C300 58 282 40 260 40zM220 80H260V120H220V80zM180 180H260V260H180V180zM60 80H100V120H60V80zM60 180H140V260H60V180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Train.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Train.displayName = "Blueprint5.Icon.Train";
exports.default = exports.Train;
//# sourceMappingURL=train.js.map