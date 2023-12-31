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
export var NewTextBox = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "new-text-box", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 340H340V380C340 391 331 400 320 400S300 391 300 380V340H260C249 340 240 331 240 320S249 300 260 300H300V260C300 249 309 240 320 240S340 249 340 260V300H380C391 300 400 309 400 320S391 340 380 340zM100 250V230C100 224.4 104.4 220 110 220S120 224.4 120 230V240H160V100H150C144.4 100 140 95.6 140 90C140 84.4 144.4 80 150 80H190C195.6 80 200 84.4 200 90C200 95.6 195.6 100 190 100H180V240H220V230C220 224.4 224.4 220 230 220S240 224.4 240 230V250C240 255.6 235.6 260 230 260H110C104.4 260 100 255.6 100 250zM320 220C309 220 300 211 300 200V40H40V300H200C211 300 220 309 220 320C220 331 211 340 200 340H20C9 340 0 331 0 320V20C0 9 9 0 20 0H320C331 0 340 9 340 20V200C340 211 331 220 320 220z" : "M100 190C100 184.4 104.4 180 110 180H140V110C140 104.4 144.4 100 150 100S160 104.4 160 110V180H190C195.6 180 200 184.4 200 190C200 195.6 195.6 200 190 200H110C104.4 200 100 195.6 100 190zM300 280H280V300C280 311 271 320 260 320S240 311 240 300V280H220C209 280 200 271 200 260C200 249 209 240 220 240H240V220C240 209 249 200 260 200S280 209 280 220V240H300C311 240 320 249 320 260C320 271 311 280 300 280zM260 180C249 180 240 171 240 160V60H60V240H160C171 240 180 249 180 260C180 271 171 280 160 280H40C29 280 20 271 20 260V40C20 29 29 20 40 20H260C271 20 280 29 280 40V160C280 171 271 180 260 180z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
NewTextBox.defaultProps = {
    size: IconSize.STANDARD,
};
NewTextBox.displayName = "Blueprint5.Icon.NewTextBox";
export default NewTextBox;
//# sourceMappingURL=new-text-box.js.map