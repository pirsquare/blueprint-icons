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

export const SeriesFiltered: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="series-filtered" ref={ref}  {...props}>
            <path
                d={isLarge ? "M242.8 191C247.0000000000001 177.6 255.8 166.4 267.2000000000001 158.8L234.2 125.8C230.6 122.2 225.6 120 220 120S209.4 122.2 205.8 126L140 191.8L40 91.8V60H380C391 60 400 51 400 40S391 20 380 20H20C11.8 20 4.6 25 1.6 32.2C0.6 34.6 0 37.2 0 40V320C0 331 9 340 20 340S40 331 40 320V148.2L125.8 234.2C129.4 237.8 134.4 240 140 240S150.6 237.8 154.2 234.2L220 168.2L242.8 191zM387 380C394.2000000000001 380 400 374.2 400 367.2C400 363.6 398.6 360.4 396.2 358L335.6 297.4V238.4C335.6 234.8 334.2 231.6 331.8 229.2L306.2 203.4C304 201.4 300.8 200 297.2 200C290.2 200 284.4 205.8 284.4 212.8V297.4L223.8 358C221.4 360.4 220 363.6 220 367.2C220 374.2 225.8 380 232.8 380H387z" : "M185.8 134C191.8 121.6 201.8 111.6 214.2 105.8L194.2 85.8C190.6 82.2 185.6 80 180 80S169.4 82.2 165.8 86L100 151.8L40 91.8V60H300C311 60 320 51 320 40S311 20 300 20H20C9 20 0 29 0 40V240C0 251 9 260 20 260S40 251 40 240V148.2L85.8 194.2C89.4 197.8 94.4 200 100 200S110.6 197.8 114.2 194.2L180 128.2L185.8 134zM309.6 300C315.8 300 320 294.8 320 288.6C320 285.4 318.8 282.6 316.6 280.4L259.4000000000001 225.8V173.2C259.4000000000001 170 258.2 167.2 256 165L239.6 143C237.6 141 234.6 139.6 231.4 139.6C225.2 139.6 220 144.8 220 151V225.8L163.4 280.4C161.2 282.6 160 285.4 160 288.6C160 294.8 165.2 300 171.4 300H309.6z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SeriesFiltered.defaultProps = {
    size: IconSize.STANDARD,
};
SeriesFiltered.displayName = `Blueprint5.Icon.SeriesFiltered`;
export default SeriesFiltered;
