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

export const ArrowBottomLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="arrow-bottom-left" ref={ref}  {...props}>
            <path
                d={isLarge ? "M360 340C360 351 351 360 340 360C334.4 360 329.4 357.8 325.8 354.2L80 108.2V260C80 271 71 280 60 280S40 271 40 260V60C40 49 49 40 60 40H260C271 40 280 49 280 60C280 71 271 80 260 80H108.2L354.2000000000001 325.8C357.8 329.4 360 334.4 360 340z" : "M280 260C280 271 271 280 260 280C254.4 280 249.4 277.8 245.8 274.2L80 108.2V200C80 211 71 220 60 220S40 211 40 200V60C40 49 49 40 60 40H200C211 40 220 49 220 60C220 71 211 80 200 80H108.2L274 245.8C277.8 249.4 280 254.4 280 260z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ArrowBottomLeft.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowBottomLeft.displayName = `Blueprint5.Icon.ArrowBottomLeft`;
export default ArrowBottomLeft;
