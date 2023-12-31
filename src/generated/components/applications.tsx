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

export const Applications: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="applications" ref={ref}  {...props}>
            <path
                d={isLarge ? "M300 300H20C9 300 0 291 0 280V20C0 9 9 0 20 0H300C311 0 320 9 320 20V280C320 291 311 300 300 300zM280 40H40V240H280V40zM70 200H210C215.6 200 220 204.4 220 210C220 215.6 215.6 220 210 220H70C64.4 220 60 215.6 60 210C60 204.4 64.4 200 70 200zM70 160H130C135.6 160 140 164.4 140 170C140 175.6 135.6 180 130 180H70C64.4 180 60 175.6 60 170C60 164.4 64.4 160 70 160zM70 120H170C175.6 120 180 124.4 180 130C180 135.6 175.6 140 170 140H70C64.4 140 60 135.6 60 130C60 124.4 64.4 120 70 120zM380 400H100C89 400 80 391 80 380V320H120V340H360V140H340V100H380C391 100 400 109 400 120V380C400 391 391 400 380 400z" : "M70 100H110C115.6 100 120 104.4 120 110C120 115.6 115.6 120 110 120H70C64.4 120 60 115.6 60 110C60 104.4 64.4 100 70 100zM70 140H170C175.6 140 180 144.4 180 150C180 155.6 175.6 160 170 160H70C64.4 160 60 155.6 60 150C60 144.4 64.4 140 70 140zM220 240H20C9 240 0 231 0 220V20C0 9 9 0 20 0H220C231 0 240 9 240 20V220C240 231 231 240 220 240zM200 40H40V180H200V40zM300 320H100C89 320 80 311 80 300V260H120V280H280V140H260V100H300C311 100 320 109 320 120V300C320 311 311 320 300 320zM70 60H130C135.6 60 140 64.4 140 70C140 75.6 135.6 80 130 80H70C64.4 80 60 75.6 60 70C60 64.4 64.4 60 70 60z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Applications.defaultProps = {
    size: IconSize.STANDARD,
};
Applications.displayName = `Blueprint5.Icon.Applications`;
export default Applications;
