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

export const CircleArrowRight: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="circle-arrow-right" ref={ref}  {...props}>
            <path
                d={isLarge ? "M314.2000000000001 214.2L234.2 294.2000000000001C230.6 297.8 225.6 300 220 300C209 300 200 291 200 280C200 274.4 202.2 269.4 205.8 265.8L251.8 220H100C89 220 80 211 80 200C80 189 89 180 100 180H251.8L206 134.2000000000001C202.2 130.6 200 125.6 200 120C200 109 209 100 220 100C225.6 100 230.6 102.2 234.2 105.8L314.2000000000001 185.8C317.8 189.4 320 194.4 320 200C320 205.6 317.8 210.6 314.2000000000001 214.2zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40z" : "M174.2 234.2C170.6 237.8 165.6 240 160 240C149 240 140 231 140 220C140 214.4 142.2 209.4 145.8 205.8L171.8 180H100C89 180 80 171 80 160C80 149 89 140 100 140H171.8L146 114.2C142.2 110.6 140 105.6 140 100C140 89 149 80 160 80C165.6 80 170.6 82.2 174.2 85.8L234.2 145.8C237.8 149.4 240 154.4 240 160C240 165.6 237.8 170.6 234.2 174.2L174.2 234.2zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CircleArrowRight.defaultProps = {
    size: IconSize.STANDARD,
};
CircleArrowRight.displayName = `Blueprint5.Icon.CircleArrowRight`;
export default CircleArrowRight;
