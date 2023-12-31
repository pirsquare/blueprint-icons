"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Database = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "database", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M40.2 298V190C40.2 162.4 111.8 140 200.2 140S360.2 162.4 360.2 190V298C330.4 275.4 270 260 200.2 260C130.6 260 70.2 275.4 40.2 298zM200.2 280C288.6 280 360.2 302.4 360.2 330C360.2 357.6 288.6 380 200.2 380S40.2 357.6 40.2 330C40.2 302.4 112 280 200.2 280zM40.2 158V50C40.2 22.4 111.8 0 200.2 0S360.2 22.4 360.2 50V158C330.4 135.4 270 120 200.2 120C130.6 120 70.2 135.4 40.2 158z" : "M160 240C226.2 240 280 258 280 280C280 302 226.2 320 160 320C93.6 320 40 302 40 280C40 258 93.6 240 160 240zM40 249.6V160C40 138 93.8 120 160 120C226.2 120 280 138 280 160V249.6C255.6 232 211.2 220 160 220S64.4 232 40 249.6zM40 129.6V40C40 18 93.8 0 160 0C226.2 0 280 18 280 40V129.6C255.6 112 211.2 100 160 100S64.4 112 40 129.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Database.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Database.displayName = "Blueprint5.Icon.Database";
exports.default = exports.Database;
//# sourceMappingURL=database.js.map