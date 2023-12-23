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
export const Variable = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "variable", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M98.6 324.2C110.2 341.4 124.8 356.6 142.6 369.6L145.8 380C118.2 368.2 94.4 353.4 74.8 335.6C49.2 312.2 29.8 285.6 16.6 255.4C5.6 229.8 0 203.8 0 177.6C0 132 16.6 86.2 49.8 40.4L53 51.4C43.2 76 38.4 99 38.4 120.2C38.4 153.6 44 189.4 55.2 227.4000000000001C66.2 265.4 80.8 297.6 98.6 324.2zM286.2 156.4L279.6 160.4C272.2000000000001 149.6 266.6 143 263.2 140.4C260.8 138.8 258 138 254.8 138C251 138 247.2 140.4 243.4 145.4C237.2 153.8 228.8 177.2 218.2 215.4C227.6 232.4 235.4 243.6 242 248.8C246.6 252.6 251.6 254.6 256.8 254.6C258.8 254.6 262.4 253.8 267.4 252.4C272.6 251 277 250.2 281 250.2C286.4 250.2 291 252.2 294.6 256C298.2 259.8 300 264.8 300 271C300 277.6 298.2 282.6 294.6 286.4C291 290.2 285.8 292.2 279 292.2C273 292.2 267.2 290.8 261.8 287.8C256.4 284.8 249.6 278.4 241.4 268.4C235.2 261 226 248 214 229.6C209.2 252.4 201 273.4 189.2 292.4L124.4 280.6L123.2 273.4C128 274.4 132 274.8 135.4 274.8C141.8 274.8 147.2 272 151.4 266.2000000000001C158 257.2000000000001 167.4 230.2 179.2 184.8C169.8 172 163.6 163.6 160 159.6C154.4 153.2 149.6 149 146 147.2C143.2 145.6 140 145 136.4 145C133.6 145 129.2 146.6 123 149.6000000000001C118.8 151.6 115 152.6000000000001 111.6 152.6000000000001C105.4 152.6000000000001 100.2 150.4000000000001 96 146.2000000000001S89.8 136.6 89.8 130.2000000000001C89.8 124 91.6 119.2000000000001 95.4 115.2000000000001C99.2 111.4 104.2 109.4 110.6 109.4C116.8 109.4 122.6 110.8000000000001 128 113.4C133.4 116.0000000000001 140.2 121.8 148.4 130.6C156.6 139.4 168 153.2 182.4 172.2C188 154.2 192.8 141 196.8 132.8C200.8 124.6 205.6 118.6 210.8 115C216 111.4 222.6 109.6 230.6 109.6C238.2 109.6 246 112.4 254 118.2C264.8 125.4 275.4 138.2 286.2 156.4zM350.2000000000001 380L347.2000000000001 369.2C357 344.4 361.8000000000001 321.4 361.8000000000001 300.2C361.8000000000001 271.6 357.6 241 349.2000000000001 208.2C342.6000000000002 183 334.2000000000001 159.2 323.8000000000001 137.2C313.4000000000001 115 303.4000000000001 97.8 293.6000000000001 85.2C283.8000000000001 72.8 271.8000000000002 61.2 257.6000000000001 50.8L254.2000000000001 40.1999999999999C281.8000000000001 51.9999999999999 305.6000000000001 66.9999999999999 325.2000000000001 84.8C351.0000000000001 108.2 370.4000000000001 134.8 383.4000000000001 164.8C394.4 190.4 400 216.6 400 243C400 288.4 383.4000000000001 334.2 350.2000000000001 380z" : "M78.8 257C88.2 270.2 99.8 281.8 114 291.6L116.6 299.6C94.4 290.6 75.6 279.4 59.8 265.6C39.4 248 23.8 227.6 13.4 204.6C4.4 184.8 0 165 0 145C0 110 13.2 75 39.8 40L42.4 48.4C34.6 67.2 30.6 84.8 30.6 101C30.6 126.6 35 153.8 44 183C53 212 64.6 236.8 78.8 257zM229 128.8L223.6 131.8C217.6 123.6 213.2 118.6 210.4 116.4C208.6 115.2 206.2 114.4 203.8 114.4C200.8 114.4 197.8 116.4 194.8 120C189.8 126.6 183 144.4 174.6 173.8C182.2 186.8 188.4 195.4 193.6 199.4C197.4 202.4 201.4 203.8 205.4 203.8C207 203.8 209.8 203.2 214 202.2C218 201 221.8 200.6 224.8 200.6C229.2 200.6 232.8 202 235.6 205C238.6 208 240 211.8 240 216.4C240 221.4 238.6 225.4 235.6 228.2C232.6 231.2 228.6 232.6 223 232.6C218.1999999999999 232.6 213.5999999999999 231.4 209.1999999999999 229.2C205 227 199.4 222 192.8 214.4C187.8 208.8 180.6 198.8 170.8 184.8C167.4 202 160.8 218 151.4 232.4L99.6 223.6L98.6 218.2C102.4 219 105.8 219.4 108.4 219.4C113.6 219.4 117.8 217.2 121.2 212.8C126.4 206 133.8 185.2 143.4 150.4C136 140.6 130.8 134.2 128 131.2C123.4 126.4 119.8 123.2 116.8 121.8C114.6 120.6 112 120 109 120C106.8 120 103.2 121.2 98.4 123.6C95 125 92 125.8 89.4 125.8C84.4 125.8 80.2 124.2 77 121C73.8 117.8 72.2 113.6 72.2 108.8C72.2 104.2 73.8 100.4 76.8 97.4C79.8 94.4 83.8 93 89 93C94 93 98.6 94 103 96C107.4 98 112.8 102.4 119.4 109C126 115.6 135 126.2 146.6 140.8C151 127 155 117 158.2 110.6C161.4 104.4 165.2 99.8 169.4 97C173.6 94.2 178.8 92.8 185.2000000000001 92.8C191.4 92.8 197.6 95 203.8 99.4C211.8 105.2 220.2 114.8 229 128.8zM280.2 299.6L277.8 291.2C285.6 272.2 289.6 254.8 289.6 238.4C289.6 216.6 286.2 193.2 279.6 168.2C274.4000000000001 149 267.6 130.8 259.2000000000001 114C250.8 97 242.8 83.8 235 74.4C227.2 64.8 217.6 56 206.2 48L203.4 40C225.6 49 244.4 60.4 260.2 74C280.8 91.8 296.4 112.2 306.8 135C315.6 154.8 320 174.8 320 195C320 229.6 306.8 264.6 280.2 299.6z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Variable.defaultProps = {
    size: IconSize.STANDARD,
};
Variable.displayName = `Blueprint5.Icon.Variable`;
export default Variable;
//# sourceMappingURL=variable.js.map