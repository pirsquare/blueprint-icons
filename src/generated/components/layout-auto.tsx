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

export const LayoutAuto: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="layout-auto" ref={ref}  {...props}>
            <path
                d={isLarge ? "M360 140C349.4 140 339.8 135.8 332.6 129L238 188C239.2 191.8 240 195.8 240 200S239.2 208.2 238 212L332.4000000000001 271C339.8 264.2 349.4 260 360 260C382 260 400 278 400 300C400 322 382 340 360 340S320 322 320 300C320 295.8 320.8 291.8 322 288L227.4000000000001 228.8C222.6 233.4000000000001 216.6 236.8000000000001 210 238.4000000000001V321.4C227.2 325.8 240 341.4 240 360C240 382 222 400 200 400S160 382 160 360C160 341.4 172.8 325.8 190 321.4V238.6C183.4 236.8 177.4 233.4 172.6 229L78 288C79.2 291.8 80 295.8 80 300C80 322 62 340 40 340S0 322 0 300C0 278 18 260 40 260C50.6 260 60.2 264.2 67.4 271L162 212C160.8 208.2 160 204.2 160 200S160.8 191.8 162 188L67.6 129C60.2 135.8 50.6 140 40 140C18 140 0 122 0 100C0 78 18 60 40 60S80 78 80 100C80 104.2000000000001 79.2 108.2 78 112L172.6 171.2C177.4 166.6 183.4 163.2 190 161.6V78.8C172.8 74.2000000000001 160 58.6 160 40C160 18 178 0 200 0S240 18 240 40C240 58.6 227.2 74.2000000000001 210 78.6V161.4C216.6 163.2 222.6 166.6 227.4 171L322 111.8C320.8 108.2 320 104.2000000000001 320 100C320 78 338 60 360 60S400 78 400 100C400 122 382 140 360 140z" : "M280 130C268.8 130 258.8 125.4 251.6 118.2L179.8 160L251.6 201.8C258.8 194.6 268.8 190 280 190C302 190 320 208 320 230C320 252 302 270 280 270S240 252 240 230C240 226.2 240.6 222.6 241.6 219.2L170 177.4V241.4C187.2 245.8 200 261.4 200 280C200 302 182 320 160 320S120 302 120 280C120 261.4 132.8 245.8 150 241.4V177.4L78.4 219.2C79.4 222.6 80 226.2 80 230C80 252 62 270 40 270S0 252 0 230C0 208 18 190 40 190C51.2 190 61.2 194.6 68.4 201.8L140.2 160L68.4 118.2C61.2 125.4 51.2 130 40 130C18 130 0 112 0 90C0 68 18 50 40 50S80 68 80 90C80 93.8 79.4 97.4 78.4 100.8L150 142.6V78.6C132.8 74.2 120 58.6 120 40C120 18 138 0 160 0S200 18 200 40C200 58.6 187.2 74.2 170 78.6V142.6L241.6 100.8C240.6 97.4 240 93.8 240 90C240 68 258 50 280 50S320 68 320 90C320 112 302 130 280 130z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
LayoutAuto.defaultProps = {
    size: IconSize.STANDARD,
};
LayoutAuto.displayName = `Blueprint5.Icon.LayoutAuto`;
export default LayoutAuto;
