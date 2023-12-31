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
exports.InboxUpdate = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.InboxUpdate = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "inbox-update", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M201.659168 340C200.567976 333.4958306 200 326.8142442 200 320C200 313.1252492 200.578108 306.3855226 201.68836 299.8267822000001L93 299.8267822000001L39.6 179.906728L100 179.906728C111 179.906728 120 170.912724 120 159.920054L120 139.933378L280 139.933378L280 159.920054C280 170.912724 289 179.906728 300 179.906728L360.4 179.906728L349.7927440000001 203.727379C362.96233 207.0917858 375.2603220000001 212.6347388 386.2801580000001 219.9496794L400 189.1006L400 59.986676C400 48.994004 391 40 380 40L20 40C9 40 0 48.994004 0 59.986676L0 189.1006L61.6 327.6082612L61.8 328.0079946C64.8 335.0033312 71.8 340 80 340L201.659168 340zM320 240C275.81722 240 240 275.81722 240 320C240 364.18278 275.81722 400 320 400C364.18278 400 400 364.18278 400 320C400 275.81722 364.18278 240 320 240z" : "M162.0003624 280C160.6886052 273.5378012 160 266.8493168 160 260C160 253.1506832 160.688675 246.4621988 162.0005458 240L73.2 240L39 160L80 160C91 160 100 151 100 140L100 120L220 120L220 140C220 151 229 160 240 160L260 160L281 160C295.163558 160 308.041738 164.8244742 319.0994 172.8999574L320 170.8L320 60C320 49 311 40 300 40L20 40C9 40 0 49 0 60L0 170.8L41.6 267.8C44.6 275 51.8 280 60 280L162.0003624 280zM260 200C226.862916 200 200 226.862915 200 260C200 293.137085 226.862916 320 260 320C293.137084 320 320 293.137085 320 260C320 226.862915 293.137084 200 260 200z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.InboxUpdate.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.InboxUpdate.displayName = "Blueprint5.Icon.InboxUpdate";
exports.default = exports.InboxUpdate;
//# sourceMappingURL=inbox-update.js.map