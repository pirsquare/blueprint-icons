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
export const Comparison = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "comparison", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M120 240H20C9 240 0 231 0 220V180C0 169 9 160 20 160H120C131 160 140 169 140 180V220C140 231 131 240 120 240zM380 360H280C269 360 260 351 260 340V300C260 289 269 280 280 280H380C391 280 400 289 400 300V340C400 351 391 360 380 360zM380 300H280V340H380V300zM120 120H20C9 120 0 111 0 100V60C0 49 9 40 20 40H120C131 40 140 49 140 60V100C140 111 131 120 120 120zM120 360H20C9 360 0 351 0 340V300C0 289 9 280 20 280H120C131 280 140 289 140 300V340C140 351 131 360 120 360zM200 400C189 400 180 391 180 380V20C180 9 189 0 200 0S220 9 220 20V380C220 391 211 400 200 400zM380 120H280C269 120 260 111 260 100V60C260 49 269 40 280 40H380C391 40 400 49 400 60V100C400 111 391 120 380 120zM380 60H280V100H380V60zM380 240H280C269 240 260 231 260 220V180C260 169 269 160 280 160H380C391 160 400 169 400 180V220C400 231 391 240 380 240zM380 180H280V220H380V180z" : "M159.8 320.2C148.8 320.2 139.8 311.2 139.8 300.2V20.2C139.8 9.2 148.8 0.2 159.8 0.2S179.8 9.2 179.8 20.2V300.2C179.8 311.2 170.8 320.2 159.8 320.2zM99.8 260.2H19.8C8.8 260.2 -0.2 251.2 -0.2 240.2V200.2C-0.2 189.2 8.8 180.2 19.8 180.2H99.8C110.8 180.2 119.8 189.2 119.8 200.2V240.2C119.8 251.2 110.8 260.2 99.8 260.2zM299.8 260.2H219.8C208.8 260.2 199.8 251.2 199.8 240.2V200.2C199.8 189.2 208.8 180.2 219.8 180.2H299.8C310.8 180.2 319.8 189.2 319.8 200.2V240.2C319.8 251.2 310.8 260.2 299.8 260.2zM299.8 200.2H219.8V240.2H299.8V200.2zM299.8 140.2H219.8C208.8 140.2 199.8 131.2 199.8 120.2V80.2C199.8 69.2 208.8 60.2 219.8 60.2H299.8C310.8 60.2 319.8 69.2 319.8 80.2V120.2C319.8 131.2 310.8 140.2 299.8 140.2zM299.8 80.2H219.8V120.2H299.8V80.2zM99.8 140.2H19.8C8.8 140.2 -0.2 131.2 -0.2 120.2V80.2C-0.2 69.2 8.8 60.2 19.8 60.2H99.8C110.8 60.2 119.8 69.2 119.8 80.2V120.2C119.8 131.2 110.8 140.2 99.8 140.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Comparison.defaultProps = {
    size: IconSize.STANDARD,
};
Comparison.displayName = `Blueprint5.Icon.Comparison`;
export default Comparison;
//# sourceMappingURL=comparison.js.map