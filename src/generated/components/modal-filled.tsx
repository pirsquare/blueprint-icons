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

export const ModalFilled: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="modal-filled" ref={ref}  {...props}>
            <path
                d={isLarge ? "M400 300L400 40C400 28.954306 391.0456940000001 20 380 20L20 20C8.954305 20 0 28.954306 0 40L0 300L400 300zM340 380L380 380C391.0456940000001 380 400 371.045695 400 360L400 340L340 340L340 380zM300 340L0 340L0 360C0 371.045695 8.954305 380 20 380L300 380L300 340z" : "M300 300L20 300C9 300 0 291 0 280L0 40C0 29 9 20 20 20L300 20C311 20 320 29 320 40L320 280C320 291 311 300 300 300zM320 220L0 220L0 260L320 260L320 220zM260 260L220 260L220 300L260 300L260 260z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ModalFilled.defaultProps = {
    size: IconSize.STANDARD,
};
ModalFilled.displayName = `Blueprint5.Icon.ModalFilled`;
export default ModalFilled;
