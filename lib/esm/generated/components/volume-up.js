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
export var VolumeUp = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "volume-up", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M180 331.4C174.4 331.4 169.4 329.2 165.8 325.6L111.8 271.4H20C9 271.4 0 262.4 0 251.4V131.4C0 120.4 9 111.4 20 111.4H111.8L166 57.2C169.6 53.6 174.6 51.4 180.2000000000001 51.4C191.2000000000001 51.4 200.2000000000001 60.4 200.2000000000001 71.4V311.4C200 322.4 191 331.4 180 331.4zM346.2 362.6L313.8 338.6C342.8 296.8 360 246.2 360 191.4C360 136.6 342.8 86 313.8 44L346.2 20C380 68.6 400 127.6 400 191.4C400 255 380 314 346.2 362.6zM278.4 312.8L246.4 289.2C267.4 262.2000000000001 280 228.2 280 191.4C280 154.6 267.4 120.6 246.4 93.6L278.4 70C304.2000000000001 103.6 320 145.6 320 191.4C320 237 304.4000000000001 279 278.4 312.8z" : "M140 282.8C134.4 282.8 129.4 280.6 125.8 277L71.8 222.8H20C9 222.8 0 213.8 0 202.8V122.8C0 111.8 9 102.8 20 102.8H71.8L126 48.6C129.6 45 134.6 42.8 140.2 42.8C151.2 42.8 160.2 51.8 160.2 62.8V262.8C160 273.8 151 282.8 140 282.8zM274.8 302.6L243.2 278.2C266.2 245.6 280 205.8 280 162.8C280 119.6 266.2 79.8 243 47.2L274.6 22.8C303 62.2 319.8 110.4 319.8 162.8C320 215 303 263.2 274.8 302.6zM179.6 229.6C192.4 210.4 200 187.4 200 162.8S192.4 115 179.6 96L211.4 71.6C229.4 97.4 240 128.8 240 162.8C240 196.8 229.4 228.2 211.4 254L179.6 229.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
VolumeUp.defaultProps = {
    size: IconSize.STANDARD,
};
VolumeUp.displayName = "Blueprint5.Icon.VolumeUp";
export default VolumeUp;
//# sourceMappingURL=volume-up.js.map