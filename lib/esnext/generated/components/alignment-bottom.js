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
export const AlignmentBottom = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "alignment-bottom", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M240 80H320C331 80 340 89 340 100V240C340 251 331 260 320 260H240C229 260 220 251 220 240V100C220 89 229 80 240 80zM380 40H20C9 40 0 31 0 20S9 0 20 0H380C391 0 400 9 400 20S391 40 380 40zM80 80H160C171 80 180 89 180 100V380C180 391 171 400 160 400H80C69 400 60 391 60 380V100C60 89 69 80 80 80z" : "M200 80H260C271 80 280 89 280 100V180C280 191 271 200 260 200H200C189 200 180 191 180 180V100C180 89 189 80 200 80zM300 40H20C9 40 0 31 0 20S9 0 20 0H300C311 0 320 9 320 20S311 40 300 40zM60 80H120C131 80 140 89 140 100V280C140 291 131 300 120 300H60C49 300 40 291 40 280V100C40 89 49 80 60 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AlignmentBottom.defaultProps = {
    size: IconSize.STANDARD,
};
AlignmentBottom.displayName = `Blueprint5.Icon.AlignmentBottom`;
export default AlignmentBottom;
//# sourceMappingURL=alignment-bottom.js.map