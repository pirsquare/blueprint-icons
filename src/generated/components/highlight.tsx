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

export const Highlight: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="highlight" ref={ref}  {...props}>
            <path
                d={isLarge ? "M224.4 118.2L285 178.8L299.2000000000001 164.6L400 265.4L285.8 379.6L185 278.8L199.2 264.6L138.8 203.8L224.4 118.2zM360.4 40H40.4C29.4 40 20.4 31 20.4 20C20.4 9 29.4 0 40.4 0H360.4C371.4 0 380.4 9 380.4 20C380.4 31 371.4 40 360.4 40zM60.4 60H141.2C146.8 60 151.8 62.2 155.4 66L195.8 106.4L127 175.4L46.2 94.6C42.6 91 40.2 85.8 40.2 80.4C40.4 69 49.4 60 60.4 60z" : "M182.4 98.6L222.4 139L236.6 124.8L316.6 205.6L203.4 320L123.4 239.2L137.6 225L97.6 184.6L182.4 98.6zM40 60.6H120C125.6 60.6 130.6 62.8 134.2 66.6L154.2 86.8L85.8 155.8L25.8 95.2C22.2 91.6 20 86.4 20 80.8C20 69.8 29 60.6 40 60.6zM300 40.4H20C9 40.4 0 31.4 0 20.2S9 0 20 0H300C311 0 320 9 320 20.2S311 40.4 300 40.4z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Highlight.defaultProps = {
    size: IconSize.STANDARD,
};
Highlight.displayName = `Blueprint5.Icon.Highlight`;
export default Highlight;
