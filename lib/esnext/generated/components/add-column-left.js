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
export const AddColumnLeft = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "add-column-left", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M80 180H120V140C120 129 129 120 140 120S160 129 160 140V180H200C211 180 220 189 220 200C220 211 211 220 200 220H160V260C160 271 151 280 140 280S120 271 120 260V220H80C69 220 60 211 60 200C60 189 69 180 80 180zM380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400zM240 40H40V360H240V40zM360 40H260V360H360V40z" : "M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320zM200 40H40V280H200V40zM280 40H220V280H280V40zM80 140H100V120C100 109 109 100 120 100S140 109 140 120V140H160C171 140 180 149 180 160C180 171 171 180 160 180H140V200C140 211 131 220 120 220S100 211 100 200V180H80C69 180 60 171 60 160C60 149 69 140 80 140z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AddColumnLeft.defaultProps = {
    size: IconSize.STANDARD,
};
AddColumnLeft.displayName = `Blueprint5.Icon.AddColumnLeft`;
export default AddColumnLeft;
//# sourceMappingURL=add-column-left.js.map