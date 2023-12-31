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
export var RemoveRowTop = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "remove-row-top", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 240H260C271 240 280 249 280 260S271 280 260 280H140C129 280 120 271 120 260S129 240 140 240zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM360 40H40V140H360V40zM360 160H40V360H360V160z" : "M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM280 40H40V100H280V40zM280 120H40V280H280V120zM120 180H200C211 180 220 189 220 200S211 220 200 220H120C109 220 100 211 100 200S109 180 120 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
RemoveRowTop.defaultProps = {
    size: IconSize.STANDARD,
};
RemoveRowTop.displayName = "Blueprint5.Icon.RemoveRowTop";
export default RemoveRowTop;
//# sourceMappingURL=remove-row-top.js.map