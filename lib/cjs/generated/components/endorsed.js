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
exports.Endorsed = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Endorsed = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "endorsed", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M396.6 212.4L376.2 248V287.6C376.2 296.6 371.6 304.6 364 309.2L329.8 329.2L309.4 364.4C304.8 372 296.8 376.6 287.8 376.6H247.2L212.4 396.6C204.8 401.2 195 401.2 187.4 396.6L152.6 376.6H113C104.2 376.6 96 372 91.4 364.4L71.6 330L35.6 309.2C28 304.4 23.2 296.4 23.2 287.6V246.4L3.4 212C1.2 208.2 0 204 0 199.8S1.2 191.4 3.4 187.6L23.2 153.2V112C23.2 103 27.8 95 35.4 90.4L71 70L90.8 35.6C95.4 28.0000000000001 103.4 23.4 112.4 23.4H152.2L187 3.4C190.8 1.2 195.2 0 199.4 0C203.6 0 207.8 1.2 211.6 3.4L246.4 23.4H287C295.8 23.4 304 28.0000000000001 308.6 35.6L329 70.8000000000001L363.2 90.8000000000001C370.8 95.4000000000001 375.4 103.6000000000001 375.4 112.4V151.8000000000001L395.8 187.4000000000001C401.2 195 401.2 204.4 396.6 212.4zM295 226.6L194.8 126.4C191.2 122.8 186.2 120.6 180.6 120.6C175 120.6 170 122.8 166.4 126.4L106.2 186.6C102.6 190.2 100.4 195.2 100.4 200.8C100.4 211.8 109.4 220.8 120.4 220.8C126 220.8 131 218.6 134.6 215L180.6 169L266.8 255C270.4 258.6 275.4 260.8 281 260.8C292 260.8 301 251.8 301 240.8C301 235.2 298.6 230.2 295 226.6z" : "M317.2 170L301 198.4V230C301 237.2 297.2 243.6 291.2 247.4L263.8 263.4L247.6 291.6C243.8 297.8 237.4 301.4 230.4 301.4H197.8L170 317.2C164 321 156.2 321 150 317.2L122.2 301.2H90.4C83.2 301.2 76.8 297.4 73.2 291.4L57.2 264L28.4 247.4C22.4 243.6 18.6 237.2 18.6 230V197L2.6 169.6C1 166.6 0 163.2 0 159.8S1 153 2.8 150L18.8 122.6V89.6C18.8 82.4 22.6 76 28.6 72.2L57 56L73 28.6C76.8 22.4 83.2 18.8 90.2 18.8H122L149.8 2.8C152.8 1 156.2 0 159.4 0S166.2 1 169.2 2.8L197 18.8H229.6C236.8 18.8 243.2 22.6 246.8 28.6L263 56.8L290.4 72.8C296.4 76.6 300.2 83.0000000000001 300.2 90.2000000000001V121.4L316.4 149.8C321 156 321 163.6 317.2 170zM234.8 186.4L154.6 106.2C151 102.6 146 100.4 140.4 100.4S129.8 102.6 126.2 106.2L86.2 146.2C82.6 150 80.2 155 80.2 160.4C80.2 171.4 89.2 180.4 100.2 180.4C105.8 180.4 110.8 178.2 114.4 174.6L140.4 148.6L206.4 214.6C210 218.2 215 220.4 220.6 220.4C231.6 220.4 240.6 211.4 240.6 200.4C240.8 195 238.4 190 234.8 186.4z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Endorsed.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Endorsed.displayName = "Blueprint5.Icon.Endorsed";
exports.default = exports.Endorsed;
//# sourceMappingURL=endorsed.js.map