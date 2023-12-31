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
export var Rectangle = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "rectangle", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 320H380C391 320 400 311 400 300V100C400 89 391 80 380 80H20C9 80 0 89 0 100V300C0 311 9 320 20 320zM40 280V120H360V280H40z" : "M20 260H300C311 260 320 251 320 240V80C320 69 311 60 300 60H20C9 60 0 69 0 80V240C0 251 9 260 20 260zM40 220V100H280V220H40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Rectangle.defaultProps = {
    size: IconSize.STANDARD,
};
Rectangle.displayName = "Blueprint5.Icon.Rectangle";
export default Rectangle;
//# sourceMappingURL=rectangle.js.map