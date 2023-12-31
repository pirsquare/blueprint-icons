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
export var VolumeDown = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "volume-down", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M318.4 321.4L286.4 297.8C307.4 270.8 320 236.8 320 200C320 163.2 307.4 129.2000000000001 286.4 102.2L318.4 78.6C344.4 112.2 360 154.2 360 200C360 245.8 344.4 287.8 318.4 321.4zM220 340C214.4 340 209.4 337.8 205.8 334.2L151.8 280H60C49 280 40 271 40 260V140C40 129 49 120 60 120H151.8L206 65.8C209.4 62.2 214.4 60 220 60C231 60 240 69 240 80V320C240 331 231 340 220 340z" : "M180 280C174.4 280 169.4 277.8 165.8 274.2L111.8 220H60C49 220 40 211 40 200V120C40 109 49 100 60 100H111.8L166 45.8C169.4 42.2 174.4 40 180 40C191 40 200 49 200 60V260C200 271 191 280 180 280zM251.4 251.2L219.6 226.8C232.4 207.8 240 184.8 240 160S232.4 112.2 219.6 93.2L251.4 68.8C269.4000000000001 94.6 280 126 280 160C280 194 269.4000000000001 225.4 251.4 251.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
VolumeDown.defaultProps = {
    size: IconSize.STANDARD,
};
VolumeDown.displayName = "Blueprint5.Icon.VolumeDown";
export default VolumeDown;
//# sourceMappingURL=volume-down.js.map