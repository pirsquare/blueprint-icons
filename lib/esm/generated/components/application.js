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
export var Application = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "application", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M70 220H250C255.6 220 260 224.4 260 230C260 235.6 255.6 240 250 240H70C64.4 240 60 235.6 60 230C60 224.4 64.4 220 70 220zM70 180H170C175.6 180 180 184.4 180 190C180 195.6 175.6 200 170 200H70C64.4 200 60 195.6 60 190C60 184.4 64.4 180 70 180zM380 380H20C9 380 0 371 0 360V40C0 29 9 20 20 20H380C391 20 400 29 400 40V360C400 371 391 380 380 380zM360 60H40V280H360V60zM70 140H210C215.6 140 220 144.4 220 150C220 155.6 215.6 160 210 160H70C64.4 160 60 155.6 60 150C60 144.4 64.4 140 70 140z" : "M70 180H210C215.6 180 220 184.4 220 190C220 195.6 215.6 200 210 200H70C64.4 200 60 195.6 60 190C60 184.4 64.4 180 70 180zM300 300H20C9 300 0 291 0 280V40C0 29 9 20 20 20H300C311 20 320 29 320 40V280C320 291 311 300 300 300zM280 60H40V220H280V60zM70 140H150C155.6 140 160 144.4 160 150C160 155.6 155.6 160 150 160H70C64.4 160 60 155.6 60 150C60 144.4 64.4 140 70 140zM70 100H170C175.6 100 180 104.4 180 110C180 115.6 175.6 120 170 120H70C64.4 120 60 115.6 60 110C60 104.4 64.4 100 70 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Application.defaultProps = {
    size: IconSize.STANDARD,
};
Application.displayName = "Blueprint5.Icon.Application";
export default Application;
//# sourceMappingURL=application.js.map