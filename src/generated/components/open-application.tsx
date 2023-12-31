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

export const OpenApplication: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="open-application" ref={ref}  {...props}>
            <path
                d={isLarge ? "M80 380H360C371 380 380 371 380 360V100C380 89 371 80 360 80H200V120H340V320H100V200H60V360C60 371 69 380 80 380zM130 280H270C275.6 280 280 284.4 280 290C280 295.6 275.6 300 270 300H130C124.4 300 120 295.6 120 290C120 284.4 124.4 280 130 280zM130 240H190C195.6 240 200 244.4 200 250C200 255.6 195.6 260 190 260H130C124.4 260 120 255.6 120 250C120 244.4 124.4 240 130 240zM230 200H130C124.4 200 120 204.4 120 210C120 215.6 124.4 220 130 220H230C235.6 220 240 215.6 240 210C240 204.4 235.6 200 230 200zM140 60C140 49 149 40 160 40C171 40 180 49 180 60V160C180 171 171 180 160 180H60C49 180 40 171 40 160C40 149 49 140 60 140H111.8L6 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L140 111.8V60z" : "M100 320H300C311 320 320 311 320 300V100C320 89 311 80 300 80H160V120H280V260H120V160H80V300C80 311 89 320 100 320zM150 220H250C255.6 220 260 224.4 260 230C260 235.6 255.6 240 250 240H150C144.4 240 140 235.6 140 230C140 224.4 144.4 220 150 220zM150 180H190C195.6 180 200 184.4 200 190C200 195.6 195.6 200 190 200H150C144.4 200 140 195.6 140 190C140 184.4 144.4 180 150 180zM220 150C220 144.4 216.7 140 212.5 140H167.5C163.3 140 160 144.4 160 150C160 155.6 163.3 160 167.5 160H212.5C216.7 160 220 155.6 220 150zM100 40C100 29 109 20 120 20C131 20 140 29 140 40V120C140 131 131 140 120 140H40C29 140 20 131 20 120C20 109 29 100 40 100H71.8L6 34.2C2.2 30.6 0 25.6 0 20C0 9 9 0 20 0C25.6 0 30.6 2.2 34.2 5.8L100 71.8V40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
OpenApplication.defaultProps = {
    size: IconSize.STANDARD,
};
OpenApplication.displayName = `Blueprint5.Icon.OpenApplication`;
export default OpenApplication;
