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

export const CloudUpload: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="cloud-upload" ref={ref}  {...props}>
            <path
                d={isLarge ? "M214.2 194.2C210.6 197.8 205.6 200 200 200S189.4 197.8 185.8 194.2L125.8 134.2000000000001C122.2 130.6 120 125.6 120 120C120 109 129 100 140 100C145.6 100 150.6 102.2 154.2 105.8L180 131.8V20C180 9 189 0 200 0S220 9 220 20V131.8L245.8 106C249.4 102.2 254.4 100 260 100C271 100 280 109 280 120C280 125.6 277.8 130.6 274.2000000000001 134.2000000000001L214.2 194.2zM300 320C297.6 320 295.2 319.4 292.8 319.2C276.6 366.2 232.4 400 180 400C113.8 400 60 346.2 60 280C60 279 60.2 278.2 60.2 277.2C25.6 268.4 0 237.4 0 200C0 155.8 35.8 120 80 120C80 136.6 86.8 151.6 97.6 162.4L157.6 222.4C168.4 233.2 183.4 240 200 240S231.6 233.2 242.4000000000001 222.4L302.4000000000001 162.4L302.2000000000001 162.2C312.6 151.8 319.2000000000001 137.6 319.6 121.8C365.6 131.2 400 171.6 400 220C400 275.2 355.2000000000001 320 300 320z" : "M174.2 174.2C170.6 177.8 165.6 180 160 180S149.4 177.8 145.8 174.2L85.8 114.2C82.2 110.6 80 105.6 80 100C80 89 89 80 100 80C105.6 80 110.6 82.2 114.2 85.8L140 111.8V20C140 9 149 0 160 0S180 9 180 20V111.8L205.8 86C209.4 82.2 214.4 80 220 80C231 80 240 89 240 100C240 105.6 237.8 110.6 234.2 114.2L174.2 174.2zM240 240C239.4 240 238.6 240 238 239.8C228.8 285.6 188.4 320 140 320C84.8 320 40 275.2 40 220C40 217.8 40.2 215.6 40.4 213.4C16.6 202.2 0 178 0 150C0 121.4 17.2 96.8 41.8 86C40.8 90.6 40 95.2 40 100C40 116.6 46.8 131.6 57.6 142.4L117.6 202.4C128.4 213.2 143.4 220 160 220S191.6 213.2 202.4 202.4L262.4000000000001 142.4C273.2 131.6 280 116.6 280 100C280 96.8 279.6 93.6 279 90.6C303.4 104.4 320 130 320 160C320 204.2 284.2000000000001 240 240 240z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CloudUpload.defaultProps = {
    size: IconSize.STANDARD,
};
CloudUpload.displayName = `Blueprint5.Icon.CloudUpload`;
export default CloudUpload;
