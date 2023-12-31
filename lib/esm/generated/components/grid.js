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
export var Grid = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "grid", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 180C391 180 400 189 400 200C400 211 391 220 380 220H340V300H380C391 300 400 309 400 320C400 331 391 340 380 340H340V380C340 391 331 400 320 400S300 391 300 380V340H220V380C220 391 211 400 200 400S180 391 180 380V340H100V380C100 391 91 400 80 400S60 391 60 380V340H20C9 340 0 331 0 320C0 309 9 300 20 300H60V220H20C9 220 0 211 0 200C0 189 9 180 20 180H60V100H20C9 100 0 91 0 80C0 69 9 60 20 60H60V20C60 9 69 0 80 0S100 9 100 20V60H180V20C180 9 189 0 200 0S220 9 220 20V60H300V20C300 9 309 0 320 0S340 9 340 20V60H380C391 60 400 69 400 80C400 91 391 100 380 100H340V180H380zM180 100H100V180H180V100zM180 220H100V300H180V220zM300 100H220V180H300V100zM300 220H220V300H300V220z" : "M300 140C311 140 320 149 320 160C320 171 311 180 300 180H280V240H300C311 240 320 249 320 260C320 271 311 280 300 280H280V300C280 311 271 320 260 320S240 311 240 300V280H180V300C180 311 171 320 160 320S140 311 140 300V280H80V300C80 311 71 320 60 320S40 311 40 300V280H20C9 280 0 271 0 260C0 249 9 240 20 240H40V180H20C9 180 0 171 0 160C0 149 9 140 20 140H40V80H20C9 80 0 71 0 60C0 49 9 40 20 40H40V20C40 9 49 0 60 0S80 9 80 20V40H140V20C140 9 149 0 160 0S180 9 180 20V40H240V20C240 9 249 0 260 0S280 9 280 20V40H300C311 40 320 49 320 60C320 71 311 80 300 80H280V140H300zM140 80H80V140H140V80zM140 180H80V240H140V180zM240 80H180V140H240V80zM240 180H180V240H240V180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Grid.defaultProps = {
    size: IconSize.STANDARD,
};
Grid.displayName = "Blueprint5.Icon.Grid";
export default Grid;
//# sourceMappingURL=grid.js.map