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
export const SwapVertical = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "swap-vertical", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M194.2 294L114.2 374C110.6 377.6 105.6 379.8 100 379.8C94.4 379.8 89.4 377.6 85.8 374L5.8 294C2.2 290.4 0 285.4 0 279.8C0 268.8 9 259.8 20 259.8C25.6 259.8 30.6 262 34.2 265.6L80 311.6V40C80 29 89 20 100 20C111 20 120 29 120 40V311.6L165.8 265.8C169.6 262 174.6 259.8 180 259.8C191 259.8 200 268.8 200 279.8C200 285.4 197.8 290.4 194.2 294zM200 320.4C200 320.2 200 320.2 200 320.4C200 320 200 320 200 320V320.4zM200 79.6C200 79.8 200 79.8 200 79.6C200 80 200 80 200 80V79.6zM380 140.2C374.4 140.2 369.4 138 365.8 134.4L320 88.4V360C320 371 311 380 300 380C289 380 280 371 280 360V88.4L234.2 134.2000000000001C230.6 137.8 225.6 140 220 140C209 140 200 131 200 120C200 114.4 202.2 109.4 205.8 105.8L285.8 25.8C289.4 22.2 294.4 20 300 20C305.6 20 310.6 22.2 314.2000000000001 25.8L394.2000000000001 105.8C397.8 109.4 400 114.4 400 120C400 131.2 391 140.2 380 140.2z" : "M180 320H179.6L180 319.2V320zM140 0H140.4L140 1V0zM94 293.8C90.4 297.4 85.4 299.6 80 299.6S69.4 297.4 65.8 293.8L5.8 234C2.2 230.2 0 225.2 0 219.8C0 208.8 9 199.8 20 199.8C25.6 199.8 30.6 202 34.2 205.6L60 231.4V40C60 29 69 20 80 20C91 20 100 29 100 40V231.4L125.8 205.6C129.4 202 134.4 199.8 139.8 199.8C150.8 199.8 159.8 208.8 159.8 219.8C159.8 225.4 157.6 230.4 154 234L94 293.8zM300 120.2C294.4000000000001 120.2 289.4000000000001 118 285.8 114.4L260 88.6V280C260 291 251 300 240 300C229 300 220 291 220 280V88.6L194.2 114.4C190.6 118 185.6 120.2 180.2 120.2C169.2 120.2 160.2 111.2 160.2 100.2C160.2 94.6 162.4 89.6 166 86L226 26.2C229.6 22.6 234.6 20.4 240.2 20.4C245.8 20.4 250.8 22.6 254.4 26.2L314.4 86C318 89.6 320.2 94.6 320.2 100.2000000000001C320 111.2 311 120.2 300 120.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SwapVertical.defaultProps = {
    size: IconSize.STANDARD,
};
SwapVertical.displayName = `Blueprint5.Icon.SwapVertical`;
export default SwapVertical;
//# sourceMappingURL=swap-vertical.js.map