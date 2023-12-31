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
export var GitPull = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "git-pull", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 116.4V260C340 304.2 304.2000000000001 340 260 340H208.2L234 365.8C237.8 369.4 240 374.4 240 380C240 391 231 400 220 400C214.4 400 209.4 397.8 205.8 394.2L145.8 334.2C142.2 330.6 140 325.6 140 320C140 314.4 142.2 309.4 145.8 305.8L205.8 245.8C209.4 242.2 214.4 240 220 240C231 240 240 249 240 260C240 265.6 237.8 270.6 234.2 274.2L208.2 300H260C282 300 300 282 300 260V116.4C276.8 108.2 260 86.2 260 60C260 26.8 286.8 0 320 0S380 26.8 380 60C380 86 363.2 108 340 116.4zM320 40C309 40 300 49 300 60C300 71 309 80 320 80S340 71 340 60C340 49 331 40 320 40zM80 380C46.8 380 20 353.2 20 320C20 294 36.8 272 60 263.6V116.2C36.8 108 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 86 123.2 108 100 116.4V263.6C123.2 272 140 294 140 320C140 353.2 113.2 380 80 380zM80 40C69 40 60 49 60 60C60 71 69 80 80 80S100 71 100 60C100 49 91 40 80 40zM80 300C69 300 60 309 60 320C60 331 69 340 80 340S100 331 100 320C100 309 91 300 80 300z" : "M60 300C26.8 300 0 273.2 0 240C0 214 16.8 192 40 183.6V116.2C16.8 108 0 86 0 60C0 26.8 26.8 0 60 0S120 26.8 120 60C120 86 103.2 108 80 116.4V183.6C103.2 192 120 214 120 240C120 273.2 93.2 300 60 300zM60 40C49 40 40 49 40 60C40 71 49 80 60 80S80 71 80 60C80 49 71 40 60 40zM60 220C49 220 40 229 40 240C40 251 49 260 60 260S80 251 80 240C80 229 71 220 60 220zM280 116.4V200C280 233.2 253.2 260 220 260H188.2L214 285.8C217.8 289.4 220 294.4 220 300C220 311 211 320 200 320C194.4 320 189.4 317.8 185.8 314.2L125.8 254.2C122.2 250.6 120 245.6 120 240C120 234.4 122.2 229.4 125.8 225.8L185.8 165.8C189.4 162.2 194.4 160 200 160C211 160 220 169 220 180C220 185.6 217.8 190.6 214.2 194.2L188.2 220H220C231 220 240 211 240 200V116.4C216.8 108.2 200 86.2 200 60C200 26.8 226.8 0 260 0S320 26.8 320 60C320 86 303.2 108 280 116.4zM260 40C249 40 240 49 240 60C240 71 249 80 260 80S280 71 280 60C280 49 271 40 260 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
GitPull.defaultProps = {
    size: IconSize.STANDARD,
};
GitPull.displayName = "Blueprint5.Icon.GitPull";
export default GitPull;
//# sourceMappingURL=git-pull.js.map