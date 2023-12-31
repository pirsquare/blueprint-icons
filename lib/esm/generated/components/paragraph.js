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
export var Paragraph = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "paragraph", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M330 380H140C84 380 40 336 40 280S84 180 140 180V50C140 34 154 20 170 20C186 20 200 34 200 50V320H240V50C240 34 254 20 270 20C286 20 300 34 300 50V320H330C346 320 360 334 360 350C360 366 346 380 330 380z" : "M260 300H120C76 300 40 264 40 220S76 140 120 140V40C120 28 128 20 140 20C152 20 160 30 160 40V260H200V40C200 28 208 20 220 20C232 20 240 30 240 40V260H260C270 260 280 268 280 280C280 292 272 300 260 300z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Paragraph.defaultProps = {
    size: IconSize.STANDARD,
};
Paragraph.displayName = "Blueprint5.Icon.Paragraph";
export default Paragraph;
//# sourceMappingURL=paragraph.js.map