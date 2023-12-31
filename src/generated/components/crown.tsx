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

export const Crown: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="crown" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 240L120 200L200 300L280 200L360 240L340 100L60 100L40 240zM200 360C211.045694 360 220 351.045695 220 340C220 328.954305 211.045694 320 200 320C188.954305 320 180 328.954305 180 340C180 351.045695 188.954305 360 200 360zM20 300C31.045695 300 40 291.045695 40 280C40 268.954305 31.045695 260 20 260C8.954305 260 0 268.954305 0 280C0 291.045695 8.954305 300 20 300zM380 300C391.0456940000001 300 400 291.045695 400 280C400 268.954305 391.0456940000001 260 380 260C368.954306 260 360 268.954305 360 280C360 291.045695 368.954306 300 380 300zM60 80L340 80L340 40L60 40L60 80z" : "M40 200L100 160L160 240L220 160L280 200L260 80L60 80L40 200zM160 300C171.045695 300 180 291.045695 180 280C180 268.954305 171.045695 260 160 260C148.954305 260 140 268.954305 140 280C140 291.045695 148.954305 300 160 300zM20 260C31.045695 260 40 251.045695 40 240C40 228.954305 31.045695 220 20 220C8.954305 220 0 228.954305 0 240C0 251.045695 8.954305 260 20 260zM300 260C311.045694 260 320 251.045695 320 240C320 228.954305 311.045694 220 300 220C288.9543060000001 220 280 228.954305 280 240C280 251.045695 288.9543060000001 260 300 260zM60 60L260 60L260 20L60 20L60 60z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Crown.defaultProps = {
    size: IconSize.STANDARD,
};
Crown.displayName = `Blueprint5.Icon.Crown`;
export default Crown;
