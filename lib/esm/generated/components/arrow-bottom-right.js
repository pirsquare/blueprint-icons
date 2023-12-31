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
export var ArrowBottomRight = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "arrow-bottom-right", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 280C329 280 320 271 320 260V108.2L74.2 354.2C70.6 357.8 65.6 360 60 360C49 360 40 351 40 340C40 334.4 42.2 329.4 45.8 325.8L291.8 80H140C129 80 120 71 120 60C120 49 129 40 140 40H340C351 40 360 49 360 60V260C360 271 351 280 340 280z" : "M260 220C249 220 240 211 240 200V108.2L74.2 274.2C70.6 277.8 65.6 280 60 280C49 280 40 271 40 260C40 254.4 42.2 249.4 45.8 245.8L211.8 80H120C109 80 100 71 100 60C100 49 109 40 120 40H260C271 40 280 49 280 60V200C280 211 271 220 260 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
ArrowBottomRight.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowBottomRight.displayName = "Blueprint5.Icon.ArrowBottomRight";
export default ArrowBottomRight;
//# sourceMappingURL=arrow-bottom-right.js.map