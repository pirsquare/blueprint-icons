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
export const ArrowUp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "arrow-up", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M334 254L214 374C210 378 206 380 200 380S190 378 186 374L66 254C62 250 60 246 60 240C60 228 70 220 80 220C86 220 90 222 94 226L180 312V40C180 30 188 20 200 20S220 30 220 40V312L306 226C310 222 314 220 320 220C330 220 340 228 340 240C340 246 338 250 334 254L334 254z" : "M274 194L174 294C170 298 166 300 160 300S150 298 146 294L46 194C42 190 40 186 40 180C40 168 50 160 60 160C66 160 70 162 74 166L140 232V40C140 28 148 20 160 20S180 28 180 40V232L246 166C250 162 254 160 260 160C272 160 280 168 280 180C280 186 278 190 274 194L274 194z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ArrowUp.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowUp.displayName = `Blueprint5.Icon.ArrowUp`;
export default ArrowUp;
//# sourceMappingURL=arrow-up.js.map