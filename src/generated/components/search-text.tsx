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

export const SearchText: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="search-text" ref={ref}  {...props}>
            <path
                d={isLarge ? "M391.2 51.2L326.6 115.8C347.6 145.2 360 181.2 360 220C360 319.4 279.4 400 180 400S0 319.4 0 220C0 120.6 80.6 40 180 40C218.8 40 254.8 52.4 284.2000000000001 73.4L348.8 8.8C354.2000000000001 3.4 361.8 0 370 0C386.6 0 400 13.4 400 30C400 38.2 396.6 45.8 391.2 51.2zM180 80C102.6 80 40 142.6 40 220C40 297.4 102.6 360 180 360S320 297.4 320 220C320 142.6 257.4 80 180 80zM250 300H110C104.4 300 100 295.6 100 290V250C100 244.4 104.4 240 110 240S120 244.4 120 250V260H160V140H150C144.4 140 140 135.6 140 130C140 124.4 144.4 120 150 120H210C215.6 120 220 124.4 220 130C220 135.6 215.6 140 210 140H200V260H240V250C240 244.4 244.4 240 250 240S260 244.4 260 250V290C260 295.6 255.6 300 250 300z" : "M180 240H100C89 240 80 231 80 220C80 209 89 200 100 200H120V140C120 129 129 120 140 120S160 129 160 140V200H180C191 200 200 209 200 220C200 231 191 240 180 240zM311.2 51.2L257.8 104.6C271.8 126.4 280 152.2 280 180C280 257.4 217.4 320 140 320S0 257.4 0 180C0 102.6 62.6 40 140 40C167.8 40 193.6 48.2 215.4 62.2L268.8 8.8C274.2000000000001 3.4 281.8 0 290 0C306.6 0 320 13.4 320 30C320 38.2 316.6 45.8 311.2 51.2zM140 80C84.8 80 40 124.8 40 180S84.8 280 140 280S240 235.2 240 180S195.2 80 140 80z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SearchText.defaultProps = {
    size: IconSize.STANDARD,
};
SearchText.displayName = `Blueprint5.Icon.SearchText`;
export default SearchText;
