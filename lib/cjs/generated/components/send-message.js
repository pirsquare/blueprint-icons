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
exports.SendMessage = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SendMessage = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "send-message", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M35.078 397.29388L387.8520000000001 218.7998C399.25 213.0322 403.358 199.94 397.024 189.558C394.884 186.048 391.706 183.154 387.8520000000001 181.204L35.078 2.71C23.6788 -3.058 9.30416 0.682 2.9713 11.064C1.022616 14.26 0 16.346 0 20V160L220 200L0 240V378.496C0 390.37232 10.57112 400 23.6112 400C27.6238 400 31.5702 399.068648 35.078 397.29388z" : "M307.9700000000001 139.808L30.5496 2.492C19.83024 -2.838 7.03736 0.874 2.11212 11.046C0.65286 14.06 0 16.634 0 19.982V120L160 160L0 200V299.9874C0 310.5661 8.14606 320 20.076 320C23.458 320 28.3928 319.208706 31.4142 317.6894L308.058 178.5794C318.752 173.2014 323.062 160.1724 317.684 149.478C315.578 145.2888 312.168 141.8956 307.9700000000001 139.808z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SendMessage.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SendMessage.displayName = "Blueprint5.Icon.SendMessage";
exports.default = exports.SendMessage;
//# sourceMappingURL=send-message.js.map