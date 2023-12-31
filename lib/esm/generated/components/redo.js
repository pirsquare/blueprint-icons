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
export var Redo = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "redo", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M394.2000000000001 294.2L314.2000000000001 374.2C310.6 377.8 305.6 380 300 380C289 380 280 371 280 360C280 354.4 282.2 349.4 285.8 345.8L331.8 300H120C53.8 300 0 246.2 0 180C0 113.8 53.8 60 120 60H220V100H120C75.8 100 40 135.8 40 180C40 224.2 75.8 260 120 260H331.8L286 214.2C282.2 210.6 280 205.6 280 200C280 189 289 180 300 180C305.6 180 310.6 182.2 314.2000000000001 185.8L394.2000000000001 265.8C397.8 269.4 400 274.4 400 280C400 285.6 397.8 290.6 394.2000000000001 294.2zM300 120C278 120 260 102 260 80S278 40 300 40S340 58 340 80S322 120 300 120z" : "M240 100C218 100 200 82 200 60S218 20 240 20S280 38 280 60S262 100 240 100zM314.2000000000001 234.2L254.2 294.2C250.6 297.8 245.6 300 240 300C229 300 220 291 220 280C220 274.4 222.2 269.4 225.8 265.8L251.8 240H100C44.8 240 0 195.2 0 140S44.8 40 100 40H180V80H100C66.8 80 40 106.8 40 140S66.8 200 100 200H251.8L226 174.2C222.2 170.6 220 165.6 220 160C220 149 229 140 240 140C245.6 140 250.6 142.2 254.2 145.8L314.2000000000001 205.8C317.8 209.4 320 214.4 320 220C320 225.6 317.8 230.6 314.2000000000001 234.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Redo.defaultProps = {
    size: IconSize.STANDARD,
};
Redo.displayName = "Blueprint5.Icon.Redo";
export default Redo;
//# sourceMappingURL=redo.js.map