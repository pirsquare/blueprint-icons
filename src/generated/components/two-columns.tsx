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

export const TwoColumns: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="two-columns" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H100C111 0 120 9 120 20V380C120 391 111 400 100 400zM394.2000000000001 214.2L334.2000000000001 274.2000000000001C330.6 277.8 325.6 280 320 280C309 280 300 271 300 260V140C300 129 309 120 320 120C325.6 120 330.6 122.2 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2zM240 400H160C149 400 140 391 140 380V20C140 9 149 0 160 0H240C251 0 260 9 260 20V380C260 391 251 400 240 400z" : "M79.8 320.2H19.8C8.8 320.2 -0.2 311.2 -0.2 300.2V20.2C-0.2 9.2 8.8 0.2 19.8 0.2H79.8C90.8 0.2 99.8 9.2 99.8 20.2V300.2C99.8 311.2 90.8 320.2 79.8 320.2zM314 174.2L274 214.2C270.4 217.8 265.4 220 259.8 220C248.8 220 239.8 211 239.8 200V120C239.8 109 248.8 100 259.8 100C265.4 100 270.4 102.2 274 105.8L314 145.8C317.6 149.4 319.8 154.4 319.8 160S317.6 170.6 314 174.2zM199.8 320.2H139.8C128.8 320.2 119.8 311.2 119.8 300.2V20.2C119.8 9.2 128.8 0.2 139.8 0.2H199.8C210.8 0.2 219.8 9.2 219.8 20.2V300.2C219.8 311.2 210.8 320.2 199.8 320.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TwoColumns.defaultProps = {
    size: IconSize.STANDARD,
};
TwoColumns.displayName = `Blueprint5.Icon.TwoColumns`;
export default TwoColumns;
