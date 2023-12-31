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

export const TakeAction: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="take-action" ref={ref}  {...props}>
            <path
                d={isLarge ? "M100 260C105.6 260 110.6 262.2000000000001 114.2 265.8L214.2 365.8C217.8 369.4 220 374.4 220 380C220 391 211 400 200 400C194.4 400 189.4 397.8 185.8 394.2L85.8 294.2C82.2 290.6 80 285.6 80 280C80 269 89 260 100 260zM220 140C220 129 229 120 240 120C245.6 120 250.6 122.2 254.2 125.8L354.2000000000001 225.8C357.8 229.4 360 234.4 360 240C360 251 351 260 340 260C334.4 260 329.4 257.8 325.8 254.2L225.8 154.2C222.2 150.6 220 145.6 220 140zM380 40H360C360 51 351 60 340 60H200C189 60 180 51 180 40H160C149 40 140 31 140 20C140 9 149 0 160 0H380C391 0 400 9 400 20C400 31 391 40 380 40zM200 160L320 280L294.2000000000001 305.8C297.8 309.4 300 314.4 300 320C300 331 291 340 280 340C274.4000000000001 340 269.4000000000001 337.8 265.8 334.2L240 360L120 240L145.8 214.2L5.8 74.2000000000001C2.2 70.6 0 65.6 0 60C0 49 9 40 20 40C25.6 40 30.6 42.2 34.2 45.8L174.2 185.8L200 160z" : "M180 100C180 89 189 80 200 80C205.6 80 210.6 82.2 214.2 85.8L294.2000000000001 165.8C297.8 169.4 300 174.4 300 180C300 191 291 200 280 200C274.4000000000001 200 269.4000000000001 197.8 265.8 194.2L185.8 114.2C182.2 110.6 180 105.6 180 100zM80 200C85.6 200 90.6 202.2 94.2 205.8L174.2 285.8C177.8 289.4 180 294.4 180 300C180 311 171 320 160 320C154.4 320 149.4 317.8 145.8 314.2L65.8 234.2C62.2 230.6 60 225.6 60 220C60 209 69 200 80 200zM160 120L260 220L244.2 235.8L254.2 245.8C257.8 249.4 260 254.4 260 260C260 271 251 280 240 280C234.4 280 229.4 277.8 225.8 274.2L215.8 264.2L200 280L100 180L115.8 164.2L5.8 54.2C2.2 50.6 0 45.6 0 40C0 29 9 20 20 20C25.6 20 30.6 22.2 34.2 25.8L144.2 135.8L160 120zM300 40H140C129 40 120 31 120 20C120 9 129 0 140 0H300C311 0 320 9 320 20C320 31 311 40 300 40z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
TakeAction.defaultProps = {
    size: IconSize.STANDARD,
};
TakeAction.displayName = `Blueprint5.Icon.TakeAction`;
export default TakeAction;
