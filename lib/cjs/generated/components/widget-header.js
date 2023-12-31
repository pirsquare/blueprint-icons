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
exports.WidgetHeader = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.WidgetHeader = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "widget-header", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 400H60C49 400 40 391 40 380V20C40 9 49 0 60 0H340C351 0 360 9 360 20V380C360 391 351 400 340 400zM320 40H80V260H320V40zM320 280H80V360H320V280z" : "M280 320H40C29 320 20 311 20 300V20C20 9 29 0 40 0H280C291 0 300 9 300 20V300C300 311 291 320 280 320zM260 40H60V200H260V40zM260 220H60V280H260V220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.WidgetHeader.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.WidgetHeader.displayName = "Blueprint5.Icon.WidgetHeader";
exports.default = exports.WidgetHeader;
//# sourceMappingURL=widget-header.js.map