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
export var StadiumGeometry = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "stadium-geometry", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M300 260H100C66.863 260 40 233.137 40 200C40 166.862 66.863 140 100 140H300C333.1380000000001 140 360 166.862 360 200C360 233.137 333.1380000000001 260 300 260zM100 300C44.7716 300 0 255.2284 0 200C0 144.772 44.7716 100 100 100H300C355.228 100 400 144.772 400 200C400 255.2284 355.228 300 300 300H100z" : "M240 200H80C57.9086 200 40 182.0914 40 160C40 137.9086 57.9086 120 80 120H240C262.092 120 280 137.9086 280 160C280 182.0914 262.092 200 240 200zM80 240C35.8172 240 0 204.1828 0 160C0 115.818 35.8172 80 80 80H240C284.182 80 320 115.818 320 160C320 204.1828 284.182 240 240 240H80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
StadiumGeometry.defaultProps = {
    size: IconSize.STANDARD,
};
StadiumGeometry.displayName = "Blueprint5.Icon.StadiumGeometry";
export default StadiumGeometry;
//# sourceMappingURL=stadium-geometry.js.map