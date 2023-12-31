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
export const HandDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "hand-down", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M353.6 203.2C318.2 220 285.4 270.2 269 302C248.2 351.4 244.2 400 157.4 400C109.8 400 79 384.8 61 347C46.2 316 40 290.4 40 204.2V184.4C40 168 53.8 154.8 70.8 154.8C78.4 154.8 85.4 157.6 90.8 162C94.6 150 106.4 141 120.2 141C129.6 141 138 145 143.6 151.4C148.8 142 159 135.6 170.8 135.6C183.8 135.6 194.8 143.4 199.4 154.1999999999999L200 138.8V30C200 20.4 204.6 11.8 211.8 6.4C216 2.6 221.8 0 228.8 0C229 0 229.2 0 229.4 0C229.6 0 229.8 0 230 0C246.6 0 260 13.4 260 30V194.8L260.2 208.2C277.2 188.6 298.6 173 325 170.4C360.8 166.6 366.8 197 353.6 203.2z" : "M294.4000000000001 162.6C263.6 176 234.6 216.2 220.4 241.6C202.2 281 198.6 320 122.8 320C81 320 54.2 307.8 38.4 277.6C25.4 252.8 20 215.8 20 163.4V147.6C20 134.6 32 124 47 124C53.8 124 59.8 126.2 64.6 129.8C68 120.2 78.2 113 90.4 113C98.6 113 106 116.2 111 121.4C115.6 114 124.4 108.8 134.8 108.8C146.2 108.8 155.8 115 159.8 123.6L160 111V30C160 13.4 173.4 0 190 0C206.6 0 220 13.4 220 30V162C231.6 153.8 251 137.8 269.4000000000001 136.2C300.8 133.4 305.8 157.6 294.4000000000001 162.6z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
HandDown.defaultProps = {
    size: IconSize.STANDARD,
};
HandDown.displayName = `Blueprint5.Icon.HandDown`;
export default HandDown;
//# sourceMappingURL=hand-down.js.map