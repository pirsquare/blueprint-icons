"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Anchor = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "anchor", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M220 283.4142C243.304 291.6508 260 313.8756 260 340C260 373.137 233.138 400 200 400C166.863 400 140 373.137 140 340C140 313.8756 156.6962 291.6508 180 283.4142V260H120V220H180V41.66C126.0016 50.718 84.2316 95.84 80.3024 151.414L85.8578 145.858C93.6684 138.048 106.3316 138.048 114.1422 145.858C121.9526 153.668 121.9526 166.332 114.1422 174.142L74.1422 214.1422C66.3316 221.9526 53.6684 221.9526 45.8578 214.1422L5.85786 174.142C-1.952622 166.332 -1.952622 153.668 5.85786 145.858C13.66834 138.048 26.3316 138.048 34.1422 145.858L40.2006 151.916C44.4108 67.306 114.3452 0 200 0C285.654 0 355.59 67.306 359.8 151.916L365.858 145.858C373.668 138.048 386.332 138.048 394.142 145.858C401.952 153.668 401.952 166.332 394.142 174.142L354.142 214.1422C346.332 221.9526 333.668 221.9526 325.858 214.1422L285.858 174.142C278.048 166.332 278.048 153.668 285.858 145.858C293.668 138.048 306.332 138.048 314.142 145.858L319.698 151.414C315.768 95.84 273.998 50.718 220 41.66V220H280V260H220V283.4142zM220 340C220 328.9544 211.046 320 200 320C188.9544 320 180 328.9544 180 340C180 351.0456 188.9544 360 200 360C211.046 360 220 351.0456 220 340z" : "M200 280C200 265.1944 191.956 252.2674 180 245.3512V220H220V180H180V42.52C211.764 50.696 235.894 77.89 239.526 111.242L234.142 105.858C226.332 98.048 213.668 98.048 205.858 105.858C198.0474 113.668 198.0474 126.3316 205.858 134.1422L245.858 174.1422C253.668 181.9526 266.332 181.9526 274.142 174.1422L314.142 134.1422C321.952 126.3316 321.952 113.668 314.142 105.858C306.332 98.048 293.668 98.048 285.858 105.858L279.736 111.98C275.61 49.444 223.58 0 160 0C96.421 0 44.3904 49.444 40.2638 111.98L34.1422 105.858C26.3316 98.048 13.66834 98.048 5.85786 105.858C-1.952622 113.668 -1.952622 126.3316 5.85786 134.1422L45.8578 174.1422C53.6684 181.9526 66.3316 181.9526 74.1422 174.1422L114.1422 134.1422C121.9526 126.3316 121.9526 113.668 114.1422 105.858C106.3316 98.048 93.6684 98.048 85.8578 105.858L80.474 111.242C84.1054 77.89 108.235 50.696 140 42.52V180H100V220H140V245.3512C128.044 252.2674 120 265.1944 120 280C120 302.09138 137.9086 320 160 320C182.0914 320 200 302.09138 200 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Anchor.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Anchor.displayName = "Blueprint5.Icon.Anchor";
exports.default = exports.Anchor;
//# sourceMappingURL=anchor.js.map