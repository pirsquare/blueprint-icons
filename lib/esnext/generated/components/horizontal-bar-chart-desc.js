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
export const HorizontalBarChartDesc = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "horizontal-bar-chart-desc", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 80H20C9 80 0 71 0 60V40C0 29 9 20 20 20H200C211 20 220 29 220 40V60C220 71 211 80 200 80zM240 180H20C9 180 0 171 0 160V140C0 129 9 120 20 120H240C251 120 260 129 260 140V160C260 171 251 180 240 180zM300 280H20C9 280 0 271 0 260V240C0 229 9 220 20 220H300C311 220 320 229 320 240V260C320 271 311 280 300 280zM380 380H20C9 380 0 371 0 360V340C0 329 9 320 20 320H380C391 320 400 329 400 340V360C400 371 391 380 380 380z" : "M300 300H20C9 300 0 291 0 280C0 269 9 260 20 260H300C311 260 320 269 320 280C320 291 311 300 300 300zM160 140H20C9 140 0 131 0 120C0 109 9 100 20 100H160C171 100 180 109 180 120C180 131 171 140 160 140zM120 60H20C9 60 0 51 0 40C0 29 9 20 20 20H120C131 20 140 29 140 40C140 51 131 60 120 60zM220 220H20C9 220 0 211 0 200C0 189 9 180 20 180H220C231 180 240 189 240 200C240 211 231 220 220 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
HorizontalBarChartDesc.defaultProps = {
    size: IconSize.STANDARD,
};
HorizontalBarChartDesc.displayName = `Blueprint5.Icon.HorizontalBarChartDesc`;
export default HorizontalBarChartDesc;
//# sourceMappingURL=horizontal-bar-chart-desc.js.map