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

export const ChevronDown: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="chevron-down" ref={ref}  {...props}>
            <path
                d={isLarge ? "M320 280C314.4000000000001 280 309.4000000000001 277.8 305.8 274.2L200 168.2L94.2 274.2C90.6 277.8 85.6 280 80 280C69 280 60 271 60 260C60 254.4 62.2 249.4 65.8 245.8L185.8 125.8C189.4 122.2 194.4 120 200 120S210.6 122.2 214.2 125.8L334.2000000000001 245.8C337.8 249.4 340 254.4 340 260C340 271 331 280 320 280z" : "M240 220C234.4 220 229.4 217.8 225.8 214.2L160 148.2L94.2 214.2C90.6 217.8 85.6 220 80 220C69 220 60 211 60 200C60 194.4 62.2 189.4 65.8 185.8L145.8 105.8C149.4 102.2 154.4 100 160 100S170.6 102.2 174.2 105.8L254.2 185.8C257.8 189.4 260 194.4 260 200C260 211 251 220 240 220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ChevronDown.defaultProps = {
    size: IconSize.STANDARD,
};
ChevronDown.displayName = `Blueprint5.Icon.ChevronDown`;
export default ChevronDown;
