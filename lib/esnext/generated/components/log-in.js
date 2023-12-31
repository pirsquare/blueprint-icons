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
export const LogIn = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "log-in", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 400H220C209 400 200 391 200 380C200 369 209 360 220 360H360V40H220C209 40 200 31 200 20C200 9 209 0 220 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM300 200C300 205.6 297.8 210.6 294.2000000000001 214.2L194.2 314.2000000000001C190.6 317.8 185.6 320 180 320C169 320 160 311 160 300C160 294.4 162.2 289.4 165.8 285.8L231.8 220H20C9 220 0 211 0 200C0 189 9 180 20 180H231.8L166 114.2000000000001C162.2 110.6 160 105.6 160 100C160 89 169 80 180 80C185.6 80 190.6 82.2 194.2 85.8L294.2000000000001 185.8C297.8 189.4 300 194.4 300 200z" : "M220 160C220 165.6 217.8 170.6 214.2 174.2L154.2 234.2C150.6 237.8 145.6 240 140 240C129 240 120 231 120 220C120 214.4 122.2 209.4 125.8 205.8L151.8 180H20C9 180 0 171 0 160C0 149 9 140 20 140H151.8L126 114.2C122.2 110.6 120 105.6 120 100C120 89 129 80 140 80C145.6 80 150.6 82.2 154.2 85.8L214.2 145.8C217.8 149.4 220 154.4 220 160zM300 320H180C169 320 160 311 160 300C160 289 169 280 180 280H280V40H180C169 40 160 31 160 20C160 9 169 0 180 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
LogIn.defaultProps = {
    size: IconSize.STANDARD,
};
LogIn.displayName = `Blueprint5.Icon.LogIn`;
export default LogIn;
//# sourceMappingURL=log-in.js.map