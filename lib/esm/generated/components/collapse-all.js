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
export var CollapseAll = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "collapse-all", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M185.8 225.8C189.4 222.2 194.4 220 200 220S210.6 222.2 214.2 225.8L334.2000000000001 345.8C337.8 349.4 340 354.4 340 360C340 371 331 380 320 380C314.4000000000001 380 309.4000000000001 377.8 305.8 374.2L200 268.2L94.2 374.2C90.6 377.8 85.6 380 80 380C69 380 60 371 60 360C60 354.4 62.2 349.4 65.8 345.8L185.8 225.8zM214.2 174.2C210.6 177.8 205.6 180 200 180S189.4 177.8 185.8 174.2L65.8 54.2C62.2 50.6 60 45.6 60 40C60 29 69 20 80 20C85.6 20 90.6 22.2 94.2 25.8L200 131.8L305.8 26C309.4000000000001 22.2 314.4000000000001 20 320 20C331 20 340 29 340 40C340 45.6 337.8 50.6 334.2000000000001 54.2L214.2 174.2z" : "M145.8 185.8C149.4 182.2 154.4 180 160 180S170.6 182.2 174.2 185.8L254.2 265.8C257.8 269.4 260 274.4 260 280C260 291 251 300 240 300C234.4 300 229.4 297.8 225.8 294.2L160 228.2L94.2 294.2C90.6 297.8 85.6 300 80 300C69 300 60 291 60 280C60 274.4 62.2 269.4 65.8 265.8L145.8 185.8zM174.2 134.2C170.6 137.8 165.6 140 160 140S149.4 137.8 145.8 134.2L65.8 54.2C62.2 50.6 60 45.6 60 40C60 29 69 20 80 20C85.6 20 90.6 22.2 94.2 25.8L160 91.8L225.8 26C229.4 22.2 234.4 20 240 20C251 20 260 29 260 40C260 45.6 257.8 50.6 254.2 54.2L174.2 134.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
CollapseAll.defaultProps = {
    size: IconSize.STANDARD,
};
CollapseAll.displayName = "Blueprint5.Icon.CollapseAll";
export default CollapseAll;
//# sourceMappingURL=collapse-all.js.map