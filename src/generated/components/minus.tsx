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

export const Minus: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="minus" ref={ref}  {...props}>
            <path
                d={isLarge ? "M320 220H80C69 220 60 211 60 200C60 189 69 180 80 180H320C331 180 340 189 340 200C340 211 331 220 320 220z" : "M260 180H60C49 180 40 171 40 160C40 149 49 140 60 140H260C271 140 280 149 280 160C280 171 271 180 260 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Minus.defaultProps = {
    size: IconSize.STANDARD,
};
Minus.displayName = `Blueprint5.Icon.Minus`;
export default Minus;
