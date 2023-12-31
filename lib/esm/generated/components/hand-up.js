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
export var HandUp = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "hand-up", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M329.2000000000001 245.2C321.6 245.2 314.6 242.4 309.2000000000001 238C305.4000000000001 250 293.6 259 279.8 259C270.4 259 262 255 256.4 248.6C251.2 258 241 264.4 229.2 264.4C216.2 264.4 205.2000000000001 256.6 200.6 245.8L200 261.2V370C200 379.6 195.4 388.2 188.2 393.6C184 397.4 178.4 400 171.2 400C171 400 170.8 400 170.6 400C170.4 400 170.2 400 170 400C153.4 400 140 386.6 140 370V205.2L139.8 191.8C123 211.4 101.4 227 75 229.6C39.2 233.2 33.4 203 46.4 196.6C81.8 179.8 114.6 129.6 131 97.8C152 48.4 156 -0.1999999999999 242.6 -0.1999999999999C290.2000000000001 -0.1999999999999 321 15.0000000000001 339.0000000000001 52.8C353.8 84 360 109.6 360 195.8V215.6C360 231.8 346.2 245.2 329.2000000000001 245.2z" : "M273 196.2C266.2 196.2 260.2 194 255.4 190.4C252 200 241.8 207.2 229.6 207.2C221.4 207.2 214 204 209 198.8C204.4 206.2 195.6 211.4 185.2000000000001 211.4C173.8 211.4 164.2 205.2 160.2000000000001 196.6L160 209V290C160 306.6 146.6 320 130 320S100 306.6 100 290V157.8C88.4 166 69 182 50.4 183.8C19.2 186.6 14 162.4 25.6 157.4C56.4 144 85.4 103.8 99.6 78.4C117.8 39 121.4 0 197.2 0C239 0 265.8 12.2 281.6 42.4C294.4000000000001 67.2 300 104.2 300 156.6V172.4C300 185.4 288 196.2 273 196.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
HandUp.defaultProps = {
    size: IconSize.STANDARD,
};
HandUp.displayName = "Blueprint5.Icon.HandUp";
export default HandUp;
//# sourceMappingURL=hand-up.js.map