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
import type { SVGIconProps } from "../../svgIconProps";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";

export const ScatterPlot: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="scatter-plot" ref={ref}  {...props}>
            <path
                d={isLarge ? "M180 220C202 220 220 238 220 260C220 282 202 300 180 300S140 282 140 260C140 238 158 220 180 220zM280 180C302 180 320 198 320 220C320 242 302 260 280 260S240 242 240 220C240 198 258 180 280 180zM360 280C382 280 400 298 400 320C400 342 382 360 360 360S320 342 320 320C320 298 338 280 360 280zM380 80H40V340C40 351 31 360 20 360S0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60S391 80 380 80zM100 100C122 100 140 118 140 140C140 162 122 180 100 180S60 162 60 140C60 118 78 100 100 100z" : "M300 80H40V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60S311 80 300 80zM290 220C306.6 220 320 233.4 320 250S306.6 280 290 280S260 266.6 260 250S273.4 220 290 220zM230 140C246.6 140 260 153.4 260 170S246.6 200 230 200S200 186.6 200 170S213.4 140 230 140zM150 180C166.6 180 180 193.4 180 210S166.6 240 150 240S120 226.6 120 210S133.4 180 150 180zM90 100C106.6 100 120 113.4 120 130S106.6 160 90 160S60 146.6 60 130S73.4 100 90 100z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ScatterPlot.defaultProps = {
    size: IconSize.STANDARD,
};
ScatterPlot.displayName = `Blueprint5.Icon.ScatterPlot`;
export default ScatterPlot;
