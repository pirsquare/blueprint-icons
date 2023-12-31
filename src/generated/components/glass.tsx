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

export const Glass: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="glass" ref={ref}  {...props}>
            <path
                d={isLarge ? "M340 280V400H60V280C60 209.4 112.2 151.4 180 141.6V40H120C109 40 100 31 100 20C100 9 109 0 120 0H280C291 0 300 9 300 20C300 31 291 40 280 40H220V141.6C287.8 151.4 340 209.4 340 280z" : "M40 320V240C40 180.6 83.2 131.4 140 121.8V40H100C89 40 80 31 80 20C80 9 89 0 100 0H220C231 0 240 9 240 20C240 31 231 40 220 40H180V121.8C236.8 131.4 280 180.6 280 240V320H40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Glass.defaultProps = {
    size: IconSize.STANDARD,
};
Glass.displayName = `Blueprint5.Icon.Glass`;
export default Glass;
