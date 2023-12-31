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
export var MobileVideo = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "mobile-video", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 300C374.4 300 369.4 297.8 365.8 294.2L300 228.2C300 267.2000000000001 300 300 300 300C300 311 291 320 280 320H20C9 320 0 311 0 300V100C0 89 9 80 20 80H280C291 80 300 89 300 100C300 100 300 132.8 300 171.8L365.8 106C369.4 102.2 374.4 100 380 100C391 100 400 109 400 120V280C400 291 391 300 380 300z" : "M300 240C294.4000000000001 240 289.4000000000001 237.8 285.8 234.2L240 188.2V240C240 251 231 260 220 260H20C9 260 0 251 0 240V80C0 69 9 60 20 60H220C231 60 240 69 240 80V131.8L285.8 86C289.4000000000001 82.2 294.4000000000001 80 300 80C311 80 320 89 320 100V220C320 231 311 240 300 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MobileVideo.defaultProps = {
    size: IconSize.STANDARD,
};
MobileVideo.displayName = "Blueprint5.Icon.MobileVideo";
export default MobileVideo;
//# sourceMappingURL=mobile-video.js.map