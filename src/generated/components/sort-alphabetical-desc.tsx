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

export const SortAlphabeticalDesc: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="sort-alphabetical-desc" ref={ref}  {...props}>
            <path
                d={isLarge ? "M160.2 100C154.6 100 149.6 97.8 146 94.2000000000001L120 68.2V179.8C120 190.8 111 199.8 100 199.8S80 190.8 80 179.8V68.2L54.2 94C50.6 97.6 45.6 100 40 100C29 100 20 91 20 80C20 74.4 22.2 69.4 25.8 65.8H25.8L85.8 5.8C89.6 2.2 94.6 0 100 0S110.6 2.2 114.2 5.8L174.2 65.8C177.8 69.4 180 74.4 180 80C180.2 91 171.2 100 160.2 100zM249 213L377 370.6V400H210V366.6H328.2000000000001L200 211.2V179.8H380V213H249zM274.4000000000001 140.2L220 0H251.8L263 31.2H316.6L327.6 0H360.4L306.8 140.2H274.4000000000001zM271.2 54.2L289.8 105.6H290.2L308.2 54.2H271.2z" : "M119.8 80.2C114.2 80.2 109.2 78 105.6 74.4V74.4L99.8 68.6V140.2C99.8 151.2 90.8 160.2 79.8 160.2C68.8 160.2 59.8 151.2 59.8 140.2V68.4L54 74.2C50.4 77.8 45.4 80 39.8 80C28.8 80 19.8 71 19.8 60C19.8 54.4 22 49.4 25.6 45.8L65.6 5.8C69.2 2.2 74.2 0 79.8 0C85.4 0 90.4 2.2 94 5.8L134 45.8C137.6 49.4 139.8 54.4 139.8 60C139.8 71.2 130.8 80.2 119.8 80.2zM254 120H226.4L180 0.2H207.2L216.8 26.8H262.8L272 0.2H300L254 120zM223.8 46.6L239.8 90.6H240.2L255.6 46.6H223.8zM299.8 190H208.4L297.4000000000001 292.4V320H166.8V290.4H248.8L159.8 188.2V160.4H299.8V190z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SortAlphabeticalDesc.defaultProps = {
    size: IconSize.STANDARD,
};
SortAlphabeticalDesc.displayName = `Blueprint5.Icon.SortAlphabeticalDesc`;
export default SortAlphabeticalDesc;
