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
export const LayoutLinear = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "layout-linear", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M330 260C305.8 260 285.6 242.8 281 220H239.0000000000001C234.4 242.8 214.2 260 190 260S145.6 242.8 141 220H99C94.4 242.8 74.2 260 50 260C22.4 260 0 237.6 0 210C0 182.4 22.4 160 50 160C74.2 160 94.4 177.2 99 200H141C145.6 177.2 165.8 160 190 160S234.4 177.2 239 200H281C285.6 177.2 305.8 160 330 160C357.6 160 380 182.4 380 210C380 237.6 357.6 260 330 260z" : "M280 200C261.4 200 245.8 187.2 241.4 170H198.6C194.2 187.2 178.6 200 160 200S125.8 187.2 121.4 170H78.6C74.2 187.2 58.6 200 40 200C18 200 0 182 0 160C0 138 18 120 40 120C58.6 120 74.2 132.8 78.6 150H121.2C125.8 132.8 141.4 120 160 120S194.2 132.8 198.6 150H241.2C245.6 132.8 261.2 120 279.8 120C301.8 120 319.8 138 319.8 160C320 182 302 200 280 200z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
LayoutLinear.defaultProps = {
    size: IconSize.STANDARD,
};
LayoutLinear.displayName = `Blueprint5.Icon.LayoutLinear`;
export default LayoutLinear;
//# sourceMappingURL=layout-linear.js.map