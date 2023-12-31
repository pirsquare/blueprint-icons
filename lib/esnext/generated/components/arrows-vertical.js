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
export const ArrowsVertical = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "arrows-vertical", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 140C294 140 290 138 286 134L220 68V332L286 266C290 262 294 260 300 260C312 260 320 268 320 280C320 286 318 290 314 294L214 394C210 398 206 400 200 400S190 398 186 394L86 294C82 290 80 286 80 280C80 268 88 260 100 260C106 260 110 262 114 266L180 332V68.0000000000001L114 134.0000000000001C110 138 106 140 100 140C88 140 80 132 80 120C80 114 82 110 86 106L186 6C190 2 194 0 200 0S210 2 214 6L314 106C318 110 320 114 320 120C320 130 312 140 300 140L300 140z" : "M240 120C234 120 230 118 226 114L180 68V252L226 206C230 202 234 200 240 200C252 200 260 208 260 220C260 226 258 230 254 234L174 314C170 318 166 320 160 320S150 318 146 314L66 234C62 230 60 226 60 220C60 208 70 200 80 200C86 200 90 202 94 206L140 252V68L94 114C90 118 86 120 80 120C70 120 60 112 60 100C60 94 62 90 66 86L146 6C150 2 154 0 160 0S170 2 174 6L254 86C258 90 260 94 260 100C260 112 252 120 240 120L240 120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ArrowsVertical.defaultProps = {
    size: IconSize.STANDARD,
};
ArrowsVertical.displayName = `Blueprint5.Icon.ArrowsVertical`;
export default ArrowsVertical;
//# sourceMappingURL=arrows-vertical.js.map