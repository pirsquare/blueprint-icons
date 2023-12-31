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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var Unresolve = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "unresolve", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M229.4 150.8C232.6 158 235.2 165.6 237.0000000000001 173.6C237.0000000000001 174 237.2 174.4 237.2 174.8C239 182.8 240 191.2 240 200C240 208.8 239 217.2 237.2 225.4C237.2 225.8 237 226.2 237 226.6C235.2 234.6 232.6 242.2 229.4 249.4C229.2 249.8 229 250 229 250.4C225.6 257.6 221.6 264.6 216.8 271C216.8 271.2 216.6 271.2 216.6 271.4C205.4 286 191.2 298.2 174.6 306.8C174.6 306.8 174.6 306.8 174.6 306.8C174.6 306.8 174.6 306.8 174.6 306.8C170.8 308.8 166.8 310.4 162.8 312C162.2 312.2 161.6 312.4 160.8 312.6C157.4 314 154 315 150.4 316C149.4 316.2 148.4 316.6 147.4 316.8C144 317.6 140.6 318.2 137 318.6C136 318.8 134.8 319 133.6 319.2C129.2 319.6 124.6 320 120 320C53.8 320 0 266.2000000000001 0 200S53.8 80 120 80C124.6 80 129.2 80.4 133.6 80.8C134.8 81 135.8 81.2 137 81.4C140.4 81.8 143.8 82.6 147.2 83.2C148.2 83.4 149.2 83.8 150.2 83.9999999999999C153.8 84.9999999999999 157.4 85.9999999999999 160.8 87.4C161.4 87.6 162 87.8 162.6 87.9999999999999C184.2 96.1999999999999 202.8 110.6 216.2 128.8C216.2 129 216.4 129 216.4 129.1999999999999C221.2 135.6 225.2 142.4 228.6 149.7999999999999C229 150 229.2 150.4 229.4 150.8zM280 320C260.2 320 241.8 315.2 225.4 306.8C252.8 279.6 270 241.8 270 200C270 158.2 252.8 120.4 225.4 93.2C241.8 84.8 260.2 80 280 80C346.2 80 400 133.8 400 200C400 266.2 346.2 320 280 320z" : "M220 260C209 260 198.6 258.2 188.6 254.8C214 231.2 230 197.4 230 160C230 122.6 214 88.8 188.6 65.2C198.6 61.8 209 60 220 60C275.2 60 320 104.8 320 160C320 215.2 275.2 260 220 260zM195.6 132.4C196.2 134.2 196.8 136 197.4 137.8C199 145 200 152.4 200 160S199 175 197.4 182.2C196.8 184 196.2 185.8 195.6 187.6C194 193 192.2 198.4 189.8 203.4C189 204.8 188.2 206.2 187.4 207.6C184.6 213 181.2 218 177.2 222.8C176.8 223.4 176.2 224.2 175.6 224.8C170.8 230.2 165.8 235.2 160 239.6L160 239.6L160 239.6C151.4 246 141.6 251.2 131 254.6C131 254.6 131.2 254.8 131.2 254.8C129.2 255.4 127.2 255.8 125.2 256.4C122.8 257 120.6 257.8 118 258.2C112.2 259.2 106.2 260 100 260C44.8 260 0 215.2 0 160C0 104.8 44.8 60 100 60C106.2 60 112.2 60.8 118 61.8C120.4 62.2 122.8 63 125.2 63.6C127.2 64.2 129.4 64.4 131.2 65.2C131.2 65.2 131 65.4 131 65.4C148.6 71.2 163.8 81.4 175.4 95.2C176 95.8 176.6 96.6 177.2 97.2C181 102 184.4 107 187.4 112.4C188.2 113.8 189 115.2 189.6 116.6C192.2 121.6 194.2 127 195.6 132.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Unresolve.defaultProps = {
    size: IconSize.STANDARD,
};
Unresolve.displayName = "Blueprint5.Icon.Unresolve";
export default Unresolve;
//# sourceMappingURL=unresolve.js.map