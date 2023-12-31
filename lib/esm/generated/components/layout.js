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
export var Layout = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "layout", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 280C338 280 320 262 320 240C320 232.6 322.2 225.8 325.6 219.8L280.2000000000001 174.4C274.2000000000001 177.8 267.4 180 260 180C241.4 180 225.8 167.2 221.4 150H178.6C174.2 167.2 158.6 180 140 180C132.6 180 125.8 177.8 119.8 174.4L74.4 219.8C77.8 225.8 80 232.6 80 240C80 246.8 78.2 253.2 75.2 258.8L148.4 326.4C154.6 322.4 162 320 170 320C192 320 210 338 210 360C210 382 192 400 170 400S130 382 130 360C130 353.2 131.8 346.8 134.8 341.2L61.6 273.6C55.4 277.6 48 280 40 280C18 280 0 262 0 240C0 218 18 200 40 200C47.4 200 54.2 202.2 60.2 205.6L105.6 160.2C102.2 154.2 100 147.4 100 140S102.2 125.8 105.6 119.8L60.2 74.4C54.2 77.8 47.4 80 40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 47.4 77.8 54.2 74.4 60.2000000000001L119.8 105.6C125.8 102.2 132.6 100 140 100C158.6 100 174.2 112.8 178.6 130H221.4C225.8 112.8 241.4 100 260 100C282 100 300 118 300 140C300 147.4 297.8 154.2 294.4000000000001 160.2L339.8000000000001 205.6C345.8 202.2 352.6 200 360 200C382 200 400 218 400 240C400 262 382 280 360 280z" : "M280 240C258 240 240 222 240 200C240 190.6 243.4 182 248.8 175.2L235.2 157C230.6 159 225.4 160 220 160C201.4 160 185.8 147.2 181.4 130H158.6C154.2 147.2 138.6 160 120 160C110.6 160 102 156.6 95.2 151.2L77 164.8C79 169.4 80 174.6 80 180C80 187.4 77.8 194.2 74.4 200.2L119.8 245.6C125.8 242.2 132.6 240 140 240C162 240 180 258 180 280C180 302 162 320 140 320S100 302 100 280C100 272.6 102.2 265.8 105.6 259.8L60.2 214.4C54.2 217.8 47.4 220 40 220C18 220 0 202 0 180C0 158 18 140 40 140C49.4 140 58 143.4 64.8 148.8L83 135.2C81 130.6 80 125.4 80 120C80 112.6 82.2 105.8 85.6 99.8L60.2 74.4C54.2 77.8 47.4 80 40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 47.4 77.8 54.2 74.4 60.2L99.8 85.6C105.8 82.2 112.6 80 120 80C138.6 80 154.2 92.8 158.6 110H181.4C185.8 92.8 201.4 80 220 80C242 80 260 98 260 120C260 129.4 256.6 138 251.2 144.8L264.8 163C269.4000000000001 161 274.6 160 280 160C302 160 320 178 320 200C320 222 302 240 280 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Layout.defaultProps = {
    size: IconSize.STANDARD,
};
Layout.displayName = "Blueprint5.Icon.Layout";
export default Layout;
//# sourceMappingURL=layout.js.map