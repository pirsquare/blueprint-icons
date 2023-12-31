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
export var PivotTable = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "pivot-table", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 300H20C9 300 0 291 0 280V20C0 9 9 0 20 0H60C71 0 80 9 80 20V280C80 291 71 300 60 300zM60 400H20C9 400 0 391 0 380V340C0 329 9 320 20 320H60C71 320 80 329 80 340V380C80 391 71 400 60 400zM334.2000000000001 294.2C330.6 297.8 325.6 300 320 300S309.4000000000001 297.8 305.8 294.2L245.8 234.2C242.2 230.6 240 225.6 240 220C240 209 249 200 260 200C265.6 200 270.6 202.2 274.2000000000001 205.8L300 231.8V180C300 135.8 264.2000000000001 100 220 100H168.2L194 125.8C197.8 129.4 200 134.4 200 140C200 151 191 160 180 160C174.4 160 169.4 157.8 165.8 154.2L105.8 94.2000000000001C102.2 90.6 100 85.6 100 80C100 74.4 102.2 69.4 105.8 65.8L165.8 5.8C169.4 2.2 174.4 0 180 0C191 0 200 9 200 20C200 25.6 197.8 30.6 194.2 34.2L168.2 60H220C286.2 60 340 113.8 340 180V231.8L365.8 206C369.4 202.2 374.4 200 380 200C391 200 400 209 400 220C400 225.6 397.8 230.6 394.2000000000001 234.2L334.2000000000001 294.2zM380 400H120C109 400 100 391 100 380V340C100 329 109 320 120 320H380C391 320 400 329 400 340V380C400 391 391 400 380 400z" : "M40 240H20C9 240 0 231 0 220V20C0 9 9 0 20 0H40C51 0 60 9 60 20V220C60 231 51 240 40 240zM40 320H20C9 320 0 311 0 300V280C0 269 9 260 20 260H40C51 260 60 269 60 280V300C60 311 51 320 40 320zM274.2000000000001 234.2C270.6 237.8 265.6 240 260 240S249.4 237.8 245.8 234.2L205.8 194.2C202.2 190.6 200 185.6 200 180C200 169 209 160 220 160C225.6 160 230.6 162.2 234.2 165.8L240 171.8V140C240 106.8 213.2 80 180 80H148.2L154 85.8C157.8 89.4 160 94.4 160 100C160 111 151 120 140 120C134.4 120 129.4 117.8 125.8 114.2L85.8 74.2C82.2 70.6 80 65.6 80 60C80 54.4 82.2 49.4 85.8 45.8L125.8 5.8C129.4 2.2 134.4 0 140 0C151 0 160 9 160 20C160 25.6 157.8 30.6 154.2 34.2L148.2 40H180C235.2 40 280 84.8 280 140V171.8L285.8 166C289.4000000000001 162.2 294.4000000000001 160 300 160C311 160 320 169 320 180C320 185.6 317.8 190.6 314.2000000000001 194.2L274.2000000000001 234.2zM300 320H100C89 320 80 311 80 300V280C80 269 89 260 100 260H300C311 260 320 269 320 280V300C320 311 311 320 300 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
PivotTable.defaultProps = {
    size: IconSize.STANDARD,
};
PivotTable.displayName = "Blueprint5.Icon.PivotTable";
export default PivotTable;
//# sourceMappingURL=pivot-table.js.map