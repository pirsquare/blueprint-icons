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

export const More: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="more" ref={ref}  {...props}>
            <path
                d={isLarge ? "M20 190A50 50 0 0 1 120 190A50 50 0 0 1 20 190M300 190A50 50 0 0 1 400 190A50 50 0 0 1 300 190M160 190A50 50 0 0 1 260 190A50 50 0 0 1 160 190" : "M0 159.4A40 40 0 0 1 80 159.4A40 40 0 0 1 0 159.4M240 159.4A40 40 0 0 1 320 159.4A40 40 0 0 1 240 159.4M120 159.4A40 40 0 0 1 200 159.4A40 40 0 0 1 120 159.4"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
More.defaultProps = {
    size: IconSize.STANDARD,
};
More.displayName = `Blueprint5.Icon.More`;
export default More;
