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
exports.NewPrescription = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.NewPrescription = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "new-prescription", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M239 195.4C242.2 199 243.4 199.8 248.2 199.8H277.8C282.8 199.8 287.2000000000001 198.2 289.6 193.2C291.6 189.2 291.4 185 288.6 180L234.4 108.4L297.6 20C300.2000000000001 15.8 300.8 10.8 298.2 6.2C295.8 2 291.4 0 286.8 0H254C247.8 0 242.8 3.4 240 8.8L202 62.2L163.4 8.6C160.4 3.2 155 0 148.8 0H119.6C114.6 0 110.2 1.6 107.8 6.6C105.8 10.6 106 14.8 108.8 19.8L170.6 106.8L85.2 220H60V133.6C60 125.4 54 119.8 46 119.8H14C5.8 119.8 0 125.4 0 133.6V386.2C0 394.4 6 400 14 400H102.4C116.6 400 129.6 398 141.2 394C153 390 163.4 384.2 172 376.6C180.8 369 187.6 359.8 192.4 348.8C197.4 338 199.8 326.2 199.8 313.4C199.8 293.2 194.2 275.8 183 261.4C174.4 250.6 156 235.6 143 229.6L204.8 150.8L239 195.4zM94.2 279.2C108.4 279.2 123.2 282.4 130.4 288.4C137 294 140.4 302.2 140.4 313.4S137 332.8 130.4 338.4C123.4 344.4 108.4 347.6 94.2 347.6H60.2V279.2H94.2zM380 340C391 340 400 331 400 320S391 300 380 300H340V260C340 249 331 240 320 240C309 240 300 249 300 260V300H260C249 300 240 309 240 320S249 340 260 340H300V380C300 391 309 400 320 400C331 400 340 391 340 380V340H380z" : "M196.4 86.8L246 144.2C248.4 148.2 248.6 151.6 246.8 154.8C244.6 158.6 240.8 160 236.4 160H210.6C205.2000000000001 160 200.8 157.4 198 153.2L168.8 122L139 160C138.8 160.4 138.2 161.2 137.4 162L116.4 189C127.8 193.8 137.2 200.4 144.8 209.2C154.6 220.6 159.6 234.6 159.6 250.8C159.6 261 157.6 270.6 153.2 279.2C149 287.8 143 295.2 135.4 301.4C127.8 307.4 118.8 312 108.4 315.2C98.2 318.4 86.8 320 74.4 320H12.2C5.2 320 0 315.4 0 308.8V111C0 104.4 5.2 100 12.2 100H28.2C35.4 100 40.4 104.6 40.4 111.2V180.2H66L140.6 85.4L86.4 15.8C84 11.8 83.8 8.4 85.6 5.2C87.8 1.4 91.6 0 96 0H121.4C126.8 0 131.6 2.4 134.2 6.8L168 49.8L201.2 7C203.6 2.8 208 0 213.6 0H242.2C246.2 0 250 1.6 252.2 5C254.6 8.6 254 12.6 251.8 16L196.4 86.8zM83.6 220H39.8V279.6H83.6C96 279.6 105.2 277 111.2 272.2C117 267.8 120 259.8 120 250.6C120 241.6 117 231.8 111.2 227.2C105 222.6 96 220 83.6 220zM300 280H280V300C280 311 271 320 260 320S240 311 240 300V280H220C209 280 200 271 200 260C200 249 209 240 220 240H240V220C240 209 249 200 260 200S280 209 280 220V240H300C311 240 320 249 320 260C320 271 311 280 300 280zM199.8 259.8C199.8 259.4 200 259 200 258.6V260V261C200 260.6 199.8 260.2 199.8 259.8z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.NewPrescription.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.NewPrescription.displayName = "Blueprint5.Icon.NewPrescription";
exports.default = exports.NewPrescription;
//# sourceMappingURL=new-prescription.js.map