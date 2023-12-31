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

export const LogOut: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="log-out" ref={ref}  {...props}>
            <path
                d={isLarge ? "M394.2000000000001 214.2L294.2000000000001 314.2000000000001C290.6 317.8 285.6 320 280 320C269 320 260 311 260 300C260 294.4 262.2 289.4 265.8 285.8L331.8 220H120C109 220 100 211 100 200S109 180 120 180H331.8L266 114.2000000000001C262.2 110.6 260 105.6 260 100C260 89 269 80 280 80C285.6 80 290.6 82.2 294.2000000000001 85.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2zM180 40H40V360H180C191 360 200 369 200 380S191 400 180 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H180C191 0 200 9 200 20S191 40 180 40z" : "M140 40H40V280H140C151 280 160 289 160 300S151 320 140 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H140C151 0 160 9 160 20S151 40 140 40zM314.2000000000001 174.2L254.2 234.2C250.6 237.8 245.6 240 240 240C229 240 220 231 220 220C220 214.4 222.2 209.4 225.8 205.8L251.8 180H120C109 180 100 171 100 160S109 140 120 140H251.8L226 114.2C222.2 110.6 220 105.6 220 100C220 89 229 80 240 80C245.6 80 250.6 82.2 254.2 85.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160C320 165.6 317.8 170.6 314.2000000000001 174.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
LogOut.defaultProps = {
    size: IconSize.STANDARD,
};
LogOut.displayName = `Blueprint5.Icon.LogOut`;
export default LogOut;
