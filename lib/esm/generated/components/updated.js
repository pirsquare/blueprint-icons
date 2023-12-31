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
export var Updated = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "updated", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C134.2 400 76.4 368 40 319L40 360C40 371 31 380 20 380C9 380 0 371 0 360L0 280C0 269 9 260 20 260L100 260C111 260 120 269 120 280C120 291 111 300 100 300L75.2 300C104.4 336.6 149.4 360 200 360C288.4 360 360 288.4 360 200C360 111.6 288.4 40 200 40C111.6 40 40 111.6 40 200C40 211 31 220 20 220C9 220 0 211 0 200C0 89.6 89.6 0 200 0C310.4 0 400 89.6 400 200C400 310.4 310.4 400 200 400zM280 260C274.4000000000001 260 269.4000000000001 257.8 265.8 254.2L180 168.4L134.2 214.2C130.6 217.8 125.6 220 120 220C109 220 100 211 100 200C100 194.4 102.2 189.4 105.8 185.8L165.8 125.8C169.4 122.2 174.4 120 180 120C185.6 120 190.6 122.2 194.2 125.8L294.2000000000001 225.8C297.8 229.4 300 234.4 300 240C300 251 291 260 280 260z" : "M160 320C112 320 69.2 298.6 40 265.2L40 300C40 311 31 320 20 320C9 320 0 311 0 300L0 220C0 209 9 200 20 200L100 200C111 200 120 209 120 220C120 231 111 240 100 240L70.8 240C92.8 264.4 124.4 280 160 280C226.2 280 280 226.2 280 160C280 107.8 246.6 63.8 200 47.4C187.4 43 174.2 40 160 40C93.8 40 40 93.8 40 160C40 171 31 180 20 180C9 180 0 171 0 160C0 71.6 71.6 0 160 0C166.8 0 173.4 0.6 180 1.4C180.4 1.4 180.8 1.6 181.2 1.6C259.6 12 320 78.8 320 160C320 248.4 248.4 320 160 320zM220 220C214.4 220 209.4 217.8 205.8 214.2L140 148.4L114.2 174.2C110.6 177.8 105.6 180 100 180C89 180 80 171 80 160C80 154.4 82.2 149.4 85.8 145.8L125.8 105.8C129.4 102.2 134.4 100 140 100C145.6 100 150.6 102.2 154.2 105.8L234.2 185.8C237.8 189.4 240 194.4 240 200C240 211 231 220 220 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Updated.defaultProps = {
    size: IconSize.STANDARD,
};
Updated.displayName = "Blueprint5.Icon.Updated";
export default Updated;
//# sourceMappingURL=updated.js.map