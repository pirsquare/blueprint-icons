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

export const Heart: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="heart" ref={ref}  {...props}>
            <path
                d={isLarge ? "M400 275C400 333 353 380 295 380C274.6 380 256 373.8 240 363.6V364.4C238.2 363.2 236.6 362 234.8 360.6C234 360 233 359.4 232 358.6C218.4 348.4 207.2 335 200 319.4C192 336.6 179.2 350.8 164 361.4C163.2 361.8 162.6 362.4 162 363C158.2 365.4 154 367.6 150 369.6C147.4 370.4 145.4 371.6 143 372.6C142 373 141 373.6 140 374V373.6C129 377.4 117.4 380 105 380C47 380 0 333 0 275C0 273.2 0.2 271.6 0.2 270H0C0 268.8 0.2 267.6 0.4 266.4S0.6 264 0.8 262.8C2.6 242.2 8.8 220 21.4 196.6C44.6 153.4 82 117.8 140 69.4V69.1999999999999C158 54.1999999999999 177.8 38.1999999999999 200 19.9999999999999C214.2 31.5999999999999 227.6 42.4 240 52.5999999999999V52.5999999999999C309.6 109.7999999999999 352.8 148.1999999999999 378.6 196.1999999999999C391.2 219.5999999999999 397.4000000000001 241.5999999999999 399.2000000000001 262.2C399.4000000000001 263.5999999999999 399.4000000000001 264.9999999999999 399.6 266.3999999999999C399.6 267.5999999999999 399.8000000000001 268.5999999999999 400 269.7999999999999H399.8C399.8 271.6 400 273.2 400 275z" : "M320 218.1C320 263.202 282.392 299.766 236 299.766C202.352 299.766 173.41 280.486 160 252.712C146.59 280.488 117.648 299.766 84 299.766C37.608 299.766 0 263.204 0 218.1C0 216.786 0.14 215.508 0.202 214.21H0.072C0.102 213.284 0.294 212.3 0.35 211.364C0.43 210.41 0.514 209.46 0.628 208.514C2.02 192.524 7.048 175.256 17.104 157.07C41.464 112.908 84.65 79.64 159.996 20C235.34 79.64 278.526 112.932 302.886 157.07C312.904 175.186 317.926 192.392 319.344 208.328C319.478 209.414 319.574 210.506 319.664 211.604C319.712 212.46 319.892 213.364 319.918 214.212H319.8C319.86 215.51 320 216.788 320 218.1z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Heart.defaultProps = {
    size: IconSize.STANDARD,
};
Heart.displayName = `Blueprint5.Icon.Heart`;
export default Heart;
