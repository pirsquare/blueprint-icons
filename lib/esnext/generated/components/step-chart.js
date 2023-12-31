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
export const StepChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "step-chart", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 80H40V140H120C131 140 140 149 140 160V240H200V200C200 189 209 180 220 180H320C331 180 340 189 340 200V280H380C391 280 400 289 400 300C400 311 391 320 380 320H320C309 320 300 311 300 300V220H240V260C240 271 231 280 220 280H120C109 280 100 271 100 260V180H40V340C40 351 31 360 20 360S0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M300 80H40V120H100C111 120 120 129 120 140V180H160V160C160 149 169 140 180 140H260C271 140 280 149 280 160V220H300C311 220 320 229 320 240S311 260 300 260H260C249 260 240 251 240 240V180H200V200C200 211 191 220 180 220H100C89 220 80 211 80 200V160H40V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60S311 80 300 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
StepChart.defaultProps = {
    size: IconSize.STANDARD,
};
StepChart.displayName = `Blueprint5.Icon.StepChart`;
export default StepChart;
//# sourceMappingURL=step-chart.js.map