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

export const FolderOpen: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="folder-open" ref={ref}  {...props}>
            <path
                d={isLarge ? "M400 220C400 231 391 240 380 240H100C91.4 240 84.2 234.6 81.4 227L81.2 227L21.2 67L21.4 67C20.6 64.8 20 62.4 20 60C20 49 29 40 40 40H320C328.6 40 335.8 45.4 338.6 53L338.8 53L398.8 213L398.6 213C399.4 215.2 400 217.6 400 220zM61.4 247.4C64.4 254.8 71.6 260 80 260H360V300C360 311 351 320 340 320H168.2L134.2 354.2C130.6 357.8 125.6 360 120 360H20C9 360 0 351 0 340V93.8L61.4 247.4L61.4 247.4z" : "M41.2 186.2C44 194.2 51.2 200 60 200H280V220C280 231 271 240 260 240H128.2L94.2 274.2C90.6 277.8 85.6 280 80 280H20C9 280 0 271 0 260V63.2L41 186.2L41.2 186.2zM320 160C320 171 311 180 300 180H80C71.2 180 63.8 174.2 61.2 166.2L61.2 166.2L21.2 46.2L21.2 46.2C20.4 44.4 20 42.2 20 40C20 29 29 20 40 20H260C268.8 20 276.2 25.8 278.8 33.8L278.8 33.8L318.8 153.8L318.8 153.8C319.6 155.6 320 157.8 320 160z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
FolderOpen.defaultProps = {
    size: IconSize.STANDARD,
};
FolderOpen.displayName = `Blueprint5.Icon.FolderOpen`;
export default FolderOpen;
