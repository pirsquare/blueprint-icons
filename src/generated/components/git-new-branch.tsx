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

export const GitNewBranch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="git-new-branch" ref={ref}  {...props}>
            <path
                d={isLarge ? "M340 340H320V360C320 371 311 380 300 380S280 371 280 360V340H260C249 340 240 331 240 320C240 309 249 300 260 300H280V280C280 269 289 260 300 260S320 269 320 280V300H340C351 300 360 309 360 320C360 331 351 340 340 340zM280 242.8V220C280 198 262 180 240 180H160C145.4 180 131.8 175.8 120 169V283.6C143.2 292 160 314 160 340C160 373.2 133.2 400 100 400S40 373.2 40 340C40 314 56.8 292 80 283.6V116.2C56.8 108 40 86 40 60C40 26.8 66.8 0 100 0S160 26.8 160 60C160 85 144.6 106 123 115C129 129.6 143.2 140 160 140H240C284.2000000000001 140 320 175.8 320 220V242.8C313.6 241.2 307 240 300 240S286.4 241.2 280 242.8zM100 360C111 360 120 351 120 340C120 329 111 320 100 320S80 329 80 340C80 351 89 360 100 360zM100 40C89 40 80 49 80 60S89 80 100 80S120 71 120 60S111 40 100 40z" : "M280 280H260V300C260 311 251 320 240 320S220 311 220 300V280H200C189 280 180 271 180 260C180 249 189 240 200 240H220V220C220 209 229 200 240 200S260 209 260 220V240H280C291 240 300 249 300 260C300 271 291 280 280 280zM216.4 184C210.2 169.8 196.4 160 180 160H140C125.4 160 111.8 156 100 149V203.6C123.2 212 140 234 140 260C140 293.2 113.2 320 80 320S20 293.2 20 260C20 234 36.8 212 60 203.6V116.2C36.8 108.2 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 80.8 129.4 99 113.6 109.8C120.6 116 129.8 120 140 120H180C218 120 249.8 146.6 257.8 182.2C252 180.8 246.2 180 240 180C231.8 180 224 181.6 216.4 184zM80 280C91 280 100 271 100 260S91 240 80 240S60 249 60 260S69 280 80 280zM80 40C69 40 60 49 60 60S69 80 80 80S100 71 100 60S91 40 80 40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GitNewBranch.defaultProps = {
    size: IconSize.STANDARD,
};
GitNewBranch.displayName = `Blueprint5.Icon.GitNewBranch`;
export default GitNewBranch;
