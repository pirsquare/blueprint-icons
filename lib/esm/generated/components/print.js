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
export var Print = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "print", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M280 80H120V160H80V60C80 49 89 40 100 40H300C311 40 320 49 320 60V160H280V80zM320 340C320 351 311 360 300 360H100C89 360 80 351 80 340V320H320V340zM380 300H20C9 300 0 291 0 280V140C0 129 9 120 20 120H60V180H340V120H380C391 120 400 129 400 140V280C400 291 391 300 380 300zM360 220H320V260H360V220z" : "M240 279.6C240 290.6 231 299.6 220 299.6H100C89 299.6 80 290.6 80 279.6V259.6H240V279.6zM300 239.6H20C9 239.6 0 230.6 0 219.6V99.6C0 88.6 9 79.6 20 79.6H40V139.6H280V79.6H300C311 79.6 320 88.6 320 99.6V219.6C320 230.8 311 239.6 300 239.6zM280 179.6H240V199.6H280V179.6zM220 59.6H100V119.6H60V39.6C60 28.6 69 19.6 80 19.6H240C251 19.6 260 28.6 260 39.6V119.6H220V59.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Print.defaultProps = {
    size: IconSize.STANDARD,
};
Print.displayName = "Blueprint5.Icon.Print";
export default Print;
//# sourceMappingURL=print.js.map