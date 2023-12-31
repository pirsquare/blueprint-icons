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
exports.LayoutGroupBy = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutGroupBy = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-group-by", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 320A40 40 0 0 1 80 320A40 40 0 0 1 0 320M320 360A40 40 0 0 1 400 360A40 40 0 0 1 320 360M320 200A40 40 0 0 1 400 200A40 40 0 0 1 320 200M320 40A40 40 0 0 1 400 40A40 40 0 0 1 320 40M0 80A40 40 0 0 1 80 80A40 40 0 0 1 0 80M0 200A40 40 0 0 1 80 200A40 40 0 0 1 0 200M220 120A40 40 0 0 1 300 120A40 40 0 0 1 220 120M220 280A40 40 0 0 1 300 280A40 40 0 0 1 220 280" : "M40 200C18 200 0 182 0 160C0 138 18 120 40 120S80 138 80 160C80 182 62 200 40 200zM40 100C18 100 0 82 0 60C0 38 18 20 40 20S80 38 80 60C80 82 62 100 40 100zM280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240zM40 300C18 300 0 282 0 260S18 220 40 220S80 238 80 260S62 300 40 300zM180 140C158 140 140 122 140 100C140 78 158 60 180 60S220 78 220 100C220 122 202 140 180 140zM180 260C158 260 140 242 140 220S158 180 180 180S220 198 220 220S202 260 180 260zM280 200C258 200 240 182 240 160C240 138 258 120 280 120S320 138 320 160C320 182 302 200 280 200zM280 80C258 80 240 62 240 40C240 18 258 0 280 0S320 18 320 40C320 62 302 80 280 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutGroupBy.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutGroupBy.displayName = "Blueprint5.Icon.LayoutGroupBy";
exports.default = exports.LayoutGroupBy;
//# sourceMappingURL=layout-group-by.js.map