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
export var DragHandleVertical = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "drag-handle-vertical", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M150 280C133.4 280 120 266.6 120 250S133.4 220 150 220S180 233.4 180 250S166.6 280 150 280zM150 180C133.4 180 120 166.6 120 150S133.4 120 150 120S180 133.4 180 150S166.6 180 150 180zM150 80C133.4 80 120 66.6 120 50S133.4 20 150 20S180 33.4 180 50S166.6 80 150 80zM250 320C266.6 320 280 333.4 280 350S266.6 380 250 380S220 366.6 220 350S233.4 320 250 320zM150 380C133.4 380 120 366.6 120 350S133.4 320 150 320S180 333.4 180 350S166.6 380 150 380zM250 180C233.4 180 220 166.6 220 150S233.4 120 250 120S280 133.4 280 150S266.6 180 250 180zM250 80C233.4 80 220 66.6 220 50S233.4 20 250 20S280 33.4 280 50S266.6 80 250 80zM250 280C233.4 280 220 266.6 220 250S233.4 220 250 220S280 233.4 280 250S266.6 280 250 280z" : "M120 140C109 140 100 131 100 120C100 109 109 100 120 100S140 109 140 120C140 131 131 140 120 140zM200 260C211 260 220 269 220 280C220 291 211 300 200 300S180 291 180 280C180 269 189 260 200 260zM120 60C109 60 100 51 100 40C100 29 109 20 120 20S140 29 140 40C140 51 131 60 120 60zM120 220C109 220 100 211 100 200C100 189 109 180 120 180S140 189 140 200C140 211 131 220 120 220zM120 300C109 300 100 291 100 280C100 269 109 260 120 260S140 269 140 280C140 291 131 300 120 300zM200 140C189 140 180 131 180 120C180 109 189 100 200 100S220 109 220 120C220 131 211 140 200 140zM200 220C189 220 180 211 180 200C180 189 189 180 200 180S220 189 220 200C220 211 211 220 200 220zM200 60C189 60 180 51 180 40C180 29 189 20 200 20S220 29 220 40C220 51 211 60 200 60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
DragHandleVertical.defaultProps = {
    size: IconSize.STANDARD,
};
DragHandleVertical.displayName = "Blueprint5.Icon.DragHandleVertical";
export default DragHandleVertical;
//# sourceMappingURL=drag-handle-vertical.js.map