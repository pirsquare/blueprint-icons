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
exports.LayoutHierarchy = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutHierarchy = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-hierarchy", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M370 78.6V161.4C387.2 165.8 400 181.4 400 200C400 222 382 240 360 240C341.4 240 325.8 227.2 321.4 210H238.6C235 224 224 235 210 238.6V321.4C227.2 325.8 240 341.4 240 360C240 382 222 400 200 400S160 382 160 360C160 341.4 172.8 325.8 190 321.4V238.6C176 235 165 224 161.4 210H78.6C74.2 227.2 58.6 240 40 240C18 240 0 222 0 200C0 181.4 12.8 165.8 30 161.4V78.6C12.8 74.2000000000001 0 58.6 0 40C0 18 18 0 40 0S80 18 80 40C80 58.6 67.2 74.2000000000001 50 78.6V161.4C64 165 75 176 78.6 190H161.4C165 176 176 165 190 161.4V78.6C172.8 74.2000000000001 160 58.6 160 40C160 18 178 0 200 0S240 18 240 40C240 58.6 227.2 74.2000000000001 210 78.6V161.4C224 165 235 176 238.6 190H321.4C325 176 336 165 350 161.4V78.6C332.8 74.2000000000001 320 58.6 320 40C320 18 338 0 360 0S400 18 400 40C400 58.6 387.2 74.2000000000001 370 78.6z" : "M290 78.6V121.4C307.2 125.8 320 141.4 320 160C320 182 302 200 280 200C261.4 200 245.8 187.2 241.4 170H198.6C195 184 184 195 170 198.6V241.4C187.2 245.8 200 261.4 200 280C200 302 182 320 160 320S120 302 120 280C120 261.4 132.8 245.8 150 241.4V198.6C136 195 125 184 121.4 170H78.6C74.2 187.2 58.6 200 40 200C18 200 0 182 0 160C0 141.4 12.8 125.8 30 121.4V78.6C12.8 74.2 0 58.6 0 40C0 18 18 0 40 0S80 18 80 40C80 58.6 67.2 74.2 50 78.6V121.4C64 125 75 136 78.6 150H121.4C125 136 136 125 150 121.4V78.6C132.8 74.2 120 58.6 120 40C120 18 138 0 160 0S200 18 200 40C200 58.6 187.2 74.2 170 78.6V121.4C184 125 195 136 198.6 150H241.4C245 136 256 125 270 121.4V78.6C252.8 74.2 240 58.6 240 40C240 18 258 0 280 0S320 18 320 40C320 58.6 307.2 74.2 290 78.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutHierarchy.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutHierarchy.displayName = "Blueprint5.Icon.LayoutHierarchy";
exports.default = exports.LayoutHierarchy;
//# sourceMappingURL=layout-hierarchy.js.map