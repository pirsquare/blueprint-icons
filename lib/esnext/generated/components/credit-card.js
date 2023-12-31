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
export const CreditCard = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "credit-card", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 340H20C9 340 0 331 0 320V280H400V320C400 331 391 340 380 340zM0 80C0 69 9 60 20 60H380C391 60 400 69 400 80V240H0V80zM130 120H270C275.6 120 280 115.6 280 110C280 104.4 275.6 100 270 100H130C124.4 100 120 104.4 120 110C120 115.6 124.4 120 130 120zM50 120H90C95.6 120 100 115.6 100 110C100 104.4 95.6 100 90 100H50C44.4 100 40 104.4 40 110C40 115.6 44.4 120 50 120z" : "M299.8 261H19.8C8.8 261 -0.2 252 -0.2 241V221H319.8V241C319.8 252 310.8 261 299.8 261zM-0.2 61C-0.2 50 8.8 41 19.8 41H299.8C310.8 41 319.8 50 319.8 61V181H-0.2C-0.2 181 -0.2 61 -0.2 61zM109.8 101H209.8C215.4 101 219.8 96.6 219.8 91S215.4 81 209.8 81H109.8C104.2 81 99.8 85.4 99.8 91S104.4 101 109.8 101zM49.8 101H69.8C75.4 101 79.8 96.6 79.8 91S75.4 81 69.8 81H49.8C44.2 81 39.8 85.4 39.8 91S44.4 101 49.8 101z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
CreditCard.defaultProps = {
    size: IconSize.STANDARD,
};
CreditCard.displayName = `Blueprint5.Icon.CreditCard`;
export default CreditCard;
//# sourceMappingURL=credit-card.js.map