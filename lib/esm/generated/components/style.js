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
export var Style = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "style", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 40H40V360H286L326 400H60H20C8 400 0 392 0 380V20C0 8 8 0 20 0H380C392 0 400 8 400 20V120V246L360 206V40zM384 400L232 248L288 192L400 304V400H384zM80 82C142 78 198 78 244 122C266 144 266 182 244 204C232 214 218 220 204 220S176 214 166 204C144 180 132 114 80 82z" : "M280 40H40V280H215.2L255.2 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V195.2L280 155.2V40zM308 320L194 206L236 164L320 248V320H308zM80 81.6C126.6 78.6 168.4 78.6 203 111.6C219.4 128.2 219.4 156.6 203 173.2C194 180.8 183.4 185.2 173 185.2C162.4 185.2 152 180.8 144.4 173.2C128 155 119 105.6 80 81.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Style.defaultProps = {
    size: IconSize.STANDARD,
};
Style.displayName = "Blueprint5.Icon.Style";
export default Style;
//# sourceMappingURL=style.js.map