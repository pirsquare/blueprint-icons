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
export var EyeOff = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "eye-off", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M400 200.8C400 201 400 201.2 400 201.4C400 201.4 400 201.6 400 201.6C400 201.8 400 201.8 400 202C400 202.2 400 202.2 400 202.4C400 202.4 400 202.4 400 202.4C399.6 205.6 398 208.6 395.8 211C384.8 224.7999999999999 372 237 358.8 248.4L280.2 196C278 154 243.6 120.6 201 120.6C191.5999999999999 120.6 182.8 122.6 174.4 125.4L129.5999999999999 95.6C140 91.3999999999999 150.5999999999999 87.8 161.5999999999999 85.4C185.7999999999999 79.9999999999999 210.1999999999999 79.8 234.4 84.3999999999999C256.5999999999999 88.6 277.8 97.1999999999999 297.8 107.9999999999999C328.9999999999999 124.8 357.5999999999999 148 382.4 173.9999999999999C387 178.7999999999999 391.6 183.7999999999999 395.8 188.9999999999999C398 191.3999999999999 399.4 194.3999999999999 400 197.5999999999999C400 197.5999999999999 400 197.5999999999999 400 197.5999999999999C400 197.7999999999999 400 197.7999999999999 400 197.9999999999999C400 198.1999999999999 400 198.1999999999999 400 198.3999999999999C400 198.3999999999999 400 198.5999999999999 400 198.5999999999999C400 198.7999999999999 400 198.9999999999999 400 199.1999999999999C400 199.3999999999999 400 199.7999999999999 400 199.9999999999999C400 200.2 400 200.6 400 200.8zM390.8 303.6C396.2 307.2 400 313 400 320C400 331 391 340 380 340C375.8 340 372.2 338.4 369.2000000000001 336.4L369 336.8L300 290.8C281 301.4 261 310 239.8 314.8C215.4 320 191 320.2 166.8 315.6C144.6 311.4 123.4 302.8 103.4 292C72.2 275.2 43.6 252 18.8 226C14.2 221.2 9.6 216.4 5.4 211C0 204.2 0 195.8 5.4 189C18.2 173.2 33.2 159 48.6 146C53.8 141.8 59 137.8 64.4 133.8L8.8 96.8L9 96.4C3.8 92.8 0 87 0 80C0 69 9 60 20 60C24.2 60 27.8 61.6 30.8 63.6L31 63.2L391 303.2L390.8 303.6zM217.4 235.6C212.4 238 206.8 239.6 200.8 239.6C178.8 239.6 161 221.8 161 199.8C161 199.2 161.4 198.6 161.4 198L125.8 174.2C123 182.2 121.4 190.8 121.4 199.8C121.4 243.6 157 279.2 201 279.2C221.2 279.2 239.2 271.6 253.2 259.2L217.4 235.6z" : "M320 160.6C320 160.8 320 160.8 320 161C320 161 320 161.2 320 161.2C320 161.4 320 161.4 320 161.6C320 161.8 320 161.8 320 162C320 162 320 162 320 162C319.6 164.8 318.4 167.2 316.6 169.2C306.8 181.8 295.2 193.2 283.6 203.6L220.4 158.4C219.6 126.2 193.2 100.4 160.8 100.4C154.6 100.4 148.8 101.6 143.2 103.4L101.8 74C110.6 70.2 119.8 66.8 129.2 64.6C148.6 60 168 59.8 187.6 63.6C205.2000000000001 67 222.4 74.4 238.2 83.2C263.2 97.2 286 116.6 305.8 138.2C309.4 142.2 313.2 146.4 316.4 150.6C318.2 152.6 319.4 155 319.8 157.8C319.8 157.8 319.8 157.8 319.8 157.8C319.8 158 319.8 158 319.8 158.2C319.8 158.4 319.8 158.4 319.8 158.6C319.8 158.6 319.8 158.8 319.8 158.8C319.8 159 319.8 159 319.8 159.1999999999999C319.8 159.4 319.8 159.5999999999999 319.8 159.7999999999999C320 160.2 320 160.4 320 160.6zM311.4 244C316.4 247.6 320 253.2 320 260C320 271 311 280 300 280C295.6 280 291.8 278.4 288.6 276L288.4 276.2L235 238C221.2 245.6 206.8 251.8 191.6 255.4C172.4 260 152.8 260.2 133.4 256.4C115.8 252.8 98.6 245.6 82.8 236.6C57.8 222.6 35 203.2 15.2 181.6C11.6 177.6 7.8 173.4 4.6 169.2C0 163.4 0 156.6 4.4 150.8C14.6 137.6 26.6 125.8 39 115C42.6 111.8 46.6 109.2 50.2 106.2L8.4 76.2L8.6 76C3.6 72.4 0 66.8 0 60C0 49 9 40 20 40C24.4 40 28.2 41.6 31.4 44L31.6 43.8L311.6 243.8L311.4 244zM103.2 144C101.8 149.2 101 154.4 101 160C101 192.8 127.8 219.6 160.8 219.6C173.2 219.6 184.6 215.4 194 209L103.2 144z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
EyeOff.defaultProps = {
    size: IconSize.STANDARD,
};
EyeOff.displayName = "Blueprint5.Icon.EyeOff";
export default EyeOff;
//# sourceMappingURL=eye-off.js.map