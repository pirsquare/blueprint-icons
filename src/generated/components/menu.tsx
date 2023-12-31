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

export const Menu: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="menu" ref={ref}  {...props}>
            <path
                d={isLarge ? "M20 280H380C391 280 400 289 400 300C400 311 391 320 380 320H20C9 320 0 311 0 300C0 289 9 280 20 280zM380 220H20C9 220 0 211 0 200C0 189 9 180 20 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM380 120H20C9 120 0 111 0 100C0 89 9 80 20 80H380C391 80 400 89 400 100C400 111 391 120 380 120z" : "M20 240H300C311 240 320 249 320 260C320 271 311 280 300 280H20C9 280 0 271 0 260C0 249 9 240 20 240zM300 80H20C9 80 0 71 0 60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80zM300 180H20C9 180 0 171 0 160C0 149 9 140 20 140H300C311 140 320 149 320 160C320 171 311 180 300 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Menu.defaultProps = {
    size: IconSize.STANDARD,
};
Menu.displayName = `Blueprint5.Icon.Menu`;
export default Menu;
