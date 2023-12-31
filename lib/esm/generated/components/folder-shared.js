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
export var FolderShared = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "folder-shared", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M220 320H188.2L154.2 354.2C150.6 357.8 145.6 360 140 360H20C9 360 0 351 0 340V280H235.6C226 290.6 220 304.6 220 320zM380 340H280C269 340 260 331 260 320C260 309 269 300 280 300H331.8L246 214.2C242.2 210.6 240 205.6 240 200C240 189 249 180 260 180C265.6 180 270.6 182.2 274.2000000000001 185.8L360 271.8V220C360 209 369 200 380 200S400 209 400 220V320C400 331 391 340 380 340zM330.8 186L302.4 157.6C291.6 146.8 276.6 140 260 140C226.8 140 200 166.8 200 200C200 216.6 206.8 231.6 217.6 242.4L235.2 260H0V60C0 49 9 40 20 40H380C391 40 400 49 400 60V163.6C393.8 161.4 387 160 380 160C359.6 160 341.6 170.4 330.8 186z" : "M175.2 200.4C165.8 211 159.8 224.8 159.8 240.2H148.2L114 274.2C110.4 278 105.4 280.2 99.8 280.2H19.8C8.8 280.2 -0.2 271.2 -0.2 260.2V200.2H175L175.2 200.4zM299.8 260.2H219.8C208.8 260.2 199.8 251.2 199.8 240.2S208.8 220.2 219.8 220.2H251.6L185.6 154.2C182 150.6 179.8 145.6 179.8 140.2C179.8 129.2 188.8 120.2 199.8 120.2C205.4 120.2 210.4 122.4 214 126L279.8 191.8V160C279.8 149 288.8 140 299.8 140S319.8 149 319.8 160V240C319.8 251.2 310.8 260.2 299.8 260.2zM260.2 115.6L242.2 97.6L242 97.8C231.2 86.8 216.4 80 199.8 80C166.6 80 139.8 106.8 139.8 140C139.8 155.4 145.8 169.4 155.4 180H-0.2V40C-0.2 29 8.8 20 19.8 20H299.8C310.8 20 319.8 29 319.8 40V103.6C313.6 101.4 306.8 100 299.8 100C284.6 100.2 270.8 106.2 260.2 115.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
FolderShared.defaultProps = {
    size: IconSize.STANDARD,
};
FolderShared.displayName = "Blueprint5.Icon.FolderShared";
export default FolderShared;
//# sourceMappingURL=folder-shared.js.map