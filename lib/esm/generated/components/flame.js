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
export var Flame = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "flame", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M232.446022 400C232.446022 365.8119658 242.257866 338.4615384 261.8815560000001 317.948718C327.293852 270.08547 360 215.3846154 360 153.846154C360 85.470086 320.752622 34.188034 242.257866 0C300 60 291.31709 84.615384 232.446022 160C170 130 180 110 190 70C169.0485132 70 150 70 140 80C140 66.324786 163.9343176 30 179.0485132 0C100.5537578 20.51282 16.58544538 143.589744 46.0209786 153.846154C65.6446674 160.68376 88.5389712 157.264958 114.7038896 143.589744C81.9977416 266.6666666 121.2451192 352.1367522 232.446022 400z" : "M184.334517 320C184.334517 292.6495726 191.6934002 270.7692308 206.411166 254.3589744C255.470388 216.068376 280 172.3076924 280 123.076923C280 68.376068 250.564466 27.350428 191.6934002 0C235 48 228.487816 67.692308 184.334517 128C137.5 104 145 88 152.5 56C136.7863848 56 122.5 56 115 64C115 53.05983 132.9507382 24 144.2863848 0C85.4153184 16.410256 22.439084 114.871794 44.515734 123.076923C59.2335006 128.5470086 76.4042284 125.8119658 96.0279172 114.871794C71.4983062 213.3333334 100.9338394 281.7094018 184.334517 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Flame.defaultProps = {
    size: IconSize.STANDARD,
};
Flame.displayName = "Blueprint5.Icon.Flame";
export default Flame;
//# sourceMappingURL=flame.js.map