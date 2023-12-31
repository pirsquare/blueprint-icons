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

export const GitBranch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="git-branch" ref={ref}  {...props}>
            <path
                d={isLarge ? "M300 360C266.8 360 240 333.2 240 300C240 274 256.8 252 280 243.6V220C280 198 262 180 240 180H160C145.4 180 131.8 175.8 120 169V283.6C143.2 292 160 314 160 340C160 373.2 133.2 400 100 400S40 373.2 40 340C40 314 56.8 292 80 283.6V116.2C56.8 108 40 86 40 60C40 26.8 66.8 0 100 0S160 26.8 160 60C160 85 144.6 106 123 115C129 129.6 143.2 140 160 140H240C284.2000000000001 140 320 175.8 320 220V243.6C343.2 252 360 274 360 300C360 333.2 333.2 360 300 360zM100 360C111 360 120 351 120 340C120 329 111 320 100 320S80 329 80 340C80 351 89 360 100 360zM100 40C89 40 80 49 80 60C80 71 89 80 100 80S120 71 120 60C120 49 111 40 100 40zM300 280C289 280 280 289 280 300C280 311 289 320 300 320S320 311 320 300C320 289 311 280 300 280z" : "M240 300C206.8 300 180 273.2 180 240C180 215 195.2 193.6 217 184.6C210.8 170.2 196.6 160 180 160H140C125.4 160 111.8 156 100 149V203.6C123.2 212 140 234 140 260C140 293.2 113.2 320 80 320S20 293.2 20 260C20 234 36.8 212 60 203.6V116.2C36.8 108.2 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 80.8 129.4 99 113.6 109.8C120.6 116 129.8 120 140 120H180C218.4 120 250.4 147 258.2 183C282.4 190.8 300 213.2 300 240C300 273.2 273.2 300 240 300zM80 280C91 280 100 271 100 260C100 249 91 240 80 240S60 249 60 260C60 271 69 280 80 280zM80 40C69 40 60 49 60 60C60 71 69 80 80 80S100 71 100 60C100 49 91 40 80 40zM240 220C229 220 220 229 220 240C220 251 229 260 240 260S260 251 260 240C260 229 251 220 240 220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GitBranch.defaultProps = {
    size: IconSize.STANDARD,
};
GitBranch.displayName = `Blueprint5.Icon.GitBranch`;
export default GitBranch;
