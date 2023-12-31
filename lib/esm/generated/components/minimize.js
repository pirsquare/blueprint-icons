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
export var Minimize = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "minimize", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 180H60C49 180 40 171 40 160S49 140 60 140H111.8L6 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L140 111.8V60C140 49 149 40 160 40S180 49 180 60V160C180 171 171 180 160 180zM400 380C400 391 391 400 380 400C374.4 400 369.4 397.8 365.8 394.2L260 288.2V340C260 351 251 360 240 360S220 351 220 340V240C220 229 229 220 240 220H340C351 220 360 229 360 240S351 260 340 260H288.2L394 365.8C397.8 369.4 400 374.4 400 380z" : "M319.8 300.2C319.8 311.2 310.8 320.2 299.8 320.2C294.2000000000001 320.2 289.2000000000001 318 285.6 314.4L219.8000000000001 248.6V280.2C219.8000000000001 291.2 210.8000000000001 300.2 199.8000000000001 300.2S179.8000000000001 291.2 179.8000000000001 280.2V200.2C179.8000000000001 189.2 188.8 180.2 199.8000000000001 180.2H279.8000000000001C290.8000000000001 180.2 299.8000000000001 189.2 299.8000000000001 200.2S290.8000000000001 220.2 279.8000000000001 220.2H248.0000000000001L314 286C317.6 289.6 319.8 294.6 319.8 300.2zM119.8 140.2H39.8C28.8 140.2 19.8 131.2 19.8 120.2S28.8 100.2 39.8 100.2H71.6L5.8 34.4C2.2 30.8 0 25.8 0 20.1999999999999C0 9.1999999999999 9 0.1999999999999 20 0.1999999999999C25.6 0.1999999999999 30.6 2.4 34.2 5.9999999999999L100 71.7999999999999V39.9999999999999C100 28.9999999999999 109 19.9999999999999 120 19.9999999999999S140 28.9999999999999 140 39.9999999999999V120C139.8 131.2 130.8 140.2 119.8 140.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Minimize.defaultProps = {
    size: IconSize.STANDARD,
};
Minimize.displayName = "Blueprint5.Icon.Minimize";
export default Minimize;
//# sourceMappingURL=minimize.js.map