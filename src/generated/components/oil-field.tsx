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

export const OilField: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="oil-field" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 40.2H352.8L265.8 231.6L324.0000000000001 248.8000000000001L357.2000000000001 166.8000000000001C359.4000000000001 161.4000000000001 365.8000000000001 158.8000000000001 371.6 160.6000000000001C374.0000000000001 161.4 376 162.8000000000001 377.2000000000001 164.6000000000001C378.4000000000001 166.8000000000001 406.6 206.2000000000001 398.2000000000001 276.6C395.8 297.6 386 400 320.2000000000001 400C297.8 399.8 279.8 383.4 280 363.2C280 359.4 280.8 355.6 282 352L308.8 285.8L14.4 199.4L14.4 199C6.2 196.6 0 189.2 0 180.2C0 169.2 9 160.2 20 160.2C22 160.2 23.8 160.8 25.6 161.4L25.6 161L65.6 172.8L95 40.2H60C49 40.2 40 31.2 40 20.2C40 9.2 49 0.2 60 0.2H380C391 0.2 400 9.2 400 20.2C400 31.2 391 40.2 380 40.2zM104 184L183 207.2L126.4 82.8L104 184zM151 40.2L230 213.8L309 40.2H151z" : "M300 40H273L206.2 190.2L255.4 209.2L284.4 145C286.2 141 291.6 139 296.4 140.4C298.4 141 300 142 301.2 143.4C302.2 145 325.8 174.6 318.6 227.4C316.4 243.2 308.2 319.8 253.4 319.8C234.8 319.8 219.8 307.4 220 292.4C220 289.6 220.6 286.8 221.8 284L239.2 245.6L12.8 158.6L12.8 158.4C5.4 155.6 0 148.6 0 140C0 129 9 120 20 120C22.6 120 25 120.6 27.2 121.4L27.2 121.2L48 129.2L73.4 40H40C29 40 20 31 20 20C20 9 29 0 40 0H300C311 0 320 9 320 20C320 31 311 40 300 40zM85.4 143.8L142.8 166L104 78.4L85.4 143.8zM130.8 40L180 150.8L229.2 40H130.8z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
OilField.defaultProps = {
    size: IconSize.STANDARD,
};
OilField.displayName = `Blueprint5.Icon.OilField`;
export default OilField;
