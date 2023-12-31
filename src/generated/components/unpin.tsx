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

export const Unpin: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="unpin" ref={ref}  {...props}>
            <path
                d={isLarge ? "M235.4 376.8C219.2 360.6 220.6 331.2000000000001 235.8 301.6L122 225.8C78.6 255 39.6 265.8 23.2 249.4L122.2 150.4L79.8 79.6L150.6 122L249.6 23.0000000000001C266 39.4 255 78.4 225.8 121.8000000000001L301.8 235.6000000000001C331.2 220.4000000000001 360.6 218.8000000000001 377 235.2000000000001L235.4 376.8z" : "M187.8 300C177.8 290 179.8 270.4 190.8 249.4L87.6 169.2C57 190 30.4 198.6 20 188.2L90 118.2C89.6 117.8 62 62.2 62 62.2L118 90.2L188 20.2C198.6 30.8 190 57.4 169 87.8L249.4 191C270.2 180 289.6 178 299.6 188.2L187.8 300z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Unpin.defaultProps = {
    size: IconSize.STANDARD,
};
Unpin.displayName = `Blueprint5.Icon.Unpin`;
export default Unpin;
