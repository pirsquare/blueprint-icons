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
export var Rain = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "rain", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M80 200C46.863 200 20 226.863 20 260C20 293.137 46.863 320 80 320C87.4978 320 94.6744 318.6246 101.2912 316.1126C108.9964 363.6802 150.2568 400 200 400C241.844 400 277.686 374.2984 292.6 337.8204C298.164 339.2434 303.9940000000001 340 310 340C348.66 340 380 308.66 380 270C380 231.34 348.66 200 310 200H200H80zM80 160C91.0456 160 100 151.046 100 140L100 40C100 28.954 91.0456 20 80 20C68.9544 20 60 28.954 60 40L60 140C60 151.046 68.9544 160 80 160zM260 140C260 151.046 251.046 160 240 160C228.954 160 220 151.046 220 140V20C220 8.954 228.954 0 240 0C251.046 0 260 8.954 260 20V140zM320 160C331.046 160 340 151.046 340 140V80C340 68.954 331.046 60 320 60C308.954 60 300 68.954 300 80V140C300 151.046 308.954 160 320 160zM180 140C180 151.046 171.0456 160 160 160C148.9544 160 140 151.046 140 140V80C140 68.954 148.9542 60 160 60C171.0456 60 180 68.954 180 80V140z" : "M70 160C42.3858 160 20 182.3858 20 210C20 237.6142 42.3858 260 70 260C74.1914 260 78.2624 259.4842 82.1528 258.5128C90.5058 293.7694 122.1896 320 160 320C189.967 320 216.086 303.5232 229.79 279.1348C233.108 279.7036 236.52 280 240 280C273.1380000000001 280 300 253.137 300 220C300 186.863 273.1380000000001 160 240 160H160H70zM60 120C60 131.0456 68.9544 140 80 140C91.0456 140 100 131.0456 100 120V40C100 28.954 91.0456 20 80 20C68.9544 20 60 28.954 60 40V120zM200 140C188.9542 140 180 131.0458 180 120V20C180 8.954 188.9542 0 200 0C211.046 0 220 8.954 220 20V120C220 131.0456 211.046 140 200 140zM240 120C240 131.0458 248.954 140 260 140C271.046 140 280 131.0458 280 120V80C280 68.954 271.046 60 260 60C248.954 60 240 68.954 240 80V120zM140 140C128.9544 140 120 131.0458 120 120V80C120 68.954 128.9544 60 140 60C151.0456 60 160 68.954 160 80V120C160 131.0458 151.0456 140 140 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Rain.defaultProps = {
    size: IconSize.STANDARD,
};
Rain.displayName = "Blueprint5.Icon.Rain";
export default Rain;
//# sourceMappingURL=rain.js.map