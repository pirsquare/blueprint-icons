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
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const RocketSlant = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "rocket-slant", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 300C242.426 342.4264 326.16 358.4848 360 360C358.484 326.1598 342.4260000000001 242.4264 300 200C276.1520000000001 176.152 249.13 163.548 225.04 152.31C216.198 148.184 207.75 144.244 200 140C195.9396 137.776 188.0536 133.96 180.2852 130.202L180.2842 130.202L180.284 130.202C171.406 125.906 162.6824 121.684 160 120L120 160C123.1584 165.03 140 200 140 200C140 200 167.3996 267.3996 200 300zM300 280C300 268.9544 291.046 260 280 260C268.954 260 260 268.9544 260 280C260 291.0456 268.954 300 280 300C291.046 300 300 291.0456 300 280zM60 60C60 60 60 100 100 140L140 100C100 60 60 60 60 60zM280 100L200 20L174.0488 104.664C194.696 115.86 211.664 123.892 226.906 131.108C252.392 143.17 273.044 152.946 297.98 171.404L280 100zM20 200L100 280L171.1356 297.9796C152.678 273.0436000000001 142.9024 252.3912 130.839 226.9058C123.625 211.6652 115.5928 194.696 104.3966 174.05L20 200z" : "M79.8404 120.0022C119.8402 220.0008 179.8404 299.9988 299.8400000000001 299.9992C299.8400000000001 180 219.84 120.0024 119.8402 80.002L79.8404 120.0022zM234.124 205.6954C226.314 197.885 213.65 197.885 205.84 205.6954C198.0298 213.5058 198.0298 226.1692 205.84 233.9796C213.65 241.7902 226.314 241.7902 234.124 233.9796C241.936 226.1692 241.936 213.5058 234.124 205.6954zM103.0196 210.0584L59.841 199.9962L-0.1590884 159.9962L64.8064 136.093C75.6488 162.1286 88.1222 187.217 103.0196 210.0584zM159.8406 -0.002L135.1286 64.634C161.1118 75.414 186.1668 87.806 209.004 102.6L199.8406 59.998L159.8406 -0.002zM61.217 98.794L61.2172 98.794L100.004 60.008L100.0038 60.008C80.1754 40.18 56.3058 36.914 39.9996 40.002C36.9124 56.308 41.3886 78.966 61.217 98.794z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
RocketSlant.defaultProps = {
    size: IconSize.STANDARD,
};
RocketSlant.displayName = `Blueprint5.Icon.RocketSlant`;
export default RocketSlant;
//# sourceMappingURL=rocket-slant.js.map