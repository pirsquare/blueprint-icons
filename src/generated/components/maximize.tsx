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

export const Maximize: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="maximize" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 400H280C269 400 260 391 260 380S269 360 280 360H331.8L226 254.2C222.2 250.6 220 245.6 220 240C220 229 229 220 240 220C245.6 220 250.6 222.2 254.2 225.8L360 331.8V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400zM160 180C154.4 180 149.4 177.8 145.8 174.2L40 68.2V120C40 131 31 140 20 140S0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20S131 40 120 40H68.2L174 145.8C177.8 149.4 180 154.4 180 160C180 171 171 180 160 180z" : "M119.8 140.2C114.2 140.2 109.2 138 105.6 134.4L39.8 68.6V100.4C39.8 111.4 30.8 120.4 19.8 120.4S-0.2 111.4 -0.2 100.4V20.4C-0.2 9.4 8.8 0.4 19.8 0.4H99.8C110.8 0.4 119.8 9.4 119.8 20.4S110.8 40.4 99.8 40.4H68.2L134 106C137.6 109.6 139.8 114.6 139.8 120.2000000000001C139.8 131.2 130.8 140.2 119.8 140.2zM299.8 320.2H219.8C208.8 320.2 199.8 311.2 199.8 300.2S208.8 280.2 219.8 280.2H251.6L185.6 214.2C182 210.6 179.8 205.6 179.8 200.2C179.8 189.2 188.8 180.2 199.8 180.2C205.4 180.2 210.4 182.4 214 186L279.8 251.8V220C279.8 209 288.8 200 299.8 200S319.8 209 319.8 220V300C319.8 311.2 310.8 320.2 299.8 320.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Maximize.defaultProps = {
    size: IconSize.STANDARD,
};
Maximize.displayName = `Blueprint5.Icon.Maximize`;
export default Maximize;
