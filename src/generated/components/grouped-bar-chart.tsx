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

export const GroupedBarChart: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="grouped-bar-chart" ref={ref}  {...props}>
            <path
                d={isLarge ? "M240 80H260C271 80 280 89 280 100V300C280 311 271 320 260 320H240C229 320 220 311 220 300V100C220 89 229 80 240 80zM380 60H20C9 60 0 51 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60zM320 80H340C351 80 360 89 360 100V240C360 251 351 260 340 260H320C309 260 300 251 300 240V100C300 89 309 80 320 80zM140 80H160C171 80 180 89 180 100V200C180 211 171 220 160 220H140C129 220 120 211 120 200V100C120 89 129 80 140 80zM60 80H80C91 80 100 89 100 100V360C100 371 91 380 80 380H60C49 380 40 371 40 360V100C40 89 49 80 60 80z" : "M200 80C211 80 220 89 220 100V260C220 271 211 280 200 280S180 271 180 260V100C180 89 189 80 200 80zM260 80C271 80 280 89 280 100V200C280 211 271 220 260 220S240 211 240 200V100C240 89 249 80 260 80zM300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60zM120 80C131 80 140 89 140 100V160C140 171 131 180 120 180S100 171 100 160V100C100 89 109 80 120 80zM60 80C71 80 80 89 80 100V280C80 291 71 300 60 300S40 291 40 280V100C40 89 49 80 60 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GroupedBarChart.defaultProps = {
    size: IconSize.STANDARD,
};
GroupedBarChart.displayName = `Blueprint5.Icon.GroupedBarChart`;
export default GroupedBarChart;
