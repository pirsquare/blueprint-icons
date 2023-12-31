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
export const ShortenText = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "shorten-text", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M16.66666 140H183.3334C192.5 140 200 149 200 160C200 171 192.5 180 183.3334 180H16.66666C7.5 180 0 171 0 160C0 149 7.5 140 16.66666 140zM20 240H380C391 240 400 249 400 260C400 271 391 280 380 280H20C9 280 0 271 0 260C0 249 9 240 20 240zM320 120C320 125.6 317.8 130.6 314.2000000000001 134.2000000000001L308.2 140H380C391 140 400 149 400 160C400 171 391 180 380 180H308.2L314 185.8C317.8 189.4 320 194.4 320 200C320 211 311 220 300 220C294.4000000000001 220 289.4000000000001 217.8 285.8 214.2L245.8 174.2C242.2 170.4 240 165.4 240 160C240 154.4 242.2 149.4 245.8 145.8L285.8 105.8C289.4000000000001 102.2 294.4000000000001 100 300 100C311 99.8 320 108.8 320 120z" : "M20 200H300C311 200 320 209 320 220C320 231 311 240 300 240H20C9 240 0 231 0 220C0 209 9 200 20 200zM100 140H20C9 140 0 131 0 120C0 109 9 100 20 100H100C111 100 120 109 120 120C120 131 111 140 100 140zM240 80C240 85.6 237.8 90.6 234.2 94.2L228.2 100H300C311 100 320 109 320 120C320 131 311 140 300 140H228.2L234 145.8C237.8 149.4 240 154.4 240 160C240 171 231 180 220 180C214.4 180 209.4 177.8 205.8 174.2L165.8 134.2C162.2 130.6 160 125.6 160 120C160 114.4 162.2 109.4 165.8 105.8L205.8 65.8C209.4 62.2 214.4 60 220 60C231 60 240 69 240 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ShortenText.defaultProps = {
    size: IconSize.STANDARD,
};
ShortenText.displayName = `Blueprint5.Icon.ShortenText`;
export default ShortenText;
//# sourceMappingURL=shorten-text.js.map