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
export const Bold = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "bold", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M286 220C294 236 300 252 300 270C300 320 260 360 210 360H100C88 360 80 352 80 340V80C80 68 88 60 100 60H230C280 60 320 100 320 150C320 178 306 204 286 220zM140 300H210C226 300 240 286 240 270C240 254 226 240 210 240H140V300zM230 120H140V180H230C246 180 260 166 260 150C260 134 246 120 230 120z" : "M234 180C238 188 240 200 240 210C240 212 240 216 240 218C240 220 240 220 240 220C240 222 240 224 238 226C238 226 238 228 238 228C228 258 202 280 170 280H80C70 280 60 272 60 260V60C60 50 68 40 80 40H180C224 40 260 76 260 120C260 144 250 166 234 180zM120 220H160C172 220 180 212 180 200S172 180 160 180H120V220zM180 100H120V140H180C192 140 200 132 200 120S192 100 180 100z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Bold.defaultProps = {
    size: IconSize.STANDARD,
};
Bold.displayName = `Blueprint5.Icon.Bold`;
export default Bold;
//# sourceMappingURL=bold.js.map