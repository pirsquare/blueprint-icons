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
exports.Select = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Select = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "select", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M394.2000000000001 34.2L309.2000000000001 119.2000000000001L400 141.8L198.6 213.4C199.4 215.4 200 217.6 200 220V340C200 351 191 360 180 360H80V380C80 391 71 400 60 400S40 391 40 380V360H20C9 360 0 351 0 340C0 329 9 320 20 320H40V220C40 209 49 200 60 200H180C182.4 200 184.6 200.6 186.8 201.4L258.2 0L281 90.8L366 5.8C369.4 2.2 374.4 0 380 0C391 0 400 9 400 20C400 25.6 397.8 30.6 394.2000000000001 34.2zM160 240H80V320H160V240z" : "M320 20C320 25.6 317.6 30.4 313.8 33.8L314.2 34.2L251.8 96.6L320 113.4L159 170.6C159.6 172.4 160 174 160 176V280C160 291 151 300 140 300H60C60 311 51 320 40 320S20 311 20 300C9 300 0 291 0 280C0 269 9 260 20 260V180C20 169 29 160 40 160H144C146 160 147.6 160.4 149.4 161L206.6 0L223.6 68.2L286 5.8L286.4 6.2C289.6 2.4 294.4000000000001 0 300 0C300.8 0 301.4 0.4 302 0.4C302.6 0.4 303.2 0 304 0C312.8 0 320 7.2 320 16C320 16.8 319.6 17.4 319.6 18C319.6 18.6 320 19.2 320 20zM120 200H60V260H120V200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Select.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Select.displayName = "Blueprint5.Icon.Select";
exports.default = exports.Select;
//# sourceMappingURL=select.js.map