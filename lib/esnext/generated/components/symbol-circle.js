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
export const SymbolCircle = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "symbol-circle", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M80 199.8A120 120 0 0 1 320 199.8A120 120 0 0 1 80 199.8" : "M60 159.8A100 100 0 0 1 260 159.8A100 100 0 0 1 60 159.8", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SymbolCircle.defaultProps = {
    size: IconSize.STANDARD,
};
SymbolCircle.displayName = `Blueprint5.Icon.SymbolCircle`;
export default SymbolCircle;
//# sourceMappingURL=symbol-circle.js.map