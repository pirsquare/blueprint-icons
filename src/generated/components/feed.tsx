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

export const Feed: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="feed" ref={ref}  {...props}>
            <path
                d={isLarge ? "M50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0S100 22.4 100 50C100 77.6 77.6 100 50 100zM60 200C49 200 40 191 40 180C40 169 49 160 60 160C115.2 160 160 115.2 160 60C160 49 169 40 180 40S200 49 200 60C200 137.4 137.4 200 60 200zM60 400C49 400 40 391 40 380C40 369 49 360 60 360C225.6 360 360 225.6 360 60C360 49 369 40 380 40S400 49 400 60C400 247.8 247.8 400 60 400zM60 300C49 300 40 291 40 280C40 269 49 260 60 260C170.4 260 260 170.4 260 60C260 49 269 40 280 40S300 49 300 60C300 192.6 192.6 300 60 300z" : "M39.8 80.2C17.8 80.2 -0.2 62.2 -0.2 40.2S17.8 0.2 39.8 0.2S79.8 18.2 79.8 40.2S62 80.2 39.8 80.2zM59.8 160.2C48.8 160.2 39.8 151.2 39.8 140.2S48.8 120.2 59.8 120.2C93 120.2 119.8 93.4 119.8 60.2C119.8 49.2 128.8 40.2 139.8 40.2S159.8 49.2 159.8 60.2C159.8 115.4 115 160.2 59.8 160.2zM59.8 240.2C48.8 240.2 39.8 231.2 39.8 220.2S48.8 200.2 59.8 200.2C137.2 200.2 199.8 137.6 199.8 60.2C199.8 49.2 208.8 40.2 219.8 40.2S239.8 49.2 239.8 60.2C239.8 159.6 159.2 240.2 59.8 240.2zM59.8 320.2C48.8 320.2 39.8 311.2 39.8 300.2S48.8 280.2 59.8 280.2C181.4 280.2 279.8 181.8 279.8 60.2C279.8 49.2 288.8 40.2 299.8 40.2S319.8 49.2 319.8 60.2C319.8 203.8 203.4 320.2 59.8 320.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Feed.defaultProps = {
    size: IconSize.STANDARD,
};
Feed.displayName = `Blueprint5.Icon.Feed`;
export default Feed;
