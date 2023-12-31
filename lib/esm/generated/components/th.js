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
export var Th = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "th", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 380H20C8 380 0 370 0 360V40C0 30 8 20 20 20H380C390 20 400 30 400 40V360C400 370 390 380 380 380L380 380zM140 60H40V120H140V60L140 60zM140 140H40V200H140V140L140 140zM140 220H40V280H140V220L140 220zM360 60H160V120H360V60L360 60zM360 140H160V200H360V140L360 140zM360 220H160V280H360V220L360 220z" : "M300 300H20C8 300 0 290 0 280V40C0 28 8 20 20 20H300C312 20 320 28 320 40V280C320 290 312 300 300 300L300 300zM120 60H40V100H120V60L120 60zM120 120H40V160H120V120L120 120zM120 180H40V220H120V180L120 180zM280 60H140V100H280V60L280 60zM280 120H140V160H280V120L280 120zM280 180H140V220H280V180L280 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Th.defaultProps = {
    size: IconSize.STANDARD,
};
Th.displayName = "Blueprint5.Icon.Th";
export default Th;
//# sourceMappingURL=th.js.map