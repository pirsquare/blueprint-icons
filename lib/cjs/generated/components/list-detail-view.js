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
exports.ListDetailView = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.ListDetailView = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "list-detail-view", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 280H20C9 280 0 271 0 260V240C0 229 9 220 20 220H160C171 220 180 229 180 240V260C180 271 171 280 160 280zM160 180H20C9 180 0 171 0 160V140C0 129 9 120 20 120H160C171 120 180 129 180 140V160C180 171 171 180 160 180zM160 80H20C9 80 0 71 0 60V40C0 29 9 20 20 20H160C171 20 180 29 180 40V60C180 71 171 80 160 80zM160 380H20C9 380 0 371 0 360V340C0 329 9 320 20 320H160C171 320 180 329 180 340V360C180 371 171 380 160 380zM380 380H240C229 380 220 371 220 360V40C220 29 229 20 240 20H380C391 20 400 29 400 40V360C400 371 391 380 380 380z" : "M120 140H20C9 140 0 131 0 120S9 100 20 100H120C131 100 140 109 140 120S131 140 120 140zM120 60H20C9 60 0 51 0 40S9 20 20 20H120C131 20 140 29 140 40S131 60 120 60zM300 300H200C189 300 180 291 180 280V40C180 29 189 20 200 20H300C311 20 320 29 320 40V280C320 291 311 300 300 300zM120 220H20C9 220 0 211 0 200S9 180 20 180H120C131 180 140 189 140 200S131 220 120 220zM120 300H20C9 300 0 291 0 280S9 260 20 260H120C131 260 140 269 140 280S131 300 120 300z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.ListDetailView.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ListDetailView.displayName = "Blueprint5.Icon.ListDetailView";
exports.default = exports.ListDetailView;
//# sourceMappingURL=list-detail-view.js.map