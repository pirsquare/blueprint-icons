"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGIconContainer = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("./classes"));
var iconTypes_1 = require("./iconTypes");
var jsUtils_1 = require("./jsUtils");
// eslint-disable-next-line prefer-arrow-callback
exports.SVGIconContainer = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, color = props.color, htmlTitle = props.htmlTitle, iconName = props.iconName, _a = props.size, size = _a === void 0 ? iconTypes_1.IconSize.STANDARD : _a, svgProps = props.svgProps, _b = props.tagName, tagName = _b === void 0 ? "span" : _b, title = props.title, htmlProps = tslib_1.__rest(props, ["children", "className", "color", "htmlTitle", "iconName", "size", "svgProps", "tagName", "title"]);
    var isLarge = size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
    var titleId = (0, jsUtils_1.uniqueId)("iconTitle");
    var sharedSvgProps = tslib_1.__assign({ "data-icon": iconName, fill: color, height: size, role: "img", viewBox: viewBox, width: size }, svgProps);
    if (tagName === null) {
        return (React.createElement("svg", tslib_1.__assign({ "aria-labelledby": title ? titleId : undefined, ref: ref }, sharedSvgProps, htmlProps),
            title && React.createElement("title", { id: titleId }, title),
            children));
    }
    else {
        return React.createElement(tagName, tslib_1.__assign(tslib_1.__assign({ "aria-hidden": title ? undefined : true }, htmlProps), { className: (0, classnames_1.default)(Classes.ICON, "".concat(Classes.ICON, "-").concat(iconName), className), ref: ref, title: htmlTitle }), React.createElement("svg", tslib_1.__assign({}, sharedSvgProps),
            title && React.createElement("title", null, title),
            children));
    }
});
exports.SVGIconContainer.displayName = "Blueprint5.SVGIconContainer";
//# sourceMappingURL=svgIconContainer.js.map