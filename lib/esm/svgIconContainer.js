/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "./classes";
import { IconSize } from "./iconTypes";
import { uniqueId } from "./jsUtils";
// eslint-disable-next-line prefer-arrow-callback
export var SVGIconContainer = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, color = props.color, htmlTitle = props.htmlTitle, iconName = props.iconName, _a = props.size, size = _a === void 0 ? IconSize.STANDARD : _a, svgProps = props.svgProps, _b = props.tagName, tagName = _b === void 0 ? "span" : _b, title = props.title, htmlProps = __rest(props, ["children", "className", "color", "htmlTitle", "iconName", "size", "svgProps", "tagName", "title"]);
    var isLarge = size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
    var titleId = uniqueId("iconTitle");
    var sharedSvgProps = __assign({ "data-icon": iconName, fill: color, height: size, role: "img", viewBox: viewBox, width: size }, svgProps);
    if (tagName === null) {
        return (React.createElement("svg", __assign({ "aria-labelledby": title ? titleId : undefined, ref: ref }, sharedSvgProps, htmlProps),
            title && React.createElement("title", { id: titleId }, title),
            children));
    }
    else {
        return React.createElement(tagName, __assign(__assign({ "aria-hidden": title ? undefined : true }, htmlProps), { className: classNames(Classes.ICON, "".concat(Classes.ICON, "-").concat(iconName), className), ref: ref, title: htmlTitle }), React.createElement("svg", __assign({}, sharedSvgProps),
            title && React.createElement("title", null, title),
            children));
    }
});
SVGIconContainer.displayName = "Blueprint5.SVGIconContainer";
//# sourceMappingURL=svgIconContainer.js.map