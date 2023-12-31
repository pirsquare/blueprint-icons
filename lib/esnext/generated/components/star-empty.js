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
export const StarEmpty = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "star-empty", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M400 248L262 270L200 400L138 268L0 248L100 146L76 0L200 68L324 0L300 144L400 248zM200 100L110 52L128 156L56 228L156 244L200 338L244 244L344 228L272 154L290 50L200 100z" : "M320 197.8L209.4 214.6L160 320L110.6 214.6L0 197.8L80 115.8L61.2 0L160 54.6L258.8 0L240 115.8L320 197.8L320 197.8zM98.2 56L110 128.4L60 179.6L129 190.2L160 256L191 190.2L260 179.6L210 128.4L221.8 56L160 90.2L98.2 56z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
StarEmpty.defaultProps = {
    size: IconSize.STANDARD,
};
StarEmpty.displayName = `Blueprint5.Icon.StarEmpty`;
export default StarEmpty;
//# sourceMappingURL=star-empty.js.map