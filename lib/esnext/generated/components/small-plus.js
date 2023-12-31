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
export const SmallPlus = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "small-plus", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 220H220V280C220 291 211 300 200 300S180 291 180 280V220H120C109 220 100 211 100 200C100 189 109 180 120 180H180V120C180 109 189 100 200 100S220 109 220 120V180H280C291 180 300 189 300 200C300 211 291 220 280 220z" : "M220 180H180V220C180 231 171 240 160 240S140 231 140 220V180H100C89 180 80 171 80 160C80 149 89 140 100 140H140V100C140 89 149 80 160 80S180 89 180 100V140H220C231 140 240 149 240 160C240 171 231 180 220 180z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SmallPlus.defaultProps = {
    size: IconSize.STANDARD,
};
SmallPlus.displayName = `Blueprint5.Icon.SmallPlus`;
export default SmallPlus;
//# sourceMappingURL=small-plus.js.map