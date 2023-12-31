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
export const DoubleChevronUp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "double-chevron-up", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M80 180C85.6 180 90.6 182.2 94.2 185.8L200 291.8L305.8 186C309.4000000000001 182.2 314.4000000000001 180 320 180C331 180 340 189 340 200C340 205.6 337.8 210.6 334.2000000000001 214.2L214.2 334.2000000000001C210.6 337.8 205.6 340 200 340C194.4 340 189.4 337.8 185.8 334.2L65.8 214.2C62.2 210.6 60 205.6 60 200C60 189 69 180 80 180zM214.2 214.2C210.6 217.8 205.6 220 200 220C194.4 220 189.4 217.8 185.8 214.2L65.8 94.2000000000001C62.2 90.6 60 85.6 60 80C60 69 69 60 80 60C85.6 60 90.6 62.2 94.2 65.8L200 171.8L305.8 66C309.4000000000001 62.2 314.4000000000001 60 320 60C331 60 340 69 340 80C340 85.6 337.8 90.6 334.2000000000001 94.2000000000001L214.2 214.2z" : "M80 160C85.6 160 90.6 162.2 94.2 165.8L160 231.8L225.8 166C229.4 162.2 234.4 160 240 160C251 160 260 169 260 180C260 185.6 257.8 190.6 254.2 194.2L174.2 274.2C170.6 277.8 165.6 280 160 280S149.4 277.8 145.8 274.2L65.8 194.2C62.2 190.6 60 185.6 60 180C60 169 69 160 80 160zM174.2 174.2C170.6 177.8 165.6 180 160 180S149.4 177.8 145.8 174.2L65.8 94.2C62.2 90.6 60 85.6 60 80C60 69 69 60 80 60C85.6 60 90.6 62.2 94.2 65.8L160 131.8L225.8 66C229.4 62.2 234.4 60 240 60C251 60 260 69 260 80C260 85.6 257.8 90.6 254.2 94.2L174.2 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
DoubleChevronUp.defaultProps = {
    size: IconSize.STANDARD,
};
DoubleChevronUp.displayName = `Blueprint5.Icon.DoubleChevronUp`;
export default DoubleChevronUp;
//# sourceMappingURL=double-chevron-up.js.map