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
export var Book = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "book", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M60 380V20C60 9 69 0 80 0H120V400H80C69 400 60 391 60 380zM340 400H300V240L260 280L220 240V400H140V0H340C351 0 360 9 360 20V380C360 391 351 400 340 400z" : "M40 300V20C40 9 49 0 60 0H80V320H60C49 320 40 311 40 300zM260 320H240V180L200 220L160 180V320H100V0H260C271 0 280 9 280 20V300C280 311 271 320 260 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Book.defaultProps = {
    size: IconSize.STANDARD,
};
Book.displayName = "Blueprint5.Icon.Book";
export default Book;
//# sourceMappingURL=book.js.map