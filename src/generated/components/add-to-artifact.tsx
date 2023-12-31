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

export const AddToArtifact: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="add-to-artifact" ref={ref}  {...props}>
            <path
                d={isLarge ? "M260 160H20C9 160 0 151 0 140C0 129 9 120 20 120H260C271 120 280 129 280 140C280 151 271 160 260 160zM260 80H20C9 80 0 71 0 60C0 49 9 40 20 40H260C271 40 280 49 280 60C280 71 271 80 260 80zM20 280H200C211 280 220 289 220 300C220 311 211 320 200 320H20C9 320 0 311 0 300C0 289 9 280 20 280zM260 240H20C9 240 0 231 0 220C0 209 9 200 20 200H260C271 200 280 209 280 220C280 231 271 240 260 240zM380 320H340V360C340 371 331 380 320 380S300 371 300 360V320H260C249 320 240 311 240 300C240 289 249 280 260 280H300V240C300 229 309 220 320 220S340 229 340 240V280H380C391 280 400 289 400 300C400 311 391 320 380 320z" : "M280 239.8H260V259.8C260 270.8 251 279.8 240 279.8S220 270.8 220 259.8V239.8H200C189 239.8 180 230.8 180 219.8C180 208.8 189 199.8 200 199.8H220V179.8C220 168.8 229 159.8 240 159.8S260 168.8 260 179.8V199.8H280C291 199.8 300 208.8 300 219.8C300 231 291 239.8 280 239.8zM20 199.8H140C151 199.8 160 208.8 160 219.8C160 230.8 151 239.8 140 239.8H20C9 239.8 0 230.8 0 219.8C0 208.8 9 199.8 20 199.8zM180 79.8H20C9 79.8 0 70.8 0 59.8C0 48.8 9 39.8 20 39.8H180C191 39.8 200 48.8 200 59.8C200 71 191 79.8 180 79.8zM180 159.8H20C9 159.8 0 150.8 0 139.8C0 128.8 9 119.8 20 119.8H180C191 119.8 200 128.8 200 139.8C200 151 191 159.8 180 159.8z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
AddToArtifact.defaultProps = {
    size: IconSize.STANDARD,
};
AddToArtifact.displayName = `Blueprint5.Icon.AddToArtifact`;
export default AddToArtifact;
