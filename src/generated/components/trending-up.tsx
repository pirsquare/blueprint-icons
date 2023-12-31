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

export const TrendingUp: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="trending-up" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 320H300C289 320 280 311 280 300C280 289 289 280 300 280H335.4L217.2 147L152 196L151.8 195.8C148.4 198.2 144.6 200 140 200C135.8 200 132.2 198.4 129.2 196.4L129 196.8L9 116.8L9.2 116.4C3.8 112.8 0 107 0 100C0 89 9 80 20 80C24.2 80 27.8 81.6 30.8 83.6L31 83.2L139.2 155.4L207.8 103.8L208 104C211.6 101.8 215.4 100 220 100C226 100 231.2 102.8 234.8 106.8L235 106.6L360 247.4V220C360 209 369 200 380 200S400 209 400 220V300C400 311 391 320 380 320z" : "M300 240H240C229 240 220 231 220 220S229 200 240 200H251.8L176 124.4L109 157.8L109 157.6C106.2 159 103.2 160 100 160S93.8 159 91.2 157.8L91.2 158L11.2 118L11.2 117.8C4.6 114.4 0 107.8 0 100C0 89 9 80 20 80C23.2 80 26.2 81 28.8 82.2L28.8 82L100 117.6L171 82L171 82.2C173.8 81 176.8 80 180 80C185.6 80 190.6 82.2 194.2 85.8L280 171.8V160C280 149 289 140 300 140S320 149 320 160V220C320 231 311 240 300 240z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TrendingUp.defaultProps = {
    size: IconSize.STANDARD,
};
TrendingUp.displayName = `Blueprint5.Icon.TrendingUp`;
export default TrendingUp;
