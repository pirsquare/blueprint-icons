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
export const AutomaticUpdates = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "automatic-updates", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 40C111.6 40 40 111.6 40 200C40 250.4 63.6 295.2 100 324.4V300C100 289 109 280 120 280S140 289 140 300V380C140 391 131 400 120 400H40C29 400 20 391 20 380S29 360 40 360H81.2C32.2 323.6 0 265.8 0 200C0 89.6 89.6 0 200 0C211 0 220 9 220 20S211 40 200 40zM200 360C232.8 360 263 350.2 288.4 333.2L317 361.8C284.2000000000001 385.8 243.8 400 200 400C189 400 180 391 180 380C180 369 189 360 200 360zM400 200C400 222.6 396 244.2 389.2000000000001 264.4L356.8 232C358.8 221.6 360 211 360 200C360 149.6 336.4 104.8 300 75.6V100C300 111 291 120 280 120S260 111 260 100V20C260 9 269 0 280 0H360C371 0 380 9 380 20S371 40 360 40H318.8C367.8 76.4 400 134.2000000000001 400 200zM400 340C400 351 391 360 380 360C374.4 360 369.4 357.8 365.8 354.2L240 228.2L194.2 274.2C190.6 277.8 185.6 280 180 280C169 280 160 271 160 260C160 254.4 162.2 249.4 165.8 245.8L225.8 185.8C229.4 182.2 234.4 180 240 180S250.6 182.2 254.2 185.8L394.2000000000001 325.8C397.8 329.4 400 334.4 400 340z" : "M160 40C93.8 40 40 93.8 40 160C40 195.4 55.6 227.2 80 249.2V220C80 209 89 200 100 200S120 209 120 220V300C120 311 111 320 100 320H20C9 320 0 311 0 300S9 280 20 280H54.8C21.4 250.8 0 208 0 160C0 71.6 71.6 0 160 0C171 0 180 9 180 20S171 40 160 40zM160 280C181.6 280 201.6 273.8 219 263.8L248.4 293.2C223 310.2 192.8 320 160 320C149 320 140 311 140 300S149 280 160 280zM214.2 145.8L314.2000000000001 245.8C317.8 249.4 320 254.4 320 260C320 271 311 280 300 280C294.4000000000001 280 289.4000000000001 277.8 285.8 274.2L200 188.2L174.2 214.2C170.6 217.8 165.6 220 160 220C149 220 140 211 140 200C140 194.4 142.2 189.4 145.8 185.8L185.8 145.8C189.4 142.2 194.4 140 200 140S210.6 142.2 214.2 145.8zM320 160C320 171 318.8 181.6 316.8 192L279.4 154.6C277.8 121.4 263.2 91.8 240 71V100C240 111 231 120 220 120S200 111 200 100V20C200 9 209 0 220 0H300C311 0 320 9 320 20S311 40 300 40H265.2C298.6 69.2 320 112 320 160z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AutomaticUpdates.defaultProps = {
    size: IconSize.STANDARD,
};
AutomaticUpdates.displayName = `Blueprint5.Icon.AutomaticUpdates`;
export default AutomaticUpdates;
//# sourceMappingURL=automatic-updates.js.map