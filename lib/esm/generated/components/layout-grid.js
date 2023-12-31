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
export var LayoutGrid = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "layout-grid", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M0 360A40 40 0 0 1 80 360A40 40 0 0 1 0 360M160 360A40 40 0 0 1 240 360A40 40 0 0 1 160 360M320 360A40 40 0 0 1 400 360A40 40 0 0 1 320 360M320 200A40 40 0 0 1 400 200A40 40 0 0 1 320 200M320 40A40 40 0 0 1 400 40A40 40 0 0 1 320 40M160 40A40 40 0 0 1 240 40A40 40 0 0 1 160 40M0 40A40 40 0 0 1 80 40A40 40 0 0 1 0 40M0 200A40 40 0 0 1 80 200A40 40 0 0 1 0 200M160 200A40 40 0 0 1 240 200A40 40 0 0 1 160 200" : "M40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM40 200C18 200 0 182 0 160C0 138 18 120 40 120S80 138 80 160C80 182 62 200 40 200zM40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320zM280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240zM280 200C258 200 240 182 240 160C240 138 258 120 280 120S320 138 320 160C320 182 302 200 280 200zM160 320C138 320 120 302 120 280S138 240 160 240S200 258 200 280S182 320 160 320zM280 80C258 80 240 62 240 40C240 18 258 0 280 0S320 18 320 40C320 62 302 80 280 80zM160 200C138 200 120 182 120 160C120 138 138 120 160 120S200 138 200 160C200 182 182 200 160 200zM160 80C138 80 120 62 120 40C120 18 138 0 160 0S200 18 200 40C200 62 182 80 160 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
LayoutGrid.defaultProps = {
    size: IconSize.STANDARD,
};
LayoutGrid.displayName = "Blueprint5.Icon.LayoutGrid";
export default LayoutGrid;
//# sourceMappingURL=layout-grid.js.map