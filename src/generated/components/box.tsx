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

export const Box: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="box" ref={ref}  {...props}>
            <path
                d={isLarge ? "M397.8 268.8L397.8 268.8L338 388.8L337.8 388.8C334.4 395.4 327.8 400 320 400H80C72.2 400 65.6 395.4 62.2 388.8L62 388.8L2 268.8L2.2 268.8C1 266.2 0 263.2 0 260V20C0 9 9 0 20 0H380C391 0 400 9 400 20V260C400 263.2 399 266.2 397.8 268.8zM220 360H307.6L347.6 280H220V360zM92.4 360H180V280H52.4L92.4 360zM360 40H40V240H360V40zM160 160H240C251 160 260 169 260 180C260 191 251 200 240 200H160C149 200 140 191 140 180C140 169 149 160 160 160z" : "M120 120H200C211 120 220 129 220 140C220 151 211 160 200 160H120C109 160 100 151 100 140C100 129 109 120 120 120zM318.6 207.4L318.6 207.4L318.6 207.8C318.6 207.8 318.6 207.8 318.6 207.8L278.8 307.4L278.8 307.4C275.6 314.8 268.4 320 260 320H60C51.6 320 44.4 314.8 41.4 307.4L41.4 307.4L1.6 207.8C1.6 207.8 1.6 207.8 1.6 207.8L1.4 207.4L1.4 207.4C0.6 205.2 0 202.6 0 200V20C0 9 9 0 20 0H300C311 0 320 9 320 20V200C320 202.6 319.4000000000001 205.2 318.6 207.4zM180 280H246.4L270.4 220H180V280zM73.6 280H140V220H49.6L73.6 280zM280 40H40V180H280V40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Box.defaultProps = {
    size: IconSize.STANDARD,
};
Box.displayName = `Blueprint5.Icon.Box`;
export default Box;
