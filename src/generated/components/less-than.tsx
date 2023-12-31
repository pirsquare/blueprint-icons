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

export const LessThan: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="less-than" ref={ref}  {...props}>
            <path
                d={isLarge ? "M143.245568 199.994574L326.3245694 138.96824C336.8034356 135.475284 342.4666354 124.148886 338.97368 113.670018C335.4807246000001 103.191152 324.154325 97.527952 313.6754586 101.020908L73.675458 181.020908C55.441532 187.098884 55.441532 212.8902646 73.675458 218.96824L313.6754586 298.9682400000001C324.154325 302.4611954 335.4807246000001 296.7979956 338.97368 286.3191294C342.4666354 275.840263 336.8034356 264.5138634 326.3245694 261.020908L143.245568 199.994574z" : "M265.7469720000001 200.8382084C276.3268290000001 204.0121656 282.3304970000001 215.161835 279.1565400000001 225.741692C275.9825828000001 236.321549 264.8329134 242.325217 254.2530564000001 239.15126L54.253056 179.15126C35.249 173.450043 35.249 146.5394254 54.253056 140.8382084L254.2530564000001 80.838208C264.8329134 77.664252 275.9825828000001 83.66792 279.1565400000001 94.247776C282.3304970000001 104.827634 276.3268290000001 115.977302 265.7469720000001 119.15126L129.6020576000001 159.9947342L265.7469720000001 200.8382084z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
LessThan.defaultProps = {
    size: IconSize.STANDARD,
};
LessThan.displayName = `Blueprint5.Icon.LessThan`;
export default LessThan;
