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
export const VerticalBarChartAsc = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "vertical-bar-chart-asc", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M160 260H140C129 260 120 251 120 240V20C120 9 129 0 140 0H160C171 0 180 9 180 20V240C180 251 171 260 160 260zM60 220H40C29 220 20 211 20 200V20C20 9 29 0 40 0H60C71 0 80 9 80 20V200C80 211 71 220 60 220zM260 320H240C229 320 220 311 220 300V20C220 9 229 0 240 0H260C271 0 280 9 280 20V300C280 311 271 320 260 320zM360 400H340C329 400 320 391 320 380V20C320 9 329 0 340 0H360C371 0 380 9 380 20V380C380 391 371 400 360 400z" : "M120 180C109 180 100 171 100 160V20C100 9 109 0 120 0S140 9 140 20V160C140 171 131 180 120 180zM40 140C29 140 20 131 20 120V20C20 9 29 0 40 0S60 9 60 20V120C60 131 51 140 40 140zM200 240C189 240 180 231 180 220V20C180 9 189 0 200 0S220 9 220 20V220C220 231 211 240 200 240zM280 320C269 320 260 311 260 300V20C260 9 269 0 280 0S300 9 300 20V300C300 311 291 320 280 320z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
VerticalBarChartAsc.defaultProps = {
    size: IconSize.STANDARD,
};
VerticalBarChartAsc.displayName = `Blueprint5.Icon.VerticalBarChartAsc`;
export default VerticalBarChartAsc;
//# sourceMappingURL=vertical-bar-chart-asc.js.map