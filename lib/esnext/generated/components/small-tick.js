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
export const SmallTick = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "small-tick", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 300C294.4000000000001 300 289.4000000000001 297.8 285.8 294.2L160 168.2L114.2 214.2C110.6 217.8 105.6 220 100 220C89 220 80 211 80 200C80 194.4 82.2 189.4 85.8 185.8L145.8 125.8C149.4 122.2 154.4 120 160 120S170.6 122.2 174.2 125.8L314.2000000000001 265.8C317.8 269.4 320 274.4 320 280C320 291 311 300 300 300z" : "M240 220C234.4 220 229.4 217.8 225.8 214.2L140 128.2L94.2 174.2C90.6 177.8 85.6 180 80 180C69 180 60 171 60 160C60 154.4 62.2 149.4 65.8 145.8L125.8 85.8C129.4 82.2 134.4 80 140 80S150.6 82.2 154.2 85.8L254.2 185.8C257.8 189.4 260 194.4 260 200C260 211 251 220 240 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SmallTick.defaultProps = {
    size: IconSize.STANDARD,
};
SmallTick.displayName = `Blueprint5.Icon.SmallTick`;
export default SmallTick;
//# sourceMappingURL=small-tick.js.map