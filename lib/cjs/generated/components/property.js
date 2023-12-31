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
exports.Property = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Property = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "property", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 300C82 300 100 318 100 340C100 362 82 380 60 380S20 362 20 340C20 318 38 300 60 300zM160 320H380C391 320 400 329 400 340C400 351 391 360 380 360H160C149 360 140 351 140 340C140 329 149 320 160 320zM60 100C38 100 20 82 20 60C20 38 38 20 60 20S100 38 100 60C100 82 82 100 60 100zM380 80H160C149 80 140 71 140 60C140 49 149 40 160 40H380C391 40 400 49 400 60C400 71 391 80 380 80zM360 240H180C158 240 140 222 140 200C140 178 158 160 180 160H360C382 160 400 178 400 200C400 222 382 240 360 240zM60 260C26.8 260 0 233.2 0 200S26.8 140 60 140S120 166.8 120 200S93.2 260 60 260z" : "M60 80C38 80 20 62 20 40C20 18 38 0 60 0S100 18 100 40C100 62 82 80 60 80zM50 210C22.4 210 0 187.6 0 160C0 132.4 22.4 110 50 110S100 132.4 100 160C100 187.6 77.6 210 50 210zM140 260H300C311 260 320 269 320 280C320 291 311 300 300 300H140C129 300 120 291 120 280C120 269 129 260 140 260zM300 60H140C129 60 120 51 120 40C120 29 129 20 140 20H300C311 20 320 29 320 40C320 51 311 60 300 60zM60 320C38 320 20 302 20 280S38 240 60 240S100 258 100 280S82 320 60 320zM300 200H140C129 200 120 191 120 180V140C120 129 129 120 140 120H300C311 120 320 129 320 140V180C320 191 311 200 300 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Property.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Property.displayName = "Blueprint5.Icon.Property";
exports.default = exports.Property;
//# sourceMappingURL=property.js.map