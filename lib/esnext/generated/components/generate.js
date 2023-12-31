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
export const Generate = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "generate", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M160 140C160 151.046 151.0458 160 140 160H98.8376C88.4338 160 80 168.434 80 178.838C80 182.216 80.909 185.534 82.6318 188.442L202.19 390.19606C205.944 396.53112 212.738 400 220 400C231.046 400 240 391.0457 240 380V260C240 248.9544 248.954 240 260 240H301.162C311.5660000000001 240 320 231.5662 320 221.1624C320 217.783 319.09 214.466 317.368 211.5588L197.8098 9.804C194.0556 3.468 187.2614 0 180 0C168.9544 0 160 8.954 160 20V140z" : "M140 100C140 111.046 131.0456 120 120 120H96C87.1634 120 80 127.1634 80 136C80 138.6262 80.6464 141.212 81.8824 143.5294L171.7648 312.05884C174.3716 316.9468 179.4604 320 185 320C193.2842 320 200 313.28426 200 305V220C200 208.9542 208.954 200 220 200H244C252.836 200 260 192.8364 260 184C260 181.3736 259.3540000000001 178.7878 258.118 176.4704L168.2352 7.94C165.6284 3.054 160.5396 0 155 0C146.7158 0 140 6.716 140 15V100z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Generate.defaultProps = {
    size: IconSize.STANDARD,
};
Generate.displayName = `Blueprint5.Icon.Generate`;
export default Generate;
//# sourceMappingURL=generate.js.map