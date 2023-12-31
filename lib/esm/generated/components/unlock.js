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
export var Unlock = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "unlock", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M280 380C235.8 380 200 344.2 200 300V220H40C29 220 20 211 20 200V40C20 29 29 20 40 20H280C291 20 300 29 300 40V200C300 211 291 220 280 220H240V300C240 322 258 340 280 340S320 322 320 300V260C320 249 329 240 340 240S360 249 360 260V300C360 344.2 324.2000000000001 380 280 380z" : "M239.8 320.2C195.6 320.2 159.8 284.4 159.8 240.2V180.2H19.8C8.8 180.2 -0.2 171.2 -0.2 160.2V20.2C-0.2 9.2 8.8 0.2 19.8 0.2H259.8C270.8 0.2 279.8 9.2 279.8 20.2V160.2C279.8 171.2 270.8 180.2 259.8 180.2H199.8V240.2C199.8 262.2 217.8 280.2 239.8 280.2S279.8 262.2 279.8 240.2V220.2C279.8 209.2 288.8 200.2 299.8 200.2S319.8 209.2 319.8 220.2V240.2C319.8 284.4 284 320.2 239.8 320.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Unlock.defaultProps = {
    size: IconSize.STANDARD,
};
Unlock.displayName = "Blueprint5.Icon.Unlock";
export default Unlock;
//# sourceMappingURL=unlock.js.map