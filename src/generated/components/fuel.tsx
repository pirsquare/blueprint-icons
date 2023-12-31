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

export const Fuel: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="fuel" ref={ref}  {...props}>
            <path
                d={isLarge ? "M43.9274 360H0V320H40C46.347 320 52.3772 317.2266 56.508 312.4074L126.3636 230.909L88.906 205.9374C83.342 202.228 80 195.984 80 189.296V40C80 30 90 20 100 20H380C390 20 400 30 400 40V258C400 258.6742 399.972 259.3412 399.918 260H400V340C400 340 400 360 380 360H220C210 360 200 350 200 340V280L162.3922 254.9282L89.2674 339.2974C77.871 352.4462 61.3276 360 43.9274 360zM360 320V280H240V320H360z" : "M38.9756 300H0V260H40C46.2144 260 51.984 256.776 55.241 251.4834L94.536 187.6288L67.506 166.0048C62.7618 162.2094 60 156.4632 60 150.3874V42C60 29.85 68.9544 20 80 20H300C311.046 20 320 29.85 320 42V280C320 280 320 300 300 300H180C170 300 160 290 160 280V240L127.7608 214.2086L89.1018 272.9752C78.0048 289.844 59.1672 300 38.9756 300zM280 260V240H200V260H280z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Fuel.defaultProps = {
    size: IconSize.STANDARD,
};
Fuel.displayName = `Blueprint5.Icon.Fuel`;
export default Fuel;
