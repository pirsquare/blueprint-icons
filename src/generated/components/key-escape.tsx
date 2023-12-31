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

export const KeyEscape: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="key-escape" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 240C51 240 60 249 60 260V311.8L185.8 186C189.4 182.2 194.4 180 200 180C211 180 220 189 220 200C220 205.6 217.8 210.6 214.2 214.2L88.2 340H140C151 340 160 349 160 360C160 371 151 380 140 380H40C29 380 20 371 20 360V260C20 249 29 240 40 240zM220 378.8V338C287.8 328.2 340 270.4 340 200C340 122.6 277.4000000000001 60 200 60C129.6 60 71.8 112.2 62 180H21.2C31.2 90 107.4 20 200 20C299.4 20 380 100.6 380 200C380 292.6 310 368.8 220 378.8z" : "M40 180C51 180 60 189 60 200V231.8L145.8 146C149.4 142.2 154.4 140 160 140C171 140 180 149 180 160C180 165.6 177.8 170.6 174.2 174.2L88.2 260H120C131 260 140 269 140 280C140 291 131 300 120 300H40C29 300 20 291 20 280V200C20 189 29 180 40 180zM180 298V258C225.6 248.8 260 208.4 260 160C260 104.8 215.2 60 160 60C111.6 60 71.2 94.4 62 140H22C31.8 72.2 89.6 20 160 20C237.4000000000001 20 300 82.6 300 160C300 230.4 247.8 288.2 180 298z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
KeyEscape.defaultProps = {
    size: IconSize.STANDARD,
};
KeyEscape.displayName = `Blueprint5.Icon.KeyEscape`;
export default KeyEscape;
