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

export const Phone: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="phone" ref={ref}  {...props}>
            <path
                d={isLarge ? "M398.2 89.8C396.6 91.4 314 139.8 311.2 141.2C308.4 142.6 305.8 143.2 303.2 143.2C299.4000000000001 143.2 294.8 140.6 289 135.2C283.4 129.8 265.6 105.4 260.4 100C255.2 94.6 250.8 92 247.4 92C245.8 92 243.6 92.4 241 93.4C238.4 94.4 212 108 157 156.4C102 204.8 94.8 236.4 94.4 245.2C94.4 248.6 97 253 102.4 258.2000000000001C108 263.2 113.8 268.4 120.2 273C126.6 277.8 132.4 283 137.8 288.6C143.2 294.2000000000001 145.8 299 145.8 302.8C145.8 305.4 145.2 308.2 143.8 310.8C142.4 313.6 92.4 396.2 90.6 398C86.8 401.6 72.2 400 64.8 396C5 363.6 0 320 1 302.8C2 285 13.2 191.2 105 104.2000000000001C219 -4 298.2 0.2 303.4 0.2C320.8 0.2 373.8 9.8000000000001 396.4 64.0000000000001C399.6 71.6 402.6 85.4 398.2 89.8z" : "M318 71.8C316.8 73 250.6 111.8 248.4 112.8C246.2 113.8 244 114.4 242 114.4C239 114.4 235.2 112.2 230.6 108C226 103.6 211.8 84.2 207.6 80C203.4 75.6 200 73.6 197.2 73.6C195.8 73.6 194.2 74 192.2 74.8C190.2 75.6 169 86.4 125 125.2C81 163.8 75.2 189.2 75 196.2C75 199 77.2 202.4 81.4 206.6C85.8 210.8 90.4 214.8 95.4 218.6C100.4 222.4 105.2 226.6 109.4 231C113.8 235.6 115.8 239.4 115.8 242.4C115.8 244.6 115.2 246.6 114.2 248.8C113.2 250.8 73.2 317 71.8 318.4C68.8 321.4 57 320 51 316.8C3.2 290.8 -0.6 256 0 242.2C0.8 228 9.8 153 83.2 83.2C174.4 -3.4 237.8 0 242 0C255.8 0 298.4 7.6 316.4 51C319 57.4 321.4 68.4 318 71.8z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Phone.defaultProps = {
    size: IconSize.STANDARD,
};
Phone.displayName = `Blueprint5.Icon.Phone`;
export default Phone;
