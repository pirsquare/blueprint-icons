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
exports.DragHandleHorizontal = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.DragHandleHorizontal = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "drag-handle-horizontal", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M150 180C133.4 180 120 166.6 120 150S133.4 120 150 120S180 133.4 180 150S166.6 180 150 180zM50 280C33.4 280 20 266.6 20 250S33.4 220 50 220S80 233.4 80 250S66.6 280 50 280zM50 180C33.4 180 20 166.6 20 150S33.4 120 50 120S80 133.4 80 150S66.6 180 50 180zM350 220C366.6 220 380 233.4 380 250S366.6 280 350 280S320 266.6 320 250S333.4000000000001 220 350 220zM250 180C233.4 180 220 166.6 220 150S233.4 120 250 120S280 133.4 280 150S266.6 180 250 180zM350 180C333.4000000000001 180 320 166.6 320 150S333.4000000000001 120 350 120S380 133.4 380 150S366.6 180 350 180zM150 280C133.4 280 120 266.6 120 250S133.4 220 150 220S180 233.4 180 250S166.6 280 150 280zM250 280C233.4 280 220 266.6 220 250S233.4 220 250 220S280 233.4 280 250S266.6 280 250 280z" : "M40 140C29 140 20 131 20 120C20 109 29 100 40 100S60 109 60 120C60 131 51 140 40 140zM40 220C29 220 20 211 20 200C20 189 29 180 40 180S60 189 60 200C60 211 51 220 40 220zM120 140C109 140 100 131 100 120C100 109 109 100 120 100S140 109 140 120C140 131 131 140 120 140zM280 180C291 180 300 189 300 200C300 211 291 220 280 220S260 211 260 200C260 189 269 180 280 180zM280 140C269 140 260 131 260 120C260 109 269 100 280 100S300 109 300 120C300 131 291 140 280 140zM200 220C189 220 180 211 180 200C180 189 189 180 200 180S220 189 220 200C220 211 211 220 200 220zM200 140C189 140 180 131 180 120C180 109 189 100 200 100S220 109 220 120C220 131 211 140 200 140zM120 220C109 220 100 211 100 200C100 189 109 180 120 180S140 189 140 200C140 211 131 220 120 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.DragHandleHorizontal.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.DragHandleHorizontal.displayName = "Blueprint5.Icon.DragHandleHorizontal";
exports.default = exports.DragHandleHorizontal;
//# sourceMappingURL=drag-handle-horizontal.js.map