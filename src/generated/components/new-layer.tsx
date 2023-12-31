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

export const NewLayer: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="new-layer" ref={ref}  {...props}>
            <path
                d={isLarge ? "M230.256694 346.746281C223.880356 339.660075 220 330.2831902 220 320C220 297.90861 237.90861 280 260 280L280 280L280 260C280 237.90861 297.90861 220 320 220C342.09139 220 360 237.90861 360 260L360 274.6666666L390 258C396 254 400 248 400 240C400 232 396 226 390 222L210 122C206 120 204 120 200 120C196 120 194 120 190 122L10 222C4 226 0 232 0 240C0 248 4 254 10 258L190 358C194 360 196 360 200 360C204 360 206 360 210 358L230.256694 346.746281zM340 340L380 340C391.0456940000001 340 400 331.045695 400 320C400 308.954305 391.0456940000001 300 380 300L340 300L340 260C340 248.954306 331.0456940000001 240 320 240C308.9543060000001 240 300 248.954306 300 260L300 300L260 300C248.954306 300 240 308.954305 240 320C240 331.045695 248.954306 340 260 340L300 340L300 380C300 391.045695 308.9543060000001 400 320 400C331.0456940000001 400 340 391.045695 340 380L340 340z" : "M279.632234 194.5530092L310 177.2L309.8 177C315.8 173.6 320 167.4 320 160C320 152.6 315.8 146.4 309.8 143L310 142.8L170 62.8L169.8 63C166.8 61.2 163.6 60 160 60C156.4 60 153.2 61.2 150.2 63L150 62.8L10 142.8L10.2 143C4.2 146.4 0 152.6 0 160C0 167.4 4.2 173.6 10.2 177.2L10 177.4L150 257.4L150.2 257C153.2 258.8 156.4 260 160 260C161.7252748 260 163.35868 259.7243914 164.9222298 259.2392158C161.7846776 253.5308462 160 246.97384 160 240C160 217.90861 177.90861 200 200 200C200 177.90861 217.90861 160 240 160C260.243792 160 276.975196 175.038328 279.632234 194.5530092zM280 260C291 260 300 251 300 240C300 229 291 220 280 220L260 220L260 200C260 189 251 180 240 180C229 180 220 189 220 200L220 220L200 220C189 220 180 229 180 240C180 251 189 260 200 260L220 260L220 280C220 291 229 300 240 300C251 300 260 291 260 280L260 260L280 260z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
NewLayer.defaultProps = {
    size: IconSize.STANDARD,
};
NewLayer.displayName = `Blueprint5.Icon.NewLayer`;
export default NewLayer;
