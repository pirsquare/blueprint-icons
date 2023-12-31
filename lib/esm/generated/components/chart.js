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
export var Chart = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "chart", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 180V20C140 9 149 0 160 0H240C251 0 260 9 260 20V180L220 140L140 180zM0 20C0 9 9 0 20 0H100C111 0 120 9 120 20V180L0 120V20zM340 260L280 200V20C280 9 289 0 300 0H380C391 0 400 9 400 20V225.2C394.8 222.2 388.4000000000001 220 380 220C341.6 220 340 260 340 260zM380 380H300C289 380 280 371 280 360C280 349 289 340 300 340H331.8L216 224.4L149 257.8L149 257.6C146.2 259 143.2 260 140 260S133.8 259 131.2 257.8L131.2 258L11.2 198L11.2 197.8C4.6 194.4 0 187.8 0 180C0 169 9 160 20 160C23.2 160 26.2 161 28.8 162.2L28.8 162L140 217.6L211 182L211 182.2C213.8 181 216.8 180 220 180C225.6 180 230.6 182.2 234.2 185.8L360 311.8V280C360 269 369 260 380 260S400 269 400 280V360C400 371 391 380 380 380z" : "M0 20C0 9 9 0 20 0H60C71 0 80 9 80 20V132L0 100V20zM120 130V20C120 9 129 0 140 0H180C191 0 200 9 200 20V120L180 100L120 130zM260 180L240 160V20C240 9 249 0 260 0H300C311 0 320 9 320 20V162.4C314.8 161 308.4 160 300 160C260.8 160 260 180 260 180zM300 300H240C229 300 220 291 220 280C220 269 229 260 240 260H251.8L176 184.4L109 217.8L109 217.6C106.2 219 103.2 220 100 220S93.8 219 91.2 217.8L91.2 218L11.2 178L11.2 177.8C4.6 174.4 0 167.8 0 160C0 149 9 140 20 140C23.2 140 26.2 141 28.8 142.2L28.8 142L100 177.6L171 142L171 142.2C173.8 141 176.8 140 180 140C185.6 140 190.6 142.2 194.2 145.8L280 231.8V220C280 209 289 200 300 200S320 209 320 220V280C320 291 311 300 300 300z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Chart.defaultProps = {
    size: IconSize.STANDARD,
};
Chart.displayName = "Blueprint5.Icon.Chart";
export default Chart;
//# sourceMappingURL=chart.js.map