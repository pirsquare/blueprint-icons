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
exports.CircleArrowUp = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.CircleArrowUp = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "circle-arrow-up", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40zM214.2 314.2C210.6 317.8 205.6 320 200 320S189.4 317.8 185.8 314.2L105.8 234.2C102.2 230.6 100 225.6 100 220C100 209 109 200 120 200C125.6 200 130.6 202.2 134.2 205.8L180 251.8V100C180 89 189 80 200 80S220 89 220 100V251.8L265.8 206C269.4000000000001 202.2 274.4000000000001 200 280 200C291 200 300 209 300 220C300 225.6 297.8 230.6 294.2000000000001 234.2L214.2 314.2z" : "M174.2 234.2C170.6 237.8 165.6 240 160 240S149.4 237.8 145.8 234.2L85.8 174.2C82.2 170.6 80 165.6 80 160C80 149 89 140 100 140C105.6 140 110.6 142.2 114.2 145.8L140 171.8V100C140 89 149 80 160 80S180 89 180 100V171.8L205.8 146C209.4 142.2 214.4 140 220 140C231 140 240 149 240 160C240 165.6 237.8 170.6 234.2 174.2L174.2 234.2zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.CircleArrowUp.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.CircleArrowUp.displayName = "Blueprint5.Icon.CircleArrowUp";
exports.default = exports.CircleArrowUp;
//# sourceMappingURL=circle-arrow-up.js.map