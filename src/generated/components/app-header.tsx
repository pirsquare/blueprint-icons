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

export const AppHeader: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="app-header" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 400C391.0456940000001 400 400 391.045695 400 380L400 20C400 8.954306 391.0456940000001 0 380 0L20 0C8.954305 0 0 8.954306 0 20L0 380C0 391.045695 8.954305 400 20 400L380 400zM160 280C160 291.045695 151.045695 300 140 300C129.7432832 300 121.2898568 292.2791962 120.1345546 282.3324226L120 280L120 120C120 108.954306 128.954305 100 140 100C150.2567168 100 158.7101432 107.720804 159.8654454 117.667578L160 120L160 180L240 180L240 120C240 108.954306 248.954306 100 260 100C270.256716 100 278.710144 107.720804 279.865446 117.667578L280 120L280 280C280 291.045695 271.045694 300 260 300C249.743284 300 241.289856 292.2791962 240.134554 282.3324226L240 280L240 220L160 220L160 280z" : "M300 320C311.045694 320 320 311.045695 320 300L320 20C320 8.954306 311.045694 0 300 0L20 0C8.954305 0 0 8.954306 0 20L0 300C0 311.045695 8.954305 320 20 320L300 320zM120 240C120 251.045695 111.045695 260 100 260C89.7432832 260 81.2898568 252.2791962 80.1345546 242.3324226L80 240L80 80C80 68.954306 88.954305 60 100 60C110.2567168 60 118.7101432 67.720804 119.8654454 77.667578L120 80L120 140L200 140L200 80C200 68.954306 208.954306 60 220 60C230.256716 60 238.710144 67.720804 239.865446 77.667578L240 80L240 240C240 251.045695 231.045694 260 220 260C209.743284 260 201.289856 252.2791962 200.134554 242.3324226L200 240L200 180L120 180L120 240z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
AppHeader.defaultProps = {
    size: IconSize.STANDARD,
};
AppHeader.displayName = `Blueprint5.Icon.AppHeader`;
export default AppHeader;
