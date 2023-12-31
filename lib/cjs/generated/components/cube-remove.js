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
exports.CubeRemove = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.CubeRemove = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "cube-remove", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M239.351824 376.3525618C216.38718 367.9356178 200 345.8815244 200 320C200 286.862915 226.862916 260 260 260L275.387518 260L200 215.6051288L39.0633182 310.3789524L187.2421416 390.78281158C195.147553 395.07239614 204.852446 395.07239614 212.757858 390.78281158L239.351824 376.3525618zM380 260L380 118.864096C380 110.101668 375.0555020000001 102.01105 367.043572 97.663668L212.757858 13.9461260000001C211.860026 13.45895 210.938982 13.027104 210 12.650586L210 198.28376L314.8011620000001 260L380 260zM22.7192898 296.7935118L190 198.28376L190 12.650586C189.0610178 13.027104 188.1399744 13.45895 187.2421416 13.9461260000001L32.9564272 97.663668C24.9444988 102.01105 20 110.101668 20 118.864096L20 285.8648418C20 289.7257424 20.9599542 293.4562136 22.7192898 296.7935118zM260 340L380 340C391.0456940000001 340 400 331.045695 400 320C400 308.954305 391.0456940000001 300 380 300L260 300C248.954306 300 240 308.954305 240 320C240 331.045695 248.954306 340 260 340z" : "M207.290134 201.3488102L160 171.7924764L36.125055 249.214317L150.0772212 314.3298407C156.2258746 317.84335692 163.7741254 317.84335692 169.9227788 314.3298407L182.7209844 307.01658036C168.8774658 296.0254388 160 279.049441 160 260C160 231.2238434 180.257699 207.1791258 207.290134 201.3488102zM300 200L300 91.60645C300 84.429314 296.154278 77.802444 289.922778 74.241588L170 5.714286L170 154.4575236L242.867962 200L300 200zM21.1240402 235.0049984L150 154.4575236L150 5.714286L30.0772212 74.241588C23.8457212 77.802444 20 84.429314 20 91.60645L20 228.3935492C20 230.680355 20.3904216 232.911297 21.1240402 235.0049984zM220 280L300 280C311.045694 280 320 271.045695 320 260C320 248.954305 311.045694 240 300 240L220 240C208.954306 240 200 248.954305 200 260C200 271.045695 208.954306 280 220 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.CubeRemove.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.CubeRemove.displayName = "Blueprint5.Icon.CubeRemove";
exports.default = exports.CubeRemove;
//# sourceMappingURL=cube-remove.js.map