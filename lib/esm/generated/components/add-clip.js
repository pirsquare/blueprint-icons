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
export var AddClip = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "add-clip", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 400C311.046 400 320 391.0457 320 380V320H380C391.046 320 400 311.0456 400 300C400 288.9544 391.046 280 380 280H320V220C320 208.9542 311.046 200 300 200C288.954 200 280 208.9542 280 220V280H220C208.954 280 200 288.9544 200 300C200 311.0456 208.954 320 220 320H280V380C280 391.0457 288.954 400 300 400zM20 320C8.9543 320 0 311.0456 0 300V220C0 208.9544 8.9543 200 20 200C31.0456 200 40 208.9544 40 220V280H100C111.0456 280 120 288.9544 120 300C120 311.0456 111.0456 320 100 320H20zM0 20C0 8.954 8.9543 0 20 0H100C111.0456 0 120 8.954 120 20C120 31.046 111.0456 40 100 40H40V100C40 111.046 31.0456 120 20 120C8.9543 120 0 111.046 0 100V20zM300 0L220 0C208.954 0 200 8.954 200 20C200 31.046 208.954 40 220 40L280 40V100C280 111.046 288.954 120 300 120C311.046 120 320 111.046 320 100V20C320 8.954 311.046 0 300 0zM160 100C193.137 100 220 126.862 220 160C220 193.138 193.137 220 160 220C126.863 220 100 193.138 100 160C100 126.862 126.863 100 160 100z" : "M240 320C228.954 320 220 311.0457 220 300V260H180C168.9544 260 160 251.0456 160 240C160 228.9544 168.9542 220 180 220H220V180C220 168.9544 228.954 160 240 160C251.046 160 260 168.9544 260 180V220H300C311.046 220 320 228.9544 320 240C320 251.0456 311.046 260 300 260H260V300C260 311.0457 251.046 320 240 320zM0 240C0 251.0456 8.9543 260 20 260H90C101.0456 260 110 251.0456 110 240C110 228.9544 101.0456 220 90 220H40V180C40 168.9544 31.0456 160 20 160C8.9543 160 0 168.9544 0 180V240zM20 0C8.9543 0 0 8.954 0 20V80C0 91.046 8.9543 100 20 100C31.0456 100 40 91.046 40 80V40H90C101.0456 40 110 31.046 110 20C110 8.954 101.0456 0 90 0H20zM240 0C245.304 0 250.392 2.108 254.142 5.858C257.892 9.608 260 14.696 260 20V80C260 91.046 251.046 100 240 100C228.954 100 220 91.046 220 80V40L180 40C168.9544 40 160 31.046 160 20C160 8.954 168.9542 0 180 0L240 0zM130 80C157.6142 80 180 102.386 180 130C180 157.6142 157.6142 180 130 180C102.3858 180 80 157.6142 80 130C80 102.386 102.3858 80 130 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
AddClip.defaultProps = {
    size: IconSize.STANDARD,
};
AddClip.displayName = "Blueprint5.Icon.AddClip";
export default AddClip;
//# sourceMappingURL=add-clip.js.map