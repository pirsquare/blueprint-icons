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
export var Annotation = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "annotation", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M188.2 131.8L341.2000000000001 284.8L284.6 341.4L131.6 188.4L188.2 131.8zM388.2 331.8C395.6 339 400 349 400 360C400 382 382 400 360 400C349 400 339 395.6 331.8 388.2L298.8 355.2L355.4 298.6L388.2 331.8zM360 40H40V360H218.6L258.6 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V258.6L360 218.6V40zM80 80L168.2 111.8L112 167.6L80 80z" : "M310.4 264.6C316.4 270.4 320 278.6 320 287.6C320 305.4 305.4 320 287.6 320C278.6 320 270.6 316.4 264.6 310.4L237.8 283.6L283.8 237.6L310.4 264.6zM148 102L272.2 226.2L226.2 272.2L102 148L148 102zM280 40H40V280H166.8L206.8 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V206.8L280 166.8V40zM60 60L131.6 85.8L85.8 131.2L60 60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Annotation.defaultProps = {
    size: IconSize.STANDARD,
};
Annotation.displayName = "Blueprint5.Icon.Annotation";
export default Annotation;
//# sourceMappingURL=annotation.js.map