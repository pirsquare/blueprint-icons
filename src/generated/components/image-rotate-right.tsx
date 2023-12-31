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

export const ImageRotateRight: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="image-rotate-right" ref={ref}  {...props}>
            <path
                d={isLarge ? "M105.8 314.2C102.2 310.6 100 305.6 100 300C100 289 109 280 120 280C125.6 280 130.6 282.2 134.2 285.8L174.2 325.8C177.8 329.4 180 334.4 180 340C180 345.6 177.8 350.6 174.2 354.2L134.2 394.2C130.6 397.8 125.6 400 120 400C109 400 100 391 100 380C100 374.4 102.2 369.4 105.8 365.8L111.8 360H80C35.8 360 0 324.2 0 280V220C0 209 9 200 20 200S40 209 40 220V280C40 302 58 320 80 320H111.8L105.8 314.2zM310 140C326.6 140 340 153.4 340 170S326.6 200 310 200S280 186.6 280 170S293.4 140 310 140zM380 260H120C109 260 100 251 100 240V20C100 9 109 0 120 0H380C391 0 400 9 400 20V240C400 251 391 260 380 260zM360 60L260 120L240 80L200 160L140 70V220H360V60z" : "M114.2 205.8L154.2 245.8C157.8 249.4 160 254.4 160 260C160 265.6 157.8 270.6 154.2 274.2L114.2 314.2C110.6 317.8 105.6 320 100 320C89 320 80 311 80 300C80 294.4 82.2 289.4 85.8 285.8L91.8 280H60C26.8 280 0 253.2 0 220V160C0 149 9 140 20 140S40 149 40 160V220C40 231 49 240 60 240H91.8L85.8 234.2C82.2 230.6 80 225.6 80 220C80 209 89 200 100 200C105.6 200 110.6 202.2 114.2 205.8zM250 100C255.6 100 260 104.4 260 110C260 115.6 255.6 120 250 120S240 115.6 240 110C240 104.4 244.4 100 250 100zM300 180H120C109 180 100 171 100 160V20C100 9 109 0 120 0H300C311 0 320 9 320 20V160C320 171 311 180 300 180zM280 53.4L240 80L220 60L180 120L140 66.6V140H280V53.4z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ImageRotateRight.defaultProps = {
    size: IconSize.STANDARD,
};
ImageRotateRight.displayName = `Blueprint5.Icon.ImageRotateRight`;
export default ImageRotateRight;
