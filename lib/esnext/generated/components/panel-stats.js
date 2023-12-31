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
export const PanelStats = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "panel-stats", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M20 380L380 380C391.0456940000001 380 400 371.045695 400 360L400 60C400 48.954306 391.0456940000001 40 380 40L20 40C8.954305 40 0 48.954306 0 60L0 360L0 360C0 371.045695 8.954305 380 20 380L20 380zM40 340L40 80L360 80L360 340L40 340zM220 340L240 340L240 80L220 80L220 340zM260 200L339.04762 200L339.04762 180L260 180L260 200zM260 160L339.04762 160L339.04762 140L260 140L260 160zM260 120L339.04762 120L339.04762 100L260 100L260 120zM260 240L339.04762 240L339.04762 220L260 220L260 240zM260 280L339.04762 280L339.04762 260L260 260L260 280zM260 320L339.04762 320L339.04762 300L260 300L260 320z" : "M200 240H260V220H200V240zM200 200H260V180H200V200zM200 160H260V140H200V160zM200 120H260V100H200V120zM300 300H20C8 300 0 292 0 280V60C0 48 8 40 20 40H300C312 40 320 48 320 60V280C320 292 312 300 300 300zM160 80H40V260H160V80zM280 80H180V260H280V80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
PanelStats.defaultProps = {
    size: IconSize.STANDARD,
};
PanelStats.displayName = `Blueprint5.Icon.PanelStats`;
export default PanelStats;
//# sourceMappingURL=panel-stats.js.map