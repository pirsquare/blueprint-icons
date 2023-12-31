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
export var DocumentOpen = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "document-open", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 100C160 89 169 80 180 80S200 89 200 100V200C200 211 191 220 180 220H80C69 220 60 211 60 200S69 180 80 180H131.8L26 74.2000000000001C22.2 70.6 20 65.6 20 60C20 49 29 40 40 40C45.6 40 50.6 42.2 54.2 45.8L160 151.8V100zM260 400H100C89 400 80 391 80 380V260H120V360H240V260H340V40H120V55.2L80.8 16C82.8 7 90.4 0 100 0H360C371 0 380 9 380 20V280L260 400z" : "M120 80C120 69 129 60 140 60S160 69 160 80V160C160 171 151 180 140 180H60C49 180 40 171 40 160C40 149 49 140 60 140H91.8L26 74.2C22.2 70.6 20 65.6 20 60C20 49 29 40 40 40C45.6 40 50.6 42.2 54.2 45.8L120 111.8V80zM200 320H80C69 320 60 311 60 300V220H100V280H180V200H260V40H104.8L68.8 4C72 1.6 75.8 0 80 0H280C291 0 300 9 300 20V220L200 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
DocumentOpen.defaultProps = {
    size: IconSize.STANDARD,
};
DocumentOpen.displayName = "Blueprint5.Icon.DocumentOpen";
export default DocumentOpen;
//# sourceMappingURL=document-open.js.map