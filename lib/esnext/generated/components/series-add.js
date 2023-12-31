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
export const SeriesAdd = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "series-add", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M265.8 214.2C271.8 201.8000000000001 281.8 191.8 294.2 185.8L234.2 125.8C230.6 122.2 225.6 120 220 120S209.4 122.2 205.8 126L140 191.8L40 91.8V60H380C391 60 400 51 400 40S391 20 380 20H20C11.8 20 4.6 25 1.6 32.2C0.6 34.6 0 37.2 0 40V320C0 331 9 340 20 340S40 331 40 320V148.2L125.8 234.2C129.4 237.8 134.4 240 140 240S150.6 237.8 154.2 234.2L220 168.2L265.8 214.2zM240 300C240 310 248 320 260 320H300V360C300 372 308 380 320 380C330 380 340 372 340 360V320H380C390 320 400 312 400 300S390 280 380 280H340V240C340 228 330 220 320 220C308 220 300 228 300 240V280H260C248 280 240 288 240 300z" : "M213.6 162C222.4 151.2 235 143.6 249.4 141L194.2 85.8C190.6 82.2 185.6 80 180 80S169.4 82.2 165.8 86L100 151.8L40 91.8V60H300C311 60 320 51 320 40S311 20 300 20H20C9 20 0 29 0 40V240C0 251 9 260 20 260S40 251 40 240V148.2L85.8 194.2C89.4 197.8 94.4 200 100 200S110.6 197.8 114.2 194.2L180 128.2L213.6 162zM300 260C311 260 320 251 320 240S311 220 300 220H280V200C280 189 271 180 260 180S240 189 240 200V220H220C209 220 200 229 200 240S209 260 220 260H240V280C240 291 249 300 260 300S280 291 280 280V260H300z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SeriesAdd.defaultProps = {
    size: IconSize.STANDARD,
};
SeriesAdd.displayName = `Blueprint5.Icon.SeriesAdd`;
export default SeriesAdd;
//# sourceMappingURL=series-add.js.map