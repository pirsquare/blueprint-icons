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

export const SymbolDiamond: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="symbol-diamond" ref={ref}  {...props}>
            <path
                d={isLarge ? "M300 199.8C300 204 298.4 207.6 296.4 210.6L296.8 210.8L216.8 330.8L216.4 330.6C212.8 336.2 207 339.8 200 339.8S187.2 336.2 183.6 330.8L183.4 331L103.4 211L103.8 210.8C101.6 207.6 100 204 100 199.8S101.6 192 103.6 189L103.2 188.8L183.2 68.8L183.6 69C187.2 63.6 193 59.8 200 59.8S212.8 63.6 216.4 69L216.8 68.8L296.8 188.8L296.4 189C298.4 192.2 300 195.8 300 199.8z" : "M240 159.8C240 163.6 238.6 167 236.8 170L237 170.2L177 270.2L176.8 270C173.4 275.8 167.2 279.8 160 279.8S146.6 275.8 143.2 270L142.8 270.2L82.8 170.2L83.2 170C81.4 167 80 163.6 80 159.8S81.4 152.6 83.2 149.6L82.8 149.6L142.8 49.6L143 49.8C146.6 44 152.8 39.8 160 39.8S173.4 43.8 176.8 49.6L177 49.4L237 149.4L236.8 149.6C238.6 152.8 240 156 240 159.8z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SymbolDiamond.defaultProps = {
    size: IconSize.STANDARD,
};
SymbolDiamond.displayName = `Blueprint5.Icon.SymbolDiamond`;
export default SymbolDiamond;
