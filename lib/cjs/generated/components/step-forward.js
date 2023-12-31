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
exports.StepForward = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.StepForward = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "step-forward", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 340H260C249 340 240 331 240 320V240L112 336L111.8 335.8C108.4 338.2 104.6 340 100 340C89 340 80 331 80 320V80C80 69 89 60 100 60C104.6 60 108.4 61.8 111.8 64.2000000000001L112 64L240 160V80C240 69 249 60 260 60H300C311 60 320 69 320 80V320C320 331 311 340 300 340z" : "M240 260H220C209 260 200 251 200 240V185.6L112.4 255.6L112.4 255.4C108.8 258.2 104.8 260 100 260C89 260 80 251 80 240V80C80 69 89 60 100 60C104.8 60 108.8 61.8 112.4 64.6L112.6 64.4L200 134.4V80C200 69 209 60 220 60H240C251 60 260 69 260 80V240C260 251 251 260 240 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.StepForward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StepForward.displayName = "Blueprint5.Icon.StepForward";
exports.default = exports.StepForward;
//# sourceMappingURL=step-forward.js.map