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

export const DoubleChevronLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="double-chevron-left" ref={ref}  {...props}>
            <path
                d={isLarge ? "M108.2 200L214 305.8C217.8 309.4 220 314.4 220 320C220 331 211 340 200 340C194.4 340 189.4 337.8 185.8 334.2L65.8 214.2C62.2 210.6 60 205.6 60 200C60 194.4 62.2 189.4 65.8 185.8L185.8 65.8C189.4 62.2 194.4 60 200 60C211 60 220 69 220 80C220 85.6 217.8 90.6 214.2 94.2000000000001L108.2 200zM228.2 200L334 305.8C337.8 309.4 340 314.4 340 320C340 331 331 340 320 340C314.4000000000001 340 309.4000000000001 337.8 305.8 334.2L185.8 214.2C182.2 210.6 180 205.6 180 200C180 194.4 182.2 189.4 185.8 185.8L305.8 65.8C309.4000000000001 62.2 314.4000000000001 60 320 60C331 60 340 69 340 80C340 85.6 337.8 90.6 334.2000000000001 94.2000000000001L228.2 200z" : "M88.2 160L154 225.8C157.8 229.4 160 234.4 160 240C160 251 151 260 140 260C134.4 260 129.4 257.8 125.8 254.2L45.8 174.2C42.2 170.6 40 165.6 40 160C40 154.4 42.2 149.4 45.8 145.8L125.8 65.8C129.4 62.2 134.4 60 140 60C151 60 160 69 160 80C160 85.6 157.8 90.6 154.2 94.2L88.2 160zM188.2 160L254 225.8C257.8 229.4 260 234.4 260 240C260 251 251 260 240 260C234.4 260 229.4 257.8 225.8 254.2L145.8 174.2C142.2 170.6 140 165.6 140 160C140 154.4 142.2 149.4 145.8 145.8L225.8 65.8C229.4 62.2 234.4 60 240 60C251 60 260 69 260 80C260 85.6 257.8 90.6 254.2 94.2L188.2 160z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DoubleChevronLeft.defaultProps = {
    size: IconSize.STANDARD,
};
DoubleChevronLeft.displayName = `Blueprint5.Icon.DoubleChevronLeft`;
export default DoubleChevronLeft;
