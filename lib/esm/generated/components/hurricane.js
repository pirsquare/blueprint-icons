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
export var Hurricane = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "hurricane", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M-0.000365426 120C32.9674 104.498 60.0002 100 80.0002 100C60.0002 120 40.0006 162.236 40.0006 200C40.0006 200.116 40.0002 200.2326 39.9998 200.3492C39.999 200.532 39.9984 200.7148 39.9994 200.8966C39.9994 296.6134 124.0262 380.00004 223.438 380C287.564 380 361.428 366.6552 400 280C367.034 295.502 340 300 320 300C340 280 360 237.7632 360 200L360 199.104C360 103.386 275.972 20 176.5616 20C112.436 20 38.571 33.3440000000001 -0.000365426 120zM199.9998 260C166.8628 260 139.9998 233.137 139.9998 200C139.9998 166.862 166.8626 140 199.9998 140C233.136 140 260 166.862 260 200C260 233.137 233.136 260 199.9998 260z" : "M70 80C52.8104 80 20 90 0 100C20 30 90.1246 20 140 20C217.32 20 280 82.68 280 160L279.886 160.085C279.962 161.83 280 163.5846 280 165.3482C280 193.492 270.312 219.3732 254.088 239.8378C272.004 238.511 301.49 229.2554 320 220C300 290 229.876 300 180 300C127.0704 300 81.0012 270.6272 57.2032 227.2926C46.2834 209.21 40 188.0128 40 165.3482C40 164.489 40.009 163.632 40.027 162.7772C40.009 161.8536 40 160.928 40 160L40.121 159.9092C41.5116 128.7372 54.7948 100.658 75.543 80.102C73.7118 80.034 71.864 80 70 80zM160 200C137.9086 200 120 182.0914 120 160C120 137.9086 137.9086 120 160 120C182.0914 120 200 137.9086 200 160C200 182.0914 182.0914 200 160 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Hurricane.defaultProps = {
    size: IconSize.STANDARD,
};
Hurricane.displayName = "Blueprint5.Icon.Hurricane";
export default Hurricane;
//# sourceMappingURL=hurricane.js.map