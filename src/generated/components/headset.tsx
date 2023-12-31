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

export const Headset: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="headset" ref={ref}  {...props}>
            <path
                d={isLarge ? "M379.4 220H380C380 319.4 299.4 400 200 400S20 319.4 20 220H20.6C8.2 205.4 0 184 0 160C0 125.2 16.8 96 40 84.8V80C40 46.8 66.8 20 100 20H160C160 9 169 0 180 0H220C231 0 240 9 240 20V60C240 71 231 80 220 80H180C169 80 160 71 160 60H100C89 60 80 69 80 80C91 80 100 89 100 100V220C100 231 91 240 80 240H61.6C71.4 307.8 129.4 360 200 360S328.6 307.8 338.4000000000001 240H320C309 240 300 231 300 220V100C300 89 309 80 320 80H340C373.2 80 400 115.8 400 160C400 184 391.8 205.4 379.4 220z" : "M297 193.2C283.6 265.6 227.4 320 160 320S36.4 265.6 23 193.2C9.4 182 0 158 0 130C0 91.4 18 60 40 60C40 38 58 20 80 20H120C120 9 129 0 140 0H180C191 0 200 9 200 20V40C200 51 191 60 180 60H140C129 60 120 51 120 40H80C69 40 60 49 60 60C71 60 80 69 80 80V180C80 189 74 196.2 65.8 198.8C79.4 246 116.2 280 160 280S240.6 246 254.2 198.8C246 196.2 240 189 240 180V80C240 69 249 60 260 60H280C302 60 320 91.4 320 130C320 158 310.6 182 297 193.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Headset.defaultProps = {
    size: IconSize.STANDARD,
};
Headset.displayName = `Blueprint5.Icon.Headset`;
export default Headset;
