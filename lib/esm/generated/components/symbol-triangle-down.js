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
export var SymbolTriangleDown = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "symbol-triangle-down", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 300C320 311 311 320 300 320H100C89 320 80 311 80 300C80 296.8 81 293.8 82.2 291.2L82 291.2L182 91.2L182.2 91.2C185.6 84.6 192.2 80 200 80S214.4 84.6 217.8 91.2L218 91.2L318 291.2000000000001L317.8 291.2000000000001C319 293.8 320 296.8 320 300z" : "M260 239.8C260 250.8 251 259.8 240 259.8H80C69 259.8 60 250.8 60 239.8C60 236.6 61 233.6 62.2 231L62 231L142 71L142.2 71C145.4 64.4 152 59.8 160 59.8S174.4 64.4 177.8 71L178 71L258 231L257.8 231C259 233.8 260 236.6 260 239.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SymbolTriangleDown.defaultProps = {
    size: IconSize.STANDARD,
};
SymbolTriangleDown.displayName = "Blueprint5.Icon.SymbolTriangleDown";
export default SymbolTriangleDown;
//# sourceMappingURL=symbol-triangle-down.js.map