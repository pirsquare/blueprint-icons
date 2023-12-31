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
export var Target = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "target", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M180 300C180 311.0462 188.955 320 200 320C211.044 320 220 311.0462 220 300V240C220 228.9538 211.044 220 200 220C188.955 220 180 228.9538 180 240V300zM240 220C228.956 220 220 211.0462 220 200C220 188.954 228.956 180 240 180H300C311.044 180 320 188.954 320 200C320 211.0462 311.044 220 300 220H240zM80 200C80 211.0462 88.955 220 100 220H160C171.045 220 180 211.0462 180 200C180 188.954 171.045 180 160 180H100C88.955 180 80 188.954 80 200zM200 180C188.955 180 180 171.046 180 160V100C180 88.954 188.955 80 200 80C211.044 80 220 88.954 220 100V160C220 171.046 211.044 180 200 180zM200 0C310.456 0 400 89.544 400 200C400 310.4566 310.456 400 200 400C89.5434 400 0 310.4566 0 200C0 89.544 89.5434 0 200 0zM200 40C288.366 40 360 111.634 360 200C360 288.3654 288.366 360 200 360C111.6334 360 40 288.3654 40 200C40 111.634 111.6334 40 200 40z" : "M140 240C140 251.0462 148.955 260 160 260C171.045 260 180 251.0462 180 240V200C180 188.9538 171.045 180 160 180C148.955 180 140 188.9538 140 200V240zM200 180C188.955 180 180 171.0462 180 160C180 148.9538 188.955 140 200 140H240C251.044 140 260 148.9538 260 160C260 171.0462 251.044 180 240 180H200zM60 160C60 171.0462 68.955 180 80 180H120C131.045 180 140 171.0462 140 160C140 148.9538 131.045 140 120 140H80C68.955 140 60 148.9538 60 160zM160 140C148.955 140 140 131.0462 140 120V80C140 68.954 148.955 60 160 60C171.045 60 180 68.954 180 80V120C180 131.0462 171.045 140 160 140zM160 0C248.366 0 320 71.634 320 160C320 248.3654 248.366 320 160 320C71.6334 320 0 248.3654 0 160C0 71.634 71.6334 0 160 0zM160 40C226.274 40 280 93.726 280 160C280 226.2744 226.274 280 160 280C93.7256 280 40 226.2744 40 160C40 93.726 93.7256 40 160 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Target.defaultProps = {
    size: IconSize.STANDARD,
};
Target.displayName = "Blueprint5.Icon.Target";
export default Target;
//# sourceMappingURL=target.js.map