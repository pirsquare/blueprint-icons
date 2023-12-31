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
export var MapCreate = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "map-create", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 215.6V57.4L280 110.8V215.6C267.8 226.6 260 242.2 260 260C253 260 246.2 261.4 240 263.6V110.6L160 57.2V289.2L200.4 316.2000000000001C200.4 317.4 200 318.8 200 320C200 353.2 226.8 380 260 380C260 386.8 261.4 393.2 263.4 399.4C262.4 399.6 261.2 400 260 400C255.8 400 252.2 398.4 249.2 396.4L249.0000000000001 396.8L140 324L31 396.6L30.8 396.4C27.8 398.4 24.2 400 20 400C9 400 0 391 0 380V100C0 93 3.8 87.2 9.2 83.6L9 83.2L129 3.2L129.2 3.6C132.2 1.6 135.8 0 140 0S147.8 1.6 150.8 3.6L151 3.2L260 76L369 3.4L369.2000000000001 3.8C372.2 1.6 375.8 0 380 0C391 0 400 9 400 20V263.6C393.8 261.4 387 260 380 260C380 242.2 372.2 226.6 360 215.6zM120 57.4L40 110.8V342.6L120 289.2V57.4zM240 320C240 309 249 300 260 300H300V260C300 249 309 240 320 240S340 249 340 260V300H380C391 300 400 309 400 320S391 340 380 340H340V380C340 391 331 400 320 400S300 391 300 380V340H260C249 340 240 331 240 320z" : "M280 183.6V57.2L221.2 96.4C221.2 96.4 221.2 96.4 221.2 96.4L221.2 96.4L221.2 96.4C220.8 96.6 220.4 96.8 220.2 97V195.6C218.6 197 217.2 198.8 215.8 200.4C210.2 200.8 205 202 200 203.6V97.2C200 97.2 199.8 97.2 199.8 97L199.8 97L120 49.4V222.8C120 222.8 120.2 222.8 120.2 223L120.2 223L161.2 247.6C160.4 251.6 160 255.8 160 260C160 279.6 169.4 296.8 184 307.8L110.6 263.8L31.2 316.6C31.2 316.6 31.2 316.6 31.2 316.6L31.2 316.6L31.2 316.6C28 318.8 24.2 320 20 320C9 320 0 311 0 300V80C0 73 3.6 67 9 63.4L9 63.4L98.8 3.4C98.8 3.4 98.8 3.4 98.8 3.4L98.8 3.4L98.8 3.4C102 1.2 105.8 0 110 0C113.8 0 117.2 1.2 120.2 3L120.2 3L209.4 56.4L288.8 3.4C288.8 3.4 288.8 3.4 288.8 3.4L288.8 3.4L288.8 3.4C292 1.2 295.8 0 300 0C311 0 320 9 320 20V203.6C315 201.8 309.6 200.8 304 200.4C297.4 193.2 289.4000000000001 187 280 183.6zM100 50.8L40 90.8V262.8L98.8 223.6C98.8 223.6 98.8 223.6 98.8 223.6L98.8 223.6L98.8 223.6C99.2 223.2 99.6 223 100 222.8V50.8zM220 240H240V220C240 209 249 200 260 200S280 209 280 220V240H300C311 240 320 249 320 260S311 280 300 280H280V300C280 311 271 320 260 320S240 311 240 300V280H220C209 280 200 271 200 260S209 240 220 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MapCreate.defaultProps = {
    size: IconSize.STANDARD,
};
MapCreate.displayName = "Blueprint5.Icon.MapCreate";
export default MapCreate;
//# sourceMappingURL=map-create.js.map