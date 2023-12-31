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

export const Changes: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="changes" ref={ref}  {...props}>
            <path
                d={isLarge ? "M360 80H40C18 80 0 62 0 40C0 18 18 0 40 0H360C382 0 400 18 400 40C400 62 382 80 360 80zM60 300C65.6 300 70.6 302.2 74.2 305.8L100 331.8V140C100 129 109 120 120 120S140 129 140 140V331.8L165.8 306C169.4 302.2 174.4 300 180 300C191 300 200 309 200 320C200 325.6 197.8 330.6 194.2 334.2L134.2 394.2C130.6 397.8 125.6 400 120 400S109.4 397.8 105.8 394.2L45.8 334.2C42.2 330.6 40 325.6 40 320C40 309 49 300 60 300zM205.8 185.8L265.8 125.8C269.4000000000001 122.2 274.4000000000001 120 280 120S290.6 122.2 294.2000000000001 125.8L354.2000000000001 185.8C357.8 189.4 360 194.4 360 200C360 211 351 220 340 220C334.4 220 329.4 217.8 325.8 214.2L300 188.2V380C300 391 291 400 280 400S260 391 260 380V188.2L234.2 214C230.6 217.8 225.6 220 220 220C209 220 200 211 200 200C200 194.4 202.2 189.4 205.8 185.8z" : "M165.8 165.8L225.8 105.8C229.4 102.2 234.4 100 240 100S250.6 102.2 254.2 105.8L314.2000000000001 165.8C317.8 169.4 320 174.4 320 180C320 191 311 200 300 200C294.4000000000001 200 289.4000000000001 197.8 285.8 194.2L260 168.2V300C260 311 251 320 240 320S220 311 220 300V168.2L194.2 194.2C190.6 197.8 185.6 200 180 200C169 200 160 191 160 180C160 174.4 162.2 169.4 165.8 165.8zM290 60H30C13.4 60 0 46.6 0 30S13.4 0 30 0H290C306.6 0 320 13.4 320 30S306.6 60 290 60zM20 220C25.6 220 30.6 222.2 34.2 225.8L60 251.8V120C60 109 69 100 80 100S100 109 100 120V251.8L125.8 226C129.4 222.2 134.4 220 140 220C151 220 160 229 160 240C160 245.6 157.8 250.6 154.2 254.2L94.2 314.2C90.6 317.8 85.6 320 80 320S69.4 317.8 65.8 314.2L5.8 254.2C2.2 250.6 0 245.6 0 240C0 229 9 220 20 220z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Changes.defaultProps = {
    size: IconSize.STANDARD,
};
Changes.displayName = `Blueprint5.Icon.Changes`;
export default Changes;
