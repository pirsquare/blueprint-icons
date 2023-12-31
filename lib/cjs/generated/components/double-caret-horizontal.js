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
exports.DoubleCaretHorizontal = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.DoubleCaretHorizontal = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "double-caret-horizontal", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 320C155.2 320 150.8 318 147.4 315.2L147.2 315.4L27.2 215.4L27.4 215.2C23 211.4 20 206.2 20 200C20 193.8 23 188.6 27.4 184.8L27.2 184.6L147.2 84.6L147.4 84.8C150.8 82 155.2 80 160 80C171 80 180 89 180 100V300C180 311 171 320 160 320zM380 200C380 206.2 377 211.4 372.6 215.2L372.8 215.4L252.8 315.4L252.6 315.2C249.2 318 244.8 320 240 320C229 320 220 311 220 300V100C220 89 229 80 240 80C244.8 80 249.2 82 252.6 84.8L252.8 84.6L372.8 184.6L372.6 184.8C377 188.6 380 193.8 380 200z" : "M274.2000000000001 174.2L214.2 234.2C210.6 237.8 205.6 240 200 240C189 240 180 231 180 220V100C180 89 189 80 200 80C205.6 80 210.6 82.2 214.2 85.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160C280 165.6 277.8 170.6 274.2000000000001 174.2zM120 240C114.4 240 109.4 237.8 105.8 234.2L45.8 174.2C42.2 170.6 40 165.6 40 160C40 154.4 42.2 149.4 45.8 145.8L105.8 85.8C109.4 82.2 114.4 80 120 80C131 80 140 89 140 100V220C140 231 131 240 120 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.DoubleCaretHorizontal.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.DoubleCaretHorizontal.displayName = "Blueprint5.Icon.DoubleCaretHorizontal";
exports.default = exports.DoubleCaretHorizontal;
//# sourceMappingURL=double-caret-horizontal.js.map