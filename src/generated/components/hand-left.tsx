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

export const HandLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="hand-left" ref={ref}  {...props}>
            <path
                d={isLarge ? "M302 269.2C270.4 285.4 220.2 318.4 203.2 353.8C197 366.8 166.8 360.8 170.4 325.2C173 298.6 188.6 277.2 208.2 260.4L194.8 260H30C13.4 260 0 246.6 0 230C0 229.8 0 229.6 0 229.4C0 229.2 0 229.0000000000001 0 228.8C0 221.6 2.6 216 6.4 211.8C11.8 204.6 20.4 200 30 200H138.8L154.4 199.8C143.6 195.2 135.8 184.2 135.8 171.2C135.8 159.4 142.2 149.2 151.6 144C145.2 138.4 141.2 130.0000000000001 141.2 120.6C141.2 106.8 150 95.0000000000001 162.2 91.2C157.8000000000001 85.8 155 78.8 155 71.2000000000001C155 54.2 168.2 40.4000000000001 184.6 40.4000000000001H204.4C290.6 40.4000000000001 316.2 46.6 347.2 61.4000000000001C385 79.4 400.2 110.2000000000001 400.2 157.8000000000001C400 244.2 351.4 248.2 302 269.2z" : "M241.6 220.6C216.4 234.8 176.2 263.6 162.6 294.6C157.6 306 133.4 300.8 136.2 269.6C138 251 154 231.6 162.2 220H30C13.4 220 0 206.6 0 190S13.4 160 30 160H111L123.6 159.8C114.8 155.8 108.6 146 108.6 134.8C108.6 124.4 113.8 115.6 121.2 111C116 106 112.8 98.8 112.8 90.4C112.8 78.2000000000001 119.8 68.0000000000001 129.6 64.6C126 59.8 123.8 53.8 123.8 47C123.8 32 134.6 20 147.6 20H163.4C215.8 20 252.8 25.6 277.6 38.4C307.8 54.2 320 81.2 320 122.8C320 198.6 281 202.2 241.6 220.6z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
HandLeft.defaultProps = {
    size: IconSize.STANDARD,
};
HandLeft.displayName = `Blueprint5.Icon.HandLeft`;
export default HandLeft;
