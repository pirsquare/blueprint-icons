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
exports.GridView = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.GridView = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "grid-view", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 20C0 9 9 0 20 0H180V180H0V20zM0 380V220H180V400H20C9 400 0 391 0 380zM380 400H220V220H400V380C400 391 391 400 380 400zM220 0H380C391 0 400 9 400 20V180H220V0z" : "M0 300V180H140V320H20C9 320 0 311 0 300zM0 20C0 9 9 0 20 0H140V140H0V20zM300 320H180V180H320V300C320 311 311 320 300 320zM180 0H300C311 0 320 9 320 20V140H180V0z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.GridView.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.GridView.displayName = "Blueprint5.Icon.GridView";
exports.default = exports.GridView;
//# sourceMappingURL=grid-view.js.map