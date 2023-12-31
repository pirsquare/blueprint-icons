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

export const Ammunition: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="ammunition" ref={ref}  {...props}>
            <path
                d={isLarge ? "M120 280V283.4314C120 319.6516 105.6116 354.3884 80 380C54.3884 354.3884 40 319.6516 40 283.4314V280H120zM120 40V20H40V40H120zM120 60V260H40V60H120zM160 20V40H240V20H160zM240 283.4314V280H160V283.4314C160 319.6516 174.3884 354.3884 200 380C225.612 354.3884 240 319.6516 240 283.4314zM240 260V60H160V260H240zM280 40V20H360V40H280zM360 280V283.4314C360 319.6516 345.612 354.3884 320 380C294.3880000000001 354.3884 280 319.6516 280 283.4314V280H360zM360 60V260H280V60H360z" : "M42.5196 297.9882C66.211 279.0332 80 250.3418 80 220V60H0V220C0 250.3418 13.78906 279.0332 37.4804 297.9882L40 300L42.5196 297.9882zM162.5196 297.9882C186.211 279.0332 200 250.3418 200 220V60H120V220C120 250.3418 133.789 279.0332 157.4804 297.9882L160 300L162.5196 297.9882zM320 220C320 250.3418 306.21 279.0332 282.52 297.9882L280 300L277.48 297.9882C253.79 279.0332 240 250.3418 240 220V60H320V220zM80 20V40H0V20H80zM200 40V20H120V40H200zM320 20V40H240V20H320z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Ammunition.defaultProps = {
    size: IconSize.STANDARD,
};
Ammunition.displayName = `Blueprint5.Icon.Ammunition`;
export default Ammunition;
