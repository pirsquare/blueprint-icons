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
export const Pulse = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "pulse", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 200H332.4000000000001L298 269L297.8 269C294.4000000000001 275.4 287.8 280 280 280C271.4 280 264.2000000000001 274.4 261.4 266.8L261.2 266.8L206.2 115.4L159.6 363.6L159.2 363.6C157.6 372.8 149.8 380 140 380C131.2 380 124 374.2 121.2 366.2L121 366.2L65.6 200H20C9 200 0 191 0 180C0 169 9 160 20 160H80C88.8 160 96 165.8 98.8 173.8L99 173.8L134.6 280.6L180.4 36.4L180.8 36.4C182.4 27.2 190.2 20 200 20C208.6 20 215.8 25.6 218.6 33.2L218.8 33.2L283 209.6L302.2 171.2L302.4 171.2C305.6 164.6 312.2 160 320 160H380C391 160 400 169 400 180C400 191 391 200 380 200z" : "M300 160H270.8L236.8 211L236.4 210.8C232.8 216.2 227 220 220 220C211.4 220 204.2 214.6 201.4 207L201.2 207L167.4 116.8L139.8 283.2L139.4 283.2C137.8 292.6 130 300 120 300C111.8 300 104.6 295 101.6 287.8L101.6 287.8L101.6 287.8C101.6 287.8 101.6 287.8 101.6 287.8L46.8 160H20C9 160 0 151 0 140C0 129 9 120 20 120H60C68.2 120 75.4 125 78.4 132.2L78.4 132.2L78.4 132.2C78.4 132.2 78.4 132.2 78.4 132.2L111.4 209.4L140.2 36.8L140.6 36.8C142.2 27.4 150 20 160 20C168.6 20 175.8 25.4 178.6 33L178.8 33L225 156.4L243.4 128.8L243.8 129C247.2 123.8 253 120 260 120H300C311 120 320 129 320 140C320 151 311 160 300 160z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Pulse.defaultProps = {
    size: IconSize.STANDARD,
};
Pulse.displayName = `Blueprint5.Icon.Pulse`;
export default Pulse;
//# sourceMappingURL=pulse.js.map