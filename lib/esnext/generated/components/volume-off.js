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
export const VolumeOff = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "volume-off", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 340C274.4000000000001 340 269.4000000000001 337.8 265.8 334.2L211.8 280H120C109 280 100 271 100 260V140C100 129 109 120 120 120H211.8L266 65.8C269.4000000000001 62.2 274.4000000000001 60 280 60C291 60 300 69 300 80V320C300 331 291 340 280 340z" : "M220 280C214.4 280 209.4 277.8 205.8 274.2L151.8 220H100C89 220 80 211 80 200V120C80 109 89 100 100 100H151.8L206 45.8C209.4 42.2 214.4 40 220 40C231 40 240 49 240 60V260C240 271 231 280 220 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
VolumeOff.defaultProps = {
    size: IconSize.STANDARD,
};
VolumeOff.displayName = `Blueprint5.Icon.VolumeOff`;
export default VolumeOff;
//# sourceMappingURL=volume-off.js.map