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
export const ExcludeRow = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "exclude-row", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M20 340H380C391 340 400 349 400 360C400 371 391 380 380 380H20C9 380 0 371 0 360C0 349 9 340 20 340zM0 140C0 129 9 120 20 120C25.6 120 30.6 122.2 34.2 125.8L80 171.8L125.8 126C129.4 122.2 134.4 120 140 120C151 120 160 129 160 140C160 145.6 157.8 150.6 154.2 154.2L108.2 200L154 245.8C157.8 249.4 160 254.4 160 260C160 271 151 280 140 280C134.4 280 129.4 277.8 125.8 274.2L80 228.2L34.2 274.2C30.6 277.8 25.6 280 20 280C9 280 0 271 0 260C0 254.4 2.2 249.4 5.8 245.8L51.8 200L6 154.2C2.2 150.6 0 145.6 0 140zM360 240H220C198 240 180 222 180 200C180 178 198 160 220 160H360C382 160 400 178 400 200C400 222 382 240 360 240zM380 60H20C9 60 0 51 0 40C0 29 9 20 20 20H380C391 20 400 29 400 40C400 51 391 60 380 60z" : "M0 120C0 109 9 100 20 100C25.6 100 30.6 102.2 34.2 105.8L60 131.8L85.8 106C89.4 102.2 94.4 100 100 100C111 100 120 109 120 120C120 125.6 117.8 130.6 114.2 134.2L88.2 160L114 185.8C117.8 189.4 120 194.4 120 200C120 211 111 220 100 220C94.4 220 89.4 217.8 85.8 214.2L60 188.2L34.2 214.2C30.6 217.8 25.6 220 20 220C9 220 0 211 0 200C0 194.4 2.2 189.4 5.8 185.8L31.8 160L5.8 134.2C2.2 130.6 0 125.6 0 120zM20 260H300C311 260 320 269 320 280C320 291 311 300 300 300H20C9 300 0 291 0 280C0 269 9 260 20 260zM300 60H20C9 60 0 51 0 40C0 29 9 20 20 20H300C311 20 320 29 320 40C320 51 311 60 300 60zM280 200H180C158 200 140 182 140 160C140 138 158 120 180 120H280C302 120 320 138 320 160C320 182 302 200 280 200z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ExcludeRow.defaultProps = {
    size: IconSize.STANDARD,
};
ExcludeRow.displayName = `Blueprint5.Icon.ExcludeRow`;
export default ExcludeRow;
//# sourceMappingURL=exclude-row.js.map