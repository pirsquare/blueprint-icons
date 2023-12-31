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
export var Console = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "console", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 20H20C9 20 0 29 0 40V360C0 371 9 380 20 380H380C391 380 400 371 400 360V40C400 29 391 20 380 20zM360 280H40V60H360V280zM80 240C85.6 240 90.6 237.8 94.2 234.2L94.2 234.2L134.2 194.2L134.2 194.2C137.8 190.6 140 185.6 140 180S137.8 169.4 134.2 165.8L134.2 165.8L94.2 125.8L94.2 125.8C90.6 122.2 85.6 120 80 120C69 120 60 129 60 140C60 145.6 62.2 150.6 65.8 154.2L65.8 154.2L91.8 180L65.8 205.8L65.8 205.8C62.2 209.4 60 214.4 60 220C60 231 69 240 80 240zM180 160H240C251 160 260 151 260 140C260 129 251 120 240 120H180C169 120 160 129 160 140C160 151 169 160 180 160z" : "M300 20H20C9 20 0 29 0 40V280C0 291 9 300 20 300H300C311 300 320 291 320 280V40C320 29 311 20 300 20zM280 220H40V60H280V220zM80 200C85.6 200 90.6 197.8 94.2 194.2L94.2 194.2L134.2 154.2L134.2 154.2C137.8 150.6 140 145.6 140 140S137.8 129.4 134.2 125.8L134.2 125.8L94.2 85.8L94.2 85.8C90.6 82.2 85.6 80 80 80C69 80 60 89 60 100C60 105.6 62.2 110.6 65.8 114.2L65.8 114.2L91.8 140L65.8 165.8L65.8 165.8C62.2 169.4 60 174.4 60 180C60 191 69 200 80 200zM180 120H240C251 120 260 111 260 100S251 80 240 80H180C169 80 160 89 160 100S169 120 180 120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Console.defaultProps = {
    size: IconSize.STANDARD,
};
Console.displayName = "Blueprint5.Icon.Console";
export default Console;
//# sourceMappingURL=console.js.map