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
export var AddColumnRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "add-column-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 180H240V140C240 129 249 120 260 120S280 129 280 140V180H320C331 180 340 189 340 200C340 211 331 220 320 220H280V260C280 271 271 280 260 280S240 271 240 260V220H200C189 220 180 211 180 200C180 189 189 180 200 180zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM140 40H40V360H140V40zM360 40H160V360H360V40z" : "M160 140H180V120C180 109 189 100 200 100S220 109 220 120V140H240C251 140 260 149 260 160C260 171 251 180 240 180H220V200C220 211 211 220 200 220S180 211 180 200V180H160C149 180 140 171 140 160C140 149 149 140 160 140zM300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM100 40H40V280H100V40zM280 40H120V280H280V40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
AddColumnRight.defaultProps = {
    size: IconSize.STANDARD,
};
AddColumnRight.displayName = "Blueprint5.Icon.AddColumnRight";
export default AddColumnRight;
//# sourceMappingURL=add-column-right.js.map