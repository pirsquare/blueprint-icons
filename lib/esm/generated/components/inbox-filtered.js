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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var InboxFiltered = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "inbox-filtered", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M205.231458 340L244.4 300.8314576L244.4 299.8267822000001L93 299.8267822000001L39.6 179.906728L100 179.906728C111 179.906728 120 170.912724 120 159.920054L120 139.933378L280 139.933378L280 159.920054C280 170.912724 289 179.906728 300 179.906728L360.4 179.906728L347.697776 208.4320346L360.194112 221.0259976C367.270068 228.1016438 372.1609560000001 237.042888 374.332154 246.8147786L400 189.1006L400 59.986676C400 48.994004 391 40 380 40L20 40C9 40 0 48.994004 0 59.986676L0 189.1006L61.6 327.6082612L61.8 328.0079946C64.8 335.0033312 71.8 340 80 340L205.231458 340zM387 400C394.2000000000001 400 400 394.2 400 387.2C400 383.6 398.6 380.4 396.2 378L335.6 317.4L335.6 258.4C335.6 254.8 334.2000000000001 251.6 331.8 249.2L306.2 223.4C304 221.4 300.8 220 297.2 220C290.2 220 284.4000000000001 225.8 284.4000000000001 232.8L284.4000000000001 317.4L223.8 378C221.4 380.4 220 383.6 220 387.2C220 394.2 225.8 400 232.8 400L387 400z" : "M128.6391878 280C130.5165792 277.1908186 132.6815224 274.5499352 135.1157288 272.1157288L168.4024282 240L73.2 240L39 160L80 160C91 160 100 151 100 140L100 120L203.57666 120L231.148072 120C245.003886 120 258.403088 125.2345452 267.884272 134.7157288L269.935816 136.7672732L286.931742 159.5666864C294.958736 168.8815686 299.4000000000001 180.6911366 299.4000000000001 193.2L299.4000000000001 218.8336538L320 170.8L320 60C320 49 311 40 300 40L20 40C9 40 0 49 0 60L0 170.8L41.6 267.8C44.6 275 51.8 280 60 280L128.6391878 280zM309.6 320.0000000000002C315.8 320.0000000000002 320 314.8 320 308.6C320 305.4 318.8 302.6 316.6 300.4L259.4000000000001 245.8L259.4000000000001 193.2C259.4000000000001 190 258.2 187.2 256 185L239.6 163C237.6 161 234.6 159.6 231.4 159.6C225.2 159.6 220 164.8 220 171L220 245.8L163.4 300.4C161.2 302.6 160 305.4 160 308.6C160 314.8 165.2 320.0000000000002 171.4 320.0000000000002L309.6 320.0000000000002z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
InboxFiltered.defaultProps = {
    size: IconSize.STANDARD,
};
InboxFiltered.displayName = "Blueprint5.Icon.InboxFiltered";
export default InboxFiltered;
//# sourceMappingURL=inbox-filtered.js.map