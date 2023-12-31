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
exports.LabTest = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.LabTest = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "lab-test", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M260 360C271.045694 360 280 351.045695 280 340C280 328.954305 271.045694 320 260 320L260 240L340 80L340 60C340 48.954306 331.0456940000001 40 320 40L80 40C68.954305 40 60 48.954306 60 60L60 80L140 240L140 320C128.954305 320 120 328.954305 120 340C120 351.045695 128.954305 360 140 360L260 360zM220 320L180 320L180 240L140 160L260 160L220 240L220 320z" : "M220 300C231.045694 300 240 291.045695 240 280C240 268.954305 231.045694 260 220 260L220 200L280 60L280 35C280 26.715728 273.284272 20 265 20L55 20C46.7157288 20 40 26.715728 40 35L40 60L100 200L100 260C88.954305 260 80 268.954305 80 280C80 291.045695 88.954305 300 100 300L220 300zM180 260L140 260L140 200L105.72 120L214.28 120L180 200L180 260z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.LabTest.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LabTest.displayName = "Blueprint5.Icon.LabTest";
exports.default = exports.LabTest;
//# sourceMappingURL=lab-test.js.map