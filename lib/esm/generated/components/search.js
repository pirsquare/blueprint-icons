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
export var Search = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "search", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M391.2 51.2L292.4 150C309.8 175.8 320 206.6 320 240C320 328.4 248.4 400 160 400S0 328.4 0 240S71.6 80 160 80C193.4 80 224.2 90.2 250 107.6L348.8 8.8C354.2000000000001 3.4 361.8 0 370 0C386.6 0 400 13.4 400 30C400 38.2 396.6 45.8 391.2 51.2zM160 120C93.8 120 40 173.8 40 240S93.8 360 160 360S280 306.2000000000001 280 240S226.2 120 160 120z" : "M311 51.4L257.6 105C271.6 126.8 279.8 152.6 279.8 180.2C279.8 257.6 217.2 320.2 139.8 320.2S-0.2 257.6 -0.2 180.2S62.4 40.2 139.8 40.2C167.6 40.2 193.4 48.6 215 62.4L268.6 9C274 3.6 281.6 0.2 289.8 0.2C306.4 0.2 319.8 13.6 319.8 30.2C319.8 38.4 316.4 46 311 51.4zM139.8 80.2C84.6 80.2 39.8 125 39.8 180.2S84.6 280.2 139.8 280.2S239.8 235.4 239.8 180.2S195 80.2 139.8 80.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Search.defaultProps = {
    size: IconSize.STANDARD,
};
Search.displayName = "Blueprint5.Icon.Search";
export default Search;
//# sourceMappingURL=search.js.map