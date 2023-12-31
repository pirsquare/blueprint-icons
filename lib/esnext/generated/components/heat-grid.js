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
export const HeatGrid = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "heat-grid", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 160H400V240H280V160zM0 160H120V240H0V160zM20 220H100V180H20V220zM0 80C0 69 9 60 20 60H120V140H0V80zM380 340H280V260H400V320C400 331 391 340 380 340zM380 280H300V320H380V280zM0 320V260H120V340H20C9 340 0 331 0 320zM140 260H260V340H140V260zM280 60H380C391 60 400 69 400 80V140H280V60zM140 60H260V140H140V60zM160 120H240V80H160V120zM140 160H260V240H140V160z" : "M0 120H100V180H0V120zM20 160H80V140H20V160zM300 260H220V200H320V240C320 251 311 260 300 260zM300 220H240V240H300V220zM0 240V200H100V260H20C9 260 0 251 0 240zM0 60C0 49 9 40 20 40H100V100H0V60zM120 200H200V260H120V200zM120 40H200V100H120V40zM140 80H180V60H140V80zM220 40H300C311 40 320 49 320 60V100H220V40zM220 120H320V180H220V120zM120 120H200V180H120V120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
HeatGrid.defaultProps = {
    size: IconSize.STANDARD,
};
HeatGrid.displayName = `Blueprint5.Icon.HeatGrid`;
export default HeatGrid;
//# sourceMappingURL=heat-grid.js.map