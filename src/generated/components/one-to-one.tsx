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

export const OneToOne: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="one-to-one" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 200C40 211.0456 48.9544 220 60 220C71.0456 220 80 211.0456 80 200C80 188.954 71.0456 180 60 180C48.9544 180 40 188.954 40 200zM116.5858 220C108.3492 243.3038 86.1244 260 60 260C26.863 260 0 233.137 0 200C0 166.862 26.863 140 60 140C86.1244 140 108.3492 156.696 116.5858 180H283.414C291.65 156.696 313.876 140 340 140C373.1380000000001 140 400 166.862 400 200C400 233.137 373.1380000000001 260 340 260C313.876 260 291.65 243.3038 283.414 220H116.5858zM340 220C328.954 220 320 211.0456 320 200C320 188.954 328.954 180 340 180C351.046 180 360 188.954 360 200C360 211.0456 351.046 220 340 220z" : "M40 160C40 171.0456 48.9544 180 60 180C71.0456 180 80 171.0456 80 160C80 148.9544 71.0456 140 60 140C48.9544 140 40 148.9544 40 160zM116.5858 180C108.3492 203.3038 86.1244 220 60 220C26.863 220 0 193.137 0 160C0 126.863 26.863 100 60 100C86.1244 100 108.3492 116.696 116.5858 140H203.414C211.65 116.696 233.876 100 260 100C293.1380000000001 100 320 126.863 320 160C320 193.137 293.1380000000001 220 260 220C233.876 220 211.65 203.3038 203.414 180H116.5858zM260 180C248.954 180 240 171.0456 240 160C240 148.9544 248.954 140 260 140C271.046 140 280 148.9544 280 160C280 171.0456 271.046 180 260 180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
OneToOne.defaultProps = {
    size: IconSize.STANDARD,
};
OneToOne.displayName = `Blueprint5.Icon.OneToOne`;
export default OneToOne;
