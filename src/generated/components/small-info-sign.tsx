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

export const SmallInfoSign: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="small-info-sign" ref={ref}  {...props}>
            <path
                d={isLarge ? "M340 200C340 122.68 277.32 60 200 60C122.6802 60 60 122.68 60 200C60 277.3198 122.6802 340 200 340C277.32 340 340 277.3198 340 200zM220 300V260H180V300H220zM220 240V120H240V100H160V120H180V220H160V240H220z" : "M280 160C280 93.726 226.274 40 160 40C93.7258 40 40 93.726 40 160C40 226.2742 93.7258 280 160 280C226.274 280 280 226.2742 280 160zM180 240V200H140V240H180zM180 180V100H200V80H120V100H140V160H120V180H180z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SmallInfoSign.defaultProps = {
    size: IconSize.STANDARD,
};
SmallInfoSign.displayName = `Blueprint5.Icon.SmallInfoSign`;
export default SmallInfoSign;
