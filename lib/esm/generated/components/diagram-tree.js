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
export var DiagramTree = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "diagram-tree", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 200L380 100L340 100L340 180L220 180L220 100L180 100L180 180L60 180L60 100L20 100L20 200C20 211.045695 28.954305 220 40 220L180 220L180 300L220 300L220 220L360 220C371.0456940000001 220 380 211.045695 380 200zM20 80L60 80C71.045695 80 80 71.045694 80 60L80 20C80 8.954306 71.045695 0 60 0L20 0C8.954305 0 0 8.954306 0 20L0 60C0 71.045694 8.954305 80 20 80zM340 80L380 80C391.0456940000001 80 400 71.045694 400 60L400 20C400 8.954306 391.0456940000001 0 380 0L340 0C328.954306 0 320 8.954306 320 20L320 60C320 71.045694 328.954306 80 340 80zM180 80L220 80C231.045694 80 240 71.045694 240 60L240 20C240 8.954306 231.045694 0 220 0L180 0C168.954305 0 160 8.954306 160 20L160 60C160 71.045694 168.954305 80 180 80zM180 400L220 400C231.045694 400 240 391.045695 240 380L240 340C240 328.954305 231.045694 320 220 320L180 320C168.954305 320 160 328.954305 160 340L160 380C160 391.045695 168.954305 400 180 400z" : "M300 160L300 100L260 100L260 140L180 140L180 100L140 100L140 140L60 140L60 100L20 100L20 160C20 171.045695 28.954305 180 40 180L140 180L140 220L180 220L180 180L280 180C291.045694 180 300 171.045695 300 160zM20 80L60 80C71.045695 80 80 71.045694 80 60L80 20C80 8.954306 71.045695 0 60 0L20 0C8.954305 0 0 8.954306 0 20L0 60C0 71.045694 8.954305 80 20 80zM260 80L300 80C311.045694 80 320 71.045694 320 60L320 20C320 8.954306 311.045694 0 300 0L260 0C248.954306 0 240 8.954306 240 20L240 60C240 71.045694 248.954306 80 260 80zM140 80L180 80C191.045695 80 200 71.045694 200 60L200 20C200 8.954306 191.045695 0 180 0L140 0C128.954305 0 120 8.954306 120 20L120 60C120 71.045694 128.954305 80 140 80zM140 320L180 320C191.045695 320 200 311.045695 200 300L200 260C200 248.954305 191.045695 240 180 240L140 240C128.954305 240 120 248.954305 120 260L120 300C120 311.045695 128.954305 320 140 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
DiagramTree.defaultProps = {
    size: IconSize.STANDARD,
};
DiagramTree.displayName = "Blueprint5.Icon.DiagramTree";
export default DiagramTree;
//# sourceMappingURL=diagram-tree.js.map