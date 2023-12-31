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
export const DoubleChevronRight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "double-chevron-right", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M220 200C220 205.6 217.8 210.6 214.2 214.2L94.2 334.2000000000001C90.6 337.8 85.6 340 80 340C69 340 60 331 60 320C60 314.4 62.2 309.4 65.8 305.8L171.8 200L66 94.2000000000001C62.2 90.6 60 85.6 60 80C60 69 69 60 80 60C85.6 60 90.6 62.2 94.2 65.8L214.2 185.8C217.8 189.4 220 194.4 220 200zM334.2000000000001 214.2L214.2 334.2000000000001C210.6 337.8 205.6 340 200 340C189 340 180 331 180 320C180 314.4 182.2 309.4 185.8 305.8L291.8 200L186 94.2000000000001C182.2 90.6 180 85.6 180 80C180 69 189 60 200 60C205.6 60 210.6 62.2 214.2 65.8L334.2000000000001 185.8C337.8 189.4 340 194.4 340 200C340 205.6 337.8 210.6 334.2000000000001 214.2z" : "M180 160C180 165.6 177.8 170.6 174.2 174.2L94.2 254.2C90.6 257.8 85.6 260 80 260C69 260 60 251 60 240C60 234.4 62.2 229.4 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80C60 69 69 60 80 60C85.6 60 90.6 62.2 94.2 65.8L174.2 145.8C177.8 149.4 180 154.4 180 160zM274.2000000000001 174.2L194.2 254.2C190.6 257.8 185.6 260 180 260C169 260 160 251 160 240C160 234.4 162.2 229.4 165.8 225.8L231.8 160L166 94.2C162.2 90.6 160 85.6 160 80C160 69 169 60 180 60C185.6 60 190.6 62.2 194.2 65.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160C280 165.6 277.8 170.6 274.2000000000001 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
DoubleChevronRight.defaultProps = {
    size: IconSize.STANDARD,
};
DoubleChevronRight.displayName = `Blueprint5.Icon.DoubleChevronRight`;
export default DoubleChevronRight;
//# sourceMappingURL=double-chevron-right.js.map