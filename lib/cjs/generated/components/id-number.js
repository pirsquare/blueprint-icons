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
exports.IdNumber = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var iconTypes_1 = require("../../iconTypes");
var svgIconContainer_1 = require("../../svgIconContainer");
exports.IdNumber = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    var pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(svgIconContainer_1.SVGIconContainer, tslib_1.__assign({ iconName: "id-number", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M40 300V100H360V300H40zM40 340H360C382 340 400 322 400 300V100C400 78 382 60 360 60H40C18 60 0 78 0 100V300C0 322 18 340 40 340zM177.6 152.4C174.2 160.2 157.4 165.6 146.4 170.4C135.2 175.2 136.8 178.2 136.4 182.4C136.4 183 136.4 183.6 136.4 184.2C140.2 187.6 143.4 192.2 145.4 197.6C145.4 197.6 145.4 198 145.6 198C146 199.2 146.4 200.4 146.8 201.6C149.4 202.2 150.8 205 151.4 207.4C152 208.4 153.2 211 153 214C152.2 217.6 150.8 219.4 149 220V220.6C149 225.4 148.6 232.2 147.8 236.8C147.6 238 147.4 239.2 147 240.6C145.4 246 142 251 137.4 254.6C132.6 258.2 126 260 120 260S107.4 258.2 102.6 254.6C98 251.2 94.6 246.2 93 240.6C92.6 239.4 92.4 238 92.2 236.8C91.4 232.4 91 225.4 91 220.6V220C89.2 219.4 87.6 217.6 87.2 213.8C87 211 88.2 208.4 88.8 207.4C89.4 204.6 90.8 202 93.4 201.4C93.8 200.2 94 199 94.6 197.8C94.6 197.8 94.6 197.6 94.6 197.6L94.6 197.6C96.8 192.2 100 187.4 104 184C104 183.4 104 183 104 182.4C103.6 178.4 104.8 175.4 93.8 170.4C82.6 165.6 66 160.2 62.6 152.4C58.8 144.6 60.2 140 60.2 140H179.8C179.6 140 181 144.6 177.6 152.4L177.6 152.4zM240 260H320C331 260 340 251 340 240L340 240C340 229 331 220 320 220H240C229 220 220 229 220 240L220 240C220 251 229 260 240 260zM240 180H320C331 180 340 171 340 160L340 160C340 149 331 140 320 140H240C229 140 220 149 220 160L220 160C220 171 229 180 240 180z" : "M40 220V80H280V220H40zM40 260H280C302 260 320 242 320 220V80C320 58 302 40 280 40H40C18 40 0 58 0 80V220C0 242 18 260 40 260zM158 110.4C155.2 117 141.2 121.4 132 125.4C122.8 129.4 124 132 123.6 135.4C123.6 135.8 123.6 136.4 123.6 136.8C126.8 139.6 129.4 143.4 131 148C131 148 131 148.2 131.2 148.4C131.6 149.4 131.8 150.4 132.2 151.4C134.2 151.6 135.4 154 136 156C136.6 156.8 137.4 159 137.2 161.4C136.8 164.6 135.6 166.2 134.2 166.6V167.2C134.2 171.2 133.8 176.8 133.2 180.6C133 181.6 132.8 182.6 132.6 183.8C131.2 188.4 128.4 192.6 124.6 195.4C120.6 198.4 115 200 110 200S99.4 198.4 95.6 195.4C91.8 192.6 89 188.4 87.6 183.8C87.2 182.8 87 181.8 87 180.6C86 177 85.8 171.2 85.8 167.2V166.6C84.4 166 83 164.6 82.8 161.4C82.4 159 83.4 157 84 156C84.4 154 85.8 151.6 88 151.2C88.2 150.2 88.6 149.2 89 148.2C89 148.2 89 148 89 148L89 148C90.6 143.4 93.4 139.6 96.6 136.8C96.6 136.4 96.6 136 96.6 135.4C96.2 132 97.2 129.6 88 125.4C78.8 121.4 64.8 117 62 110.4S60.2 100 60.2 100H160C159.8 100 161 103.8 158 110.4L158 110.4zM200 200H240C251 200 260 191 260 180L260 180C260 169 251 160 240 160H200C189 160 180 169 180 180L180 180C180 191 189 200 200 200zM200 140H240C251 140 260 131 260 120L260 120C260 109 251 100 240 100H200C189 100 180 109 180 120L180 120C180 131 189 140 200 140z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
exports.IdNumber.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.IdNumber.displayName = "Blueprint5.Icon.IdNumber";
exports.default = exports.IdNumber;
//# sourceMappingURL=id-number.js.map