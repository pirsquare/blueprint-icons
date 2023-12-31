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
export var Disable = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "disable", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM40 200C40 288.4 111.6 360 200 360C237 360 271 347.4 298 326.2L73.8 102C52.6 129 40 163 40 200zM200 40C163 40 129 52.6 102 73.8L326.2 298C347.4000000000001 271 360 237 360 200C360 111.6 288.4 40 200 40z" : "M159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2zM39.8 160.2C39.8 226.4 93.6 280.2 159.8 280.2C185.8 280.2 209.6 271.8 229.2 257.8L62.2 90.8C48.2 110.4 39.8 134.2 39.8 160.2zM159.8 40.2C133.8 40.2 110 48.6 90.4 62.6L257.4 229.6C271.4 210 279.8 186.2 279.8 160.2C279.8 93.8 226.2 40.2 159.8 40.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Disable.defaultProps = {
    size: IconSize.STANDARD,
};
Disable.displayName = "Blueprint5.Icon.Disable";
export default Disable;
//# sourceMappingURL=disable.js.map