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
export var Trash = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "trash", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M340 380H240C240 391 231 400 220 400H180C169 400 160 391 160 380H60C49 380 40 371 40 360V340H360V360C360 371 351 380 340 380zM350 320H50C44.4 320 40 315.6 40 310C40 304.4 44.4 300 50 300H60V20C60 9 69 0 80 0H320C331 0 340 9 340 20V300H350C355.6 300 360 304.4 360 310C360 315.6 355.6 320 350 320zM140 80C140 69 131 60 120 60S100 69 100 80V240C100 251 109 260 120 260S140 251 140 240V80zM220 80C220 69 211 60 200 60S180 69 180 80V240C180 251 189 260 200 260S220 251 220 240V80zM300 80C300 69 291 60 280 60S260 69 260 80V240C260 251 269 260 280 260S300 251 300 240V80z" : "M289.8 240.2H29.8C24.2 240.2 19.8 235.8 19.8 230.2S24.2 220.2 29.8 220.2H39.8V20.2C39.8 9.2 48.8 0.2 59.8 0.2H259.8C270.8 0.2 279.8 9.2 279.8 20.2V220.2H289.8C295.4 220.2 299.8 224.6 299.8 230.2S295.4 240.2 289.8 240.2zM119.8 60.2C119.8 49.2 110.8 40.2 99.8 40.2S79.8 49.2 79.8 60.2V180.2C79.8 191.2 88.8 200.2 99.8 200.2S119.8 191.2 119.8 180.2V60.2zM179.8 60.2C179.8 49.2 170.8 40.2 159.8 40.2S139.8 49.2 139.8 60.2V180.2C139.8 191.2 148.8 200.2 159.8 200.2S179.8 191.2 179.8 180.2V60.2zM239.8 60.2C239.8 49.2 230.8 40.2 219.8 40.2S199.8 49.2 199.8 60.2V180.2C199.8 191.2 208.8 200.2 219.8 200.2S239.8 191.2 239.8 180.2V60.2zM279.8 300.2H199.8C199.8 311.2 190.8 320.2 179.8 320.2H139.8C128.8 320.2 119.8 311.2 119.8 300.2H39.8C28.8 300.2 19.8 291.2 19.8 280.2V260.2H299.8V280.2C299.8 291.2 290.8 300.2 279.8 300.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Trash.defaultProps = {
    size: IconSize.STANDARD,
};
Trash.displayName = "Blueprint5.Icon.Trash";
export default Trash;
//# sourceMappingURL=trash.js.map