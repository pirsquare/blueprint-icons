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

export const NewLink: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="new-link" ref={ref}  {...props}>
            <path
                d={isLarge ? "M290 160C265.8 160 245.6 142.8 241 120H99C94.4 142.8 74.2 160 50 160C22.4 160 0 137.6 0 110C0 82.4 22.4 60 50 60C74.2 60 94.4 77.2 99 100H241C245.6 77.2 265.8 60 290 60C317.6 60 340 82.4 340 110C340 137.6 317.6 160 290 160zM380 300H340V340C340 351 331 360 320 360S300 351 300 340V300H260C249 300 240 291 240 280S249 260 260 260H300V220C300 209 309 200 320 200S340 209 340 220V260H380C391 260 400 269 400 280S391 300 380 300z" : "M300 260H280V280C280 291 271 300 260 300S240 291 240 280V260H220C209 260 200 251 200 240C200 229 209 220 220 220H240V200C240 189 249 180 260 180S280 189 280 200V220H300C311 220 320 229 320 240C320 251 311 260 300 260zM230 140C205.8 140 185.6 122.8 181 100H99C94.4 122.8 74.2 140 50 140C22.4 140 0 117.6 0 90C0 62.4 22.4 40 50 40C74.2 40 94.4 57.2 99 80H181C185.6 57.2 205.8 40 230 40C257.6 40 280 62.4 280 90C280 117.6 257.6 140 230 140z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
NewLink.defaultProps = {
    size: IconSize.STANDARD,
};
NewLink.displayName = `Blueprint5.Icon.NewLink`;
export default NewLink;
