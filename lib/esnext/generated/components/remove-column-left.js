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
export const RemoveColumnLeft = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "remove-column-left", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M80 180H200C211 180 220 189 220 200S211 220 200 220H80C69 220 60 211 60 200S69 180 80 180zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM240 40H40V360H240V40zM360 40H260V360H360V40z" : "M80 140H160C171 140 180 149 180 160S171 180 160 180H80C69 180 60 171 60 160C60 149 69 140 80 140zM300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM200 40H40V280H200V40zM280 40H220V280H280V40z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
RemoveColumnLeft.defaultProps = {
    size: IconSize.STANDARD,
};
RemoveColumnLeft.displayName = `Blueprint5.Icon.RemoveColumnLeft`;
export default RemoveColumnLeft;
//# sourceMappingURL=remove-column-left.js.map