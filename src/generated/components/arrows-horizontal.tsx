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

export const ArrowsHorizontal: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="arrows-horizontal" ref={ref}  {...props}>
            <path
                d={isLarge ? "M394 214L294 314C290 318 286 320 280 320C268 320 260 312 260 300C260 294 262 290 266 286L332 220H68L134 286C138 290 140 294 140 300C140 312 132 320 120 320C114 320 110 318 106 314L6 214C2 210 0 206 0 200S2 190 6 186L106 86C110 82 114 80 120 80C132 80 140 88 140 100C140 106 138 110 134 114L68 180H332L266 114C262 110 260 106 260 100C260 88 268 80 280 80C286 80 290 82 294 86L394 186C398 190 400 194 400 200S398 210 394 214L394 214z" : "M314 174L234 254C230 258 226 260 220 260C208 260 200 250 200 240C200 234 202 230 206 226L252.0000000000001 180H68L114 226C118 230 120 234 120 240C120 250 112 260 100 260C94 260 90 258 86 254L6 174C2 170 0 166 0 160S2 150 6 146L86 66C90 62 94 60 100 60C112 60 120 68 120 80C120 86 118 90 114 94L68 140H252L206 94C202 90 200 86 200 80C200 68 208 60 220 60C226 60 230 62 234 66L314 146C318 150 320 154 320 160S318 170 314 174L314 174z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ArrowsHorizontal.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowsHorizontal.displayName = `Blueprint5.Icon.ArrowsHorizontal`;
export default ArrowsHorizontal;
