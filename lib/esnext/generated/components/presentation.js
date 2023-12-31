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
export const Presentation = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "presentation", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 380H220C220 391 211 400 200 400S180 391 180 380H20C9 380 0 371 0 360C0 349 9 340 20 340H40V120C40 109 49 100 60 100H151.8L86 34.2C82.2 30.6 80 25.6 80 20C80 9 89 0 100 0C105.6 0 110.6 2.2 114.2 5.8L180 71.8V20C180 9 189 0 200 0S220 9 220 20V71.8L285.8 6C289.4000000000001 2.2 294.4000000000001 0 300 0C311 0 320 9 320 20C320 25.6 317.8 30.6 314.2000000000001 34.2L248.2 100H340C351 100 360 109 360 120V340H380C391 340 400 349 400 360C400 371 391 380 380 380zM320 140H80V340H320V140z" : "M300 300H180C180 311 171 320 160 320S140 311 140 300H20C9 300 0 291 0 280C0 269 9 260 20 260V100C20 89 29 80 40 80H111.8L66 34.2C62.2 30.6 60 25.6 60 20C60 9 69 0 80 0C85.6 0 90.6 2.2 94.2 5.8L140 51.8V20C140 9 149 0 160 0S180 9 180 20V51.8L225.8 6C229.4 2.2 234.4 0 240 0C251 0 260 9 260 20C260 25.6 257.8 30.6 254.2 34.2L208.2 80H280C291 80 300 89 300 100V260C311 260 320 269 320 280C320 291 311 300 300 300zM260 120H60V260H260V120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Presentation.defaultProps = {
    size: IconSize.STANDARD,
};
Presentation.displayName = `Blueprint5.Icon.Presentation`;
export default Presentation;
//# sourceMappingURL=presentation.js.map