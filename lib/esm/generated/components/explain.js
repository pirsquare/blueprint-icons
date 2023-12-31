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
export var Explain = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "explain", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C89.543 400 0 310.457 0 200C0 89.544 89.543 0 200 0H400V200C400 310.457 310.456 400 200 400zM160 180C171.0456 180 180 171.046 180 160V72.582C180 65.628 185.6374 59.99 192.5912 59.99C197.164 59.99 201.378 62.47 203.598 66.466L278.4 201.1118C279.45 202.9996 280 205.1234 280 207.283C280 214.301 274.31 219.9902 267.292 219.9902H240C228.954 219.9902 220 228.9446 220 239.9902V327.4088C220 334.3628 214.362 340 207.408 340C202.836 340 198.6228 337.5208 196.402 333.5236L121.5992 198.878C120.5504 196.99 120 194.866 120 192.708C120 185.69 125.6892 180 132.7072 180H160z" : "M160 320C71.6344 320 0 248.3656 0 160C0 71.634 71.6344 0 160 0H320V160C320 248.3656 248.366 320 160 320zM120 140C131.0458 140 140 131.0456 140 120V70.186C140 64.556 144.5632 59.992 150.1924 59.992C153.7924 59.992 157.1254 61.892 158.9608 64.988L218.684 165.7722C219.546 167.2256 220 168.8842 220 170.5738C220 175.7758 215.784 179.9926 210.582 179.9926H200C188.9542 179.9926 180 188.947 180 199.9926V249.8076C180 255.4368 175.4368 260 169.8076 260C166.2076 260 162.8746 258.1008 161.0392 255.0038L101.3158 154.2206C100.4546 152.767 100 151.1084 100 149.4188C100 144.217 104.217 140 109.4188 140H120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Explain.defaultProps = {
    size: IconSize.STANDARD,
};
Explain.displayName = "Blueprint5.Icon.Explain";
export default Explain;
//# sourceMappingURL=explain.js.map