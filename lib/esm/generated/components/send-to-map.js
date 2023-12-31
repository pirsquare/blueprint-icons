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
export var SendToMap = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "send-to-map", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 180H60C49 180 40 171 40 160S49 140 60 140H111.8L6 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L140 111.8V60C140 49 149 40 160 40S180 49 180 60V160C180 171 171 180 160 180zM390.8 316.4L391 316.8L271 396.8L270.8 396.4C267.8 398.4 264.2000000000001 400 260 400S252.2 398.4 249.2 396.4L249.0000000000001 396.8L140 324L31 396.6L30.8 396.4C27.8 398.4 24.2 400 20 400C9 400 0 391 0 380V200C0 211 9 220 20 220H40V342.6L120 289.2V220H160V289.2L240 342.6V110.6L220 97.2000000000001V49.2L260 75.8L369 3.2L369.2000000000001 3.6C372.2 1.6 375.8 0 380 0C391 0 400 9 400 20V300C400 307 396.2 312.8 390.8 316.4zM360 57.4L280 110.8V342.6L360 289.2V57.4z" : "M120 140H40C29 140 20 131 20 120C20 109 29 100 40 100H71.8L6 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L100 71.8V40C100 29 109 20 120 20S140 29 140 40V120C140 131 131 140 120 140zM311 256.6L311 256.6L221.2 316.6C221.2 316.6 221.2 316.6 221.2 316.6L221.2 316.6L221.2 316.6C218 318.8 214.2 320 210 320C206.2 320 202.8 318.8 199.8 317L199.8 317L110.6 263.6L31.2 316.6C31.2 316.6 31.2 316.6 31.2 316.6L31.2 316.6L31.2 316.6C28 318.8 24.2 320 20 320C9 320 0 311 0 300V180H40V262.6L98.8 223.4C98.8 223.4 98.8 223.4 98.8 223.4L98.8 223.4L98.8 223.4C99.2 223.2 99.6 223 100 222.8V180H120V222.8C120 222.8 120.2 222.8 120.2 223L120.2 223L200 270.6V97.2C200 97.2 199.8 97.2 199.8 97L199.8 97L180 85.4V38.8L209.4 56.4L288.8 3.4C288.8 3.4 288.8 3.4 288.8 3.4L288.8 3.4L288.8 3.4C292 1.2 295.8 0 300 0C311 0 320 9 320 20V240C320 247 316.4 253 311 256.6zM280 57.4L221.2 96.6C221.2 96.6 221.2 96.6 221.2 96.6L221.2 96.6L221.2 96.6C220.8 96.8 220.4 96.9999999999999 220.2 97.2V269.2L280.2 229.2V57.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SendToMap.defaultProps = {
    size: IconSize.STANDARD,
};
SendToMap.displayName = "Blueprint5.Icon.SendToMap";
export default SendToMap;
//# sourceMappingURL=send-to-map.js.map