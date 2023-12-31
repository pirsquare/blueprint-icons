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

export const TrendingDown: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="trending-down" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 200C369 200 360 191 360 180V152.6L235 293.2L234.8 293C231.2 297.2 226 300 220 300C215.4 300 211.6 298.2 208.2 295.8L208 296L139.4 244.4L31 316.6L30.8 316.4C27.8 318.4 24.2 320 20 320C9 320 0 311 0 300C0 293 3.8 287.2 9.2 283.6L9 283.4L129 203.4L129.2 203.8C132.2 201.6 135.8 200 140 200C144.6 200 148.4 201.8 151.8 204.2L152 204L217.2 253L335.4 120H300C289 120 280 111 280 100C280 89 289 80 300 80H380C391 80 400 89 400 100V180C400 191 391 200 380 200z" : "M300 180C289 180 280 171 280 160V148.2L194.2 234.2C190.6 237.8 185.6 240 180 240C176.8 240 173.8 239 171.2 237.8L171.2 238L100 202.4L29 237.8L29 237.6C26.2 239 23.2 240 20 240C9 240 0 231 0 220C0 212.2 4.6 205.6 11.2 202.2L11.2 202L91.2 162L91.2 162.2C93.8 161 96.8 160 100 160S106.2 161 108.8 162.2L108.8 162L176 195.6L251.8 120H240C229 120 220 111 220 100S229 80 240 80H300C311 80 320 89 320 100V160C320 171 311 180 300 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TrendingDown.defaultProps = {
    size: IconSize.STANDARD,
};
TrendingDown.displayName = `Blueprint5.Icon.TrendingDown`;
export default TrendingDown;
