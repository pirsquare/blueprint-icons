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
export var Layers = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "layers", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M10 262L10 262L190 162L190 162C194 160 196 160 200 160S206 160 210 162L210 162L390 262L390 262C396 266 400 272 400 280C400 288 396 294 390 298L390 298L210 398L210 398C206 400 204 400 200 400S194 400 190 398L190 398L10 298L10 298C4 294 0 288 0 280C0 272 4 266 10 262zM380 220C376 220 374 220 370 218L370 218L200 122L30 218L30 218C26 220 24 220 20 220C8 220 0 212 0 200C0 192 4 186 10 182L10 182L190 82L190 82C194 80 196 80 200 80S206 80 210 82L210 82L390 182L390 182C396 186 400 192 400 200C400 212 392 220 380 220zM380 140C376 140 374 140 370 138L370 138L200 42L30 136L30 136C26 140 24 140 20 140C8 140 0 132 0 120C0 112 4 106 10 102L10 102L190 2L190 2C194 0 196 0 200 0S206 0 210 2L210 2L390 102L390 102C396 106 400 112 400 120.0000000000001C400 132 392 140 380 140z" : "M10.99952 222.2L150.9998 162.2C153.7998 160.8 156.7998 160 159.9998 160C163.1998 160 166.1998 160.8 168.9998 162.2L309 222.2C315.4 225.4 320 232.2 320 240C320 248.2 315 255.4 307.8 258.4L167.9998 318.4C165.3998 319.4 162.7998 320 159.9998 320C157.1998 320 154.5998 319.4 152.1998 318.4L12.39952 258.4C4.99952 255.4 -0.000487566 248.2 -0.000487566 240C-0.000487566 232.2 4.59952 225.4 10.99952 222.2zM300 100C296.8 100 293.8 99.2 291 97.8L159.9998 40L28.9998 98C26.1998 99.2 23.1998 100 19.99976 100C8.99976 100 -0.00024438 91 -0.00024438 80C-0.00024438 72.2 4.59976 65.4 10.99976 62.2L150.9998 2.2C153.7998 0.8 156.7998 0 159.9998 0C163.1998 0 166.1998 0.8 168.9998 2.2L309 62.2C315.4 65.4 320 72.2 320 80C320 91 311 100 300 100zM300 180.0002C296.8 180.0002 293.8 179.2002 291 177.8002L159.9998 120L28.9994 177.8C26.1994 179.2 23.1994 180 19.99938 180C8.99938 180 -0.000610352 171 -0.000610352 160C-0.000610352 152.2 4.5994 145.4 10.99938 142.2L150.9998 82.2C153.7998 80.8 156.7998 80 159.9998 80C163.1998 80 166.1998 80.8 168.9998 82.2L309 142.2002C315.4 145.4002 320 152.2002 320 160.0002C320 171.0002 311 180.0002 300 180.0002z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Layers.defaultProps = {
    size: IconSize.STANDARD,
};
Layers.displayName = "Blueprint5.Icon.Layers";
export default Layers;
//# sourceMappingURL=layers.js.map