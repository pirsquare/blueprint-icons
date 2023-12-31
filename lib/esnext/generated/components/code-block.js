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
export const CodeBlock = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "code-block", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 300H340V340C340 351 331 360 320 360H240C229 360 220 351 220 340V300H180V340C180 351 171 360 160 360H80C69 360 60 351 60 340V300H20C9 300 0 291 0 280V40C0 29 9 20 20 20H380C391 20 400 29 400 40V280C400 291 391 300 380 300zM174.2 94.2000000000001C177.8 90.6 180 85.6 180 80C180 69 171 60 160 60C154.4 60 149.4 62.2 145.8 65.8L65.8 145.8C62.2 149.4 60 154.4 60 160S62.2 170.6 65.8 174.2L145.8 254.2C149.4 257.8 154.4 260 160 260C171 260 180 251 180 240C180 234.4 177.8 229.4 174.2 225.8L108.2 160L174.2 94.2000000000001zM334.2000000000001 145.8L254.2 65.8C250.6 62.2 245.6 60 240 60C229 60 220 69 220 80C220 85.6 222.2 90.6 225.8 94.2000000000001L291.8 160L226 225.8C222.2 229.4 220 234.4 220 240C220 251 229 260 240 260C245.6 260 250.6 257.8 254.2 254.2L334.2000000000001 174.2C337.8 170.6 340 165.6 340 160S337.8 149.4 334.2000000000001 145.8z" : "M300 260H260V280C260 291 251 300 240 300H200C189 300 180 291 180 280V260H140V280C140 291 131 300 120 300H80C69 300 60 291 60 280V260H20C9 260 0 251 0 240V40C0 29 9 20 20 20H300C311 20 320 29 320 40V240C320 251 311 260 300 260zM134.2 94.2C137.8 90.6 140 85.6 140 80C140 69 131 60 120 60C114.4 60 109.4 62.2 105.8 65.8L45.8 125.8C42.2 129.4 40 134.4 40 140S42.2 150.6 45.8 154.2L105.8 214.2C109.4 217.8 114.4 220 120 220C131 220 140 211 140 200C140 194.4 137.8 189.4 134.2 185.8L88.2 140L134.2 94.2zM274.2000000000001 125.8L214.2 65.8C210.6 62.2 205.6 60 200 60C189 60 180 69 180 80C180 85.6 182.2 90.6 185.8 94.2L231.8 140L185.8 185.8C182.2 189.4 180 194.4 180 200C180 211 189 220 200 220C205.6 220 210.6 217.8 214.2 214.2L274.2000000000001 154.2C277.8 150.6 280 145.6 280 140S277.8 129.4 274.2000000000001 125.8z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
CodeBlock.defaultProps = {
    size: IconSize.STANDARD,
};
CodeBlock.displayName = `Blueprint5.Icon.CodeBlock`;
export default CodeBlock;
//# sourceMappingURL=code-block.js.map