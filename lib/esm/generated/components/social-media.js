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
export var SocialMedia = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "social-media", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M230 300C246 300 262 308 270 320C310 296 336 254 340 206C340 196 350 188 360 188C372 188 380 198 380 208L380 210C376 276 336 334 278 362C274 384 254 400 230 400C202 400 180 378 180 350C180 322 202 300 230 300zM330 160C302 160 280 138 280 110C280 102 282 96 284 88C262 70 232 60 200 60C162 60 128 76 102 100C98 104 92 108 86 108C76 108 66 98 66 88C66 82 68 78 72 74C106 40 150 20 200 20C244 20 284 36 316 62C320 60 326 60 330 60C358 60 380 82 380 110C380 138 358 160 330 160zM100 190C100 212 86 232 66 238C76 276 104 308 138 326C144 330 150 336 150 344C150 354 142 364 130 364C126 364 122 362 118 360C70 336 34 288 24 232C10 222 0 208 0 190C0 162 22 140 50 140C78 140 100 162 100 190z" : "M190 240C198 240 206 242 212 246C240 230 258 200 260 168L260 168C260 158 270 150 280 150C292 150 300 158 300 170C300 172 300 172 300 174C296 222 270 262 230 284C228 304 212 320 190 320S150 302 150 280S168 240 190 240L190 240zM80 150C80 164 72 176 62 184C68 212 86 236 112 250C118 252 124 258 124 268S116 288 104 288C100 288 98 288 94 286C56 266 30 230 22 186C8 178 0 164 0 150C0 128 18 110 40 110S80 128 80 150L80 150zM256 126C234.0000000000001 126 216 108 216 86C216 84 216 82 216 80C200 68 180 62 160 62C136 62 114 70 96 84C92 88 88 90 82 90C70 90 62 82 62 70C62 64 64 58 68 54L68 54C92 32 124 20 160 20C190 20 220 30 242 46C246 44 252 44 256 44C278 44 296 62 296 84S278 126 256 126L256 126z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SocialMedia.defaultProps = {
    size: IconSize.STANDARD,
};
SocialMedia.displayName = "Blueprint5.Icon.SocialMedia";
export default SocialMedia;
//# sourceMappingURL=social-media.js.map