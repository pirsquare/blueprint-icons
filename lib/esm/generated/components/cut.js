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
export var Cut = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "cut", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M320 360C320 360 334.4 385.6 320 400L214.2 275L239.8 244.2L320 360zM321.6 160C310.6 160 300.2 157.6 290.8 153.6L86.2 400C72.2 385.6 86.2 360 86.2 360L175.2 228.8L111.4 153.4C101.8 157.6 91.2 160 80 160C35.8 160 0 124.2000000000001 0 80C0 35.8 35.8 0 80 0S160 35.8 160 80C160 93 156.6 105.2 151 116L201.8 189.4L251.6 116C246.2 105.2000000000001 242.8 93 242.8 80C242.8 35.8 278 0 321.2000000000001 0C364.6000000000001 0 399.6000000000001 35.8 399.6000000000001 80C400 124.2000000000001 364.8 160 321.6 160zM80 40C58 40 40 58 40 80C40 102 58 120 80 120S120 102 120 80C120 58 102 40 80 40zM321.6 40C300 40 282.4 58 282.4 80C282.4 102 300 120 321.6 120C343.2 120 360.8 102 360.8 80C360.8 58 343.2 40 321.6 40z" : "M260 280C260 280 274.2000000000001 305.8 260 320L173.2 218.6L194.2 192.2L260 280zM261.4 120C253 120 245 118.2 237.8 114.8L66.2 320C52.4 305.8 66.2 280 66.2 280L139.8 179.6L84.4 114.8C76.8 118.2 68.6 120 60 120C26.8 120 0 93.2 0 60S26.8 0 60 0S120 26.8 120 60C120 69.2 117.8 77.8 114.2 85.4L162 149.2L208.6 85.4C205 77.6 202.8 69 202.8 60.0000000000001C202.8 26.8 229.0000000000001 1e-13 261.4 1e-13C293.8 1e-13 320 26.8 320 60.0000000000001S293.8 120 261.4 120zM60 40C49 40 40 49 40 60C40 71 49 80 60 80S80 71 80 60C80 49 71 40 60 40zM261.4 40C250.6 40 241.8 49 241.8 60C241.8 71 250.6 80 261.4 80S281 71 281 60C281 49 272.2 40 261.4 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Cut.defaultProps = {
    size: IconSize.STANDARD,
};
Cut.displayName = "Blueprint5.Icon.Cut";
export default Cut;
//# sourceMappingURL=cut.js.map