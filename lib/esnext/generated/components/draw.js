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
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const Draw = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "draw", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M354 146C354 148 354 150 352 152H352L312 292H312C310 298 306 304 300 306L300 306L36 400L24 390L154 260C160 264 166 266 174 266C196 266 214 248 214 226S196 186 174 186S134 204 134 226C134 234.0000000000001 136 240.0000000000001 140 246L10 376L0 364L94 100C96 94 102 90 108 88V88L248 48V48C250 48 252 45.9999999999999 254.0000000000001 45.9999999999999C260.0000000000001 45.9999999999999 264 48 268 51.9999999999999L348 132C352 136 354 142 354 146L354 146zM374 126C368 126 364 124 360 120L280 40C276 36 274 32 274 26C274 16 282 6 294 6C300 6 304 8.0000000000001 308 12L388 92C392 96 394 100.0000000000001 394 106C394 118 384 126 374 126L374 126z" : "M298 100C292 100 288 98 284 94L224 34C220 30 218 26 218 20C218 8 228 0 238 0C244.0000000000001 0 248 2 252 6L312 66C316 70 318 74 318 80C318 90 310 100 298 100L298 100zM278 120C278 122 278 122 278 124L278 124L258 224L258 224C256 230 252 236 246 238L246 238L26 318L20 312L136 196C140 198 144 200 148 200C164 200 178 186 178 170S166 140 148 140S118 154 118 170C118 174 120 178 122 182L6 298L0 292L80 72L80 72C82 66 88 60 94 60L94 60L194 40L194 40C196 40 196 40 198 40C204 40 208 42 212 46L272 106C276 110 278 114 278 120L278 120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Draw.defaultProps = {
    size: IconSize.STANDARD,
};
Draw.displayName = `Blueprint5.Icon.Draw`;
export default Draw;
//# sourceMappingURL=draw.js.map