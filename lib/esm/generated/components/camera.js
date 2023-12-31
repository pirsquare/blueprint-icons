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
export var Camera = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "camera", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 240C166.8 240 140 213.2 140 180S166.8 120 200 120S260 146.8 260 180S233.2 240 200 240zM380 320H308.2L274 354.2C270.6 357.8 265.6 360 260 360H140C134.4 360 129.4 357.8 125.8 354.2L91.8 320H20C9 320 0 311 0 300V100C0 89 9 80 20 80H102.2C127.4 55.2 162 40 200 40S272.6 55.2 297.8 80H380C391 80 400 89 400 100V300C400 311 391 320 380 320zM80 240H40V280H80V240zM200 80C144.8 80 100 124.8 100 180S144.8 280 200 280S300 235.2 300 180S255.2 80 200 80z" : "M300 260H248.2L214 294.2C210.6 297.8 205.6 300 200 300H120C114.4 300 109.4 297.8 105.8 294.2L71.8 260H20C9 260 0 251 0 240V100C0 89 9 80 20 80H71.2C93.2 55.6 124.6 40 160 40S226.8 55.6 248.8 80H300C311 80 320 89 320 100V240C320 251 311 260 300 260zM60 200H20V220H60V200zM160 80C115.8 80 80 115.8 80 160C80 204.2 115.8 240 160 240S240 204.2 240 160C240 115.8 204.2 80 160 80zM160 200C138 200 120 182 120 160C120 138 138 120 160 120S200 138 200 160C200 182 182 200 160 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Camera.defaultProps = {
    size: IconSize.STANDARD,
};
Camera.displayName = "Blueprint5.Icon.Camera";
export default Camera;
//# sourceMappingURL=camera.js.map