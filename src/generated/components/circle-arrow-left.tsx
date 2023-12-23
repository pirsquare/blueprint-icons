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

export const CircleArrowLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="circle-arrow-left" ref={ref}  {...props}>
            <path
                d={isLarge ? "M300 220H148.2L194 265.8C197.8 269.4 200 274.4 200 280C200 291 191 300 180 300C174.4 300 169.4 297.8 165.8 294.2L85.8 214.2C82.2 210.6 80 205.6 80 200C80 194.4 82.2 189.4 85.8 185.8L165.8 105.8C169.4 102.2 174.4 100 180 100C191 100 200 109 200 120C200 125.6 197.8 130.6 194.2 134.2000000000001L148.2 180H300C311 180 320 189 320 200C320 211 311 220 300 220zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40z" : "M220 180H148.2L174 205.8C177.8 209.4 180 214.4 180 220C180 231 171 240 160 240C154.4 240 149.4 237.8 145.8 234.2L85.8 174.2C82.2 170.6 80 165.6 80 160C80 154.4 82.2 149.4 85.8 145.8L145.8 85.8C149.4 82.2 154.4 80 160 80C171 80 180 89 180 100C180 105.6 177.8 110.6 174.2 114.2L148.2 140H220C231 140 240 149 240 160C240 171 231 180 220 180zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CircleArrowLeft.defaultProps = {
    size: IconSize.STANDARD,
};
CircleArrowLeft.displayName = `Blueprint5.Icon.CircleArrowLeft`;
export default CircleArrowLeft;
