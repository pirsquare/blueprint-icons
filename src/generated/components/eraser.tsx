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

export const Eraser: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="eraser" ref={ref}  {...props}>
            <path
                d={isLarge ? "M374.2000000000001 231.4C382 239.4 382 252.4 374.2000000000001 260.4L263.6 374.8C255.8 382.8 243.4 382.8 235.6 374.8L25.8 158C18 150 18 137 25.8 129L110.8 41.2H110.8L153.4 0.2H338.8C339.2 0.2 339.4 0 339.8 0C350.8 0 359.8 9 359.8 20C359.8 31 350.8 40 339.8 40H189.2L190.2000000000001 41L190.4 41H190.4L206.6 57.8L374.2000000000001 231.4zM150.4 41.2L51.4 143.6L140.6 235.8L239.6 133.4L150.4 41.2z" : "M161.2 41.8L313.8 190.6C322 198.6 322 211.6 313.8 219.6L217.2 314C209 322 195.6 322 187.4 314L6.2 137.4C-2 129.4 -2 116.4 6.2 108.4L117.8 -0.4H280.2V-0.1999999999999C291.2 -0.1999999999999 300.2 8.8 300.2 19.8000000000001C300.2 30.8000000000001 291.2 39.8000000000001 280.2 39.8000000000001H159.2L161.2 41.8L161.2 41.8zM117.8 40.6L33.4 123L117.8 205.2L202.2 123L117.8 40.6z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Eraser.defaultProps = {
    size: IconSize.STANDARD,
};
Eraser.displayName = `Blueprint5.Icon.Eraser`;
export default Eraser;
