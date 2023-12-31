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

export const KeyEnter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="key-enter" ref={ref}  {...props}>
            <path
                d={isLarge ? "M360 360C349 360 340 351 340 340V240C340 195.8 304.2000000000001 160 260 160H88.2L134 205.8C137.8 209.4 140 214.4 140 220C140 231 131 240 120 240C114.4 240 109.4 237.8 105.8 234.2L25.8 154.2C22.2 150.6 20 145.6 20 140C20 134.4 22.2 129.4 25.8 125.8L105.8 45.8C109.4 42.2 114.4 40 120 40C131 40 140 49 140 60C140 65.6 137.8 70.6 134.2 74.2000000000001L88.2 120H260C326.2 120 380 173.8 380 240V340C380 351 371 360 360 360z" : "M280 280C269 280 260 271 260 260V200C260 166.8 233.2 140 200 140H88.2L114 165.8C117.8 169.4 120 174.4 120 180C120 191 111 200 100 200C94.4 200 89.4 197.8 85.8 194.2L25.8 134.2C22.2 130.6 20 125.6 20 120C20 114.4 22.2 109.4 25.8 105.8L85.8 45.8C89.4 42.2 94.4 40 100 40C111 40 120 49 120 60C120 65.6 117.8 70.6 114.2 74.2L88.2 100H200C255.2 100 300 144.8 300 200V260C300 271 291 280 280 280z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
KeyEnter.defaultProps = {
    size: IconSize.STANDARD,
};
KeyEnter.displayName = `Blueprint5.Icon.KeyEnter`;
export default KeyEnter;
