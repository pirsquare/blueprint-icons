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
export var Minus = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "minus", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 220H80C69 220 60 211 60 200C60 189 69 180 80 180H320C331 180 340 189 340 200C340 211 331 220 320 220z" : "M260 180H60C49 180 40 171 40 160C40 149 49 140 60 140H260C271 140 280 149 280 160C280 171 271 180 260 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Minus.defaultProps = {
    size: IconSize.STANDARD,
};
Minus.displayName = "Blueprint5.Icon.Minus";
export default Minus;
//# sourceMappingURL=minus.js.map