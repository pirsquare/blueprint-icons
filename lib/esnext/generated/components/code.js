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
export const Code = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "code", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M120 280C120 291 111 300 100 300C94.4 300 89.4 297.8 85.8 294.2L5.8 214.2C2.2 210.6 0 205.6 0 200C0 194.4 2.2 189.4 5.8 185.8L85.8 105.8C89.4 102.2 94.4 100 100 100C111 100 120 109 120 120C120 125.6 117.8 130.6 114.2 134.2000000000001L48.2 200L114 265.8C117.8 269.4 120 274.4 120 280zM240 360C230.8 360 223.4 353.8 221 345.4L141 65.4C140.6 63.6 140 62 140 60C140 49 149 40 160 40C169.2 40 176.6 46.2 179 54.6L259 334.6C259.4000000000001 336.4 260 338 260 340C260 351 251 360 240 360zM394.2000000000001 214.2L314.2000000000001 294.2000000000001C310.6 297.8 305.6 300 300 300C289 300 280 291 280 280C280 274.4 282.2 269.4 285.8 265.8L351.8 200L286 134.2000000000001C282.2 130.6 280 125.6 280 120C280 109 289 100 300 100C305.6 100 310.6 102.2 314.2000000000001 105.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2z" : "M314.2000000000001 174.2L254.2 234.2C250.6 237.8 245.6 240 240 240C229 240 220 231 220 220C220 214.4 222.2 209.4 225.8 205.8L271.8 160L226 114.2C222.2 110.6 220 105.6 220 100C220 89 229 80 240 80C245.6 80 250.6 82.2 254.2 85.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160C320 165.6 317.8 170.6 314.2000000000001 174.2zM100 220C100 231 91 240 80 240C74.4 240 69.4 237.8 65.8 234.2L5.8 174.2C2.2 170.6 0 165.6 0 160C0 154.4 2.2 149.4 5.8 145.8L65.8 85.8C69.4 82.2 74.4 80 80 80C91 80 100 89 100 100C100 105.6 97.8 110.6 94.2 114.2L48.2 160L94 205.8C97.8 209.4 100 214.4 100 220zM180 280C170.4 280 162.6 273 160.8 263.8L120.8 63.8C120.6 62.6 120 61.4 120 60C120 49 129 40 140 40C149.6 40 157.4 47 159.2 56.2L199.2 256.2C199.4 257.4 200 258.6 200 260C200 271 191 280 180 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Code.defaultProps = {
    size: IconSize.STANDARD,
};
Code.displayName = `Blueprint5.Icon.Code`;
export default Code;
//# sourceMappingURL=code.js.map