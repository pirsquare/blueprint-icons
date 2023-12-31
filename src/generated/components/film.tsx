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

export const Film: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="film" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 360H280V300H120V360H20C9 360 0 351 0 340V60C0 49 9 40 20 40H120V100H280V40H380C391 40 400 49 400 60V340C400 351 391 360 380 360zM80 60H40V100H80V60zM80 120H40V160H80V120zM80 180H40V220H80V180zM80 240H40V280H80V240zM80 300H40V340H80V300zM280 140H120V260H280V140zM360 60H320V100H360V60zM360 120H320V160H360V120zM360 180H320V220H360V180zM360 240H320V280H360V240zM360 300H320V340H360V300z" : "M300 300H200V260H120V300H20C9 300 0 291 0 280V60C0 49 9 40 20 40H120V80H200V40H300C311 40 320 49 320 60V280C320 291 311 300 300 300zM80 60H40V100H80V60zM80 120H40V160H80V120zM80 180H40V220H80V180zM80 240H40V280H80V240zM200 120H120V220H200V120zM280 60H240V100H280V60zM280 120H240V160H280V120zM280 180H240V220H280V180zM280 240H240V280H280V240z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Film.defaultProps = {
    size: IconSize.STANDARD,
};
Film.displayName = `Blueprint5.Icon.Film`;
export default Film;
