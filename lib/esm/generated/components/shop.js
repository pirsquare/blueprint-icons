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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var Shop = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "shop", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M358.8 327.4C358.6 327.8 358.6 328 358.4000000000001 328.2L357.8 330L357.6 330C354 336 347.8 340 340.4 340H60.4C52 340 45 335 42 327.8L42 327.8L42 327.8C42 327.8 42 327.8 42 327.8L0 230H0.4C0.4 202.4 22.8 180 50.4 180S100.4 202.4 100.4 230C100.4 202.4 122.8 180 150.4 180S200.4 202.4 200.4 230C200.4 202.4 222.8 180 250.4 180S300.4 202.4 300.4 230C300.4 202.4 322.8 180 350.4 180S400.4 202.4 400.4 230H400.4L358.8 327.4zM60.4 360H340.4C351.4 360 360.4 369 360.4 380C360.4 391 351.4 400 340.4 400H60.4C49.4 400 40.4 391 40.4 380C40.4 369 49.2 360 60.4 360zM320.4 80H80.4V160H40.4V20C40.4 9 49.4 0 60.4 0H340.4C351.4 0 360.4 9 360.4 20V160H320.4V80z" : "M60 280H260C271 280 280 289 280 300C280 311 271 320 260 320H60C49 320 40 311 40 300C40 289 49 280 60 280zM240 60H80V120H40V20C40 9 49 0 60 0H260C271 0 280 9 280 20V120H240V60zM320 180L299.8 243.4C298 252.8 289.8 260 280 260H40C30.2 260 22 252.8 20.4 243.4L0.2 180H0C0 158 18 140 40 140S80 158 80 180C80 158 98 140 120 140S160 158 160 180C160 158 178 140 200 140S240 158 240 180C240 158 258 140 280 140S320 158 320 180L320 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Shop.defaultProps = {
    size: IconSize.STANDARD,
};
Shop.displayName = "Blueprint5.Icon.Shop";
export default Shop;
//# sourceMappingURL=shop.js.map