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
export const SymbolTriangleUp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "symbol-triangle-up", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M317.8 108.8L317.8 108.8L218 308.8L217.8 308.8C214.4 315.4 207.8 320 200 320S185.6 315.4 182.2 308.8L182 308.8L82 108.8L82.2 108.8C81 106.2 80 103.2 80 100C80 89 89 80 100 80H300C311 80 320 89 320 100C320 103.2 319 106.2 317.8 108.8z" : "M257.8 88.8L257.8 88.8L178 248.8L177.8 248.8C174.4 255.2 167.8 259.8 160 259.8S145.6 255.2 142.2 248.8L142 248.8L62 88.8L62.2 88.8C61 86 60 83 60 79.8C60 68.8 69 59.8 80 59.8H240C251 59.8 260 68.8 260 79.8C260 83 259 86 257.8 88.8z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SymbolTriangleUp.defaultProps = {
    size: IconSize.STANDARD,
};
SymbolTriangleUp.displayName = `Blueprint5.Icon.SymbolTriangleUp`;
export default SymbolTriangleUp;
//# sourceMappingURL=symbol-triangle-up.js.map