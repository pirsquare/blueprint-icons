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

export const Translate: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="translate" ref={ref}  {...props}>
            <path
                d={isLarge ? "M397.8 28.8L397.8 28.8L298 228.8L297.8 228.8C294.4000000000001 235.4 287.8 240 280 240S265.6 235.4 262.2 228.8L262 228.8L227.4 159.6L171.4 205.6L211.2 238.4000000000001L211.2 238.4000000000001C228.8 253.2 240 275.4 240 300V320H260C271 320 280 329 280 340C280 351 271 360 260 360H160V380C160 391 151 400 140 400S120 391 120 380V360H20C9 360 0 351 0 340C0 329 9 320 20 320H200V300C200 287.6 194.4 276.4 185.4 269.2L185.4 269.2L140 231.6L94.6 269.2L94.6 269.2C85.6 276.4 80 287.6 80 300H40C40 275.4 51.2 253.2 68.8 238.6L68.8 238.6L108.6 205.8L47.4 155.4L47.6 155.2C43 151.6 40 146.2 40 140C40 129 49 120 60 120C64.8 120 69 122 72.6 124.8L72.8 124.6L140 180L207.2 124.6L207.4 124.8C207.8 124.4 208.4 124.2000000000001 209 123.8C209.2 123.8 209.2 123.6 209.4 123.4L162.2 28.8L162.4 28.8C161 26.2 160 23.2 160 20C160 9 169 0 180 0C187.8 0 194.4 4.6 197.8 11.2L198 11.2L222.4 60H337.6L362 11L362.2 11C365.6 4.6 372.2 0 380 0C391 0 400 9 400 20C400 23.2 399 26.2 397.8 28.8zM242.4 100L280 175.2L317.6 100H242.4z" : "M317.8 28.8L317.8 28.8L238 188.8L237.8 188.8C234.4 195.4 227.8 200 220 200S205.6 195.4 202.2 188.8L202 188.8L180 144.8L143.4 172.4L148 176L148 176C167.4 190.6 180 213.8 180 240V260H200C211 260 220 269 220 280C220 291 211 300 200 300H140C140 311 131 320 120 320H100C89 320 80 311 80 300H20C9 300 0 291 0 280C0 269 9 260 20 260H140V240C140 226.8 133.6 215 123.6 207.8L123.6 207.8L110 197.6L96.4 207.6L96.4 207.6C86.4 215 80 226.8 80 240H40C40 213.8 52.6 190.6 72 176L72 176L76.6 172.6L28 136L28.2 135.8C23.4 132 20 126.6 20 120C20 109 29 100 40 100C44.6 100 48.4 101.8 51.8 104.2L52 104L110 147.4L162 108.4L122.2 28.8L122.4 28.8C121 26.2 120 23.2 120 20C120 9 129 0 140 0C147.8 0 154.4 4.6 157.8 11.2L158 11.2L172.4 40H267.6L282 11L282.2 11C285.6 4.6 292.2 0 300 0C311 0 320 9 320 20C320 23.2 319 26.2 317.8 28.8zM192.4 80L220 135.2L247.6 80H192.4z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Translate.defaultProps = {
    size: IconSize.STANDARD,
};
Translate.displayName = `Blueprint5.Icon.Translate`;
export default Translate;
