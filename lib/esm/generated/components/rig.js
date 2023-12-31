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
export var Rig = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "rig", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M140 316C140 285 166.8 260 200 260S260 289.2 260 316C260 371 218.8 400 200 400H120C120 345.2 195.2 360.8 140 316zM374.2000000000001 34.2L260 148.2V219.8C260 230.8 251 239.8 240 239.8H204.4H160C149 239.8 140 230.8 140 219.8V148.2L25.8 34.2C22.2 30.6 20 25.6 20 20C20 9 29 0 40 0C45.6 0 50.6 2.2 54.2 5.8L140 91.6V20C140 9 149 0 160 0H240C251 0 260 9 260 20V91.6L345.8 5.8C349.4 2.2 354.4 0 360 0C371 0 380 9 380 20C380 25.6 377.8 30.6 374.2000000000001 34.2zM204.2 240C204.4 240 204.4 239.8 204.2 240C204.4 239.8 204.4 240 204.2 240L204.2 240z" : "M114.2 260C114.2 238 133.4 220 157 220C180.8 220 200 240.8 200 260C200 299.2 170.6 320 157.2 320H100C100 280.8 153.6 292 114.2 260zM164.2 200C164.2 200 164.4 199.8 164.4 199.8S164.4 200 164.2 200L164.2 200zM294.2000000000001 34.2L200 128.2V180C200 191 191 200 180 200H164.4H140C129 200 120 191 120 180V128.4L25.8 34.4C22.2 30.6 20 25.6 20 20C20 9 29 0 40 0C45.6 0 50.6 2.2 54.2 5.8L120 71.6V20C120 9 129 0 140 0H180C191 0 200 9 200 20V71.6L265.8 5.8C269.4000000000001 2.2 274.4000000000001 0 280 0C291 0 300 9 300 20C300 25.6 297.8 30.6 294.2000000000001 34.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Rig.defaultProps = {
    size: IconSize.STANDARD,
};
Rig.displayName = "Blueprint5.Icon.Rig";
export default Rig;
//# sourceMappingURL=rig.js.map