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

export const TimelineAreaChart: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="timeline-area-chart" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 80H40V340C40 351 31 360 20 360S0 351 0 340V60C0 49 9 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80zM380 348.2L238.6 206.8L152.6 275.6L152.4 275.4C148.8 278.2 144.8 280 140 280C135.2 280 130.8 278 127.4 275.2C127.4 275.2 127.2 275.4 127.2 275.4L60 219.4V100H380V348.2z" : "M300 268.2L198.2 166.4L132 216L131.8 215.8C128.4 218.2 124.6 220 120 220C115.2 220 111.2 218.2 107.6 215.4L107.6 215.6L60 177.6V100H300V268.2zM300 80H40V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TimelineAreaChart.defaultProps = {
    size: IconSize.STANDARD,
};
TimelineAreaChart.displayName = `Blueprint5.Icon.TimelineAreaChart`;
export default TimelineAreaChart;
