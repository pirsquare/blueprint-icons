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

export const Unarchive: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="unarchive" ref={ref}  {...props}>
            <path
                d={isLarge ? "M328.676192 400C335.70145 400 342.211586 396.31402332 345.82605 390.2899151L400 300L400 20C400 8.954306 391.0456940000001 0 380 0L20 0C8.954305 0 0 8.954306 0 20L0 300L54.173949 390.2899151C57.788414 396.31402332 64.2985506 400 71.3238076 400L328.676192 400zM200 240C194.4 240 189.4 237.8 185.8 234.2L185.8 234.2L125.8 174.2L124.1203704 172.287038C121.5277778 168.916666 120 164.666666 120 160C120 149 129 140 140 140C145.6 140 150.6 142.2 154.2 145.8L154.2 145.8L180 171.8L180 80.2L180.135204 77.87602C181.2959184 67.960204 189.7857142 60.2000000000001 200 60.2000000000001C211 60.2000000000001 220 69.2000000000001 220 80.2L220 80.2L220 171.8L245.8 146L247.42624 144.53411C250.840816 141.763266 255.2 140 260 140C271 140 280 149 280 160C280 165.6 277.8 170.6 274.2000000000001 174.2L274.2000000000001 174.2L214.2 234.2L212.287038 235.8796296C208.916666 238.4722222 204.666666 240 200 240zM320 360L80 360L40 299.9675252L360 299.9675252L320 360z" : "M267.63932 320C275.214762 320 282.140024 315.71995248 285.527864 308.9442719L320 240L320 20C320 8.954306 311.045694 0 300 0L20 0C8.954305 0 0 8.954306 0 20L0 240L34.472136 308.9442719C37.8599762 315.71995248 44.7852386 320 52.3606798 320L267.63932 320zM160 200C154.4 200 149.4 197.8 145.8 194.2L145.8 194.2L105.8 154.2L104.1203704 152.287037C101.5277778 148.9166666 100 144.6666666 100 140C100 129 109 120 120 120C125.6 120 130.6 122.2 134.2 125.8L134.2 125.8L140 131.8L140 80L140.135204 77.67602C141.2959184 67.760204 149.7857142 60 160 60C171 60 180 69 180 80L180 80L180 131.8L185.8 126L187.426239 124.471137C190.8408164 121.6163266 195.2 120 200 120C211 120 220 129 220 140C220 145.6 217.8 150.6 214.2 154.2L214.2 154.2L174.2 194.2L172.287037 195.8796296C168.9166666 198.4722222 164.6666666 200 160 200zM260 280L60 280L40 240L280 240L260 280z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Unarchive.defaultProps = {
    size: IconSize.STANDARD,
};
Unarchive.displayName = `Blueprint5.Icon.Unarchive`;
export default Unarchive;
