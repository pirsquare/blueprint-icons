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
exports.HighVoltagePole = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.HighVoltagePole = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "high-voltage-pole", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 400C128.9544 400 120 391.04568 120 380V320H80V360C91.0456 360 100 368.9544 100 380C100 391.0457 91.0456 400 80 400H20C8.9543 400 0 391.0457 0 380C0 368.9544 8.9543 360 20 360H40V320H20C8.9543 320 0 311.0456 0 300C0 288.9544 8.95432 280 20 280H40V240H20C8.9543 240 0 231.0458 0 220C0 208.9544 8.9543 200 20 200H80C91.0456 200 100 208.9544 100 220C100 231.0458 91.0456 240 80 240V280H120V20C120 8.954 128.9544 0 140 0C148.3996 0 155.5896 5.178 158.5526 12.516L199.9998 109.226L241.456 12.494C244.426 5.168 251.61 0 260 0C271.046 0 280 8.954 280 20V280H320V240C308.954 240 300 231.0458 300 220C300 208.9544 308.954 200 320 200H380C391.046 200 400 208.9544 400 220C400 231.0458 391.046 240 380 240H360V280H380C391.046 280 400 288.9544 400 300C400 311.0456 391.046 320 380 320H360V360H380C391.046 360 400 368.9544 400 380C400 391.0457 391.046 400 380 400H320C308.954 400 300 391.0457 300 380C300 368.9544 308.954 360 320 360V320H280V380C280 391.0457 271.046 400 260 400H140zM160 360V320H240V360H160zM240 117.436L221.76 159.998L240 202.5598V117.436zM170.3294 280L199.9998 210.7694L229.67 280H170.3294zM178.2404 159.998L160 202.5584V117.436L178.2404 159.998z" : "M120 320C108.9544 320 100 311.0457 100 300V240H60V260H70C75.5228 260 80 264.4772 80 270C80 275.5228 75.5228 280 70 280H30C24.4772 280 20 275.5228 20 270C20 264.4772 24.4772 260 30 260H40V240C28.9544 240 20 231.0456 20 220C20 208.9544 28.9544 200 40 200L40 180H30C24.4772 180 20 175.5228 20 170C20 164.4772 24.4772 160 30 160H70C75.5228 160 80 164.4772 80 170C80 175.5228 75.5228 180 70 180H60V200H100V20C100 8.954 108.9544 0 120 0C131.0456 0 140 8.954 140 20V200H180V20C180 8.954 188.9542 0 200 0C211.046 0 220 8.954 220 20V200H260V180H250C244.478 180 240 175.5228 240 170C240 164.4772 244.478 160 250 160H290C295.522 160 300 164.4772 300 170C300 175.5228 295.522 180 290 180H280L280 200C291.046 200 300 208.9544 300 220C300 231.0456 291.046 240 280 240L280 260H290C295.522 260 300 264.4772 300 270C300 275.5228 295.522 280 290 280H250C244.478 280 240 275.5228 240 270C240 264.4772 244.478 260 250 260H260V240H220V300C220 311.0457 211.046 320 200 320H120zM140 280V240H180V280H140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.HighVoltagePole.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.HighVoltagePole.displayName = "Blueprint5.Icon.HighVoltagePole";
exports.default = exports.HighVoltagePole;
//# sourceMappingURL=high-voltage-pole.js.map