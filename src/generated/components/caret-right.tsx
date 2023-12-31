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

export const CaretRight: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="caret-right" ref={ref}  {...props}>
            <path
                d={isLarge ? "M280 200C280 206.2 277 211.4 272.6 215.2L272.8 215.4L152.8 315.4L152.6 315.2C149.2 318 144.8 320 140 320C129 320 120 311 120 300V100C120 89 129 80 140 80C144.8 80 149.2 82 152.6 84.8L152.8 84.6L272.8 184.6L272.6 184.8C277 188.6 280 193.8 280 200z" : "M220 160C220 163 218.6 165.6 216.6 167.4L216.6 167.4L136.6 237.4L136.6 237.4C134.8 239 132.6 240 130 240C124.4 240 120 235.6 120 230V90C120 84.4 124.4 80 130 80C132.6 80 134.8 81 136.6 82.6C136.6 82.6 136.6 82.6 136.6 82.6L216.6 152.6L216.6 152.6C218.6 154.4 220 157 220 160z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CaretRight.defaultProps = {
    size: IconSize.STANDARD,
};
CaretRight.displayName = `Blueprint5.Icon.CaretRight`;
export default CaretRight;
