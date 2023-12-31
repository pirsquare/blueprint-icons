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
export var ArrowRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "arrow-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M374.2000000000001 214.2L254.2 334.2000000000001C250.6 337.8 245.6 340 240 340C229 340 220 331 220 320C220 314.4 222.2 309.4 225.8 305.8L311.8 220H40C29 220 20 211 20 200C20 189 29 180 40 180H311.8L226 94.2000000000001C222.2 90.6 220 85.6 220 80C220 69 229 60 240 60C245.6 60 250.6 62.2 254.2 65.8L374.2000000000001 185.8C377.8 189.4 380 194.4 380 200C380 205.6 377.8 210.6 374.2000000000001 214.2z" : "M294 174.2L194 274.2C190.4 278 185.4 280.2 179.8 280.2C168.8 280.2 159.8 271.2 159.8 260.2C159.8 254.6 162 249.6 165.6 246L231.4 180.2H39.8C28.8 180.2 19.8 171.2 19.8 160.2S28.8 140.2 39.8 140.2H231.6L165.8 74.4C162.2 70.8 160 65.8 160 60.1999999999999C160 49.1999999999999 169 40.1999999999999 180 40.1999999999999C185.6 40.1999999999999 190.6 42.4 194.2 45.9999999999999L294.2000000000001 146C297.8 149.5999999999999 300 154.5999999999999 300 160.1999999999999S297.6 170.6 294 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
ArrowRight.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowRight.displayName = "Blueprint5.Icon.ArrowRight";
export default ArrowRight;
//# sourceMappingURL=arrow-right.js.map