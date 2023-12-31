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
export var LengthenText = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "lengthen-text", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M16.66666 80H183.3334C192.5 80 200 89 200 100C200 111 192.5 120 183.3334 120H16.66666C7.5 120 0 111 0 100C0 89 7.5 80 16.66666 80zM20 180H380C391 180 400 189 400 200C400 211 391 220 380 220H20C9 220 0 211 0 200C0 189 9 180 20 180zM320 139.996C320 134.396 322.2 129.396 325.8 125.796L331.8 119.996H260C249 119.996 240 110.996 240 99.996C240 88.996 249 79.996 260 79.996H331.8L326 74.196C322.2 70.596 320 65.596 320 59.996C320 48.996 329 39.996 340 39.996C345.6 39.996 350.6 42.196 354.2000000000001 45.796L394.2000000000001 85.796C397.8 89.596 400 94.596 400 99.996C400 105.596 397.8 110.596 394.2000000000001 114.196L354.2000000000001 154.196C350.6 157.796 345.6 159.996 340 159.996C329 160.196 320 151.196 320 139.996zM20 280H380C391 280 400 289 400 300C400 311 391 320 380 320H20C9 320 0 311 0 300C0 289 9 280 20 280z" : "M20 140H300C311 140 320 149 320 160C320 171 311 180 300 180H20C9 180 0 171 0 160C0 149 9 140 20 140zM100 80H20C9 80 0 71 0 60C0 49 9 40 20 40H100C111 40 120 49 120 60C120 71 111 80 100 80zM240 100C240 94.4 242.2 89.4 245.8 85.8L251.8 80H180C169 80 160 71 160 60C160 49 169 40 180 40H251.8L246 34.2C242.2 30.6 240 25.6 240 20C240 9 249 0 260 0C265.6 0 270.6 2.2 274.2000000000001 5.8L314.2000000000001 45.8C317.8 49.4 320 54.4 320 60C320 65.6 317.8 70.6 314.2000000000001 74.2L274.2000000000001 114.2C270.6 117.8 265.6 120 260 120C249 120 240 111 240 100zM20 240H300C311 240 320 249 320 260C320 271 311 280 300 280H20C9 280 0 271 0 260C0 249 9 240 20 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
LengthenText.defaultProps = {
    size: IconSize.STANDARD,
};
LengthenText.displayName = "Blueprint5.Icon.LengthenText";
export default LengthenText;
//# sourceMappingURL=lengthen-text.js.map