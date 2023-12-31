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
exports.SendTo = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.SendTo = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "send-to", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M380 400H280C268 400 260 392 260 380S268 360 280 360H332L246 274C242 270 240 266 240 260C240 248 248 240 260 240C266 240 270 242 274 246L360 332V280C360 270 370 260 380 260S400 270 400 280V380C400 392 390 400 380 400L380 400zM380 220C360 220 342 230 330 246L302 218C292 206 276 200 260 200C226 200 200 226 200 260C200 276 206 292 218 302L246 330C230 342 220 360 220 380C220 386 222 392 224 398C216 400 208 400 200 400C90 400 0 310 0 200S90 0 200 0S400 90 400 200C400 208 400 216 398 224C392 222 386 220 380 220L380 220z" : "M300 170C284 170 270 178 260 190L236 166C228 156 214 152 200 152C172 150 150 172 150 200C150 214 156 226 164 236L190 260C178 270 170 284 170 300C170 306 172 314 174 320C170 320 164 320 160 320C72 320 0 248 0 160S72 0 160 0S320 72 320 160C320 164 320 170 320 174C314 172 308 170 300 170L300 170zM300 320H220C208 320 200 310 200 300S208 280 220 280H252L186 214C182 210 180 206 180 200C180 190 188 180 200 180C206 180 210 182 214 186L280 252V220C280 208 288 200 300 200C310 200 320 208 320 220V300C320 310 312 320 300 320L300 320z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.SendTo.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SendTo.displayName = "Blueprint5.Icon.SendTo";
exports.default = exports.SendTo;
//# sourceMappingURL=send-to.js.map