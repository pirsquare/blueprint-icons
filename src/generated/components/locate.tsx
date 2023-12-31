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

export const Locate: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="locate" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 240C178 240 160 222 160 200C160 178 178 160 200 160S240 178 240 200C240 222 222 240 200 240zM380 220H358.6C349.6 292.2 292.2 349 220 358.2V380C220 391 211 400 200 400S180 391 180 380V358.2C107.8 349 50.4 292.2 41.4 220H20C9 220 0 211 0 200C0 189 9 180 20 180H41.4C50.4 107.8 107.8 51 180 41.8V20C180 9 189 0 200 0S220 9 220 20V41.8C292.2 51 349.6 107.6 358.6 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM300 180H318C309.6 129.8 270.2 90.2 220 81.8V100C220 111 211 120 200 120S180 111 180 100V81.8C129.8 90.2 90.4 129.8 82 180H100C111 180 120 189 120 200C120 211 111 220 100 220H82C90.4 270.2 129.8 309.8 180 318.2V300C180 289 189 280 200 280S220 289 220 300V318.2C270.2 309.8 309.6 270.2 318 220H300C289 220 280 211 280 200C280 189 289 180 300 180z" : "M300 180H298.2C289.4000000000001 241 241.2 289.2 180 298V300C180 311 171 320 160 320S140 311 140 300V298.2C79 289.4 30.8 241.2 22 180H20C9 180 0 171 0 160C0 149 9 140 20 140H22C30.8 78.8 78.8 30.6 140 21.8V20C140 9 149 0 160 0S180 9 180 20V21.8C241 30.6 289.2000000000001 78.8 298 140H300C311 140 320 149 320 160C320 171 311 180 300 180zM179.6 62C178.6 72 170.4 80 160 80S141.4 72 140.4 62C101 70 69.8 101 62 140.4C72 141.4 80 149.6 80 160C80 170.4 72 178.6 62 179.6C69.8 219 101 250 140.4 258C141.4 248 149.6 240 160 240C170.4 240 178.6 248 179.6 258C219 250.2 250 219 258 179.6C248 178.6 240 170.4 240 160C240 149.6 248 141.4 258 140.4C250.2 101 219 70 179.6 62zM160 200C138 200 120 182 120 160C120 138 138 120 160 120S200 138 200 160C200 182 182 200 160 200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Locate.defaultProps = {
    size: IconSize.STANDARD,
};
Locate.displayName = `Blueprint5.Icon.Locate`;
export default Locate;
