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

export const Switch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="switch" ref={ref}  {...props}>
            <path
                d={isLarge ? "M245.857864 354.1421356L274.142136 325.8578644L131.5976988 183.280746C136.956984 173.382396 140 162.046566 140 150C140 111.340068 108.6599324 80 70 80C31.3400676 80 1e-13 111.340068 1e-13 150C1e-13 188.659932 31.3400676 220 70 220C82.0547216 220 93.397746 216.952862 103.3008492 211.5868102L245.857864 354.1421356zM330 220C368.659932 220 400 188.659932 400 150C400 111.340068 368.659932 80 330 80C291.3400680000001 80 260 111.340068 260 150C260 188.659932 291.3400680000001 220 330 220zM70 180C53.4314576 180 40 166.568542 40 150C40 133.431458 53.4314576 120 70 120C86.5685424 120 100 133.431458 100 150C100 166.568542 86.5685424 180 70 180zM330 180C313.431458 180 300 166.568542 300 150C300 133.431458 313.431458 120 330 120C346.568542 120 360 133.431458 360 150C360 166.568542 346.568542 180 330 180z" : "M185.8578644 274.1421356L214.142136 245.8578644L114.1591502 145.8545756C117.9034096 138.0253498 120 129.2575174 120 120C120 86.862916 93.137085 60 60 60C26.862915 60 1e-13 86.862916 1e-13 120C1e-13 153.137085 26.862915 180 60 180C69.2575174 180 78.0253498 177.9034096 85.8545756 174.1591502L185.8578644 274.1421356zM260 180C293.137084 180 320 153.137085 320 120C320 86.862916 293.137084 60 260 60C226.862916 60 200 86.862916 200 120C200 153.137085 226.862916 180 260 180zM60 140C48.954305 140 40 131.045695 40 120C40 108.954306 48.954305 100 60 100C71.045695 100 80 108.954306 80 120C80 131.045695 71.045695 140 60 140zM260 140C248.954306 140 240 131.045695 240 120C240 108.954306 248.954306 100 260 100C271.045694 100 280 108.954306 280 120C280 131.045695 271.045694 140 260 140z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Switch.defaultProps = {
    size: IconSize.STANDARD,
};
Switch.displayName = `Blueprint5.Icon.Switch`;
export default Switch;
