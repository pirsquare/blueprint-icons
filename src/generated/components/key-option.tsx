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

export const KeyOption: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="key-option" ref={ref}  {...props}>
            <path
                d={isLarge ? "M260 320H380C391 320 400 329 400 340C400 351 391 360 380 360H260C249 360 240 351 240 340C240 329 249 320 260 320zM380 80H291.6L137.4 350L137 349.8C133.6 355.8 127.4 360 120 360H20C9 360 0 351 0 340C0 329 9 320 20 320H108.4L262.6 50L262.8 50.2C266.4 44.2 272.6 40 280 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M220 240H300C311 240 320 249 320 260C320 271 311 280 300 280H220C209 280 200 271 200 260C200 249 209 240 220 240zM300 80H231.4L117.2 270.2L116.8 270.2C113.4 276 107.2 280 100 280H20C9 280 0 271 0 260C0 249 9 240 20 240H88.6L202.8 49.8L203 50C206.6 44 212.8 40 220 40H300C311 40 320 49 320 60C320 71 311 80 300 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
KeyOption.defaultProps = {
    size: IconSize.STANDARD,
};
KeyOption.displayName = `Blueprint5.Icon.KeyOption`;
export default KeyOption;
