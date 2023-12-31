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

export const Properties: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="properties" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 100C18 100 0 82 0 60C0 38 18 20 40 20S80 38 80 60C80 82 62 100 40 100zM40 240C18 240 0 222 0 200C0 178 18 160 40 160S80 178 80 200C80 222 62 240 40 240zM140 320H380C391 320 400 329 400 340C400 351 391 360 380 360H140C129 360 120 351 120 340C120 329 129 320 140 320zM40 380C18 380 0 362 0 340C0 318 18 300 40 300S80 318 80 340C80 362 62 380 40 380zM380 220H140C129 220 120 211 120 200C120 189 129 180 140 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM380 80H140C129 80 120 71 120 60C120 49 129 40 140 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M40 200C18 200 0 182 0 160C0 138 18 120 40 120S80 138 80 160C80 182 62 200 40 200zM120 260H300C311 260 320 269 320 280C320 291 311 300 300 300H120C109 300 100 291 100 280C100 269 109 260 120 260zM40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM300 180H120C109 180 100 171 100 160C100 149 109 140 120 140H300C311 140 320 149 320 160C320 171 311 180 300 180zM300 60H120C109 60 100 51 100 40C100 29 109 20 120 20H300C311 20 320 29 320 40C320 51 311 60 300 60zM40 320C18 320 0 302 0 280C0 258 18 240 40 240S80 258 80 280C80 302 62 320 40 320z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Properties.defaultProps = {
    size: IconSize.STANDARD,
};
Properties.displayName = `Blueprint5.Icon.Properties`;
export default Properties;
