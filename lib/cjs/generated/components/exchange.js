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
exports.Exchange = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.Exchange = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "exchange", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M50 240C22.4 240 0 217.6 0 190S22.4 140 50 140S100 162.4 100 190S77.6 240 50 240zM257 177C255.2 178.8 252.6 180 250 180C244.4 180 240 175.6 240 170C240 167.2 241.2 164.8 243 163L266 140H110C104.4 140 100 135.6 100 130S104.4 120 110 120H265.8L242.8 97C241.2 95.2 240 92.8 240 90C240 84.4 244.4 80 250 80C252.8 80 255.2 81.2 257 83L297 123C298.8 124.8 300 127.2 300 130S298.8 135.2 297 137L257 177zM350 240C322.4000000000001 240 300 217.6 300 190S322.4000000000001 140 350 140S400 162.4 400 190S377.6 240 350 240zM143 203C144.8 201.2 147.2 200 150 200C155.6 200 160 204.4 160 210C160 212.8 158.8 215.2 157 217L134.2 240H290C295.6 240 300 244.4 300 250S295.6 260 290 260H134.2L157.2 283C158.8 284.8 160 287.2 160 290C160 295.6 155.6 300 150 300C147.2 300 144.8 298.8 143 297L103 257C101.2 255.2 100 252.8 100 250S101.2 244.8 103 243L143 203z" : "M39.8 200.2C17.8 200.2 -0.2 182.2 -0.2 160.2S17.8 120.2 39.8 120.2S79.8 138.2 79.8 160.2S62 200.2 39.8 200.2zM122.8 163C124.6 161.2 127.2 160 129.8 160C135.4 160 139.8 164.4 139.8 170C139.8 172.8 138.6 175.2 136.8 177L114 200.2H229.8C235.4 200.2 239.8 204.6 239.8 210.2S235.4 220.2 229.8 220.2H114L137 243.2C138.8 245 140 247.6 140 250.2C140 255.8 135.6 260.2 130 260.2C127.2 260.2 124.8 259 123 257.2L83 217.2C81 215.4 79.8 213 79.8 210.2S81 205 82.8 203.2L122.8 163zM279.8 200.2C257.8 200.2 239.8 182.2 239.8 160.2S257.8 120.2 279.8 120.2S319.8 138.2 319.8 160.2S302 200.2 279.8 200.2zM197 157.2C195 159 192.6 160.2 189.8 160.2C184.2 160.2 179.8 155.8 179.8 150.2C179.8 147.4 181 145 182.8 143.2L205.8 120.2H89.8C84.2 120.2 79.8 115.8 79.8 110.2S84.2 100.2 89.8 100.2H205.6L182.6 77.2C180.8 75.4 179.6 72.8 179.6 70.2C179.6 64.6 184 60.2 189.6 60.2C192.4 60.2 194.8 61.4 196.6 63.2L236.6 103.2C238.4 105 239.6 107.6 239.6 110.2S238.4 115.4 236.6 117.2L197 157.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.Exchange.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Exchange.displayName = "Blueprint5.Icon.Exchange";
exports.default = exports.Exchange;
//# sourceMappingURL=exchange.js.map