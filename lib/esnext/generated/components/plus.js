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
export const Plus = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "plus", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M320 220H220V320C220 331 211 340 200 340S180 331 180 320V220H80C69 220 60 211 60 200C60 189 69 180 80 180H180V80C180 69 189 60 200 60S220 69 220 80V180H320C331 180 340 189 340 200C340 211 331 220 320 220z" : "M260 180H180V260C180 271 171 280 160 280S140 271 140 260V180H60C49 180 40 171 40 160C40 149 49 140 60 140H140V60C140 49 149 40 160 40S180 49 180 60V140H260C271 140 280 149 280 160C280 171 271 180 260 180z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Plus.defaultProps = {
    size: IconSize.STANDARD,
};
Plus.displayName = `Blueprint5.Icon.Plus`;
export default Plus;
//# sourceMappingURL=plus.js.map