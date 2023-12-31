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

export const DoubleChevronDown: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="double-chevron-down" ref={ref}  {...props}>
            <path
                d={isLarge ? "M185.8 185.8C189.4 182.2 194.4 180 200 180S210.6 182.2 214.2 185.8L334.2000000000001 305.8C337.8 309.4 340 314.4 340 320C340 331 331 340 320 340C314.4000000000001 340 309.4000000000001 337.8 305.8 334.2L200 228.2L94.2 334.2C90.6 337.8 85.6 340 80 340C69 340 60 331 60 320C60 314.4 62.2 309.4 65.8 305.8L185.8 185.8zM320 220C314.4000000000001 220 309.4000000000001 217.8 305.8 214.2L200 108.2L94.2 214.2C90.6 217.8 85.6 220 80 220C69 220 60 211 60 200C60 194.4 62.2 189.4 65.8 185.8L185.8 65.8C189.4 62.2 194.4 60 200 60S210.6 62.2 214.2 65.8L334.2000000000001 185.8C337.8 189.4 340 194.4 340 200C340 211 331 220 320 220z" : "M145.8 145.8C149.4 142.2 154.4 140 160 140S170.6 142.2 174.2 145.8L254.2 225.8C257.8 229.4 260 234.4 260 240C260 251 251 260 240 260C234.4 260 229.4 257.8 225.8 254.2L160 188.2L94.2 254.2C90.6 257.8 85.6 260 80 260C69 260 60 251 60 240C60 234.4 62.2 229.4 65.8 225.8L145.8 145.8zM240 160C234.4 160 229.4 157.8 225.8 154.2L160 88.2L94.2 154.2C90.6 157.8 85.6 160 80 160C69 160 60 151 60 140C60 134.4 62.2 129.4 65.8 125.8L145.8 45.8C149.4 42.2 154.4 40 160 40S170.6 42.2 174.2 45.8L254.2 125.8C257.8 129.4 260 134.4 260 140C260 151 251 160 240 160z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DoubleChevronDown.defaultProps = {
    size: IconSize.STANDARD,
};
DoubleChevronDown.displayName = `Blueprint5.Icon.DoubleChevronDown`;
export default DoubleChevronDown;
