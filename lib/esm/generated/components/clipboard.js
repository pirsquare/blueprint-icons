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
export var Clipboard = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "clipboard", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260 360C260 371 251 380 240 380H224.4C217.4 392 204.8 400 190 400S162.4 392 155.6 380H140C129 380 120 371 120 360V320H260V360zM320 360H280V320V300H260H120H100V320V360H60C49 360 40 351 40 340V20C40 9 49 0 60 0H320C331 0 340 9 340 20V340C340 351 331 360 320 360z" : "M220 280C220 291 211 300 200 300H204.4C197.6 312 184.8 320 170 320S142.4 312 135.6 300H140C129 300 120 291 120 280V260H220V280zM260 280H240V240H100V280H80C69 280 60 271 60 260V20C60 9 69 0 80 0H260C271 0 280 9 280 20V260C280 271 271 280 260 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Clipboard.defaultProps = {
    size: IconSize.STANDARD,
};
Clipboard.displayName = "Blueprint5.Icon.Clipboard";
export default Clipboard;
//# sourceMappingURL=clipboard.js.map