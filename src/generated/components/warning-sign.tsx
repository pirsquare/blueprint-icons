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

export const WarningSign: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="warning-sign" ref={ref}  {...props}>
            <path
                d={isLarge ? "M397.2 49.6C397.2 49.6 397.4000000000001 49.8000000000001 397.4000000000001 49.8000000000001L217.4 369.8000000000001C217.4 369.8000000000001 217.2 369.6 217.2 369.6C213.8 375.8 207.4 380 200 380S186.2 375.8 182.8 369.6L182.6 369.8L2.6 49.8L2.8 49.5999999999999C1.2 46.8 0 43.6 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 43.6 398.8 46.8 397.2 49.6zM220 60H180V100H220V60zM220 120H180V280H220V120z" : "M316.8 50L317 50.2L177 290.2L176.8 290C173.4 296 167.2 300 159.8 300S146.4 296 142.8 290C142.8 290 142.6 290.2 142.6 290.2L2.6 50.2L2.8 50C1 47 -0.2 43.8 -0.2 40C-0.2 29 8.8 20 19.8 20H299.8C310.8 20 319.8 29 319.8 40C319.8 43.8 318.6 47 316.8 50zM179.8 60.2H139.8V100.2H179.8V60.2zM179.8 120.2H139.8V220.2H179.8V120.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
WarningSign.defaultProps = {
    size: IconSize.STANDARD,
};
WarningSign.displayName = `Blueprint5.Icon.WarningSign`;
export default WarningSign;
