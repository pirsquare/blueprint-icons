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

export const WidgetFooter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="widget-footer" ref={ref}  {...props}>
            <path
                d={isLarge ? "M340 400H60C49 400 40 391 40 380V20C40 9 49 0 60 0H340C351 0 360 9 360 20V380C360 391 351 400 340 400zM320 40H80V120H320V40zM320 140H80V360H320V140z" : "M280 320H40C29 320 20 311 20 300V20C20 9 29 0 40 0H280C291 0 300 9 300 20V300C300 311 291 320 280 320zM260 40H60V100H260V40zM260 120H60V280H260V120z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
WidgetFooter.defaultProps = {
    size: IconSize.STANDARD,
};
WidgetFooter.displayName = `Blueprint5.Icon.WidgetFooter`;
export default WidgetFooter;
