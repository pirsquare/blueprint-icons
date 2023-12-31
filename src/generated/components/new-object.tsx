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

export const NewObject: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="new-object" ref={ref}  {...props}>
            <path
                d={isLarge ? "M240 320C240 308 248 300 260 300H300V260C300 248 308 240 320 240C330 240 340 248 340 260V300H380C390 300 400 308 400 320S390 340 380 340H340V380C340 392 330 400 320 400C308 400 300 392 300 380V340H260C248 340 240 330 240 320L240 320zM380 260C380 226 354 200 320 200S260 226 260 260C226 260 200 286 200 320S226 380 260 380C260 384 260 388 262 390C242 396 222 400 200 400C90 400 0 310 0 200S90 0 200 0S400 90 400 200C400 222 396 242 390 260H380L380 260z" : "M160 240C160 228 168 220 180 220H220V180C220 168 228 160 240 160S260 168 260 180V220H300C312 220 320 228 320 240S312 260 300 260H260V300C260 312 252 320 240 320S220 312 220 300V260H180C168 260 160 250 160 240L160 240zM290 190V180C290 152 268 130 240 130S190 152 190 180V190H180C152 190 130 212 130 240S152 290 180 290H190V300C190 306 192 312 192 316C182 318 172 320 160 320C72 320 0 248 0 160S72 0 160 0S320 72 320 160C320 172 318 186 316 198C308 192 300 190 290 190L290 190z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
NewObject.defaultProps = {
    size: IconSize.STANDARD,
};
NewObject.displayName = `Blueprint5.Icon.NewObject`;
export default NewObject;
