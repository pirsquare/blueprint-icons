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
export const GreaterThanOrEqualTo = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "greater-than-or-equal-to", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M73.67545072 178.97366C63.19658438 175.4807044 57.53338464 164.154305 61.026340088 153.6754386C64.51929554 143.1965722 75.84569502 137.533372 86.3245614 141.026328L326.324562 221.026328C344.558488 227.1043034 344.558488 252.8956844 326.324562 258.97366L86.3245614 338.973659912C75.84569502 342.46661536 64.51929554 336.80341562 61.026340088 326.32454928C57.53338464 315.845683 63.19658438 304.5192834 73.67545072 301.0263280000001L256.7544528 239.999994L73.67545072 178.97366zM80.000006 99.999994L320.000006 99.999994C331.045702 99.999994 340.000006 91.045688 340.000006 79.999994L340.000006 79.999994C340.000006 68.954298 331.045702 59.999994 320.000006 59.999994L80.000006 59.999994C68.95431106 59.999994 60.00000604954 68.954298 60.00000604954 79.999994L60.00000604954 79.999994C60.00000604954 91.045688 68.95431106 99.999994 80.000006 99.999994z" : "M54.2530422 240.8434742C43.6731852 244.0174314 37.6695172 255.1671008 40.8434742 265.7469578C44.0174314 276.3268148 55.1671008 282.3304828000001 65.7469578 279.1565258L265.746958 219.1565258C284.751014 213.4553088 284.751014 186.5446912 265.746958 180.8434742L65.7469578 120.8434742C55.1671008 117.669518 44.0174314 123.6731852 40.8434742 134.2530422C37.6695172 144.8328992 43.6731852 155.9825686 54.2530422 159.1565258L190.3979566 200L54.2530422 240.8434742zM60 80L260 80C271.045694 80 280 71.045694 280 60C280 48.954306 271.045694 40 260 40L60 40C48.954305 40 40 48.954306 40 60C40 71.045694 48.954305 80 60 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
GreaterThanOrEqualTo.defaultProps = {
    size: IconSize.STANDARD,
};
GreaterThanOrEqualTo.displayName = `Blueprint5.Icon.GreaterThanOrEqualTo`;
export default GreaterThanOrEqualTo;
//# sourceMappingURL=greater-than-or-equal-to.js.map