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
export var PolygonFilter = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "polygon-filter", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 260C354.6 260 349.6 259 345 257L219.4 354.6C219.6 356.4 220 358.2 220 360C220 382 202 400 180 400S140 382 140 360C140 358.8 140.2 357.6 140.4 356.2L56.6 296.2000000000001C51.4 298.6 45.8 300 40 300C18 300 0 282 0 260C0 245.2 8 232.4000000000001 20 225.6V74.6C8 67.6 0 54.8 0 40C0 18 18 0 40 0C54.8 0 67.6 8 74.4 20H225.4C232.4 8 245 0 259.8 0C281.8 0 299.8 18 299.8 40C299.8 47.4 297.6 54.4 294 60.4L360.6 180C382.4000000000001 180.4 400 198 400 220C400 242 382 260 360 260zM259.4000000000001 80C245 79.8 232.4000000000001 71.8 225.6 60H74.4C71 66 66 71 60 74.4V225.6C72 232.4 80 245.2 80 260C80 261.2 79.8 262.4 79.6 263.8L163.4 323.8C168.6 321.4 174.2 320 180 320C185.4 320 190.4 321 195 323L320.6 225.4C320.4 223.6 320 221.8 320 220C320 212.6 322.2 205.6 325.8 199.6L259.4000000000001 80z" : "M280 220C275.2 220 270.6 219 266.4 217.4L199.4 273.2C199.6 275.4 200 277.6 200 280C200 302 182 320 160 320S120 302 120 280C120 279.2 120.2 278.4 120.2 277.6L57.6 235.8C52.2 238.4 46.4 240 40 240C18 240 0 222 0 200C0 185.2 8 172.4 20 165.6V74.6C8 67.6 0 54.8 0 40C0 18 18 0 40 0C54.8 0 67.6 8 74.4 20H165.4C172.4 8 185 0 199.8 0C221.8 0 239.8 18 239.8 40C239.8 47.4 237.6 54 234.2 60L280 140C302.2 140.2 320 158 320 180C320 202 302 220 280 220zM199.8 80C185.2 80 172.4 71.8 165.6 60H74.6C71 66 66 71 60 74.4V165.6C72 172.4 80 185.2 80 200C80 200.8 79.8 201.6 79.8 202.4L142.4 244.2C147.8 241.6 153.6 240 160 240C164.8 240 169.4 241 173.6 242.6L240.6 186.8C240.4 184.6 240 182.4 240 180C240 172.6 242.2 166 245.6 160L199.8 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
PolygonFilter.defaultProps = {
    size: IconSize.STANDARD,
};
PolygonFilter.displayName = "Blueprint5.Icon.PolygonFilter";
export default PolygonFilter;
//# sourceMappingURL=polygon-filter.js.map