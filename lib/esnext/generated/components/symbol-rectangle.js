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
export const SymbolRectangle = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "symbol-rectangle", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M320 300H80C70 300 60 290 60 280V120C60 110 70 100 80 100H320C330 100 340 110 340 120V280C340 290 330 300 320 300z" : "M260 240H60C50 240 40 230 40 220V100C40 90 50 80 60 80H260C270 80 280 90 280 100V220C280 230 270 240 260 240z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SymbolRectangle.defaultProps = {
    size: IconSize.STANDARD,
};
SymbolRectangle.displayName = `Blueprint5.Icon.SymbolRectangle`;
export default SymbolRectangle;
//# sourceMappingURL=symbol-rectangle.js.map