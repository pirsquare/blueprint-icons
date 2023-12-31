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

export const Nest: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="nest" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 360C51 360 60 351 60 340V240C60 195.8 95.8 160 140 160H311.8L266 205.8C262.2 209.4 260 214.4 260 220C260 231 269 240 280 240C285.6 240 290.6 237.8 294.2000000000001 234.2L374.2000000000001 154.2C377.8 150.6 380 145.6 380 140C380 134.4 377.8 129.4 374.2000000000001 125.8L294.2000000000001 45.8C290.6 42.2 285.6 40 280 40C269 40 260 49 260 60C260 65.6 262.2 70.6 265.8 74.2000000000001L311.8 120H140C73.8 120 20 173.8 20 240V340C20 351 29 360 40 360z" : "M40 280C51 280 60 271 60 260V200C60 166.8 86.8 140 120 140H231.8L206 165.8C202.2 169.4 200 174.4 200 180C200 191 209 200 220 200C225.6 200 230.6 197.8 234.2 194.2L294.2000000000001 134.2C297.8 130.6 300 125.6 300 120C300 114.4 297.8 109.4 294.2000000000001 105.8L234.2 45.8C230.6 42.2 225.6 40 220 40C209 40 200 49 200 60C200 65.6 202.2 70.6 205.8 74.2L231.8 100H120C64.8 100 20 144.8 20 200V260C20 271 29 280 40 280z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Nest.defaultProps = {
    size: IconSize.STANDARD,
};
Nest.displayName = `Blueprint5.Icon.Nest`;
export default Nest;
