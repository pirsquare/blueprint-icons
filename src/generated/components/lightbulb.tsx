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

export const Lightbulb: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="lightbulb" ref={ref}  {...props}>
            <path
                d={isLarge ? "M126.6 132.2C126.6 125.4 132 120 138.6 120H261.2C267.8 120 273.2 125.4 273.2 132.2C280.6 204.4 320 212 320 278.2C320 345.6 266.2 400 200 400S80 345.6 80 278.2C80 212 119.4 204.4 126.6 132.2L126.6 132.2zM260 100H140C129 100 120 91 120 80C120 69 129 60 140 60H260C271 60 280 69 280 80C280 91 271 100 260 100zM240 40H160C149 40 140 31 140 20C140 9 149 0 160 0H240C251 0 260 9 260 20C260 31 251 40 240 40z" : "M180.2 40H140.2C129.2 40 120.2 31 120.2 20C120.2 9 129.2 0 140.2 0H180.2C191.2 0 200.2 9 200.2 20C200.2 31 191.4 40 180.2 40zM200.2 100H120.2C109.2 100 100.2 91 100.2 80C100.2 69 109.2 60 120.2 60H200.2C211.2 60 220.2 69 220.2 80C220.2 91 211.4 100 200.2 100zM160.2 320C105.2 320 60.6 281 60.6 233C60.6 185.6 93.2 180.2 99.4 128.6H99.4C99.4 123.8 103.8 119.8 109.4 119.8H211.2C216.8 119.8 221.2 123.6 221.2 128.6C227.4 180.2 260 185.6 260 233C260 281 215.4 320 160.2 320z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Lightbulb.defaultProps = {
    size: IconSize.STANDARD,
};
Lightbulb.displayName = `Blueprint5.Icon.Lightbulb`;
export default Lightbulb;
