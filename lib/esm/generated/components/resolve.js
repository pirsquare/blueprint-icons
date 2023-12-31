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
export var Resolve = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "resolve", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M174 306C158 316 140 320 120 320C54 320 0 266 0 200S54 80 120 80C140 80 158 84 174 94C146 120 130 158 130 200S148 280 174 306L174 306zM280 320C260 320 242 316 226 306C254.0000000000001 278 270 242 270 200S252 120 226 94C242 84 260 80 280 80C346 80 400 134 400 200S346 320 280 320L280 320zM200 290L200 290C176 266 160 236 160 200S176 134 200 112L200 112C224 134 240 166 240 202S224 268 200 290L200 290z" : "M132 254C122 258 112 260 100 260C44 260 0 216 0 160S44 60 100 60C112 60 122 62 132 66C106 88 90 122 90 160S106 232 132 254L132 254zM160 240C136 222 120 192 120 160S136 98 160 80C184 98 200 126 200 160S184 222 160 240L160 240zM220 260C208 260 198 258 188 254C214 230 230 196 230 160S214 88 188 66C198 62 208 60 220 60C276 60 320 104 320 160S276 260 220 260L220 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Resolve.defaultProps = {
    size: IconSize.STANDARD,
};
Resolve.displayName = "Blueprint5.Icon.Resolve";
export default Resolve;
//# sourceMappingURL=resolve.js.map