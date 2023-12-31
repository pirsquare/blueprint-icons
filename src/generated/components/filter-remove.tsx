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

export const FilterRemove: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="filter-remove" ref={ref}  {...props}>
            <path
                d={isLarge ? "M300 360C300 371 291 380 280 380H20C9 380 0 371 0 360C0 354.4 2.2 349.4 5.8 345.8L100 251.8V80C100 69 109 60 120 60C125.6 60 130.6 62.2 134.2 65.8L194.2 125.8C197.8 129.4 200 134.4 200 140V251.8L294.2000000000001 346C297.8 349.4 300 354.4 300 360zM358.2 90L394 125.8C397.8 129.4 400 134.4 400 140C400 151 391 160 380 160C374.4 160 369.4 157.8 365.8 154.2L330 118.4L294.2000000000001 154.2C290.6 157.8 285.6 160 280 160C269 160 260 151 260 140C260 134.4 262.2 129.4 265.8 125.8L301.6 90L265.8 54.2C262.2 50.6 260 45.6 260 40C260 29 269 20 280 20C285.6 20 290.6 22.2 294.2000000000001 25.8L330 61.6L365.8 25.8C369.4 22.2 374.4 20 380 20C391 20 400 29 400 40C400 45.6 397.8 50.6 394.2000000000001 54.2L358.2 90z" : "M240 280C240 291 231 300 220 300H20C9 300 0 291 0 280C0 274.4 2.2 269.4 5.8 265.8L80 191.8V80C80 69 89 60 100 60C105.6 60 110.6 62.2 114.2 65.8L154.2 105.8C157.8 109.4 160 114.4 160 120V191.8L234.2 266C237.8 269.4 240 274.4 240 280zM288.2 80L314 105.8C317.8 109.4 320 114.4 320 120C320 131 311 140 300 140C294.4000000000001 140 289.4000000000001 137.8 285.8 134.2L260 108.2L234.2 134C230.6 137.8 225.6 140 220 140C209 140 200 131 200 120C200 114.4 202.2 109.4 205.8 105.8L231.8 80L206 54.2C202.2 50.6 200 45.6 200 40C200 29 209 20 220 20C225.6 20 230.6 22.2 234.2 25.8L260 51.8L285.8 26C289.4000000000001 22.2 294.4000000000001 20 300 20C311 20 320 29 320 40C320 45.6 317.8 50.6 314.2000000000001 54.2L288.2 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
FilterRemove.defaultProps = {
    size: IconSize.STANDARD,
};
FilterRemove.displayName = `Blueprint5.Icon.FilterRemove`;
export default FilterRemove;
