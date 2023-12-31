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
exports.Flag = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Flag = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "flag", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 340C49 340 40 331 40 320V20C40 9 49 0 60 0S80 9 80 20V320C80 331 71 340 60 340zM60 400C49 400 40 391 40 380C40 369 49 360 60 360S80 369 80 380C80 391 71 400 60 400zM100 318.4V152.8C160.2 201 273.4 100 360 152.8V318.4C272.2 257.2000000000001 160.2 380 100 318.4z" : "M59.8 260.2C48.8 260.2 39.8 251.2 39.8 240.2V20.2C39.8 9.2 48.8 0.2 59.8 0.2S79.8 9.2 79.8 20.2V240.2C79.8 251.2 70.8 260.2 59.8 260.2zM59.8 320.2C48.8 320.2 39.8 311.2 39.8 300.2S48.8 280.2 59.8 280.2S79.8 289.2 79.8 300.2S70.8 320.2 59.8 320.2zM99.8 259.6V115C141.2 157.2 218.2 80 279.8 115V259.6C219.8 218.2 141 300.2 99.8 259.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Flag.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Flag.displayName = "Blueprint5.Icon.Flag";
exports.default = exports.Flag;
//# sourceMappingURL=flag.js.map