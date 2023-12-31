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

export const GlobeNetwork: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="globe-network" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0C310.4 0 400 89.6 400 200C400 310.4 310.4 400 200 400zM347.8 260L275.2 260C269 299.8 256.8 333.2 240.8 354.6C289.8 341.6 329 306.2 347.8 260zM260 200C260 186.2 259.2000000000001 172.8 257.8 160L142.2 160C140.8 172.8 140 186.2 140 200C140 213.8 140.8 227.2 142.2 240L257.6 240C259.2000000000001 227.2 260 213.8 260 200zM200 360C221.4 360 245 319 255 260L145 260C155 319 178.6 360 200 360zM159.2 354.6C143.2 333.2 131 299.8 124.8 260L52.2 260C71 306.2 110.2 341.6 159.2 354.6zM40 200C40 213.8 42.2 227.2 45.6 240L122.2 240C120.8 227.2 120 213.8 120 200C120 186.2 120.8 172.8 122.2 160L45.6 160C42.2 172.8 40 186.2 40 200zM52.2 140L124.8 140C131 100.2 143.2 66.8 159.2 45.4C110.2 58.4 71 93.8 52.2 140zM200 40C178.6 40 155 81 145 140L255 140C245 81 221.4 40 200 40zM240.8 45.4C256.6 66.8 268.8 100.2 275.2 140L347.8 140C329 93.8 289.8 58.4 240.8 45.4zM277.8 160C279.2000000000001 172.8 280 186.2 280 200C280 213.8 279.2000000000001 227.2 277.8 240L354.4 240C357.8 227.2 360 213.8 360 200C360 186.2 357.8 172.8 354.4 160L277.8 160z" : "M160 320C71.6 320 0 248.4 0 160C0 71.6 71.6 0 160 0C248.4 0 320 71.6 320 160C320 248.4 248.4 320 160 320zM263.4 220L214.6 220C210.4 242.2 204.4 260.6 196.4 273.8C225 264.6 248.6 245.2 263.4 220zM200 160C200 145.4 199 132.2 197.6 120L122.4 120C121 132.2 120 145.4 120 160C120 174.6 121 187.8 122.4 200L197.6 200C199 187.8 200 174.6 200 160zM160 280C173.4 280 187.2 258 194.6 220L125.4 220C132.8 258 146.6 280 160 280zM123.6 273.8C115.6 260.6 109.4 242.2 105.4 220L56.6 220C71.4 245.2 95 264.6 123.6 273.8zM40 160C40 174 42.6 187.4 47 200L102.2 200C100.8 187.6 100 174.4 100 160C100 145.6 100.8 132.4 102.2 120L47 120C42.6 132.6 40 146 40 160zM56.6 100L105.4 100C109.6 77.8 115.6 59.4 123.6 46.2C95 55.4 71.4 74.8 56.6 100zM160 40C146.6 40 132.8 62 125.4 100L194.6 100C187.2 62 173.4 40 160 40zM196.4 46.2C204.4 59.4 210.4 77.8 214.6 100L263.4 100C248.6 74.8 225 55.4 196.4 46.2zM273 120L217.8 120C219.2 132.4 220 145.6 220 160C220 174.4 219.2 187.6 217.8 200L273 200C277.4 187.4 280 174 280 160C280 146 277.4 132.6 273 120z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
GlobeNetwork.defaultProps = {
    size: IconSize.STANDARD,
};
GlobeNetwork.displayName = `Blueprint5.Icon.GlobeNetwork`;
export default GlobeNetwork;
