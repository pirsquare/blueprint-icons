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

export const Notifications: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="notifications" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 0C222 0 240 18 240 40H160C160 18 178 0 200 0zM340 100C329 100 320 109 320 120V240C320 292.2 286.6 336.2 240 352.6V360C240 382 222 400 200 400S160 382 160 360V352.6C113.4 336.2 80 292.2 80 240V120C80 109 71 100 60 100S40 91 40 80C40 69 49 60 60 60H340C351 60 360 69 360 80C360 91 351 100 340 100z" : "M160 0C182 0 200 18 200 40H120C120 18 138 0 160 0zM280 100C269 100 260 109 260 120V200C260 248.6 225.4 289 179.6 298C179.6 298.8 180 299.2 180 300C180 311 171 320 160 320S140 311 140 300C140 299.2 140.4 298.8 140.4 298C94.6 289 60 248.6 60 200V120C60 109 51 100 40 100S20 91 20 80C20 69 29 60 40 60H280C291 60 300 69 300 80C300 91 291 100 280 100z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Notifications.defaultProps = {
    size: IconSize.STANDARD,
};
Notifications.displayName = `Blueprint5.Icon.Notifications`;
export default Notifications;
