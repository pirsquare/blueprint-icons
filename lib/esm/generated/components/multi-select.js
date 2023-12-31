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
export var MultiSelect = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "multi-select", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 340H140C129 340 120 331 120 320V300H360V180H380C391 180 400 189 400 200V320C400 331 391 340 380 340zM260 220H20C9 220 0 211 0 200V80C0 69 9 60 20 60H260C271 60 280 69 280 80V200C280 211 271 220 260 220zM240 100H40V180H240V100zM320 280H80C69 280 60 271 60 260V240H300V120H320C331 120 340 129 340 140V260C340 271 331 280 320 280z" : "M240 240.4H80C69 240.4 60 231.4 60 220.4V200.4H220V100.4H240C251 100.4 260 109.4 260 120.4V220.4C260 231.4 251 240.4 240 240.4zM300 300.4H140C129 300.4 120 291.4 120 280.4V260.4H280V160.4H300C311 160.4 320 169.4 320 180.4V280.4C320 291.4 311 300.4 300 300.4zM180 180.4H20C9 180.4 0 171.4 0 160.4V60.4C0 49.4 9 40.4 20 40.4H180C191 40.4 200 49.4 200 60.4V160.4C200 171.4 191 180.4 180 180.4zM160 80.4H40V140.4H160V80.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MultiSelect.defaultProps = {
    size: IconSize.STANDARD,
};
MultiSelect.displayName = "Blueprint5.Icon.MultiSelect";
export default MultiSelect;
//# sourceMappingURL=multi-select.js.map