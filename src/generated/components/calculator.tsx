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

export const Calculator: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="calculator" ref={ref}  {...props}>
            <path
                d={isLarge ? "M320 400H80C69 400 60 391 60 380V20C60 9 69 0 80 0H320C331 0 340 9 340 20V380C340 391 331 400 320 400zM140 40H100V80H140V40zM140 120H100V160H140V120zM140 200H100V240H140V200zM220 40H180V80H220V40zM220 120H180V160H220V120zM220 200H180V240H220V200zM300 40H260V160H300V40zM300 200H260V240H300V200zM300 280H100V360H300V280z" : "M260 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V300C280 311 271 320 260 320zM120 40H80V80H120V40zM120 100H80V140H120V100zM120 160H80V200H120V160zM180 40H140V80H180V40zM180 100H140V140H180V100zM180 160H140V200H180V160zM240 40H200V140H240V40zM240 160H200V200H240V160zM240 220H80V280H240V220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Calculator.defaultProps = {
    size: IconSize.STANDARD,
};
Calculator.displayName = `Blueprint5.Icon.Calculator`;
export default Calculator;
