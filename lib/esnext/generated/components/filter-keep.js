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
export const FilterKeep = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "filter-keep", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 360C300 371 291 380 280 380H20C9 380 0 371 0 360C0 354.4 2.2 349.4 5.8 345.8L100 251.8V80C100 69 109 60 120 60C125.6 60 130.6 62.2 134.2 65.8L194.2 125.8C197.8 129.4 200 134.4 200 140V251.8L294.2000000000001 346C297.8 349.4 300 354.4 300 360zM380 140C374.4 140 369.4 137.8 365.8 134.2000000000001L300 68.2L274.2000000000001 94C270.6 97.8 265.6 100 260 100C249 100 240 91 240 80C240 74.4 242.2 69.4 245.8 65.8L285.8 25.8C289.4000000000001 22.2 294.4000000000001 20 300 20S310.6 22.2 314.2000000000001 25.8L394.2000000000001 105.8C397.8 109.4 400 114.4 400 120C400 131 391 140 380 140z" : "M300 120C294.4000000000001 120 289.4000000000001 117.8 285.8 114.2L240 68.2L214.2 94C210.6 97.8 205.6 100 200 100C189 100 180 91 180 80C180 74.4 182.2 69.4 185.8 65.8L225.8 25.8C229.4 22.2 234.4 20 240 20S250.6 22.2 254.2 25.8L314.2000000000001 85.8C317.8 89.4 320 94.4 320 100C320 111 311 120 300 120zM240 280C240 291 231 300 220 300H20C9 300 0 291 0 280C0 274.4 2.2 269.4 5.8 265.8L80 191.8V80C80 69 89 60 100 60C105.6 60 110.6 62.2 114.2 65.8L154.2 105.8C157.8 109.4 160 114.4 160 120V191.8L234.2 266C237.8 269.4 240 274.4 240 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
FilterKeep.defaultProps = {
    size: IconSize.STANDARD,
};
FilterKeep.displayName = `Blueprint5.Icon.FilterKeep`;
export default FilterKeep;
//# sourceMappingURL=filter-keep.js.map