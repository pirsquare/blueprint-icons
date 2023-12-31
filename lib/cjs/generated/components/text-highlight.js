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
exports.TextHighlight = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.TextHighlight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "text-highlight", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 60C309 60 300 69 300 80V320C300 331 309 340 320 340S340 349 340 360C340 371 331 380 320 380C304.6 380 290.6 374 280 364.4C269.4000000000001 374 255.4 380 240 380C229 380 220 371 220 360C220 349 229 340 240 340S260 331 260 320V80C260 69 251 60 240 60S220 51 220 40C220 29 229 20 240 20C255.4 20 269.4000000000001 26 280 35.6C290.6 26 304.6 20 320 20C331 20 340 29 340 40C340 51 331 60 320 60zM240 140H40V260H240V300H20C9 300 0 291 0 280V120C0 109 9 100 20 100H240V140zM380 300H320V260H360V140H320V100H380C391 100 400 109 400 120V280C400 291 391 300 380 300z" : "M180 120H40V200H180V240H20C9 240 0 231 0 220V100C0 89 9 80 20 80H180V120zM260 60H240V260H260C271 260 280 269 280 280C280 291 271 300 260 300H240C232.6 300 226 297.8 220 294.4C214 297.8 207.4 300 200 300H180C169 300 160 291 160 280C160 269 169 260 180 260H200V60H180C169 60 160 51 160 40C160 29 169 20 180 20H200C207.4 20 214 22.2 220 25.6C226 22.2 232.6 20 240 20H260C271 20 280 29 280 40C280 51 271 60 260 60zM300 240H260V200H280V120H260V80H300C311 80 320 89 320 100V220C320 231 311 240 300 240z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.TextHighlight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.TextHighlight.displayName = "Blueprint5.Icon.TextHighlight";
exports.default = exports.TextHighlight;
//# sourceMappingURL=text-highlight.js.map