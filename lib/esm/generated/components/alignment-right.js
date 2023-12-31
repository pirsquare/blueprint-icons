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
export var AlignmentRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "alignment-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400C369 400 360 391 360 380V20C360 9 369 0 380 0S400 9 400 20V380C400 391 391 400 380 400zM300 180H160C149 180 140 171 140 160V80C140 69 149 60 160 60H300C311 60 320 69 320 80V160C320 171 311 180 300 180zM300 340H20C9 340 0 331 0 320V240C0 229 9 220 20 220H300C311 220 320 229 320 240V320C320 331 311 340 300 340z" : "M220 140H140C129 140 120 131 120 120V60C120 49 129 40 140 40H220C231 40 240 49 240 60V120C240 131 231 140 220 140zM300 320C289 320 280 311 280 300V20C280 9 289 0 300 0S320 9 320 20V300C320 311 311 320 300 320zM220 280H40C29 280 20 271 20 260V200C20 189 29 180 40 180H220C231 180 240 189 240 200V260C240 271 231 280 220 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
AlignmentRight.defaultProps = {
    size: IconSize.STANDARD,
};
AlignmentRight.displayName = "Blueprint5.Icon.AlignmentRight";
export default AlignmentRight;
//# sourceMappingURL=alignment-right.js.map