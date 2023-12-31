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
export const Font = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "font", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M218.666 347.1796C215.696 354.9034 208.276 360 200 360C191.7244 360 184.3038 354.9034 181.333 347.1796L81.4964 87.604C80.532 85.26 80 82.692 80 80C80 68.954 88.9544 60 100 60C108.6804 60 116.0692 65.53 118.8356 73.26L144.5052 140H255.494L281.166 73.254C283.934 65.528 291.322 60 300 60C311.046 60 320 68.954 320 80C320 82.694 319.468 85.264 318.502 87.61L218.666 347.1796zM240.11 180L200 284.2864L159.8898 180H240.11z" : "M160 280C168.178 280 175.5322 275.021 178.5696 267.4278L258.4 67.85C259.43 65.44 260 62.786 260 60C260 48.954 251.046 40 240 40C231.414 40 224.094 45.41 221.258 53.006L202.46 100H117.5406L98.7426 53.004C95.9064 45.408 88.5848 40 80 40C68.9544 40 60 48.954 60 60C60 62.786 60.5698 65.44 61.599 67.85L141.4304 267.4278C144.4678 275.021 151.822 280 160 280zM133.5406 140H186.4594L160 206.1484L133.5406 140z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Font.defaultProps = {
    size: IconSize.STANDARD,
};
Font.displayName = `Blueprint5.Icon.Font`;
export default Font;
//# sourceMappingURL=font.js.map