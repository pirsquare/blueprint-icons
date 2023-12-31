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
export var VerticalDistribution = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "vertical-distribution", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 360H380C391 360 400 369 400 380S391 400 380 400H20C9 400 0 391 0 380S9 360 20 360zM60 260C49 260 40 251 40 240V160C40 149 49 140 60 140H340C351 140 360 149 360 160V240C360 251 351 260 340 260H60zM380 40H20C9 40 0 31 0 20S9 0 20 0H380C391 0 400 9 400 20S391 40 380 40z" : "M20 280H300C311 280 320 289 320 300S311 320 300 320H20C9 320 0 311 0 300S9 280 20 280zM300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60zM60 220C49 220 40 211 40 200V140C40 129 49 120 60 120H240C251 120 260 129 260 140V200C260 211 251 220 240 220H60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
VerticalDistribution.defaultProps = {
    size: IconSize.STANDARD,
};
VerticalDistribution.displayName = "Blueprint5.Icon.VerticalDistribution";
export default VerticalDistribution;
//# sourceMappingURL=vertical-distribution.js.map