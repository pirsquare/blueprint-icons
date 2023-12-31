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
exports.Layer = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Layer = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layer", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M390 218L210 318C206 320 204 320 200 320S194 320 190 318L10 218C4 214 0 208 0 200C0 192 4 186 10 182L190 82C194 80 196 80 200 80S206 80 210 82L390 182C396 186 400 192 400 200C400 208 396 214 390 218z" : "M320 160C320 167.4 315.8 173.6 309.8 177L310 177.2L170 257.2L169.8 257C166.8 258.8 163.6 260 160 260S153.2 258.8 150.2 257L150 257.4L10 177.4L10.2 177.2C4.2 173.6 0 167.4 0 160S4.2 146.4 10.2 143C10.2 143 10 142.8 10 142.8L150 62.8L150.2 63C153.2 61.2 156.4 60 160 60S166.8 61.2 169.8 63L170 62.8L310 142.8L309.8 143C315.8 146.4 320 152.6 320 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Layer.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Layer.displayName = "Blueprint5.Icon.Layer";
exports.default = exports.Layer;
//# sourceMappingURL=layer.js.map