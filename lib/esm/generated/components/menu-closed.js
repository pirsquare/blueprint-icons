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
export var MenuClosed = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "menu-closed", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 280H380C391 280 400 289 400 300C400 311 391 320 380 320H160C149 320 140 311 140 300C140 289 149 280 160 280zM80 280C74.4 280 69.4 277.8 65.8 274.2L5.8 214.2C2.2 210.6 0 205.6 0 200C0 194.4 2.2 189.4 5.8 185.8L65.8 125.8C69.4 122.2 74.4 120 80 120C91 120 100 129 100 140V260C100 271 91 280 80 280zM380 120H160C149 120 140 111 140 100C140 89 149 80 160 80H380C391 80 400 89 400 100C400 111 391 120 380 120zM380 220H160C149 220 140 211 140 200C140 189 149 180 160 180H380C391 180 400 189 400 200C400 211 391 220 380 220z" : "M299.8 180.2H119.8C108.8 180.2 99.8 171.2 99.8 160.2S108.8 140.2 119.8 140.2H299.8C310.8 140.2 319.8 149.2 319.8 160.2S310.8 180.2 299.8 180.2zM59.8 220.2C54.2 220.2 49.2 218 45.6 214.4L5.6 174.4C2 170.6 -0.2 165.6 -0.2 160.2S2 149.6 5.6 146L45.6 106C49.2 102.4 54.2 100.2000000000001 59.8 100.2000000000001C70.8 100.2000000000001 79.8 109.2 79.8 120.2000000000001V200.2000000000001C79.8 211.2 70.8 220.2 59.8 220.2zM119.8 240.2H299.8C310.8 240.2 319.8 249.2 319.8 260.2S310.8 280.2 299.8 280.2H119.8C108.8 280.2 99.8 271.2 99.8 260.2S108.8 240.2 119.8 240.2zM299.8 80.2H119.8C108.8 80.2 99.8 71.2 99.8 60.2S108.8 40.2 119.8 40.2H299.8C310.8 40.2 319.8 49.2 319.8 60.2S310.8 80.2 299.8 80.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MenuClosed.defaultProps = {
    size: IconSize.STANDARD,
};
MenuClosed.displayName = "Blueprint5.Icon.MenuClosed";
export default MenuClosed;
//# sourceMappingURL=menu-closed.js.map