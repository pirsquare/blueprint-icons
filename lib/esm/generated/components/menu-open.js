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
export var MenuOpen = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "menu-open", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M240 220H20C9 220 0 211 0 200C0 189 9 180 20 180H240C251 180 260 189 260 200C260 211 251 220 240 220zM240 120H20C9 120 0 111 0 100C0 89 9 80 20 80H240C251 80 260 89 260 100C260 111 251 120 240 120zM240 320H20C9 320 0 311 0 300C0 289 9 280 20 280H240C251 280 260 289 260 300C260 311 251 320 240 320zM394.2000000000001 214.2L334.2000000000001 274.2000000000001C330.6 277.8 325.6 280 320 280C309 280 300 271 300 260V140C300 129 309 120 320 120C325.6 120 330.6 122.2 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2z" : "M199.8 80.2H19.8C8.8 80.2 -0.2 71.2 -0.2 60.2S8.8 40.2 19.8 40.2H199.8C210.8 40.2 219.8 49.2 219.8 60.2S210.8 80.2 199.8 80.2zM199.8 180.2H19.8C8.8 180.2 -0.2 171.2 -0.2 160.2S8.8 140.2 19.8 140.2H199.8C210.8 140.2 219.8 149.2 219.8 160.2S210.8 180.2 199.8 180.2zM199.8 280.2H19.8C8.8 280.2 -0.2 271.2 -0.2 260.2S8.8 240.2 19.8 240.2H199.8C210.8 240.2 219.8 249.2 219.8 260.2S210.8 280.2 199.8 280.2zM314 174.2L274 214.2C270.4 217.8 265.4 220 259.8 220C248.8 220 239.8 211 239.8 200V120C239.8 109 248.8 100 259.8 100C265.4 100 270.4 102.2 274 105.8L314 145.8C317.6 149.4 319.8 154.4 319.8 160S317.6 170.6 314 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MenuOpen.defaultProps = {
    size: IconSize.STANDARD,
};
MenuOpen.displayName = "Blueprint5.Icon.MenuOpen";
export default MenuOpen;
//# sourceMappingURL=menu-open.js.map