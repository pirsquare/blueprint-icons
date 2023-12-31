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
export const RegressionChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "regression-chart", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 80H62L386.2 332.2L374 348L40 88.2V340C40 351 31 360 20 360S0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80zM200 260C222 260 240 278 240 300C240 322 222 340 200 340S160 322 160 300C160 278 178 260 200 260zM100 180C122 180 140 198 140 220C140 242 122 260 100 260S60 242 60 220C60 198 78 180 100 180zM300 220C300 198 318 180 340 180S380 198 380 220C380 242 362 260 340 260S300 242 300 220zM200 140C200 118 218 100 240 100S280 118 280 140S262 180 240 180S200 162 200 140z" : "M260 190C260 173.4 273.4 160 290 160S320 173.4 320 190S306.6 220 290 220S260 206.6 260 190zM170 220C186.6 220 200 233.4 200 250S186.6 280 170 280S140 266.6 140 250S153.4 220 170 220zM180 130C180 113.4 193.4 100 210 100S240 113.4 240 130S226.6 160 210 160S180 146.6 180 130zM90 160C106.6 160 120 173.4 120 190S106.6 220 90 220S60 206.6 60 190S73.4 160 90 160zM300 80H65.2L305.8 251.8L294.2 268L40 86.6V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
RegressionChart.defaultProps = {
    size: IconSize.STANDARD,
};
RegressionChart.displayName = `Blueprint5.Icon.RegressionChart`;
export default RegressionChart;
//# sourceMappingURL=regression-chart.js.map