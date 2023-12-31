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
export var Insert = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "insert", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400H20C8 400 0 392 0 380V20C0 10 8 0 20 0H380C390 0 400 10 400 20V380C400 392 390 400 380 400L380 400zM360 40H40V360H360V40L360 40zM100 180H180V100C180 88 188 80 200 80S220 88 220 100V180H300C312 180 320 188 320 200S312 220 300 220H220V300C220 312 212 320 200 320S180 312 180 300V220H100C88 220 80 212 80 200S88 180 100 180L100 180z" : "M100 140H140V100C140 88 148 80 160 80S180 88 180 100V140H220C232 140 240 148 240 160S232 180 220 180H180V220C180 232 172 240 160 240S140 232 140 220V180H100C88 180 80 172 80 160S88 140 100 140L100 140zM300 320H20C8 320 0 312 0 300V20C0 8 8 0 20 0H300C312 0 320 8 320 20V300C320 312 312 320 300 320L300 320zM280 40H40V280H280V40L280 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Insert.defaultProps = {
    size: IconSize.STANDARD,
};
Insert.displayName = "Blueprint5.Icon.Insert";
export default Insert;
//# sourceMappingURL=insert.js.map