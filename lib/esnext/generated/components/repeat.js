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
export const Repeat = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "repeat", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 280C280 269 289 260 300 260H380C391 260 400 269 400 280V360C400 371 391 380 380 380S360 371 360 360V319C323.6 368 265.8 400 200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 211 391 220 380 220S360 211 360 200C360 111.6 288.4 40 200 40S40 111.6 40 200S111.6 360 200 360C250.6 360 295.4 336.6 324.8000000000001 300H300C289 300 280 291 280 280z" : "M200 220C200 209 209 200 220 200H300C311 200 320 209 320 220V300C320 311 311 320 300 320S280 311 280 300V265.2C250.8 298.6 208 320 160 320C71.6 320 0 248.4 0 160C0 78.8 60.4 12 138.8 1.6C139.2 1.6 139.6 1.4 140 1.4C146.6 0.6 153.2 0 160 0C248.4 0 320 71.6 320 160C320 171 311 180 300 180S280 171 280 160C280 93.8 226.2 40 160 40C145.8 40 132.6 43 120 47.6V47.4C73.4 63.8 40 107.8 40 160C40 226.2 93.8 280 160 280C195.4 280 227.2 264.4 249.2 240H220C209 240 200 231 200 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Repeat.defaultProps = {
    size: IconSize.STANDARD,
};
Repeat.displayName = `Blueprint5.Icon.Repeat`;
export default Repeat;
//# sourceMappingURL=repeat.js.map