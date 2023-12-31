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
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const VerticalBarChartDesc = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "vertical-bar-chart-desc", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M60 400H40C29 400 20 391 20 380V20C20 9 29 0 40 0H60C71 0 80 9 80 20V380C80 391 71 400 60 400zM160 320H140C129 320 120 311 120 300V20C120 9 129 0 140 0H160C171 0 180 9 180 20V300C180 311 171 320 160 320zM260 260H240C229 260 220 251 220 240V20C220 9 229 0 240 0H260C271 0 280 9 280 20V240C280 251 271 260 260 260zM360 220H340C329 220 320 211 320 200V20C320 9 329 0 340 0H360C371 0 380 9 380 20V200C380 211 371 220 360 220z" : "M120 240C109 240 100 231 100 220V20C100 9 109 0 120 0S140 9 140 20V220C140 231 131 240 120 240zM40 320C29 320 20 311 20 300V20C20 9 29 0 40 0S60 9 60 20V300C60 311 51 320 40 320zM200 180C189 180 180 171 180 160V20C180 9 189 0 200 0S220 9 220 20V160C220 171 211 180 200 180zM280 140C269 140 260 131 260 120V20C260 9 269 0 280 0S300 9 300 20V120C300 131 291 140 280 140z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
VerticalBarChartDesc.defaultProps = {
    size: IconSize.STANDARD,
};
VerticalBarChartDesc.displayName = `Blueprint5.Icon.VerticalBarChartDesc`;
export default VerticalBarChartDesc;
//# sourceMappingURL=vertical-bar-chart-desc.js.map