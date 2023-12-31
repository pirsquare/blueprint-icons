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

export const Office: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="office" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 280H280V380C280 391 271 400 260 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H100V120H180V0H380C391 0 400 9 400 20V260C400 271 391 280 380 280zM120 160H40V240H120V160zM120 280H40V360H120V280zM240 160H160V240H240V160zM240 280H160V360H240V280zM360 60H280V120H360V60zM360 160H280V240H360V160z" : "M300 220H240V300C240 311 231 320 220 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H80V80H160V0H300C311 0 320 9 320 20V200C320 211 311 220 300 220zM100 120H40V180H100V120zM100 220H40V280H100V220zM200 120H140V180H200V120zM200 220H140V280H200V220zM280 40H240V80H280V40zM280 120H240V180H280V120z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Office.defaultProps = {
    size: IconSize.STANDARD,
};
Office.displayName = `Blueprint5.Icon.Office`;
export default Office;
