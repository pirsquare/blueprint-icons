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
export var CaretUp = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "caret-up", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M315.2 152.6L315.4 152.8L215.4 272.8L215.2 272.6C211.4 277 206.2 280 200 280S188.6 277 184.8 272.6L184.6 272.8L84.6 152.8L84.8 152.6C82 149.2 80 144.8 80 140C80 129 89 120 100 120H300C311 120 320 129 320 140C320 144.8 318 149.2 315.2 152.6z" : "M237.4 136.6C237.4 136.6 237.6 136.6 237.4 136.6L167.4 216.6L167.4 216.6C165.6 218.6 163 220 160 220S154.4 218.6 152.6 216.6L152.6 216.6L82.6 136.6L82.6 136.6C81 134.8 80 132.6 80 130C80 124.4 84.4 120 90 120H230C235.6 120 240 124.4 240 130C240 132.6 239 134.8 237.4 136.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
CaretUp.defaultProps = {
    size: IconSize.STANDARD,
};
CaretUp.displayName = "Blueprint5.Icon.CaretUp";
export default CaretUp;
//# sourceMappingURL=caret-up.js.map