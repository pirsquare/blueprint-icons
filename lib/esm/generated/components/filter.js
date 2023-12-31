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
export var Filter = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "filter", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 380H40C29 380 20 371 20 360C20 354.4 22.2 349.4 25.8 345.8L140 231.8V40C140 29 149 20 160 20C165.6 20 170.6 22.2 174.2 25.8L254.2 105.8C257.8 109.4 260 114.4 260 120V231.8L374.2000000000001 346C377.8 349.4 380 354.4 380 360C380 371 371 380 360 380z" : "M279.8 300.2H39.8C28.8 300.2 19.8 291.2 19.8 280.2C19.8 274.6 22 269.6 25.6 266L119.8 171.8V40C119.8 29 128.8 20 139.8 20C145.4 20 150.4 22.2 154 25.8L194 65.8C197.6 69.4 199.8 74.4 199.8 80V171.8L294 266C297.6 269.6 299.8 274.6 299.8 280.2C299.8 291.2 290.8 300.2 279.8 300.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Filter.defaultProps = {
    size: IconSize.STANDARD,
};
Filter.displayName = "Blueprint5.Icon.Filter";
export default Filter;
//# sourceMappingURL=filter.js.map