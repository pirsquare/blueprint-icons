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
exports.BankAccount = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.BankAccount = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "bank-account", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M384 239.6L368.4 243.2C360.6 272 344 298.4 321.6 320L331.6 365.6C333.8 374 327.2 381.2 319.4 380C298.2 377.6 279.4 369.2 266 354.8C244.8 363.2 219.2 368 194.8 368C132.4 368 79 338 46.8 293.6C42.2 294.6 37.8 295.8 33.4 295.8C14.4 295.8 0 280.4 0 260C0 245.6 7.8 233.6 19 227.6C17.8 219.2 16.6 209.6 16.6 200C16.6 156.8 34.4 118.4 62.2 88.4L55.6 47.6C53.4 33.2 64.6 20 78 20H92.4C103.6 20 112.4 28.4 114.6 40.4L115.8 50C139.2 39.2 165.8 32 194.8 32C222.6 32 250.4 38.0000000000001 273.8 50L275.0000000000001 40.4C277.2000000000001 28.4 286.2000000000001 20 297.2000000000001 20H311.6C325.0000000000001 20 336 33.2 333.8 47.6L327.2000000000001 87.2C342.8000000000001 102.8 354.0000000000001 122 361.8000000000001 142.4L381.8000000000001 147.2C391.8000000000001 149.6 399.6000000000001 159.2 399.6000000000001 171.2V215.6C401.8 227.6 394 237.2 384 239.6zM300 200C288 200 280 214 280 230S288 260 300 260S320 246 320 230S312 200 300 200zM151 283.4C142 277.2 129.4 279.8 123.4 289C117.2 298 119.8 310.6 129 316.6C175.8 347.8 224.4 347.8 271.2 316.6C280.4000000000001 310.4 282.8 298 276.8 288.8C270.6 279.6 258.2 277.2 249 283.2C215.6 305.6 184.4 305.6 151 283.4z" : "M307.2 190.8L294.8 193.6C288.6 216 275.2 236.6 257.4000000000001 253.4L265.4000000000001 288.8C267.2000000000001 295.4 261.8 301 255.6 300C238.6 298.2 223.6 291.6 212.8 280.4C196 286.8 175.4 290.6 155.8 290.6C106 290.6 63.2 267.2 37.4 232.8C33.8 233.6 30.2 234.6 26.8 234.6C11.6 234.6 0 222.4 0 206.6C0 195.4 6.2 186 15.2 181.4C14.2 174.8 13.4 167.4 13.4 160C13.4 126.4 27.6 96.6 50 73.2L44.6 41.4C42.8 30.2 51.6 20 62.4 20H74C83 20 90 26.6 91.8 35.8L92.6 43.2C111.4 34.8 132.6 29.2 155.8 29.2C178 29.2 200.4 33.8 219 43.2L220 35.8C221.8 26.4 229 20 237.8 20H249.4C260 20 269 30.2 267.2000000000001 41.4L261.8 72.2C274.2000000000001 84.4 283.2000000000001 99.2 289.4000000000001 115.2L305.4000000000001 119C313.4000000000001 120.8 319.6000000000001 128.4 319.6000000000001 137.6V172C321.4 181.4 315.2 188.8 307.2 190.8zM240 160C228 160 220 174 220 190S228 220 240 220S260 206 260 190S252 160 240 160zM124.2 221.6C116 217.6 106 220.8 101.8 228.8C97.6 236.8 101 246.4 109.2 250.2C136.2 263.2 163.8 263.2 190.8 250.2C199 246.2 202.4 236.6 198.2 228.8C194 220.8 184 217.6 175.8 221.6C158.4 230.2 141.6 230.2 124.2 221.6z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.BankAccount.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.BankAccount.displayName = "Blueprint5.Icon.BankAccount";
exports.default = exports.BankAccount;
//# sourceMappingURL=bank-account.js.map