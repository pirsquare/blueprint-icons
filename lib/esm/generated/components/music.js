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
export var Music = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "music", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400C378.4000000000001 400 376.8 399.4 375.2000000000001 399L375.2000000000001 399.4L135.2000000000001 339.4L135.2000000000001 339C126.6 336.8 120 329.4 120 320V93C108.2 97.4 94.6 100 80 100C35.8 100 0 77.6 0 50C0 22.4 35.8 0 80 0C118.8 0 151 17.2 158.4 40H160V244.4L360 294.4V153C348.2 157.4 334.6 160 320 160C275.8 160 240 137.6 240 110C240 82.4 275.8 60 320 60C358.8 60 391 77.2 398.4000000000001 100H400V380C400 391 391 400 380 400z" : "M300 320C298.6 320 297.4 319.4 296.2 319.2L296.2 319.6L96.2 279.6L96.2 279.2C87 277.4 80 269.6 80 260V77.6C73.8 79 67 80 60 80C26.8 80 0 62 0 40C0 18 26.8 0 60 0S120 18 120 40V193.6L280 225.6V117.6C273.8 119 267 120 260 120C226.8 120 200 102 200 80S226.8 40 260 40S320 58 320 80V300C320 311 311 320 300 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Music.defaultProps = {
    size: IconSize.STANDARD,
};
Music.displayName = "Blueprint5.Icon.Music";
export default Music;
//# sourceMappingURL=music.js.map