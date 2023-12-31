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
export var Person = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "person", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M392.2 41.8C380.8 68.2 325.2 85.6 288.4 102C251.4 118.4 256.6 128.2 255.2 141.8C255 143.6 255 145.6 254.8 147.6C267.4 158.8 277.8 174.2 284.6 192C284.6 192 285 193 285 193.2C286.4 197 287.6 201 288.8 205.2C297.2 207 302.2 216.2 304 224.8C306 228.2 309.8 236.8 309 246.4C307.8 258.8 302.8 264.6 297.2 267C297.2 267.8 297.2 268.4 297.2 269.2000000000001C297.2 285 295.8 307.8 292.8 322.8C292.2 327 291.2 331.2000000000001 290 335.2000000000001C284.5999999999999 353.6 273.2 370 258 381.6C242.2 393.6 220 400 200.2 400S158.2 393.6 142.4 381.6C127.2 370 115.8 353.6 110.4 335.2C109.2 331.2 108.2 327 107.6 322.8C104.8 307.8 103.2 285 103.2 269.2C103.2 268.6 103.2 268 103.2 267.2000000000001C97.4 265 92.2 259.2 91 246.4C90.2 236.8 94 228.2 96 224.8C98 216 103 206.6 111.8 205.2C112.8 201 114.2 197 115.6 193.2C115.6 193 115.8 192.6 115.8 192.4L116 192C122.8 173.8 133.4 158.2 146.4 147C146.4 145.2 146.2 143.4 146 141.8C144.6 128.2 148.6 118.4 111.6 102S19.2 68.2 7.8 41.8C-3.6 15.4 1 0 1 0H399C399 0 403.6 15.4 392.2 41.8z" : "M313.6 33.6C304.4 54.6 260 68.6 230.4 81.6C200.8 94.6 204.8 102.6 203.8 113.4C203.6 114.8 203.6 116.4 203.6 118C213.8 127 222 139.4 227.4 153.6C227.4 153.6 227.6 154.4 227.8 154.6C229 157.6 230 161 230.8 164.2C237.6 165.6 241.6 173 243 179.8C244.6 182.6 247.6 189.4 247 197.2C246 207.2 242 211.8000000000001 237.6 213.6C237.6 214.2000000000001 237.6 214.8 237.6 215.4C237.6 228.0000000000001 236.3999999999999 246.4000000000001 234.2 258.4000000000001C233.8 261.8 233 265 232 268.4000000000001C227.6 283 218.6 296.4000000000001 206.4 305.6C193.6 315 175.8 320.2 160 320.2C144.2 320.2 126.4 315.2 113.8 305.6C101.6 296.2 92.6 283 88.2 268.4C87.2 265 86.4 261.8 86 258.4C83.6 246.4 82.6 228.2 82.6 215.4C82.6 214.8 82.6 214.4 82.6 213.8C77.8 212 73.6 207.4 72.6 197.2C72 189.6 75.2 182.8 76.6 180C78.2 173 82.2 165.6 89.2 164.4C90 161 91 157.8 92.2 154.6C92.2 154.4 92.4 154.2 92.4 154L92.6 153.8C98 139.4 106.6 126.8000000000001 117 117.8C117 116.4 116.8 115 116.8 113.6C115.8 102.8 118.8 94.8 89.4 81.8C59.8 68.8 15.4 54.8 6.2 33.8C-3 12.8 0.8 0.4 0.8 0.4H319.2C319 0.2 322.8 12.6 313.6 33.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Person.defaultProps = {
    size: IconSize.STANDARD,
};
Person.displayName = "Blueprint5.Icon.Person";
export default Person;
//# sourceMappingURL=person.js.map