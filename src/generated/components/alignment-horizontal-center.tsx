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

export const AlignmentHorizontalCenter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="alignment-horizontal-center" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 220H340V260C340 271 331 280 320 280H240C229 280 220 271 220 260V220H180V340C180 351 171 360 160 360H80C69 360 60 351 60 340V220H20C9 220 0 211 0 200C0 189 9 180 20 180H60V60C60 49 69 40 80 40H160C171 40 180 49 180 60V180H220V140C220 129 229 120 240 120H320C331 120 340 129 340 140V180H380C391 180 400 189 400 200C400 211 391 220 380 220z" : "M300 180H280V200C280 211 271 220 260 220H200C189 220 180 211 180 200V180H140V260C140 271 131 280 120 280H60C49 280 40 271 40 260V180H20C9 180 0 171 0 160C0 149 9 140 20 140H40V60C40 49 49 40 60 40H120C131 40 140 49 140 60V140H180V120C180 109 189 100 200 100H260C271 100 280 109 280 120V140H300C311 140 320 149 320 160C320 171 311 180 300 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
AlignmentHorizontalCenter.defaultProps = {
    size: IconSize.STANDARD,
};
AlignmentHorizontalCenter.displayName = `Blueprint5.Icon.AlignmentHorizontalCenter`;
export default AlignmentHorizontalCenter;
