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
export const GreaterThan = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "greater-than", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M256.754446 200L73.6754446 138.973666C63.1965784 135.48071 57.5333786 124.154312 61.026334 113.675444C64.5192894 103.1965780000001 75.845689 97.533378 86.3245554 101.026334L326.3245560000001 181.026334C344.558482 187.10431 344.558482 212.8956906 326.3245560000001 218.973666L86.3245554 298.973666C75.845689 302.4666214 64.5192894 296.8034216 61.026334 286.3245554C57.5333786 275.845689 63.1965784 264.5192894 73.6754446 261.026334L256.754446 200z" : "M54.2530422 200.8434742C43.6731852 204.0174314 37.6695172 215.1671008 40.8434742 225.7469578C44.0174314 236.3268148 55.1671008 242.3304828 65.7469578 239.1565258L265.746958 179.1565258C284.751014 173.4553088 284.751014 146.5446912 265.746958 140.8434742L65.7469578 80.843474C55.1671008 77.669518 44.0174314 83.673186 40.8434742 94.253042C37.6695172 104.8329 43.6731852 115.982568 54.2530422 119.156526L190.3979566 160L54.2530422 200.8434742z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
GreaterThan.defaultProps = {
    size: IconSize.STANDARD,
};
GreaterThan.displayName = `Blueprint5.Icon.GreaterThan`;
export default GreaterThan;
//# sourceMappingURL=greater-than.js.map