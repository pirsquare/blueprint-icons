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

export const Saved: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="saved" ref={ref}  {...props}>
            <path
                d={isLarge ? "M240 400H80C69 400 60 391 60 380V20C60 9 69 0 80 0H340C351 0 360 9 360 20V280L240 400zM320 40H100V360H220V260H320V40zM154.2 174.2C150.6 177.8 145.6 180 140 180C129 180 120 171 120 160C120 154.4 122.2 149.4 125.8 145.8L185.8 85.8C189.4 82.2 194.4 80 200 80C206.4 80 211.8 83.2 215.4 87.6L215.6 87.4L295.6 187.4L295.4 187.6C298.2 191.2 300 195.2 300 200C300 211 291 220 280 220C273.6 220 268.2 216.8 264.6 212.4L264.4000000000001 212.6L198.4 130L154.2 174.2z" : "M134.2 134.2C130.6 137.8 125.6 140 120 140C109 140 100 131 100 120C100 114.4 102.2 109.4 105.8 105.8L145.8 65.8C149.4 62.2 154.4 60 160 60C167.8 60 174.4 64.6 177.8 71.2L178 71.2L218 151.2L217.8 151.2C219 153.8 220 156.8 220 160C220 171 211 180 200 180C192.2 180 185.6 175.4 182.2 168.8L182 168.8L154.4 113.6L134.2 134.2zM180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220L180 320zM240 40H80V280H160V200H240V40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Saved.defaultProps = {
    size: IconSize.STANDARD,
};
Saved.displayName = `Blueprint5.Icon.Saved`;
export default Saved;
