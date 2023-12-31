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

export const AlignCenter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="align-center" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 300C89 300 80 291 80 280C80 269 89 260 100 260H300C311 260 320 269 320 280C320 291 311 300 300 300H100zM20 340H380C391 340 400 349 400 360C400 371 391 380 380 380H20C9 380 0 371 0 360C0 349 9 340 20 340zM260 100C271 100 280 109 280 120C280 131 271 140 260 140H140C129 140 120 131 120 120C120 109 129 100 140 100H260zM340 60H60C49 60 40 51 40 40C40 29 49 20 60 20H340C351 20 360 29 360 40C360 51 351 60 340 60zM380 220H20C9 220 0 211 0 200C0 189 9 180 20 180H380C391 180 400 189 400 200C400 211 391 220 380 220z" : "M80 240C69 240 60 231 60 220C60 209 69 200 80 200H240C251 200 260 209 260 220C260 231 251 240 240 240H80zM20 260H300C311 260 320 269 320 280C320 291 311 300 300 300H20C9 300 0 291 0 280C0 269 9 260 20 260zM280 60H40C29 60 20 51 20 40C20 29 29 20 40 20H280C291 20 300 29 300 40C300 51 291 60 280 60zM300 180H20C9 180 0 171 0 160C0 149 9 140 20 140H300C311 140 320 149 320 160C320 171 311 180 300 180zM200 80C211 80 220 89 220 100C220 111 211 120 200 120H120C109 120 100 111 100 100C100 89 109 80 120 80H200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
AlignCenter.defaultProps = {
    size: IconSize.STANDARD,
};
AlignCenter.displayName = `Blueprint5.Icon.AlignCenter`;
export default AlignCenter;
