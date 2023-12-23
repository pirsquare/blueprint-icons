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
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const AlignLeft = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "align-left", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M20 260H220C231 260 240 269 240 280C240 291 231 300 220 300H20C9 300 0 291 0 280C0 269 9 260 20 260zM20 340H380C391 340 400 349 400 360C400 371 391 380 380 380H20C9 380 0 371 0 360C0 349 9 340 20 340zM300 60H20C9 60 0 51 0 40C0 29 9 20 20 20H300C311 20 320 29 320 40C320 51 311 60 300 60zM380 220H20C9 220 0 211 0 200C0 189 9 180 20 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM20 100H140C151 100 160 109 160 120C160 131 151 140 140 140H20C9 140 0 131 0 120C0 109 9 100 20 100z" : "M260 60H20C9 60 0 51 0 40C0 29 9 20 20 20H260C271 20 280 29 280 40C280 51 271 60 260 60zM20 260H300C311 260 320 269 320 280C320 291 311 300 300 300H20C9 300 0 291 0 280C0 269 9 260 20 260zM20 200H180C191 200 200 209 200 220C200 231 191 240 180 240H20C9 240 0 231 0 220C0 209 9 200 20 200zM300 180H20C9 180 0 171 0 160C0 149 9 140 20 140H300C311 140 320 149 320 160C320 171 311 180 300 180zM20 80H100C111 80 120 89 120 100C120 111 111 120 100 120H20C9 120 0 111 0 100C0 89 9 80 20 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AlignLeft.defaultProps = {
    size: IconSize.STANDARD,
};
AlignLeft.displayName = `Blueprint5.Icon.AlignLeft`;
export default AlignLeft;
//# sourceMappingURL=align-left.js.map