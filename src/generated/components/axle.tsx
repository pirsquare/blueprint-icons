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

export const Axle: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="axle" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 100H80V90C80 84.478 84.4772 80 90 80C95.5228 80 100 84.478 100 90V310C100 315.5228 95.5228 320 90 320C84.4772 320 80 315.5228 80 310V300H40V100zM360 300L320 300L320 310C320 315.5228 315.522 320 310 320C304.478 320 300 315.5228 300 310L300 90C300 84.478 304.478 80 310 80C315.522 80 320 84.478 320 90L320 100L360 100L360 300zM100 240L135.777 222.1114C138.5542 220.723 141.6164 220 144.7214 220H255.278C258.384 220 261.4460000000001 220.723 264.222 222.1114L300 240V160L264.222 177.888C261.4460000000001 179.278 258.384 180 255.278 180H144.7214C141.6164 180 138.5542 179.278 135.777 177.888L100 160V240zM0 220H40V180H0V220zM0 240H20V160H0V240zM380 240H400V160H380V240zM400 180L360 180L360 220L400 220L400 180zM160 220C160 231.0456 168.9544 240 180 240H220C231.046 240 240 231.0456 240 220V180C240 168.954 231.046 160 220 160H180C168.9544 160 160 168.954 160 180V220z" : "M20 60H40V50C40 44.478 44.4772 40 50 40C55.5228 40 60 44.478 60 50V270C60 275.5228 55.5228 280 50 280C44.4772 280 40 275.5228 40 270V260H20V60zM300 260L280 260L280 270C280 275.5228 275.522 280 270 280C264.478 280 260 275.5228 260 270L260 50C260 44.478 264.478 40 270 40C275.522 40 280 44.478 280 50L280 60L300 60L300 260zM60 200L95.777 182.1114C98.5542 180.723 101.6164 180 104.7214 180H215.278C218.384 180 221.446 180.723 224.222 182.1114L260 200V120L224.222 137.8886C221.446 139.277 218.384 140 215.278 140H104.7214C101.6164 140 98.5542 139.277 95.777 137.8886L60 120V200zM0 160C0 171.0456 8.9543 180 20 180H40V140H20C8.9543 140 0 148.9544 0 160V160zM320 160C320 148.9544 311.046 140 300 140L280 140L280 180L300 180C311.046 180 320 171.0456 320 160V160zM140 200H180A20 20 0 0 0 200 180V140A20 20 0 0 0 180 120H140A20 20 0 0 0 120 140V180A20 20 0 0 0 140 200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Axle.defaultProps = {
    size: IconSize.STANDARD,
};
Axle.displayName = `Blueprint5.Icon.Axle`;
export default Axle;
