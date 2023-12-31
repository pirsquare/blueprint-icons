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
export var SegmentedControl = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "segmented-control", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 300H20C9 300 0 291 0 280V120C0 109 9 100 20 100H380C391 100 400 109 400 120V280C400 291 391 300 380 300zM360 140H200V260H360V140z" : "M300 240H20C9 240 0 231 0 220V100C0 89 9 80 20 80H300C311 80 320 89 320 100V220C320 231 311 240 300 240zM280 120H160V200H280V120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SegmentedControl.defaultProps = {
    size: IconSize.STANDARD,
};
SegmentedControl.displayName = "Blueprint5.Icon.SegmentedControl";
export default SegmentedControl;
//# sourceMappingURL=segmented-control.js.map