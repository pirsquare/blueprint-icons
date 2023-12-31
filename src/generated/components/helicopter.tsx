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

export const Helicopter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="helicopter" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 340V300H140H120H20V330C20 335.5228 15.52284 340 10 340C4.47716 340 0 335.5228 0 330V230C0 224.4772 4.47716 220 10 220C15.52284 220 20 224.4772 20 230V260L120 220C120 189.194 136.4754 148.504 180 123.304V80H110C104.4772 80 100 75.524 100 70C100 64.478 104.4772 60 110 60H189.9288L190 60L190.0712 60H289.928L290 60L290.072 60H330C331.552 60 333.084 60.362 334.4720000000001 61.056L374.4720000000001 81.056C379.4120000000001 83.526 381.414 89.532 378.944 94.472C376.474 99.412 370.468 101.414 365.528 98.944L327.6400000000001 80H300V102C345.644 111.266 380 151.62 380 200C380 255.2284 335.228 300 280 300H260V340H390C395.522 340 400 344.4772 400 350C400 355.5228 395.522 360 390 360H260H200H70C64.4772 360 60 355.5228 60 350C60 344.4772 64.4772 340 70 340H200zM280 80V100C247.846 100 221.436 105.17 200 113.662V80H280zM280 200V220V280C324.182 280 360 244.1828 360 200H280z" : "M10 280C15.52284 280 20 275.5228 20 270V240H100H160V260H50C44.4772 260 40 264.4772 40 270C40 275.5228 44.4772 280 50 280H160H200H310C315.522 280 320 275.5228 320 270C320 264.4772 315.522 260 310 260H200V240H220C265.186 240 300 204.1828 300 160C300 122.604 275.06 91.2 240 82.436V60H247.64L285.528 78.944C290.468 81.414 296.474 79.412 298.944 74.472C301.414 69.532 299.412 63.526 294.472 61.056L252.36 40H230.072L230 40L229.928 40H150.0712L150 40L149.9288 40H90C84.4772 40 80 44.478 80 50C80 55.524 84.4772 60 90 60H140V106.112C114.9718 125.2792 100 152.6396 100 180L20 200L20 170C20 164.4772 15.52284 160 10 160C4.47714 160 0 164.4772 0 170V270C0 275.5228 4.47716 280 10 280zM160 93.686V60H220V80C197.6314 80 177.3052 85.106 160 93.686zM220 220V160H280C280 193.137 253.138 220 220 220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Helicopter.defaultProps = {
    size: IconSize.STANDARD,
};
Helicopter.displayName = `Blueprint5.Icon.Helicopter`;
export default Helicopter;
