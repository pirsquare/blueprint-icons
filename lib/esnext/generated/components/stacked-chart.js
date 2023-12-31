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
export const StackedChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "stacked-chart", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M240 360C240 371 231 380 220 380H180C169 380 160 371 160 360V280H240V360zM300 80H340C351 80 360 89 360 100V200H280V100C280 89 289 80 300 80zM360 280C360 291 351 300 340 300H300C289 300 280 291 280 280V220H360V280zM240 260H160V160H240V260zM60 80H100C111 80 120 89 120 100V160H40V100C40 89 49 80 60 80zM380 60H20C9 60 0 51 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60zM120 220C120 231 111 240 100 240H60C49 240 40 231 40 220V180H120V220zM180 80H220C231 80 240 89 240 100V140H160V100C160 89 169 80 180 80z" : "M200 280C200 291 191 300 180 300H160C149 300 140 291 140 280V220H200V280zM260 80H280C291 80 300 89 300 100V160H240V100C240 89 249 80 260 80zM300 220C300 231 291 240 280 240H260C249 240 240 231 240 220V180H300V220zM200 200H140V140H200V200zM100 180C100 191 91 200 80 200H60C49 200 40 191 40 180V160H100V180zM160 80H180C191 80 200 89 200 100V120H140V100C140 89 149 80 160 80zM300 60H40C29 60 20 51 20 40C20 29 29 20 40 20H300C311 20 320 29 320 40C320 51 311 60 300 60zM60 80H80C91 80 100 89 100 100V140H40V100C40 89 49 80 60 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
StackedChart.defaultProps = {
    size: IconSize.STANDARD,
};
StackedChart.displayName = `Blueprint5.Icon.StackedChart`;
export default StackedChart;
//# sourceMappingURL=stacked-chart.js.map