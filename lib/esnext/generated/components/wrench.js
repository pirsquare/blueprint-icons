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
export const Wrench = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "wrench", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M396 311.2L322.6 238L251.6 252.2L237.4 322.8L310.8 395.8C270.6 406.4 226.2 396.4 194.8 365.2C157.6 328.2 150.2 273.2 172 228.6L11.8 68.2C4.4 61 0 51 0 40C0 18 17.8 0 40 0C51 0 61 4.4 68.2 11.8L228.8 172.6C273.4 151.6 328.2 159.2 365.2 195.8C396.6 227 406.6 271.2 396 311.2z" : "M316.6 246L255.4 185L198.6 199L184.6 255.6L245.8 316.6C212.4 325.4 175.4 317 149.2 290.8C120 261.8 112.6 219.4 126.8 183.6L11.6 68.4C4.4 61.2 0 51.2 0 40.2C0 18.2 18 0.2 40 0.2C51 0.2 61 4.6 68.2 12V12L183.6 127.4C219.4 113.6 261.8 120.8 290.6 149.8C317 175.8 325.4 212.8 316.6 246z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Wrench.defaultProps = {
    size: IconSize.STANDARD,
};
Wrench.displayName = `Blueprint5.Icon.Wrench`;
export default Wrench;
//# sourceMappingURL=wrench.js.map