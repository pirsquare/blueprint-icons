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

export const DoubleCaretVertical: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="double-caret-vertical" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 220H300C311 220 320 229 320 240C320 244.8 318 249.2 315.2 252.6L315.4 252.8L215.4 372.8L215.2 372.6C211.4 377 206.2 380 200 380S188.6 377 184.8 372.6L184.6 372.8L84.6 252.8L84.8 252.6C82 249.2 80 244.8 80 240C80 229 89 220 100 220zM300 180H100C89 180 80 171 80 160C80 155.2 82 150.8 84.8 147.4L84.6 147.2L184.6 27.2L184.8 27.4C188.6 23 193.8 20 200 20S211.4 23 215.2 27.4L215.4 27.2L315.4 147.2L315.2 147.4C318 150.8 320 155.2 320 160C320 171 311 180 300 180z" : "M100 180H220C231 180 240 189 240 200C240 205.6 237.8 210.6 234.2 214.2L174.2 274.2C170.6 277.8 165.6 280 160 280S149.4 277.8 145.8 274.2L85.8 214.2C82.2 210.6 80 205.6 80 200C80 189 89 180 100 180zM220 140H100C89 140 80 131 80 120C80 114.4 82.2 109.4 85.8 105.8L145.8 45.8C149.4 42.2 154.4 40 160 40S170.6 42.2 174.2 45.8L234.2 105.8C237.8 109.4 240 114.4 240 120C240 131 231 140 220 140z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DoubleCaretVertical.defaultProps = {
    size: IconSize.STANDARD,
};
DoubleCaretVertical.displayName = `Blueprint5.Icon.DoubleCaretVertical`;
export default DoubleCaretVertical;
