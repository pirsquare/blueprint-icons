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
export var RemoveRowBottom = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "remove-row-bottom", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 120H260C271 120 280 129 280 140C280 151 271 160 260 160H140C129 160 120 151 120 140C120 129 129 120 140 120zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM360 40H40V240H360V40zM360 260H40V360H360V260z" : "M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM280 40H40V200H280V40zM280 220H40V280H280V220zM120 100H200C211 100 220 109 220 120S211 140 200 140H120C109 140 100 131 100 120C100 109 109 100 120 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
RemoveRowBottom.defaultProps = {
    size: IconSize.STANDARD,
};
RemoveRowBottom.displayName = "Blueprint5.Icon.RemoveRowBottom";
export default RemoveRowBottom;
//# sourceMappingURL=remove-row-bottom.js.map