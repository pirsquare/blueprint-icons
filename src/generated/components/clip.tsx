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

export const Clip: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="clip" ref={ref}  {...props}>
            <path
                d={isLarge ? "M0 380C0 391.0457 8.9543 400 20 400H120C131.0456 400 140 391.0457 140 380C140 368.9544 131.0456 360 120 360H40V280C40 268.9544 31.0456 260 20 260C8.9543 260 0 268.9544 0 280V380zM20 0C8.9543 0 0 8.954 0 20V120C0 131.046 8.9543 140 20 140C31.0456 140 40 131.046 40 120V40H120C131.0456 40 140 31.046 140 20C140 8.954 131.0456 0 120 0H20zM380 0C391.046 0 400 8.954 400 20V120C400 131.046 391.046 140 380 140C368.954 140 360 131.046 360 120V40H280C268.954 40 260 31.046 260 20C260 8.954 268.954 0 280 0H380zM380 400C391.046 400 400 391.0457 400 380V280C400 268.9544 391.046 260 380 260C368.954 260 360 268.9544 360 280V360H280C268.954 360 260 368.9544 260 380C260 391.0457 268.954 400 280 400H380zM200 120C244.182 120 280 155.818 280 200C280 244.1828 244.182 280 200 280C155.8172 280 120 244.1828 120 200C120 155.818 155.8172 120 200 120z" : "M0 300C0 311.0457 8.9543 320 20 320H100C111.0456 320 120 311.0457 120 300C120 288.9544 111.0456 280 100 280H40V220C40 208.9544 31.0456 200 20 200C8.9543 200 0 208.9544 0 220V300zM20 0C8.9543 0 0 8.954 0 20V100C0 111.046 8.9543 120 20 120C31.0456 120 40 111.046 40 100V40H100C111.0456 40 120 31.046 120 20C120 8.954 111.0456 0 100 0H20zM300 0C311.046 0 320 8.954 320 20V100C320 111.046 311.046 120 300 120C288.954 120 280 111.046 280 100V40H220C208.954 40 200 31.046 200 20C200 8.954 208.954 0 220 0H300zM300 320C311.046 320 320 311.0457 320 300V220C320 208.9544 311.046 200 300 200C288.954 200 280 208.9544 280 220V280H220C208.954 280 200 288.9544 200 300C200 311.0457 208.954 320 220 320H300zM160 100C193.137 100 220 126.863 220 160C220 193.137 193.137 220 160 220C126.863 220 100 193.137 100 160C100 126.863 126.863 100 160 100z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Clip.defaultProps = {
    size: IconSize.STANDARD,
};
Clip.displayName = `Blueprint5.Icon.Clip`;
export default Clip;
