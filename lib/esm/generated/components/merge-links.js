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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var MergeLinks = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "merge-links", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M200 140C178 140 160 122 160 100S178 60 200 60S240 78 240 100S222 140 200 140zM360 240C341.4 240 325.8 227.2 321.4 210H280V320C280 364.2 244.2 400 200 400S120 364.2 120 320V210H78.6C74.2 227.2 58.6 240 40 240C18 240 0 222 0 200S18 160 40 160C58.6 160 74.2 172.8 78.6 190H120V80C120 35.8 155.8 0 200 0S280 35.8 280 80V190H321.4C325.8 172.8 341.4 160 360 160C382 160 400 178 400 200S382 240 360 240zM260 80C260 46.8 233.2 20 200 20S140 46.8 140 80V320C140 353.2 166.8 380 200 380S260 353.2 260 320V80zM200 340C178 340 160 322 160 300S178 260 200 260S240 278 240 300S222 340 200 340z" : "M160 180C149 180 140 171 140 160C140 149 149 140 160 140S180 149 180 160C180 171 171 180 160 180zM160 100C149 100 140 91 140 80C140 69 149 60 160 60S180 69 180 80C180 91 171 100 160 100zM160 260C149 260 140 251 140 240C140 229 149 220 160 220S180 229 180 240C180 251 171 260 160 260zM280 200C261.4 200 245.8 187.2 241.4 170H220V260C220 293.2 193.2 320 160 320S100 293.2 100 260V170H78.6C74.2 187.2 58.6 200 40 200C18 200 0 182 0 160C0 138 18 120 40 120C58.6 120 74.2 132.8 78.6 150H100V60C100 26.8 126.8 0 160 0S220 26.8 220 60V150H241.4C245.8 132.8 261.4 120 280 120C302 120 320 138 320 160C320 182 302 200 280 200zM200 60C200 38 182 20 160 20S120 38 120 60V260C120 282 138 300 160 300S200 282 200 260V60z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
MergeLinks.defaultProps = {
    size: IconSize.STANDARD,
};
MergeLinks.displayName = "Blueprint5.Icon.MergeLinks";
export default MergeLinks;
//# sourceMappingURL=merge-links.js.map