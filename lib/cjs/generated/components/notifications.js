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
exports.Notifications = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Notifications = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "notifications", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 0C222 0 240 18 240 40H160C160 18 178 0 200 0zM340 100C329 100 320 109 320 120V240C320 292.2 286.6 336.2 240 352.6V360C240 382 222 400 200 400S160 382 160 360V352.6C113.4 336.2 80 292.2 80 240V120C80 109 71 100 60 100S40 91 40 80C40 69 49 60 60 60H340C351 60 360 69 360 80C360 91 351 100 340 100z" : "M160 0C182 0 200 18 200 40H120C120 18 138 0 160 0zM280 100C269 100 260 109 260 120V200C260 248.6 225.4 289 179.6 298C179.6 298.8 180 299.2 180 300C180 311 171 320 160 320S140 311 140 300C140 299.2 140.4 298.8 140.4 298C94.6 289 60 248.6 60 200V120C60 109 51 100 40 100S20 91 20 80C20 69 29 60 40 60H280C291 60 300 69 300 80C300 91 291 100 280 100z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Notifications.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Notifications.displayName = "Blueprint5.Icon.Notifications";
exports.default = exports.Notifications;
//# sourceMappingURL=notifications.js.map