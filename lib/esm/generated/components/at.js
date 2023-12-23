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
export var At = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "at", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M245.96 263.64C235.54 266.4 224.4 267.78 212.52 267.78C191.38 267.78 174.9 260.88 163.08 247.06C151.3 233.24 145.4 214.46 145.4 190.72C145.4 152.84 160.5 133.88 190.72 133.88C222.58 133.88 240 157.72 243 205.36L245.96 263.64zM376.84 315.48C392.2800000000001 288.4 400 257.16 400 221.68C400 198.42 396.28 177.2 388.88 157.9C381.4 138.64 371 123.64 357.5 112.9C344.06 102.2 328.5 96.84 310.84 96.84C297.82 96.84 286.48 100.24 276.92 107.08C267.3400000000001 113.9 260.9 123.18 257.58 134.88H254.62C246.52 122.18 236.54 112.68 224.66 106.34C212.74 99.98 199.38 96.84 184.52 96.84C157.62 96.84 136.42 105.34 121.02 122.42C105.54 139.5 97.84 162.58 97.84 191.68C97.84 225.2 108.08 252.4 128.58 273.28C149 294.14 176.5 304.62 211.02 304.62C223.58 304.62 237.46 303.52 252.74 301.3400000000001C268.02 299.14 281.6 296.1 293.48 292.18L288.04 178.78V172.9C288.04 146.9 296.64 133.88 313.82 133.88C326.86 133.88 337.2 142.16 344.88 158.78C352.56 175.36 356.42 196.5 356.42 222.2C356.42 250 350.6 274.42 339.06 295.48C327.5200000000001 316.54 311.1 332.74 289.8 344.14C268.5 355.52 244.06 361.2 216.46 361.2C181.32 361.2 150.72 354.06 124.7 339.76C98.7 325.44 78.86 304.9600000000001 65.14 278.38C51.42 251.84 44.6 220.94 44.6 185.84C44.6 138.68 57.38 102.4 83 77.08C108.58 51.68 145.3 39.04 193.18 39.04C229.7 39.04 267.76 46.34 307.38 60.96V20.94C272.7 6.98 234.98 0 194.18 0C133.06 0 85.44 16.22 51.3 48.64C17.1 81.1 0 126.34 0 184.38C0 226.82 9.24 264.6 27.76 297.68C46.22 330.74 71.88 356.06 104.66 373.64C137.42 391.2 174.54 400 215.98 400C251.8 400 283.74 392.6600000000001 311.7000000000001 378.04C339.7 363.4 361.4 342.54 376.84 315.48V315.48z" : "M116.3196 152.5718C116.3196 122.286 128.3882 107.108 152.594 107.108C178.0568 107.108 192.0226 126.1718 194.3768 164.2974L196.7768 210.926C188.411 213.0974 179.5196 214.2174 170.034 214.2174C153.074 214.2174 139.9082 208.7088 130.4682 197.6688C121.0282 186.5832 116.3196 171.566 116.3196 152.5718M320 177.3486C320 158.7428 317.028 141.7372 311.086 126.3314C305.142 110.926 296.8 98.902 286.012 90.308C275.246 81.738 262.788 77.462 248.662 77.462C238.24 77.462 229.166 80.206 221.532 85.646C213.874 91.132 208.708 98.538 206.08 107.886H203.68C197.2114 97.76 189.2114 90.148 179.7258 85.074C170.1942 79.978 159.4972 77.462 147.6114 77.462C126.1028 77.462 109.1428 84.274 96.8 97.942C84.4342 111.588 78.2858 130.08 78.2858 153.3486C78.2858 180.16 86.4686 201.8972 102.8572 218.6286C119.2228 235.3142 141.2114 243.68 168.8228 243.68C178.8572 243.68 189.9886 242.8114 202.194 241.0742C214.4 239.3142 225.302 236.8686 234.788 233.7372L230.446 143.0172V138.3314C230.446 117.532 237.326 107.108 251.062 107.108C261.486 107.108 269.76 113.738 275.886 127.0172C282.034 140.2972 285.142 157.1886 285.142 177.76C285.142 200 280.502 219.5428 271.246 236.3886C262.012 253.2114 248.892 266.1942 231.84 275.3142000000001C214.812 284.4342000000001 195.2458 288.96 173.1658 288.96C145.0514 288.96 120.5942 283.2458000000001 99.7486 271.7942C78.9486 260.3658 63.0858 243.9772 52.1142 222.6972C41.1428 201.4628 35.68 176.7772 35.68 148.6858C35.68 110.948 45.92 81.92 66.3772 61.646C86.8572 41.348 116.2286 31.222 154.56 31.222C183.7486 31.222 214.194 37.052 245.898 48.778V16.778C218.172 5.578 187.9772 0 155.36 0C106.4458 0 68.3428 12.982 41.0286 38.902C13.69142 64.868 0 101.052 0 147.4972C0 181.4628 7.38286 211.68 22.1942 238.1486C36.9828 264.5942 57.5086 284.8458 83.7258 298.9028C109.9428 312.98286 139.6342 320 172.8 320C201.462 320 226.994 314.12572 249.348 302.44572C271.772 290.7200000000001 289.142 274.0114 301.486 252.3658C313.8520000000001 230.72 320 205.7142 320 177.3486", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
At.defaultProps = {
    size: IconSize.STANDARD,
};
At.displayName = "Blueprint5.Icon.At";
export default At;
//# sourceMappingURL=at.js.map