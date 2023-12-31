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
export const SwapHorizontal = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "swap-horizontal", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M320.4 200C320.2000000000001 200 320.2000000000001 200 320.4 200C320 200 320 200 320 200H320.4zM40 280H311.6L265.8 234.2C262 230.4 259.8 225.4 259.8 220C259.8 209 268.8 200 279.8 200C285.4 200 290.4 202.2 294 205.8L374 285.8C377.6 289.4 379.8 294.4 379.8 300C379.8 305.6 377.6 310.6 374 314.2L294 394.2C290.4 397.8 285.4 400 279.8 400C268.8 400 259.8 391 259.8 380C259.8 374.4 262 369.4 265.6 365.8L311.6 320H40C29 320 20 311 20 300C20 289 29 280 40 280zM80 200H79.6C79.8 200 79.8 200 80 200C80 200 80 200 80 200zM360 120H88.4L134.2 165.8C138 169.6 140.2 174.6 140.2 180C140.2 191 131.2 200 120.2 200C114.6 200 109.6 197.8 106 194.2L26 114.2000000000001C22.4 110.6 20.2 105.6 20.2 100C20.2 94.4 22.4 89.4 26 85.8L106 5.8C109.6 2.2 114.6 0 120.2 0C131.2 0 140.2 9 140.2 20C140.2 25.6 138 30.6 134.4 34.2L88.4 80H360C371 80 380 89 380 100C380 111 371 120 360 120z" : "M0 179.6L1 180H0V179.6zM40 220.2H231.4L205.6 194.4C202 190.6 199.8 185.6 199.8 180.2C199.8 169.2 208.8 160.2 219.8 160.2C225.4 160.2 230.4 162.4 234 166L293.8 226C297.4 229.6 299.6 234.6 299.6 240.2C299.6 245.8 297.4 250.8 293.8 254.4L234 314.4C230.2 317.8 225.2 320 219.8 320C208.8 320 199.8 311 199.8 300C199.8 294.4 202 289.4 205.6 285.8L231.4 260H40C29 260 20 251 20 240C20.2 229 29 220.2 40 220.2zM319.2000000000001 140H320V140.4L319.2000000000001 140zM280 99.8H88.6L114.4 125.6C118 129.4 120.2 134.4 120.2 139.8C120.2 150.8 111.2 159.8 100.2 159.8C94.6 159.8 89.6 157.6 86 154L26.2 94C22.6 90.4 20.4 85.4 20.4 80C20.4 74.4 22.6 69.4 26.2 65.8L86 5.8C89.8 2.2 94.8 0 100.2 0C111.2 0 120.2 9 120.2 20C120.2 25.6 118 30.6 114.4 34.2L88.6 60H280C291 60 300 69 300 80C300 91 291 99.8 280 99.8z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SwapHorizontal.defaultProps = {
    size: IconSize.STANDARD,
};
SwapHorizontal.displayName = `Blueprint5.Icon.SwapHorizontal`;
export default SwapHorizontal;
//# sourceMappingURL=swap-horizontal.js.map