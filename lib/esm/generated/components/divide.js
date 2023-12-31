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
export var Divide = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "divide", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M225 275C225 261.1928000000001 213.808 250 200 250C186.1928 250 175 261.1928000000001 175 275C175 288.8072 186.1928 300 200 300C213.808 300 225 288.8072 225 275zM120 220C109 220 100 211 100 200C100 189 109 180 120 180H280C291 180 300 189 300 200C300 211 291 220 280 220H120zM200 100C213.808 100 225 111.192 225 125C225 138.808 213.808 150 200 150C186.1928 150 175 138.808 175 125C175 111.192 186.1928 100 200 100z" : "M180 220C180 208.9544 171.0456 200 160 200C148.9544 200 140 208.9544 140 220C140 231.0456 148.9544 240 160 240C171.0456 240 180 231.0456 180 220zM100 180C89 180 80 171 80 160C80 149 89 140 100 140H220C231 140 240 149 240 160C240 171 231 180 220 180H100zM160 80C171.0456 80 180 88.954 180 100C180 111.046 171.0456 120 160 120C148.9544 120 140 111.046 140 100C140 88.954 148.9544 80 160 80z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Divide.defaultProps = {
    size: IconSize.STANDARD,
};
Divide.displayName = "Blueprint5.Icon.Divide";
export default Divide;
//# sourceMappingURL=divide.js.map