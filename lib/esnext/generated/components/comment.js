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
export const Comment = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "comment", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 380H20C9 380 0 371 0 360V120C0 109 9 100 20 100H80V20C80 9 89 0 100 0C105.6 0 110.6 2.2 114.2 5.8L208.2 100H380C391 100 400 109 400 120V360C400 371 391 380 380 380zM80 200C58 200 40 218 40 240C40 262 58 280 80 280S120 262 120 240C120 218 102 200 80 200zM200 200C178 200 160 218 160 240C160 262 178 280 200 280S240 262 240 240C240 218 222 200 200 200zM320 200C298 200 280 218 280 240C280 262 298 280 320 280S360 262 360 240C360 218 342 200 320 200z" : "M280 300H20C9 300 0 291 0 280V100C0 89 9 80 20 80H60V20C60 9 69 0 80 0C85.6 0 90.6 2.2 94.2 5.8L168.2 80H280C291 80 300 89 300 100V280C300 291 291 300 280 300zM70 160C53.4 160 40 173.4 40 190S53.4 220 70 220S100 206.6 100 190S86.6 160 70 160zM150 160C133.4 160 120 173.4 120 190S133.4 220 150 220S180 206.6 180 190S166.6 160 150 160zM230 160C213.4 160 200 173.4 200 190S213.4 220 230 220S260 206.6 260 190S246.6 160 230 160z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Comment.defaultProps = {
    size: IconSize.STANDARD,
};
Comment.displayName = `Blueprint5.Icon.Comment`;
export default Comment;
//# sourceMappingURL=comment.js.map