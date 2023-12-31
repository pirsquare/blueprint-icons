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
export var Export = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "export", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M100 260C105.6 260 110.6 262.2000000000001 114.2 265.8L180 331.8V100C180 89 189 80 200 80S220 89 220 100V331.8L285.8 266C289.4000000000001 262.2000000000001 294.4000000000001 260 300 260C311 260 320 269 320 280C320 285.6 317.8 290.6 314.2000000000001 294.2L214.2 394.2C210.6 397.8 205.6 400 200 400S189.4 397.8 185.8 394.2L85.8 294.2C82.2 290.6 80 285.6 80 280C80 269 89 260 100 260zM380 120C369 120 360 111 360 100V40H40V100C40 111 31 120 20 120S0 111 0 100V20C0 9 9 0 20 0H380C391 0 400 9 400 20V100C400 111 391 120 380 120z" : "M80 200C85.6 200 90.6 202.2 94.2 205.8L140 251.8V100C140 89 149 80 160 80S180 89 180 100V251.8L225.8 206C229.4 202.2 234.4 200 240 200C251 200 260 209 260 220C260 225.6 257.8 230.6 254.2 234.2L174.2 314.2C170.6 317.8 165.6 320 160 320S149.4 317.8 145.8 314.2L65.8 234.2C62.2 230.6 60 225.6 60 220C60 209 69 200 80 200zM300 100C289 100 280 91 280 80V40H40V80C40 91 31 100 20 100S0 91 0 80V20C0 9 9 0 20 0H300C311 0 320 9 320 20V80C320 91 311 100 300 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Export.defaultProps = {
    size: IconSize.STANDARD,
};
Export.displayName = "Blueprint5.Icon.Export";
export default Export;
//# sourceMappingURL=export.js.map