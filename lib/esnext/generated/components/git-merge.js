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
export const GitMerge = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "git-merge", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 240C274 240 252 223.2 243.6 200H220C170.2 200 129.2 236.6 121.6 284.2C144 292.8 160 314.6 160 340C160 373.2 133.2 400 100 400S40 373.2 40 340C40 314 56.8 292 80 283.8V116.4C56.8 108 40 86 40 60C40 26.8 66.8 0 100 0S160 26.8 160 60C160 86 143.2 108 120 116.4V202.8C145.4 176.6 180.6 160 220 160H243.6C251.8 136.8 273.8 120 300 120C333.2 120 360 146.8 360 180S333.2 240 300 240zM100 40C89 40 80 49 80 60C80 71 89 80 100 80S120 71 120 60C120 49 111 40 100 40zM100 320C89 320 80 329 80 340C80 351 89 360 100 360S120 351 120 340C120 329 111 320 100 320zM300 160C289 160 280 169 280 180C280 191 289 200 300 200S320 191 320 180C320 169 311 160 300 160z" : "M240 200C214 200 192 183.2 183.6 160H180C147.6 160 120 179.2 107.4 206.8C126.6 216.8 140 236.8 140 260C140 293.2 113.2 320 80 320S20 293.2 20 260C20 234 36.8 212 60 203.8V116.4C36.8 108 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 86 123.2 108 100 116.4V151.4C121.2 132 149 120 180 120H183.6C191.8 96.8 213.8 80 240 80C273.2 80 300 106.8 300 140S273.2 200 240 200zM80 40C69 40 60 49 60 60C60 71 69 80 80 80S100 71 100 60C100 49 91 40 80 40zM80 240C69 240 60 249 60 260C60 271 69 280 80 280S100 271 100 260C100 249 91 240 80 240zM240 120C229 120 220 129 220 140C220 151 229 160 240 160S260 151 260 140C260 129 251 120 240 120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
GitMerge.defaultProps = {
    size: IconSize.STANDARD,
};
GitMerge.displayName = `Blueprint5.Icon.GitMerge`;
export default GitMerge;
//# sourceMappingURL=git-merge.js.map