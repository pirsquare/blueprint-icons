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
export var ExpandAll = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "expand-all", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 220C85.6 220 90.6 222.2 94.2 225.8L200 331.8L305.8 226C309.4000000000001 222.2 314.4000000000001 220 320 220C331 220 340 229 340 240C340 245.6 337.8 250.6 334.2000000000001 254.2L214.2 374.2C210.6 377.8 205.6 380 200 380S189.4 377.8 185.8 374.2L65.8 254.2C62.2 250.6 60 245.6 60 240C60 229 69 220 80 220zM320 180C314.4000000000001 180 309.4000000000001 177.8 305.8 174.2L200 68.2L94.2 174C90.6 177.8 85.6 180 80 180C69 180 60 171 60 160C60 154.4 62.2 149.4 65.8 145.8L185.8 25.8C189.4 22.2 194.4 20 200 20S210.6 22.2 214.2 25.8L334.2000000000001 145.8C337.8 149.4 340 154.4 340 160C340 171 331 180 320 180z" : "M80 180C85.6 180 90.6 182.2 94.2 185.8L160 251.8L225.8 186C229.4 182.2 234.4 180 240 180C251 180 260 189 260 200C260 205.6 257.8 210.6 254.2 214.2L174.2 294.2C170.6 297.8 165.6 300 160 300S149.4 297.8 145.8 294.2L65.8 214.2C62.2 210.6 60 205.6 60 200C60 189 69 180 80 180zM240 140C234.4 140 229.4 137.8 225.8 134.2L160 68.2L94.2 134.2C90.6 137.8 85.6 140 80 140C69 140 60 131 60 120C60 114.4 62.2 109.4 65.8 105.8L145.8 25.8C149.4 22.2 154.4 20 160 20S170.6 22.2 174.2 25.8L254.2 105.8C257.8 109.4 260 114.4 260 120C260 131 251 140 240 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
ExpandAll.defaultProps = {
    size: IconSize.STANDARD,
};
ExpandAll.displayName = "Blueprint5.Icon.ExpandAll";
export default ExpandAll;
//# sourceMappingURL=expand-all.js.map