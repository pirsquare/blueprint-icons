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

export const Undo: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="undo" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 120C78 120 60 102 60 80C60 58 78 40 100 40S140 58 140 80C140 102 122 120 100 120zM280 300H68.2L114 345.8C117.8 349.4 120 354.4 120 360C120 371 111 380 100 380C94.4 380 89.4 377.8 85.8 374.2L5.8 294.2C2.2 290.6 0 285.6 0 280C0 274.4 2.2 269.4 5.8 265.8L85.8 185.8C89.4 182.2 94.4 180 100 180C111 180 120 189 120 200C120 205.6 117.8 210.6 114.2 214.2L68.2 260H280C324.2000000000001 260 360 224.2 360 180C360 135.8 324.2000000000001 100 280 100H180V60H280C346.2 60 400 113.8 400 180S346.2 300 280 300z" : "M80 100C58 100 40 82 40 60S58 20 80 20S120 38 120 60S102 100 80 100zM220 240H68.2L94 265.8C97.8 269.4 100 274.4 100 280C100 291 91 300 80 300C74.4 300 69.4 297.8 65.8 294.2L5.8 234.2C2.2 230.6 0 225.6 0 220C0 214.4 2.2 209.4 5.8 205.8L65.8 145.8C69.4 142.2 74.4 140 80 140C91 140 100 149 100 160C100 165.6 97.8 170.6 94.2 174.2L68.2 200H220C253.2 200 280 173.2 280 140S253.2 80 220 80H140V40H220C275.2 40 320 84.8 320 140S275.2 240 220 240z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Undo.defaultProps = {
    size: IconSize.STANDARD,
};
Undo.displayName = `Blueprint5.Icon.Undo`;
export default Undo;
