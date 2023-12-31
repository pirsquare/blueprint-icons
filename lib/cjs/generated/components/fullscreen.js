"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Fullscreen = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "fullscreen", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M68.2 360H120C131 360 140 369 140 380S131 400 120 400H20C9 400 0 391 0 380V280C0 269 9 260 20 260S40 269 40 280V331.8L145.8 226C149.4 222.2 154.4 220 160 220C171 220 180 229 180 240C180 245.6 177.8 250.6 174.2 254.2L68.2 360zM160 180C154.4 180 149.4 177.8 145.8 174.2L40 68.2V120C40 131 31 140 20 140S0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20S131 40 120 40H68.2L174 145.8C177.8 149.4 180 154.4 180 160C180 171 171 180 160 180zM380 400H280C269 400 260 391 260 380S269 360 280 360H331.8L226 254.2C222.2 250.6 220 245.6 220 240C220 229 229 220 240 220C245.6 220 250.6 222.2 254.2 225.8L360 331.8V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400zM380 140C369 140 360 131 360 120V68.2L254.2 174C250.6 177.8 245.6 180 240 180C229 180 220 171 220 160C220 154.4 222.2 149.4 225.8 145.8L331.8 40H280C269 40 260 31 260 20S269 0 280 0H380C391 0 400 9 400 20V120C400 131 391 140 380 140z" : "M68.2 280H100C111 280 120 289 120 300C120 311 111 320 100 320H20C9 320 0 311 0 300V220C0 209 9 200 20 200S40 209 40 220V251.8L105.8 186C109.4 182.2 114.4 180 120 180C131 180 140 189 140 200C140 205.6 137.8 210.6 134.2 214.2L68.2 280zM120 140C114.4 140 109.4 137.8 105.8 134.2L40 68.2V100C40 111 31 120 20 120S0 111 0 100V20C0 9 9 0 20 0H100C111 0 120 9 120 20C120 31 111 40 100 40H68.2L134 105.8C137.8 109.4 140 114.4 140 120C140 131 131 140 120 140zM300 120C289 120 280 111 280 100V68.2L214.2 134C210.6 137.8 205.6 140 200 140C189 140 180 131 180 120C180 114.4 182.2 109.4 185.8 105.8L251.8 40H220C209 40 200 31 200 20C200 9 209 0 220 0H300C311 0 320 9 320 20V100C320 111 311 120 300 120zM300 320H220C209 320 200 311 200 300C200 289 209 280 220 280H251.8L185.8 214.2C182.2 210.6 180 205.6 180 200C180 189 189 180 200 180C205.6 180 210.6 182.2 214.2 185.8L280 251.8V220C280 209 289 200 300 200S320 209 320 220V300C320 311 311 320 300 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Fullscreen.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Fullscreen.displayName = "Blueprint5.Icon.Fullscreen";
exports.default = exports.Fullscreen;
//# sourceMappingURL=fullscreen.js.map