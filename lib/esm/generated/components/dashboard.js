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
export var Dashboard = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "dashboard", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M120 300C109 300 100 291 100 280C100 269 109 260 120 260S140 269 140 280C140 291 131 300 120 300zM80 220C69 220 60 211 60 200C60 189 69 180 80 180S100 189 100 200C100 211 91 220 80 220zM200 300C211 300 220 309 220 320C220 331 211 340 200 340S180 331 180 320C180 309 189 300 200 300zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40zM320 220C309 220 300 211 300 200C300 189 309 180 320 180S340 189 340 200C340 211 331 220 320 220zM160 120C160 98 178 80 200 80S240 98 240 120C240 126.6 200 280 200 280S160 126.6 160 120zM280 300C269 300 260 291 260 280C260 269 269 260 280 260S300 269 300 280C300 291 291 300 280 300z" : "M100 240C89 240 80 231 80 220C80 209 89 200 100 200S120 209 120 220C120 231 111 240 100 240zM80 180C69 180 60 171 60 160C60 149 69 140 80 140S100 149 100 160C100 171 91 180 80 180zM160 220C171 220 180 229 180 240C180 251 171 260 160 260S140 251 140 240C140 229 149 220 160 220zM120 100C120 78 138 60 160 60S200 78 200 100C200 110.6 160 200 160 200S120 110.6 120 100zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40zM240 220C240 231 231 240 220 240S200 231 200 220C200 209 209 200 220 200S240 209 240 220zM240 180C229 180 220 171 220 160C220 149 229 140 240 140S260 149 260 160C260 171 251 180 240 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Dashboard.defaultProps = {
    size: IconSize.STANDARD,
};
Dashboard.displayName = "Blueprint5.Icon.Dashboard";
export default Dashboard;
//# sourceMappingURL=dashboard.js.map