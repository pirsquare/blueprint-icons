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

export const Temperature: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="temperature" ref={ref}  {...props}>
            <path
                d={isLarge ? "M220 400C197.9086 400 180 382.09138 180 360V149.298C156.088 135.466 140 109.612 140 80C140 35.818 175.8172 0 220 0C264.182 0 300 35.818 300 80C300 109.612 283.9120000000001 135.466 260 149.298V360C260 382.09138 242.092 400 220 400zM60 350C60 355.5228 64.4772 360 70 360L150 360C155.5228 360 160 355.5228 160 350C160 344.4772 155.5228 340 150 340L70 340C64.4772 340 60 344.4772 60 350zM70 240C64.4772 240 60 235.5228 60 230C60 224.4772 64.4772 220 70 220H150C155.5228 220 160 224.4772 160 230C160 235.5228 155.5228 240 150 240H70zM100 290C100 295.5228 104.4772 300 110 300H150C155.5228 300 160 295.5228 160 290C160 284.4772000000001 155.5228 280 150 280H110C104.4772 280 100 284.4772000000001 100 290zM110 180C104.4772 180 100 175.522 100 170C100 164.478 104.4772 160 110 160H150C155.5228 160 160 164.478 160 170C160 175.522 155.5228 180 150 180H110z" : "M170 320C153.4314 320 140 306.56854 140 290V133.2636C116.3506 122.029 100 97.924 100 70C100 31.34 131.34 0 170 0C208.66 0 240 31.34 240 70C240 97.924 223.65 122.029 200 133.2636V290C200 306.56854 186.5686 320 170 320zM40 210C40 215.5228 44.4772 220 50 220L110 220C115.5228 220 120 215.5228 120 210C120 204.4772 115.5228 200 110 200L50 200C44.4772 200 40 204.4772 40 210zM50 300C44.4772 300 40 295.5228 40 290C40 284.4772 44.4772 280 50 280L110 280C115.5228 280 120 284.4772 120 290C120 295.5228 115.5228 300 110 300L50 300zM80 250C80 255.5228 84.4772 260 90 260H110C115.5228 260 120 255.5228 120 250C120 244.4772 115.5228 240 110 240H90C84.4772 240 80 244.4772 80 250zM90 180C84.4772 180 80 175.5228 80 170C80 164.4772 84.4772 160 90 160H110C115.5228 160 120 164.4772 120 170C120 175.5228 115.5228 180 110 180L90 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Temperature.defaultProps = {
    size: IconSize.STANDARD,
};
Temperature.displayName = `Blueprint5.Icon.Temperature`;
export default Temperature;
