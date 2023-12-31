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

export const UngroupObjects: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="ungroup-objects" ref={ref}  {...props}>
            <path
                d={isLarge ? "M90 280C40.2 280 0 239.8 0 190S40.2 100 90 100S180 140.2 180 190S139.8 280 90 280zM310 280C260.2 280 220 239.8 220 190S260.2 100 310 100S400 140.2 400 190S359.8 280 310 280z" : "M70 220C31.4 220 0 188.6 0 150S31.4 80 70 80S140 111.4 140 150S108.6 220 70 220zM250 220C211.4 220 180 188.6 180 150S211.4 80 250 80S320 111.4 320 150S288.6 220 250 220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
UngroupObjects.defaultProps = {
    size: IconSize.STANDARD,
};
UngroupObjects.displayName = `Blueprint5.Icon.UngroupObjects`;
export default UngroupObjects;
