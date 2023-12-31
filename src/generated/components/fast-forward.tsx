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

export const FastForward: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="fast-forward" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 200C380 206.6 376.6 212 371.8 215.8L372 216L212 336L211.8000000000001 335.8C208.4 338.2 204.6 340 200 340C189 340 180 331 180 320V240L52 336L51.8 335.8C48.4 338.2 44.6 340 40 340C29 340 20 331 20 320V80C20 69 29 60 40 60C44.6 60 48.4 61.8 51.8 64.2000000000001L52 64L180 160V80C180 69 189 60 200 60C204.6 60 208.4 61.8 211.8 64.2000000000001L212 64L372 184L371.8 184.2C376.6 188 380 193.4 380 200z" : "M300 160C300 166.4 296.8 171.8 292.4 175.4L292.6 175.6L192.6 255.6L192.4 255.4C188.8 258.2 184.8 260 180 260C169 260 160 251 160 240V185.6L72.4 255.6L72.4 255.4C68.8 258.2 64.8 260 60 260C49 260 40 251 40 240V80C40 69 49 60 60 60C64.8 60 68.8 61.8 72.4 64.6L72.6 64.4L160 134.4V80C160 69 169 60 180 60C184.8 60 188.8 61.8 192.4 64.6L192.6 64.4L292.6 144.4C292.6 144.4 292.4 144.6 292.4 144.6C296.8 148.2 300 153.6 300 160z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
FastForward.defaultProps = {
    size: IconSize.STANDARD,
};
FastForward.displayName = `Blueprint5.Icon.FastForward`;
export default FastForward;
