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
export const ThList = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "th-list", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 380H20C8 380 0 370 0 360V40C0 30 8 20 20 20H380C390 20 400 30 400 40V360C400 370 390 380 380 380L380 380zM360 60H40V120H360V60L360 60zM360 140H40V200H360V140L360 140zM360 220H40V280H360V220L360 220z" : "M300 300H20C8 300 0 290 0 280V40C0 28 8 20 20 20H300C312 20 320 28 320 40V280C320 290 312 300 300 300L300 300zM280 60H40V100H280V60L280 60zM280 120H40V160H280V120L280 120zM280 180H40V220H280V180L280 180z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ThList.defaultProps = {
    size: IconSize.STANDARD,
};
ThList.displayName = `Blueprint5.Icon.ThList`;
export default ThList;
//# sourceMappingURL=th-list.js.map