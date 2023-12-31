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

export const GroupObjects: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="group-objects" ref={ref}  {...props}>
            <path
                d={isLarge ? "M120 260C86.8 260 60 233.2 60 200S86.8 140 120 140S180 166.8 180 200S153.2 260 120 260zM280 320H120C53.8 320 0 266.2000000000001 0 200C0 133.8 53.8 80 120 80H280C346.2 80 400 133.8 400 200C400 266.2 346.2 320 280 320zM280 100H120C64.8 100 20 144.8 20 200S64.8 300 120 300H280C335.2 300 380 255.2 380 200S335.2000000000001 100 280 100zM280 260C246.8 260 220 233.2 220 200S246.8 140 280 140S340 166.8 340 200S313.2 260 280 260z" : "M100 200C78 200 60 182 60 160C60 138 78 120 100 120S140 138 140 160C140 182 122 200 100 200zM220 260H100C44.8 260 0 215.2 0 160S44.8 60 100 60H220C275.2 60 320 104.8 320 160S275.2 260 220 260zM220 80H100C55.8 80 20 115.8 20 160C20 204.2 55.8 240 100 240H220C264.2000000000001 240 300 204.2 300 160C300 115.8 264.2000000000001 80 220 80zM220 200C198 200 180 182 180 160C180 138 198 120 220 120S260 138 260 160C260 182 242 200 220 200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GroupObjects.defaultProps = {
    size: IconSize.STANDARD,
};
GroupObjects.displayName = `Blueprint5.Icon.GroupObjects`;
export default GroupObjects;
