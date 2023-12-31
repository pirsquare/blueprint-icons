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

export const DrawerLeftFilled: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="drawer-left-filled" ref={ref}  {...props}>
            <path
                d={isLarge ? "M20 400L180 400C191.045695 400 200 391.045695 200 380L200 20C200 8.954306 191.045695 0 180 0L20 0C8.954305 0 0 8.954306 0 20L0 380C0 391.045695 8.954305 400 20 400zM200.000002 220L331.800002 220L286.000002 265.7999988000001C282.2000020000001 269.3999988 280.000002 274.3999988 280.000002 280C280.000002 290.999999 289.000002 300 300.000002 300C305.600002 300 310.600002 297.799999 314.200002 294.199999L394.200002 214.1999986C397.8000020000001 210.5999986 400.000002 205.5999986 400.000002 200C400.000002 194.399998 397.8000020000001 189.399998 394.200002 185.799998L314.200002 105.799998C310.600002 102.199998 305.600002 100 300.000002 100C289.000002 100 280.000002 108.999998 280.000002 120C280.000002 125.599998 282.2000020000001 130.599998 285.800002 134.199998L331.800002 180L200.000002 180L200.000002 220z" : "M20 320L140 320C151.045695 320 160 311.045695 160 300L160 20C160 8.954306 151.045695 0 140 0L20 0C8.954305 0 0 8.954306 0 20L0 300C0 311.045695 8.954305 320 20 320zM160.000001 180L251.800002 180L226.000002 205.7999988C222.200002 209.3999988 220 214.3999988 220 220C220 230.999999 229.000002 240 240 240C245.600002 240 250.600002 237.799999 254.200002 234.199999L314.200002 174.1999986C317.800002 170.5999986 320 165.5999986 320 160C320 154.3999984 317.800002 149.3999984 314.200002 145.7999984L254.200002 85.799998C250.600002 82.199998 245.600002 80 240 80C229.000002 80 220 88.999998 220 100C220 105.599998 222.200002 110.599998 225.800002 114.199998L251.800002 140L160.000001 140L160.000001 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DrawerLeftFilled.defaultProps = {
    size: IconSize.STANDARD,
};
DrawerLeftFilled.displayName = `Blueprint5.Icon.DrawerLeftFilled`;
export default DrawerLeftFilled;
