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

export const DocumentShare: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="document-share" ref={ref}  {...props}>
            <path
                d={isLarge ? "M281.8 198.2C275.6 192 268.4 186.8 260 183.8V40H40V360H160V260H183.6C186.6 268.4 191.4 276 197.6 282.2L197.6 282.4L246.6 331.4C238.2000000000001 337.2 231.0000000000001 344.4 226.4000000000001 353.6L180 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H280C291 0 300 9 300 20V215.2L282.4 197.6L281.8 198.2zM380 400H280C269 400 260 391 260 380C260 369 269 360 280 360H331.8L226 254.2C222.2 250.6 220 245.6 220 240C220 229 229 220 240 220C245.6 220 250.6 222.2 254.2 225.8L360 331.8V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400z" : "M200 40H40V280H120V200H140C140 216.6 147.2 231 158.2 241.8L157.6 242.4L175.6 260.4C166 271 160 284.6 160 300L140 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H220C231 0 240 9 240 20V155.6C229.4 146 215.4 140 200 140V40zM300 320H220C209 320 200 311 200 300S209 280 220 280H251.8L185.8 214.2C182.2 210.6 180 205.6 180 200C180 189 189 180 200 180C205.6 180 210.6 182.2 214.2 185.8L280 251.8V220C280 209 289 200 300 200S320 209 320 220V300C320 311 311 320 300 320z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DocumentShare.defaultProps = {
    size: IconSize.STANDARD,
};
DocumentShare.displayName = `Blueprint5.Icon.DocumentShare`;
export default DocumentShare;
