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
export var ColorFill = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "color-fill", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M43.7636 220L283.432 220L160 343.4314L68.2842 251.7158C56.2248 239.6562 48.103 230.3902 43.7636 220zM160 400L131.7158 371.7158L40 280C20 260 0 237.8048 0 200C0 160 20 140 40 120L60 100C80 80 100 60 140 60C180.1766 60 198.3614 78.268 217.352 97.344L217.352 97.344L220 100L311.716 191.716L340 220L311.716 248.2842L188.2842 371.7158L160 400zM370 130L340 180L310 130C303.646 119.41 300 110 300 100C300 80 310 60 340 60C370 60 380 80 380 100C380 110 376.354 119.41 370 130zM20 40C8.9543 40 0 31.046 0 20C0 8.954 8.9543 0 20 0H380C391.046 0 400 8.954 400 20C400 31.046 391.046 40 380 40H20z" : "M61.8638 180C62.2002 180.9846 62.5838 181.9852 63.0158 182.9932C65.1466 187.9652 67.5152 190.9466 68.2842 191.7158L140 263.4314L223.432 180L61.8638 180zM130 60C150 60 179.9998 80 189.9998 90L251.716 151.7158L280 180L251.716 208.2842L168.2842 291.7158L140 320L111.7158 291.7158L40 220C30 210 20 190 20 170C20 150 30 130 40 120L80 80C90 70 110 60 130 60zM270 140L292.5 106.666C297.266 99.606 300 93.334 300 86.666C300 73.334 292.5 60 270 60C247.5 60 240 73.334 240 86.666C240 93.334 242.734 99.606 247.5 106.666L270 140zM0 20C0 31.046 8.9543 40 20 40H300C311.046 40 320 31.046 320 20C320 8.954 311.046 0 300 0H20C8.9543 0 0 8.954 0 20z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
ColorFill.defaultProps = {
    size: IconSize.STANDARD,
};
ColorFill.displayName = "Blueprint5.Icon.ColorFill";
export default ColorFill;
//# sourceMappingURL=color-fill.js.map