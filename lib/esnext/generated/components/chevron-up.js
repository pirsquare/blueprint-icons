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
export const ChevronUp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "chevron-up", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M334.2000000000001 154.2L214.2 274.2000000000001C210.6 277.8 205.6 280 200 280S189.4 277.8 185.8 274.2L65.8 154.2C62.2 150.6 60 145.6 60 140C60 129 69 120 80 120C85.6 120 90.6 122.2 94.2 125.8L200 231.8L305.8 126C309.4000000000001 122.2 314.4000000000001 120 320 120C331 120 340 129 340 140C340 145.6 337.8 150.6 334.2000000000001 154.2z" : "M254.2 134.2L174.2 214.2C170.6 217.8 165.6 220 160 220S149.4 217.8 145.8 214.2L65.8 134.2C62.2 130.6 60 125.6 60 120C60 109 69 100 80 100C85.6 100 90.6 102.2 94.2 105.8L160 171.8L225.8 106C229.4 102.2 234.4 100 240 100C251 100 260 109 260 120C260 125.6 257.8 130.6 254.2 134.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ChevronUp.defaultProps = {
    size: IconSize.STANDARD,
};
ChevronUp.displayName = `Blueprint5.Icon.ChevronUp`;
export default ChevronUp;
//# sourceMappingURL=chevron-up.js.map