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

export const LeftJoin: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="left-join" ref={ref}  {...props}>
            <path
                d={isLarge ? "M174 306C148 280 130 242 130 200S146 120 174 94C158 84 140 80 120 80C54 80 0 134 0 200S54 320 120 320C140 320 158 316 174 306zM280 320C346 320 400 266 400 200S346 80 280 80C260 80 242 84 226 94C252.0000000000001 120 270 158 270 200S254 278 226 306C242 316 260 320 280 320zM292 279C303 255 309.2 228.2 309.2 200S303 145 292 121C330 127.2000000000001 359.2000000000001 160.2000000000001 359.2000000000001 200S330 272.8 292 279zM200 290C176 266 160 236 160 200S176 134 200 112C224 134 240 166 240 202S224 268 200 290z" : "M132 254C122 258 112 260 100 260C44 260 0 216 0 160S44 60 100 60C112 60 122 62 132 66C106 88 90 122 90 160S106 232 132 254zM160 240C136 222 120 192 120 160S136 98 160 80C184 98 200 126 200 160S184 222 160 240zM220 260C276 260 320 216 320 160S276 60 220 60C208 60 198 62 188 66C214 88 230 124 230 160S214 230 188 254.0000000000001C198 258 208 260 220 260zM227 239.6C241.6 216.6 249.8 189.2 249.8 160S241.4 103.4 227 80.4C267.8 84 299.8 118.4 299.8 160S267.8 236 227 239.6z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
LeftJoin.defaultProps = {
    size: IconSize.STANDARD,
};
LeftJoin.displayName = `Blueprint5.Icon.LeftJoin`;
export default LeftJoin;
