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

export const Fork: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="fork" ref={ref}  {...props}>
            <path
                d={isLarge ? "M334.2000000000001 174.2C330.6 177.8 325.6 180 320 180C309 180 300 171 300 160C300 154.4 302.2 149.4 305.8 145.8L331.8 120H288.4L128.4 280H331.8L306 254.2C302.2 250.6 300 245.6 300 240C300 229 309 220 320 220C325.6 220 330.6 222.2 334.2000000000001 225.8L394.2000000000001 285.8C397.8 289.4 400 294.4 400 300C400 305.6 397.8 310.6 394.2000000000001 314.2L334.2000000000001 374.2C330.6 377.8 325.6 380 320 380C309 380 300 371 300 360C300 354.4 302.2 349.4 305.8 345.8L331.8 320H20C9 320 0 311 0 300C0 289 9 280 20 280H71.8L266 85.8C269.4000000000001 82.2 274.4000000000001 80 280 80H331.8L306 54.2C302.2 50.6 300 45.6 300 40C300 29 309 20 320 20C325.6 20 330.6 22.2 334.2000000000001 25.8L394.2000000000001 85.8C397.8 89.4 400 94.4 400 100C400 105.6 397.8 110.6 394.2000000000001 114.2000000000001L334.2000000000001 174.2z" : "M274 134.2C270.4 137.8 265.4 140 259.8 140C248.8 140 239.8 131 239.8 120C239.8 114.4 242 109.4 245.6 105.8L251.4 100H228L128 200H251.4L245.6 194.2C242 190.6 239.8 185.6 239.8 180C239.8 169 248.8 160 259.8 160C265.4 160 270.4 162.2 274 165.8L314 205.8C317.6 209.4 319.8 214.4 319.8 220S317.6 230.6 314 234.2L274 274.2C270.4 277.8 265.4 280 259.8 280C248.8 280 239.8 271 239.8 260C239.8 254.4 242 249.4 245.6 245.8L251.4 240H19.8C8.8 240 -0.2 231 -0.2 220S8.8 200 19.8 200H71.6L205.8 65.8C209.4 62.2 214.4 60 220 60H251.8L246 54.2C242.4000000000001 50.6 240.2000000000001 45.6 240.2000000000001 40C240.2000000000001 29 249.2 20 260.2000000000001 20C265.8 20 270.8 22.2 274.4000000000001 25.8L314.4000000000001 65.8C318.0000000000001 69.4 320.2000000000001 74.4 320.2000000000001 80S318.0000000000001 90.6 314.4000000000001 94.2L274 134.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Fork.defaultProps = {
    size: IconSize.STANDARD,
};
Fork.displayName = `Blueprint5.Icon.Fork`;
export default Fork;
