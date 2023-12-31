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
exports.LayoutSortedClusters = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LayoutSortedClusters = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "layout-sorted-clusters", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M40 240C18 240 0 222 0 200S18 160 40 160S80 178 80 200S62 240 40 240zM40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80zM40 400C18 400 0 382 0 360S18 320 40 320S80 338 80 360S62 400 40 400zM360 240C338 240 320 222 320 200S338 160 360 160S400 178 400 200S382 240 360 240zM200 160C178 160 160 142 160 120S178 80 200 80S240 98 240 120S222 160 200 160zM200 320C178 320 160 302 160 280S178 240 200 240S240 258 240 280S222 320 200 320z" : "M40 200C18 200 0 182 0 160S18 120 40 120S80 138 80 160S62 200 40 200zM40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80zM40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320zM280 200C258 200 240 182 240 160S258 120 280 120S320 138 320 160S302 200 280 200zM160 140C138 140 120 122 120 100S138 60 160 60S200 78 200 100S182 140 160 140zM160 260C138 260 120 242 120 220S138 180 160 180S200 198 200 220S182 260 160 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LayoutSortedClusters.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutSortedClusters.displayName = "Blueprint5.Icon.LayoutSortedClusters";
exports.default = exports.LayoutSortedClusters;
//# sourceMappingURL=layout-sorted-clusters.js.map