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

export const TimelineEvents: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="timeline-events" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 300C112 300 120 308 120 320V360C120 370 112 380 100 380S80 370 80 360V320C80 308 88 300 100 300L100 300zM300 300C312 300 320 308 320 320V360C320 370 312 380 300 380S280 370 280 360V320C280 308 288 300 300 300L300 300zM120 120H80V80H120V120L120 120zM340 340V320C340 298 322 280 300 280S260 298 260 320V340H140V320C140 298 122 280 100 280S60 298 60 320V340H40C30 340 20 330 20 320V40C20 30 30 20 40 20H360C370 20 380 30 380 40V320C380 330 370 340 360 340H340zM140 60H60V140H140V60L140 60zM140 160H60V240H140V160L140 160zM240 60H160V140H240V60L240 60zM240 160H160V240H240V160L240 160zM340 60H260V140H340V60L340 60zM340 160H260V240H340V160L340 160zM220 120H180V80H220V120L220 120zM320 220H280V180H320V220L320 220z" : "M160 100H140V80H160V100L160 100zM80 100H60V80H80V100L80 100zM220 260C232 260 240 270 240 280V300C240 310 232 320 220 320S200 310 200 300V280C200 270 210 260 220 260L220 260zM80 260C90 260 100 270 100 280V300C100 310 90 320 80 320S60 310 60 300V280C60 270 70 260 80 260L80 260zM280 300H260V280C260 258 242 240 220 240S180 258 180 280V300H120V280C120 258 102 240 80 240S40 258 40 280V300H20C10 300 0 290 0 280V40C0 30 10 20 20 20H280C292 20 300 30 300 40V280C300 290 292 300 280 300L280 300zM100 60H40V120H100V60L100 60zM100 140H40V200H100V140L100 140zM180 60H120V120H180V60L180 60zM180 140H120V200H180V140L180 140zM260 60H200V120H260V60L260 60zM260 140H200V200H260V140L260 140zM240 180H220V160H240V180L240 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TimelineEvents.defaultProps = {
    size: IconSize.STANDARD,
};
TimelineEvents.displayName = `Blueprint5.Icon.TimelineEvents`;
export default TimelineEvents;
