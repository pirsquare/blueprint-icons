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
exports.JoinTable = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.JoinTable = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "join-table", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 280H300V360C300 371 291 380 280 380H20C9 380 0 371 0 360V140C0 129 9 120 20 120H100V40C100 29 109 20 120 20H380C391 20 400 29 400 40V260C400 271 391 280 380 280zM120 160H40V220H120V160zM120 240H40V300H120V240zM260 60H140V120H260V60zM260 140H140V220H260V140zM260 240H140V300H260V240zM360 60H280V120H360V60zM360 140H280V200H360V140z" : "M300 220H240V280C240 291 231 300 220 300H20C9 300 0 291 0 280V120C0 109 9 100 20 100H80V40C80 29 89 20 100 20H300C311 20 320 29 320 40V200C320 211 311 220 300 220zM200 240V200H120V240H200zM200 120H120V180H200V120zM40 240H100V200H40V240zM40 140V180H100V140H40zM120 60V100H200V60H120zM280 60H220V100H280V60zM280 120H220V160H280V120z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.JoinTable.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.JoinTable.displayName = "Blueprint5.Icon.JoinTable";
exports.default = exports.JoinTable;
//# sourceMappingURL=join-table.js.map