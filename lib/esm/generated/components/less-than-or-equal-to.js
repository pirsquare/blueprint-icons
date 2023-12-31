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
export var LessThanOrEqualTo = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "less-than-or-equal-to", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M326.3191492 178.97366L143.240148 239.999994L326.3191492 301.0263280000001C336.7980156 304.5192834 342.4612154 315.845683 338.96826 326.3245492C335.4753044000001 336.8034156 324.148905 342.4666154 313.6700386 338.97366L73.670038 258.97366C55.436112 252.8956844 55.436112 227.1043034 73.670038 221.026328L313.6700386 141.026328C324.148905 137.533372 335.4753044000001 143.196572 338.96826 153.675438C342.4612154 164.154306 336.7980156 175.480704 326.3191492 178.97366zM319.994594 99.999994L79.994594 99.999994C68.948898 99.999994 59.994594 91.045688 59.994594 79.999994C59.994594 68.954298 68.948898 59.999994 79.994594 59.999994L319.994594 59.999994C331.0402890000001 59.999994 339.994594 68.954298 339.994594 79.999994C339.994594 91.045688 331.0402890000001 99.999994 319.994594 99.999994z" : "M265.741692 240.8434742C276.321549 244.0174314 282.325217 255.1671008 279.15126 265.7469578C275.9773028 276.3268148 264.8276334 282.3304828000001 254.2477764 279.1565258L54.247776 219.1565258C35.24372 213.4553088 35.24372 186.5446912 54.247776 180.8434742L254.2477764 120.8434742C264.8276334 117.669518 275.9773028 123.6731852 279.15126 134.2530422C282.325217 144.8328992 276.321549 155.9825686 265.741692 159.1565258L129.5967776 200L265.741692 240.8434742zM259.9947342000001 80L59.994734 80C48.94904 80 39.994734 71.045694 39.994734 60C39.994734 48.954306 48.94904 40 59.994734 40L259.9947342000001 40C271.0404292 40 279.9947342000001 48.954306 279.9947342000001 60C279.9947342000001 71.045694 271.0404292 80 259.9947342000001 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
LessThanOrEqualTo.defaultProps = {
    size: IconSize.STANDARD,
};
LessThanOrEqualTo.displayName = "Blueprint5.Icon.LessThanOrEqualTo";
export default LessThanOrEqualTo;
//# sourceMappingURL=less-than-or-equal-to.js.map