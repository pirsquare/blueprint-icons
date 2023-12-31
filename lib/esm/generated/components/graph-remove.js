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
export var GraphRemove = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "graph-remove", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M348.2 320L394 365.8C397.8 369.4 400 374.4 400 380C400 391 391 400 380 400C374.4 400 369.4 397.8 365.8 394.2L320 348.2L274.2000000000001 394C270.6 397.8 265.6 400 260 400C249 400 240 391 240 380C240 374.4 242.2 369.4 245.8 365.8L291.8 320L246 274.2C242.2 270.6 240 265.6 240 260C240 249 249 240 260 240C265.6 240 270.6 242.2 274.2000000000001 245.8L320 291.8L365.8 246C369.4 242.2 374.4 240 380 240C391 240 400 249 400 260C400 265.6 397.8 270.6 394.2000000000001 274.2L348.2 320zM380 200C363.4000000000001 200 349 207.2 338.2 218.2L337.6 217.6L320 235.2L302.4 217.6C291.6 206.8 276.6 200 260 200C226.8 200 200 226.8 200 260C200 276.6 206.8 291.6 217.6 302.4L235.2 320L217.6 337.6L218.2 338.2C207.2 349 200 363.4 200 380C200 387 201.4 393.6 203.6 399.8C202.4 399.8 201.2 400 200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 201.2 399.8 202.4 399.8 203.6C393.6 201.4 387 200 380 200z" : "M257.8 157.8L257.6 157.6L250 165.2L242.4 157.6L242 158C231.2 147 216.6 140 200 140C166.8 140 140 166.8 140 200C140 216.6 147 231.2 158 242L157.6 242.4L165.2 250L157.6 257.6L157.8 257.8C147 268.6 140 283.4 140 300C140 306.8 141.4 313 143.4 319.2C62.8 310.8 0 242.8 0 160C0 71.6 71.6 0 160 0C242.8 0 310.8 62.8 319.2000000000001 143.4C313 141.4 306.8 140 300 140C283.4 140 268.6 147 257.8 157.8zM278.2 250L314 285.8C317.8 289.4 320 294.4 320 300C320 311 311 320 300 320C294.4000000000001 320 289.4000000000001 317.8 285.8 314.2L250 278.2L214.2 314C210.6 317.8 205.6 320 200 320C189 320 180 311 180 300C180 294.4 182.2 289.4 185.8 285.8L221.6 250L185.8 214.2C182.2 210.6 180 205.6 180 200C180 189 189 180 200 180C205.6 180 210.6 182.2 214.2 185.8L250 221.6L285.8 185.8C289.4000000000001 182.2 294.4000000000001 180 300 180C311 180 320 189 320 200C320 205.6 317.8 210.6 314.2000000000001 214.2L278.2 250z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
GraphRemove.defaultProps = {
    size: IconSize.STANDARD,
};
GraphRemove.displayName = "Blueprint5.Icon.GraphRemove";
export default GraphRemove;
//# sourceMappingURL=graph-remove.js.map