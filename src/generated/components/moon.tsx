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

export const Moon: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="moon" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 117C348.8 48 279.4000000000001 0 198.8 0C89 0 0 89 0 198.8C0 279.4 48 348.8 117 380C105.6 355 99.4 327.4 99.4 298.2C99.4 188.4 188.4 99.4 298.2 99.4C327.4000000000001 99.4 355 105.6 380 117z" : "M300 92.4C275.4 37.8 220.6 0 157 0C70.2 0 0 70.2 0 157C0 220.6 37.8 275.4 92.4 300C83.4 280.2 78.4 258.4 78.4 235.4C78.4 148.8 148.6 78.4 235.4 78.4C258.4 78.4 280.2 83.4 300 92.4z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Moon.defaultProps = {
    size: IconSize.STANDARD,
};
Moon.displayName = `Blueprint5.Icon.Moon`;
export default Moon;
