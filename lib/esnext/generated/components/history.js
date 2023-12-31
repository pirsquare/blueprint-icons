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
export const History = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "history", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 400C134.2 400 76.4 368 40 319V360C40 371 31 380 20 380S0 371 0 360V280C0 269 9 260 20 260H100C111 260 120 269 120 280S111 300 100 300H75.2C104.6 336.6 149.4 360 200 360C288.4 360 360 288.4 360 200S288.4 40 200 40S40 111.6 40 200C40 211 31 220 20 220S0 211 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 340C189 340 180 331 180 320V200C180 194.4 182.2 189.4 185.8 185.8L245.8 125.8C249.4 122.2 254.4 120 260 120C271 120 280 129 280 140C280 145.6 277.8 150.6 274.2000000000001 154.2L220 208.2V320C220 331 211 340 200 340z" : "M160 260C149 260 140 251 140 240V160C140 154.4 142.2 149.4 145.8 145.8L185.8 105.8C189.4 102.2 194.4 100 200 100C211 100 220 109 220 120C220 125.6 217.8 130.6 214.2 134.2L180 168.2V240C180 251 171 260 160 260zM160 320C112 320 69.2 298.6 40 265.2V300C40 311 31 320 20 320S0 311 0 300V220C0 209 9 200 20 200H100C111 200 120 209 120 220S111 240 100 240H70.8C92.8 264.4 124.6 280 160 280C226.2 280 280 226.2 280 160C280 107.8 246.6 63.8 200 47.4V47.6C187.4 43 174.2 40 160 40C93.8 40 40 93.8 40 160C40 171 31 180 20 180S0 171 0 160C0 71.6 71.6 0 160 0C166.8 0 173.4 0.6 180 1.4C180.4 1.4 180.8 1.6 181.2 1.6C259.6 12 320 78.8 320 160C320 248.4 248.4 320 160 320z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
History.defaultProps = {
    size: IconSize.STANDARD,
};
History.displayName = `Blueprint5.Icon.History`;
export default History;
//# sourceMappingURL=history.js.map