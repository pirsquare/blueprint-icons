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
export const Airplane = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "airplane", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M400 360C400 382 382 400 360 400C349 400 339 395.6 331.8 388.2L235 291.4L40 380L20 340L170.6 227.2L83.4 140H20L0 120L80 80L120 0L140 20V83.4L227.2 170.6L340 20L380 40L291.4 234.8L388.2 331.6C395.6 339 400 349 400 360z" : "M320 290C320 306.6 306.6 320 290 320C281.8 320 274.2000000000001 316.6 268.8 311.2L198.2 240.6L40 300L20 260L138.6 181L77.6 120H20L0 100L60 60L100 0L120 20V77.6L181 138.6L260 20L300 40L240.6 198.2L311.2 268.8C316.6 274.2 320 281.8 320 290z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Airplane.defaultProps = {
    size: IconSize.STANDARD,
};
Airplane.displayName = `Blueprint5.Icon.Airplane`;
export default Airplane;
//# sourceMappingURL=airplane.js.map