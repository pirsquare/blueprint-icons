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
export var RightJoin = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "right-join", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M174 306C148 280 130 242 130 200S146 120 174 94C158 84 140 80 120 80C54 80 0 134 0 200S54 320 120 320C140 320 158 316 174 306zM107.2 121C96.2 145 90 171.8 90 200S96.2 255 107.2 279C69 272.8 40 239.8 40 200S69 127.2 107.2 121zM280 320C346 320 400 266 400 200S346 80 280 80C260 80 242 84 226 94C252.0000000000001 120 270 158 270 200S254 278 226 306C242 316 260 320 280 320zM200 290C176 266 160 236 160 200S176 134 200 112C224 134 240 166 240 202S224 268 200 290z" : "M132 254C106 232 90 198 90 160S106 88 132 66C122 62 112 60 100 60C44 60 0 104 0 160S44 260 100 260C112 260 122 258 132 254zM92.8 80.4C78.4 103.4 70 130.8 70 160S78.4 216.6 92.8 239.6C52 236 20 201.8 20 160S52 84 92.8 80.4zM160 240C136 222 120 192 120 160S136 98 160 80C184 98 200 126 200 160S184 222 160 240zM220 260C276 260 320 216 320 160S276 60 220 60C208 60 198 62 188 66C214 88 230 124 230 160S214 230 188 254.0000000000001C198 258 208 260 220 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
RightJoin.defaultProps = {
    size: IconSize.STANDARD,
};
RightJoin.displayName = "Blueprint5.Icon.RightJoin";
export default RightJoin;
//# sourceMappingURL=right-join.js.map