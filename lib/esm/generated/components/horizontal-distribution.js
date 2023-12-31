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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var HorizontalDistribution = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "horizontal-distribution", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M240 360H160C149 360 140 351 140 340V60C140 49 149 40 160 40H240C251 40 260 49 260 60V340C260 351 251 360 240 360zM20 400C9 400 0 391 0 380V20C0 9 9 0 20 0S40 9 40 20V380C40 391 31 400 20 400zM380 400C369 400 360 391 360 380V20C360 9 369 0 380 0S400 9 400 20V380C400 391 391 400 380 400z" : "M40 320C29 320 20 311 20 300V20C20 9 29 0 40 0S60 9 60 20V300C60 311 51 320 40 320zM300 320C289 320 280 311 280 300V20C280 9 289 0 300 0S320 9 320 20V300C320 311 311 320 300 320zM200 280H140C129 280 120 271 120 260V80C120 69 129 60 140 60H200C211 60 220 69 220 80V260C220 271 211 280 200 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
HorizontalDistribution.defaultProps = {
    size: IconSize.STANDARD,
};
HorizontalDistribution.displayName = "Blueprint5.Icon.HorizontalDistribution";
export default HorizontalDistribution;
//# sourceMappingURL=horizontal-distribution.js.map