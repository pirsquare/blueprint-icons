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

export const CurvedRangeChart: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="curved-range-chart" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 80H60.4L103.2 114.8C148.2 80.8 249.8 105.6 339.8000000000001 174.6L314.0000000000001 204.6C242.8000000000001 149.8 167.8000000000001 124 135.4000000000001 140.8L346.4000000000001 312.2000000000001L333.8000000000001 327.8L122 155.8C109.2 188.6 151.2 254 223.8 309.8L198 339.8C106 269 59.8 177.4 89.8 129.6L40 89.2000000000001V340C40 351 31 360 20 360S0 351 0 340V60C0 57.2 0.6 54.6 1.6 52.2C4.6 45 11.8 40 20 40H380C391 40 400 49 400 60S391 80 380 80z" : "M300 80H62.4L98.6 107.8C133.2 87.6 209.2 108.4 280.2 160L255.8 190C206 154 157.2 132.6 133 134.2L286 252L274 268L117.4 147.4C117.2 168.8 153.4 211.2 206.8 250L182.4 280C107.6 226 66.8 158 85 122.6L40 88V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60S311 80 300 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CurvedRangeChart.defaultProps = {
    size: IconSize.STANDARD,
};
CurvedRangeChart.displayName = `Blueprint5.Icon.CurvedRangeChart`;
export default CurvedRangeChart;
