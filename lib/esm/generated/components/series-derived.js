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
export var SeriesDerived = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "series-derived", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M376.4 268.4C375.8 267.4 375 266.6 374.2000000000001 265.8C374.2000000000001 265.8 374.2000000000001 266 374 266L334 226C330 222 326 220 320 220C308 220 300 228 300 240C300 246 302 250 306 254L332 280H220C208 280 200 288 200 300S208 320 220 320H332L306 346C302 350 300 354 300 360C300 372 308 380 320 380C326 380 330 378 334 374L394 314C398 310 400 306 400 300S398 290 394 286L376.4 268.4zM265.8 214.2C271.8 201.8000000000001 281.8 191.8 294.2 185.8L234.2 125.8C230.6 122.2 225.6 120 220 120S209.4 122.2 205.8 126L140 191.8L40 91.8V60H380C391 60 400 51 400 40S391 20 380 20H20C11.8 20 4.6 25 1.6 32.2C0.6 34.6 0 37.2 0 40V320C0 331 9 340 20 340S40 331 40 320V148.2L125.8 234.2C129.4 237.8 134.4 240 140 240S150.6 237.8 154.2 234.2L220 168.2L265.8 214.2z" : "M213.2 161.6C222 150.8 234.6 143.4 249.2 141L194.2 86C190.6 82.2 185.6 80 180 80S169.4 82.2 165.8 86L100 151.8L40 91.8V60H300C311 60 320 51 320 40S311 20 300 20H20C9 20 0 29 0 40V240C0 251 9 260 20 260S40 251 40 240V148.2L85.8 194.2C89.4 197.8 94.4 200 100 200S110.6 197.8 114.2 194.2L180 128.2L213.2 161.6zM246 214L252 220H160C148 220 140 228 140 240S148 260 160 260H252L246 266C242 270 240 274 240 280C240 292 250 300 260 300C266 300 270 298 274 294L314 254C318 250 320 246 320 240S318 230 314 226L274 186C270 182 266 180 260 180C248 180 240 188 240 200C240 206 242 210 246 214z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SeriesDerived.defaultProps = {
    size: IconSize.STANDARD,
};
SeriesDerived.displayName = "Blueprint5.Icon.SeriesDerived";
export default SeriesDerived;
//# sourceMappingURL=series-derived.js.map