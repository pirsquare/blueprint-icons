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
export const Tree = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "tree", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M220 89.166668L220 0L180 0L180 89.166668L40 60L130 172.5L80 160L153.1034482 269.6551724L120 260L200 400L280 260L246.896552 269.6551724L320 160L270 172.5L360 60L220 89.166668z" : "M180 82.857142L180 0L140 0L140 82.857142L20 60L97.6963352 148.7958116L60 140L121.3861386 225.940594L100 220L160 320L220 220L198.6138614 225.940594L260 140L222.303664 148.7958116L300 60L180 82.857142z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Tree.defaultProps = {
    size: IconSize.STANDARD,
};
Tree.displayName = `Blueprint5.Icon.Tree`;
export default Tree;
//# sourceMappingURL=tree.js.map