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
export var OneToMany = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "one-to-many", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M360 340C360 328.9544 351.046 320 340 320C328.954 320 320 328.9544 320 340C320 351.0456 328.954 360 340 360C351.046 360 360 351.0456 360 340zM283.616 319.4374000000001C273.868 318.666 261.886 316.838 250.262 312.508C231.326 305.454 214.8 292.492 209.624 266.145C203.164 233.2560000000001 184.9354 212.6364 164.3452 200C184.9354 187.364 203.164 166.744 209.624 133.854C214.8 107.508 231.326 94.546 250.262 87.492C261.886 83.162 273.868 81.334 283.616 80.562C292.01 103.572 314.086 120 340 120C373.1380000000001 120 400 93.138 400 60C400 26.862 373.1380000000001 0 340 0C313.6980000000001 0 291.348 16.924 283.248 40.478C270.576 41.318 253.416 43.632 236.3 50.008C208.258 60.454 178.9498 82.492 170.375 126.146C165.1998 152.492 148.6742 165.454 129.7374 172.508C124.9276 174.3 120.0566 175.664 115.3082 176.7C106.2128 155.136 84.874 140 60 140C26.863 140 0 166.862 0 200C0 233.137 26.863 260 60 260C84.874 260 106.2128 244.8638 115.3082 223.2996C120.0566 224.337 124.9276 225.7002 129.7372 227.4918C148.674 234.546 165.1998 247.5078 170.375 273.8548C178.9498 317.5078 208.258 339.546 236.3 349.9918C253.416 356.368 270.576 358.6824000000001 283.248 359.5222C291.348 383.07528 313.6980000000001 400 340 400C373.1380000000001 400 400 373.137 400 340C400 306.863 373.1380000000001 280 340 280C314.086 280 292.01 296.4278 283.616 319.4374000000001zM80 200.0198C79.9894 211.0564 71.0392 220 60 220C48.9544 220 40 211.0458 40 200C40 188.954 48.9544 180 60 180C71.0392 180 79.9894 188.944 80 199.98L80 200L80 200.0198zM340 40C351.046 40 360 48.954 360 60C360 71.046 351.046 80 340 80C328.954 80 320 71.046 320 60C320 48.954 328.954 40 340 40z" : "M280 260C280 248.9544 271.046 240 260 240C248.954 240 240 248.9544 240 260C240 271.0456 248.954 280 260 280C271.046 280 280 271.0456 280 260zM205.48 234.9152C214.978 214.3054 235.818 200 260 200C293.1380000000001 200 320 226.863 320 260C320 293.137 293.1380000000001 320 260 320C232.292 320 208.972 301.21884 202.072 275.6926C198.7178 274.8254 195.2988 273.7838 191.8784 272.5324C170.3572 264.6588 147.1444 247.7026 140.3884 213.9222C137.1566 197.7636 127.0998 189.7192 114.5206 185.0846C105.0224 205.6944 84.1818 220 60 220C26.863 220 0 193.137 0 160C0 126.863 26.863 100 60 100C84.1818 100 105.0224 114.306 114.5206 134.9154C127.0998 130.2808 137.1566 122.2364 140.3884 106.078C147.1444 72.298 170.3572 55.342 191.8784 47.468C195.2988 46.216 198.7178 45.174 202.074 44.308C208.972 18.782 232.292 0 260 0C293.1380000000001 0 320 26.862 320 60C320 93.138 293.1380000000001 120 260 120C235.818 120 214.978 105.694 205.48 85.084C192.9004 89.72 182.8434 97.764 179.6116 113.922C175.3076 135.4424 164.325 150.1344 151.3556 160C164.325 169.8656 175.3076 184.5576 179.6116 206.0776C182.8434 222.2364 192.9002 230.2806 205.48 234.9152zM260 40C248.954 40 240 48.954 240 60C240 71.046 248.954 80 260 80C271.046 80 280 71.046 280 60C280 48.954 271.046 40 260 40zM80 160C80 171.0456 71.0456 180 60 180C48.9544 180 40 171.0456 40 160C40 148.9542 48.9544 140 60 140C71.0456 140 80 148.9542 80 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
OneToMany.defaultProps = {
    size: IconSize.STANDARD,
};
OneToMany.displayName = "Blueprint5.Icon.OneToMany";
export default OneToMany;
//# sourceMappingURL=one-to-many.js.map