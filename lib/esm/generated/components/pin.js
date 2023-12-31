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
export var Pin = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "pin", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M235.4 376.8C219.2 360.6 220.6 331.2000000000001 235.8 301.6L122 225.8C78.6 255 39.6 265.8 23.2 249.4L122.2 150.4L23.2 23.2L150.4 122.2L249.4 23.2C265.8 39.6 254.8 78.6 225.6 122L301.6 235.8000000000001C331 220.6000000000001 360.4000000000001 219.0000000000001 376.8000000000001 235.4000000000001L235.4 376.8z" : "M188.2 301.6C178 291.4 180 271.6 191.2 250.4L86.8 169.2C56 190.4 29 199 18.4 188.4L89.2 117.6L18.4 18.6L117.4 89.4L188.2 18.6C198.8 29.2 190.2 56.2 169 87L250.2 191.4C271.4 180.2 291 178.2 301.2 188.4L188.2 301.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Pin.defaultProps = {
    size: IconSize.STANDARD,
};
Pin.displayName = "Blueprint5.Icon.Pin";
export default Pin;
//# sourceMappingURL=pin.js.map