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

export const GitRepo: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="git-repo" ref={ref}  {...props}>
            <path
                d={isLarge ? "M140 340H100V300H140V340zM140 220H100V180H140V220zM140 280H100V240H140V280zM380 400H20C9 400 0 391 0 380V60C0 49 9 40 20 40H100V0L140 20L180 0V40H380C391 40 400 49 400 60V380C400 391 391 400 380 400zM360 80H180V100H100V80H40V120H360V80zM360 140H80V360H360V140z" : "M100 140H80V120H100V140zM300 320H20C9 320 0 311 0 300V40C0 29 9 20 20 20H80V0L120 20L160 0V20H300C311 20 320 29 320 40V300C320 311 311 320 300 320zM80 60H40V80H80V60zM280 60H160V80H280V60zM280 100H60V280H280V100zM100 260H80V240H100V260zM100 180H80V160H100V180zM100 220H80V200H100V220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GitRepo.defaultProps = {
    size: IconSize.STANDARD,
};
GitRepo.displayName = `Blueprint5.Icon.GitRepo`;
export default GitRepo;
