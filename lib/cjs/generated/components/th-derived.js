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
exports.ThDerived = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ThDerived = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "th-derived", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M106 134C102 130 100 126 100 120C100 108 108 100 120 100C126 100 130 102 134 106L194 166C198 170 200 174 200 180S198 190 194 194L134 254C130 258 126 260 120 260C108 260 100 252 100 240C100 234 102 230 106 226L132 200H20C8 200 0 192 0 180S8 160 20 160H132L106 134L106 134zM380 380H60C50 380 40 370 40 360V240H60C60 274 86 300 120 300C136 300 152 294 162 282L164 280H180V264L200 244V280H360V220H224C230 214 234 208 236 200H360V140H224L222 138L204 120H360V60H200V116L180 96V60H80V76C68 86 60 102 60 120H40V40C40 30 50 20 60 20H380C392 20 400 30 400 40V360C400 370 390 380 380 380L380 380z" : "M112 120L106 114C102 110 100 106 100 100C100 88 108 80 120 80C126 80 130 82 134 86L174 126C178 130 180 134 180 140S178 150 174 154L134 194C130 198 126 200 120 200C110 200 100 192 100 180C100 174 102 170 106 166L112 160H20C8 160 0 152 0 140S8 120 20 120H112L112 120zM300 300H40C30 300 20 290 20 280V180H60V220H280V180H176L188 168L188 168C190 166 192 162 194 160H280V120H194C192 118 190 114 188 112L188 112L176 100H280V60H60V100H20V40C20 30 30 20 40 20H300C312 20 320 30 320 40V280C320 290 312 300 300 300L300 300z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ThDerived.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ThDerived.displayName = "Blueprint5.Icon.ThDerived";
exports.default = exports.ThDerived;
//# sourceMappingURL=th-derived.js.map