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
export var HelperManagement = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "helper-management", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 200H280V140H340V200L340 200zM340 120H280V60H340V120L340 120zM340 280H280V220H340V280L340 280zM380 400H20C8 400 0 392 0 380V20C0 10 8 0 20 0H380C390 0 400 10 400 20V380C400 392 390 400 380 400L380 400zM360 40H40V360H360V40L360 40zM180 120H120V60H180V120L180 120zM260 120H200V60H260V120L260 120z" : "M260 220H220V180H260V220L260 220zM260 100H220V60H260V100L260 100zM260 160H220V120H260V160L260 160zM300 320H20C8 320 0 312 0 300V20C0 8 8 0 20 0H300C312 0 320 8 320 20V300C320 312 312 320 300 320L300 320zM280 40H40V280H280V40L280 40zM140 100H100V60H140V100L140 100zM200 100H160V60H200V100L200 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
HelperManagement.defaultProps = {
    size: IconSize.STANDARD,
};
HelperManagement.displayName = "Blueprint5.Icon.HelperManagement";
export default HelperManagement;
//# sourceMappingURL=helper-management.js.map