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
export const GitCommit = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "git-commit", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 220H298C288.8 265.6 248.4 300 200 300S111.2 265.6 102 220H20C9 220 0 211 0 200C0 189 9 180 20 180H102C111.2 134.4 151.6 100 200 100S288.8 134.4 298 180H380C391 180 400 189 400 200C400 211 391 220 380 220zM200 140C166.8 140 140 166.8 140 200S166.8 260 200 260S260 233.2 260 200S233.2 140 200 140z" : "M300 180H237.2C228.2 214.4 197.2 240 160 240S91.8 214.4 82.8 180H20C9 180 0 171 0 160C0 149 9 140 20 140H82.8C91.8 105.6 122.8 80 160 80S228.2 105.6 237.2 140H300C311 140 320 149 320 160C320 171 311 180 300 180zM160 120C138 120 120 138 120 160C120 182 138 200 160 200S200 182 200 160C200 138 182 120 160 120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
GitCommit.defaultProps = {
    size: IconSize.STANDARD,
};
GitCommit.displayName = `Blueprint5.Icon.GitCommit`;
export default GitCommit;
//# sourceMappingURL=git-commit.js.map