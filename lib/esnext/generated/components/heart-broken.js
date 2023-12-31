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
export const HeartBroken = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "heart-broken", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M162.2 251L162.2 251C161 253.8 160 256.8 160 260C160 261.4 160.6 262.6 160.8 263.8L160.4 263.8L177.6 350.2000000000001C158.8 368.6 133.4 380 105 380C47 380 0 333 0 275C0 273.2 0.2 271.6 0.2 270H0C0 268.8 0.2 267.6 0.4 266.4C0.6 265.2000000000001 0.6 264 0.8 262.8C2.6 242.2 8.8 220 21.4 196.6C49 145 96.6 104.6 175.6 40L160.4 116L160.8 116C160.6 117.4 160 118.6 160 120C160 124.2000000000001 161.6 127.8 163.6 130.8L163.2 131L196.8 181.4L162.2 251zM400 275C400 333 353 380 295 380C264.2000000000001 380 236.6 366.6 217.4 345.4L200.8 262.8L237.8 189L237.6 189C239 186.2 240 183.2 240 180C240 175.8 238.4 172.2 236.4 169.2L236.8 169L201.4 115.8L217.6 34.4C300.8 102.2 350.2000000000001 143.4 378.6 196.4C391.2 219.8 397.4000000000001 241.8 399.2000000000001 262.4C399.4000000000001 263.8 399.4000000000001 265.2 399.6 266.6C399.6 267.8 399.8000000000001 268.8 400 270H399.8C399.8 271.6 400 273.2 400 275z" : "M154.2 142.6L123.4 189L123.8 189.2C121.6 192.2 120 195.8 120 200C120 201.4 120.6 202.6 120.8 203.8L120.4 203.8L136 282.2C121.8 293.2 103.8 300 84 300C37.6 300 0 263.4 0 218.2C0 216.8 0.2 215.6 0.2 214.4H0C0 213.4 0.2 212.4 0.2 211.6C0.2 210.6 0.4 209.6 0.4 208.8C1.8 192.8 6.8 175.6 16.8 157.4C38.2 118.6 74.4 88 134 40.6L120.4 95.4L120.8 95.4C120.6 96.8 120 98.4 120 100C120 105.6 122.2 110.6 125.8 114.2L154.2 142.6zM320 218.2C320 263.4 282.4 300 236 300C212 300 190.6 290 175.2000000000001 274.4L161.2000000000001 204.2L196.6 151L196.4 150.8C198.4 147.8 200 144.2 200 140C200 134.4 197.8 129.4 194.2 125.8L162.2 93.8L177.2 33.6C241.8000000000001 84.8 280.4000000000001 116.6 302.8 157.2C312.8 175.4 317.8 192.6 319.2000000000001 208.4C319.4000000000001 209.4 319.4000000000001 210.6 319.6 211.6C319.6 212.4 319.8 213.4 319.8 214.2H319.6C319.8 215.6 320 217 320 218.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
HeartBroken.defaultProps = {
    size: IconSize.STANDARD,
};
HeartBroken.displayName = `Blueprint5.Icon.HeartBroken`;
export default HeartBroken;
//# sourceMappingURL=heart-broken.js.map