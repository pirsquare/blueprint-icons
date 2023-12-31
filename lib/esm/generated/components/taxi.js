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
export var Taxi = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "taxi", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 220H373.4000000000001L380 200V190C380 187 379.4 184 378.6 181.2L378.8 181.2L340 55.4V50C340 33.4 326.6 20 310 20S280 33.4 280 50V60H120V50C120 33.4 106.6 20 90 20C73.4 20 60 33.4 60 50V55.4L21.4 181L21.6 181C20.6 184 20 187 20 190V200C20 200 20.4 201.2 21 203.2C22.2 206.6 24.2 212.6 26.6 220H20C9 220 0 229 0 240C0 251 9 260 20 260H40C50 290 60 320 60 320H59.8L59.8 320.2C64.8 333 79.8 346.4 93.2 350.2C93.2 350.2 108.8 354.4 139.8 357.4V360V380C139.8 391 148.8 400 159.8 400H239.8C250.8 400 259.8 391 259.8 380V360V357.4C290.8 354.6 306.4 350.2 306.4 350.2C319.8 346.4 334.8000000000001 333 339.8000000000001 320.2L339.8000000000001 320H340L360 260H380C391 260 400 251 400 240C400 229 391 220 380 220zM60 170C60 153.4 73.4 140 90 140C106.6 140 120 153.4 120 170C120 186.6 106.6 200 90 200C73.4 200 60 186.6 60 170zM320 260L300 320H260V320H140V320H100L80 260V240H320V260zM310 200C293.4 200 280 186.6 280 170C280 153.4 293.4 140 310 140S340 153.4 340 170C340 186.6 326.6 200 310 200z" : "M302.4 187.4H294.8L300 180C299.8 174 299.8 167.2 300 160.4C300 160.2 300 160.2 300 160C300 158.6 299.4000000000001 157.4 299.2000000000001 156.2L299.6 156.2L280 58V40C280 29 271 20 260 20S240 29 240 40V60H80V40C80 29 71 20 60 20S40 29 40 40V58L20.4 156L20.8 156C20.6 157.4 20 158.6 20 160H19.8C19.8 166.6 19.8 173.4 20 180L25.2 187.4H17.6C8 187.4 0 195.8 0 206.2C0 216.6 8 225 17.6 225H38.6L54 267.2C57.8 277.8 69.2 288.8 79.2 292C79.2 292 92.8 296 120.2 298.4C120.2 299 120 299.4 120 300C120 311 129 320 140 320H180C191 320 200 311 200 300C200 299.4 199.8 299 199.6 298.4C227.0000000000001 296 240.6 292 240.6 292C250.8 289 262.2000000000001 277.8 266 267.2L281.2 224.8H302.2000000000001C312 224.8 320 216.4 320 206.2C320 195.8 312 187.4 302.4 187.4zM220 120H260V160H260H220V120zM60 120H100V160H60H60V120zM260 220L245.4 252.6C244.2 256.2 243.6 260 240 260H80C76.4 260 75.8 256.2 74.6 252.6L60 220C58.8 216.4 56.4 200 60 200H260C263.6 200 261.2 216.4 260 220z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Taxi.defaultProps = {
    size: IconSize.STANDARD,
};
Taxi.displayName = "Blueprint5.Icon.Taxi";
export default Taxi;
//# sourceMappingURL=taxi.js.map