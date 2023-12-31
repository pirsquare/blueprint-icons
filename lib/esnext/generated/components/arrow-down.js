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
export const ArrowDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "arrow-down", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M320 180C314 180 310 178 306 174L220 88V360C220 370 212 380 200 380S180 370 180 360V88L94 174C90 178 86 180 80 180C70 180 60 172 60 160C60 154 62 150 66 146L186 26C190 22 194 20 200 20S210 22 214 26L334 146C338 150 340 154 340 160C340 172 330 180 320 180L320 180z" : "M260 160C254 160 250 158 246 154L180 88V280C180 290 172 300 160 300S140 290 140 280V88L74 154C70 158 66 160 60 160C50 160 40 150 40 140C40 134 42 130 46 126L146 26C150 22 154 20 160 20S170 22 174 26L274 126C278 130 280 134 280 140C280 152 272 160 260 160L260 160z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ArrowDown.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowDown.displayName = `Blueprint5.Icon.ArrowDown`;
export default ArrowDown;
//# sourceMappingURL=arrow-down.js.map