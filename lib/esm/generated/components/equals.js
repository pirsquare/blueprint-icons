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
export var Equals = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "equals", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 260L320 260C331.0456940000001 260 340 251.045695 340 240C340 228.954305 331.0456940000001 220 320 220L80 220C68.954305 220 60 228.954305 60 240C60 251.045695 68.954305 260 80 260zM80 180L320 180C331.0456940000001 180 340 171.045694 340 160C340 148.954306 331.0456940000001 140 320 140L80 140C68.954305 140 60 148.954306 60 160C60 171.045694 68.954305 180 80 180z" : "M60 220L260 220C271.045694 220 280 211.045695 280 200C280 188.954305 271.045694 180 260 180L60 180C48.954305 180 40 188.954305 40 200C40 211.045695 48.954305 220 60 220zM60 140L260 140C271.045694 140 280 131.045695 280 120C280 108.954306 271.045694 100 260 100L60 100C48.954305 100 40 108.954306 40 120C40 131.045695 48.954305 140 60 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Equals.defaultProps = {
    size: IconSize.STANDARD,
};
Equals.displayName = "Blueprint5.Icon.Equals";
export default Equals;
//# sourceMappingURL=equals.js.map