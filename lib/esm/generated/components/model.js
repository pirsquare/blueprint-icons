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
export var Model = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "model", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M374.914 60H25.0778C11.04106 60 -0.505908 71.554 0.0170954 85.868C1.42532 124.406 5.58966 191.324 17.89646 249.7816C24.398 280.664 33.0818 308.7208 44.5554 328.9116C56.3076 349.5926 69.7564 360 84.9828 360C102.589 360 115.8062 352.8524 126.599 341.598C137.5488 330.1798 145.8238 314.7028 153.1484 298.5784C155.1972 294.068 157.3552 289.0396 159.488 284.07L159.54 283.9486C164.4384 272.5344 169.1844 261.5308 173.6624 253.465C180.4242 241.2862 189.3636 230 203.088 230C223.992 230 236.142 243.3302 246.026 254.899L246.086 254.9692C246.956 255.9874 247.894 257.0838 248.786 258.0934C254.4460000000001 264.5014 260.1 270.4220000000001 267.27 274.7928C274.276 279.064 282.98 282 294.95 282C307.492 282 319.714 274.8362 331.588 261.152C343.318 247.6326 353.8580000000001 228.6908 363.098 207.3918C380.158 168.066 392.264 121.968 399.3760000000001 90.448C402.9220000000001 74.736 390.8760000000001 60 374.914 60z" : "M294.892 40H25.0976C10.98738 40 -0.527098 51.634 0.01863206 65.914C1.160738 95.798 4.45338 146.82 13.99284 191.5926C19.0911 215.5208 25.9752 237.6668 35.2694 253.8274C44.7898 270.3814 56.4576 280 70.5792 280C85.6286 280 97.0114 273.8908 106.128 264.4976000000001C115.2246 255.1248 121.9342 242.6108 127.6782 230.1166C129.2942 226.6016 130.9908 222.6952 132.6428 218.8916L132.6948 218.772C136.5378 209.9236 140.132 201.7034 143.4766 195.7512C145.746 191.7122 148.493 187.5052 151.968 184.3768C155.1306 181.53 158.376 180 162.525 180C176.6608 180 184.938 188.7238 192.6248 197.6128L192.679 197.6754C193.3494 198.4508 194.1012 199.3202 194.822 200.1266C199.263 205.0946 204.046 210.0948 210.244 213.8288C216.4 217.5364 223.954 220 234.038 220C245.546 220 256.17 213.491 265.866 202.449C275.444 191.5418 283.876 176.4818 291.158 159.8994C304.362 129.8268 313.752 94.814 319.35 70.536C322.996 54.722 310.83 40 294.892 40z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Model.defaultProps = {
    size: IconSize.STANDARD,
};
Model.displayName = "Blueprint5.Icon.Model";
export default Model;
//# sourceMappingURL=model.js.map