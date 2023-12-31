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
export var Detection = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "detection", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M20 400C8.9543 400 0 391.0457 0 380V280C0 268.9544 8.9543 260 20 260C31.0456 260 40 268.9544 40 280V360H120C131.0456 360 140 368.9544 140 380C140 391.0457 131.0456 400 120 400H20zM0 20C0 8.954 8.9543 0 20 0H120C131.0456 0 140 8.954 140 20C140 31.046 131.0456 40 120 40H40V120C40 131.046 31.0456 140 20 140C8.9543 140 0 131.046 0 120V20zM380 0C391.046 0 400 8.954 400 20V120C400 131.046 391.046 140 380 140C368.954 140 360 131.046 360 120V40H280C268.954 40 260 31.046 260 20C260 8.954 268.954 0 280 0H380zM400 380C400 391.0457 391.046 400 380 400H280C268.954 400 260 391.0457 260 380C260 368.9544 268.954 360 280 360H360V280C360 268.9544 368.954 260 380 260C391.046 260 400 268.9544 400 280V380zM100 280C100 291.0456 108.9544 300 120 300H280C291.046 300 300 291.0456 300 280V120C300 108.954 291.046 100 280 100H120C108.9544 100 100 108.954 100 120V280zM140 140V260H260V140H140z" : "M20 320C8.9543 320 0 311.0457 0 300V220C0 208.9544 8.9543 200 20 200C31.0456 200 40 208.9544 40 220V280H100C111.0456 280 120 288.9544 120 300C120 311.0457 111.0456 320 100 320H20zM0 20C0 8.954 8.9543 0 20 0H100C111.0456 0 120 8.954 120 20C120 31.046 111.0456 40 100 40H40V100C40 111.046 31.0456 120 20 120C8.9543 120 0 111.046 0 100V20zM300 0C311.046 0 320 8.954 320 20V100C320 111.046 311.046 120 300 120C288.954 120 280 111.046 280 100V40H220C208.954 40 200 31.046 200 20C200 8.954 208.954 0 220 0H300zM320 300C320 311.0457 311.046 320 300 320H220C208.954 320 200 311.0457 200 300C200 288.9544 208.954 280 220 280H280V220C280 208.9544 288.954 200 300 200C311.046 200 320 208.9544 320 220V300zM80 220C80 231.0456 88.9544 240 100 240H220C231.046 240 240 231.0456 240 220V100C240 88.954 231.046 80 220 80H100C88.9544 80 80 88.954 80 100V220zM120 120V200H200V120H120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Detection.defaultProps = {
    size: IconSize.STANDARD,
};
Detection.displayName = "Blueprint5.Icon.Detection";
export default Detection;
//# sourceMappingURL=detection.js.map