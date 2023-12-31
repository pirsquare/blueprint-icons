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

export const HorizontalBarChartAsc: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="horizontal-bar-chart-asc" ref={ref}  {...props}>
            <path
                d={isLarge ? "M20 220H240C251 220 260 229 260 240V260C260 271 251 280 240 280H20C9 280 0 271 0 260V240C0 229 9 220 20 220zM20 320H200C211 320 220 329 220 340V360C220 371 211 380 200 380H20C9 380 0 371 0 360V340C0 329 9 320 20 320zM380 80H20C9 80 0 71 0 60V40C0 29 9 20 20 20H380C391 20 400 29 400 40V60C400 71 391 80 380 80zM20 120H300C311 120 320 129 320 140V160C320 171 311 180 300 180H20C9 180 0 171 0 160V140C0 129 9 120 20 120z" : "M20 260H120C131 260 140 269 140 280S131 300 120 300H20C9 300 0 291 0 280S9 260 20 260zM20 180H160C171 180 180 189 180 200S171 220 160 220H20C9 220 0 211 0 200S9 180 20 180zM300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60zM20 100H220C231 100 240 109 240 120S231 140 220 140H20C9 140 0 131 0 120S9 100 20 100z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
HorizontalBarChartAsc.defaultProps = {
    size: IconSize.STANDARD,
};
HorizontalBarChartAsc.displayName = `Blueprint5.Icon.HorizontalBarChartAsc`;
export default HorizontalBarChartAsc;
